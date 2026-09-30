# =============================================================================
# SERVIDOR API REST NATIVO (PYTHON 3 HTTP.SERVER MULTI-HILO)
# Plataforma Educativa de Programación con Python e Inteligencia Artificial
# Autor: Eivar Daniel Pantoja Carvajal | Docente: Simena Dinas
#
# DESCRIPCIÓN:
# Servidor web y API REST nativo en Python 3 para ejecutar en local y en
# cualquier servicio web en la nube (Render, Railway, Fly.io, Cloud Run, VPS, Docker).
# Soporta concurrencia con hilos (Threading), puerto dinámico (PORT),
# CORS para consumo externo y auto-inicialización de base de datos SQLite.
#
# ENDPOINTS DISPONIBLES:
# - GET /                   : Sirve la plataforma web interactiva (index.html).
# - GET /health             : Health-check para balanceadores y monitores en la nube.
# - GET /api/status         : Verifica el estado del servidor y metadatos del curso.
# - GET /api/clases         : Retorna la lista de las 5 clases en formato JSON.
# - GET /api/inventario     : Retorna el catálogo de productos de la Tienda del Caos.
# - GET /api/estudiantes    : Retorna los alumnos procesados desde CSV.
# - GET /api/db/clases      : Consulta directa a la base de datos SQLite (clases).
# - GET /api/db/inventario  : Consulta directa a la base de datos SQLite (inventario).
# - GET /api/db/estudiantes : Consulta de alumnos desde la base de datos relacional.
# - GET /api/docs           : Documentación técnica interactiva de la API en JSON.
# =============================================================================

import http.server
import socketserver
import socket
import json
import os
import csv
import urllib.parse
import sys

# Configuración de rutas base
DIRECTORIO_BACKEND = os.path.dirname(os.path.abspath(__file__))
DIRECTORIO_RAIZ = os.path.dirname(DIRECTORIO_BACKEND)

# Agregar la carpeta backend al path para importar módulos locales con seguridad
if DIRECTORIO_BACKEND not in sys.path:
    sys.path.insert(0, DIRECTORIO_BACKEND)

try:
    import database_manager
except ImportError:
    database_manager = None

# Puerto y Host dinámicos para despliegue en la nube (Render, Railway, Heroku, Docker)
PUERTO = int(os.environ.get("PORT", os.environ.get("PUERTO", 8000)))
HOST = os.environ.get("HOST", "")


def asegurar_base_de_datos():
    '''Garantiza que la base de datos SQLite esté creada y con datos iniciales.'''
    db_path = os.path.join(DIRECTORIO_RAIZ, "database", "plataforma.db")
    if not os.path.exists(db_path) or os.path.getsize(db_path) == 0:
        if database_manager:
            try:
                print("[BD] Inicializando base de datos SQLite por primera vez...")
                database_manager.inicializar_base_de_datos()
                print("[BD] Base de datos creada y poblada exitosamente.")
            except Exception as e:
                print(f"[BD] Error al inicializar base de datos: {e}")


class PlataformaAPIHandler(http.server.SimpleHTTPRequestHandler):
    '''Manejador HTTP concurrente para la plataforma web y API REST.'''

    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORIO_RAIZ, **kwargs)

    def responder_json(self, datos, codigo=200):
        '''Responde payloads JSON con encabezados CORS y UTF-8.'''
        self.send_response(codigo)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type, Authorization")
        self.end_headers()
        self.wfile.write(json.dumps(datos, ensure_ascii=False, indent=2).encode("utf-8"))

    def do_OPTIONS(self):
        '''Maneja solicitudes de preflight CORS de navegadores y clientes API.'''
        self.send_response(204)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type, Authorization")
        self.end_headers()

    def do_GET(self):
        '''Enrutador principal de peticiones GET.'''
        # Extraer ruta limpia sin parámetros de consulta
        parsed_url = urllib.parse.urlparse(self.path)
        ruta = parsed_url.path.rstrip("/")
        if ruta == "":
            ruta = "/"

        # 1. Healthcheck para servicios en la nube (Render, Railway, Docker, K8s)
        if ruta in ("/health", "/healthz", "/ping"):
            self.responder_json({
                "status": "ok",
                "service": "Plataforma Educativa Python",
                "uptime": "online",
                "version": "2.0.0"
            })

        # 2. Metadatos y estado del servicio
        elif ruta == "/api/status":
            self.responder_json({
                "plataforma": "Bitacora Visual de Programacion e IA",
                "version": "2.0 Modular Web Service",
                "estado": "Activo y Operacional",
                "estudiante": "Eivar Daniel Pantoja Carvajal",
                "docente": "Simena Dinas",
                "institucion": "Fundación Universitaria de Popayán (FUP)",
                "endpoints_disponibles": [
                    "/health",
                    "/api/status",
                    "/api/clases",
                    "/api/inventario",
                    "/api/estudiantes",
                    "/api/db/clases",
                    "/api/db/inventario",
                    "/api/db/estudiantes",
                    "/api/docs"
                ]
            })

        # 3. Datos desacoplados en JSON: Clases
        elif ruta == "/api/clases":
            ruta_json = os.path.join(DIRECTORIO_RAIZ, "data", "clases_data.json")
            if os.path.exists(ruta_json):
                with open(ruta_json, "r", encoding="utf-8") as f:
                    self.responder_json(json.load(f))
            else:
                self.responder_json({"error": "Archivo clases_data.json no encontrado"}, 404)

        # 4. Datos desacoplados en JSON: Inventario
        elif ruta == "/api/inventario":
            ruta_inv = os.path.join(DIRECTORIO_RAIZ, "data", "inventario_data.json")
            if os.path.exists(ruta_inv):
                with open(ruta_inv, "r", encoding="utf-8") as f:
                    self.responder_json(json.load(f))
            else:
                self.responder_json({"error": "Archivo inventario_data.json no encontrado"}, 404)

        # 5. Datos CSV: Estudiantes
        elif ruta == "/api/estudiantes":
            ruta_csv = os.path.join(DIRECTORIO_RAIZ, "database", "estudiantes.csv")
            estudiantes = []
            if os.path.exists(ruta_csv):
                with open(ruta_csv, "r", encoding="utf-8") as f:
                    lector = csv.DictReader(f)
                    for fila in lector:
                        estudiantes.append(fila)
                self.responder_json({"total": len(estudiantes), "estudiantes": estudiantes})
            else:
                self.responder_json({"error": "Archivo CSV estudiantes.csv no encontrado"}, 404)

        # 6. Consultas directas a base de datos relacional SQLite
        elif ruta == "/api/db/clases":
            if database_manager:
                try:
                    clases = database_manager.consultar_clases_dict()
                    self.responder_json({"total": len(clases), "origen": "SQLite", "clases": clases})
                except Exception as e:
                    self.responder_json({"error": f"Error al consultar base de datos: {e}"}, 500)
            else:
                self.responder_json({"error": "Módulo database_manager no disponible"}, 500)

        elif ruta == "/api/db/inventario":
            if database_manager:
                try:
                    productos = database_manager.consultar_productos_dict()
                    self.responder_json({"total": len(productos), "origen": "SQLite", "inventario": productos})
                except Exception as e:
                    self.responder_json({"error": f"Error al consultar base de datos: {e}"}, 500)
            else:
                self.responder_json({"error": "Módulo database_manager no disponible"}, 500)

        elif ruta == "/api/db/estudiantes":
            if database_manager:
                try:
                    estudiantes = database_manager.consultar_estudiantes_dict()
                    self.responder_json({"total": len(estudiantes), "origen": "SQLite", "estudiantes": estudiantes})
                except Exception as e:
                    self.responder_json({"error": f"Error al consultar base de datos: {e}"}, 500)
            else:
                self.responder_json({"error": "Módulo database_manager no disponible"}, 500)

        # 7. Documentación técnica de la API
        elif ruta == "/api/docs":
            self.responder_json({
                "titulo": "Documentación de la API - Plataforma Educativa Python",
                "descripcion": "API REST nativa para proveer contenidos, inventario y consultas analíticas del curso.",
                "rutas": {
                    "GET /": "Aplicación web principal (index.html, estilos y scripts interactivos)",
                    "GET /health": "Comprobación de salud (Health Check) para servicios en la nube",
                    "GET /api/status": "Estado de la API y datos del autor",
                    "GET /api/clases": "Listado de las 5 clases formativas estructuradas en JSON",
                    "GET /api/inventario": "Catálogo completo de la Tienda del Caos en JSON",
                    "GET /api/estudiantes": "Estudiantes procesados dinámicamente desde el CSV",
                    "GET /api/db/clases": "Consulta relacional directa a la tabla 'clases' en SQLite",
                    "GET /api/db/inventario": "Consulta relacional directa a la tabla 'productos_inventario' en SQLite",
                    "GET /api/db/estudiantes": "Consulta relacional directa a la tabla 'estudiantes' en SQLite",
                    "GET /api/docs": "Este resumen técnico de la API"
                }
            })

        # 8. Archivos estáticos de la plataforma web (HTML, CSS, JS, PNG, SVG)
        else:
            super().do_GET()


class ServidorThreading(socketserver.ThreadingMixIn, http.server.HTTPServer):
    '''Servidor HTTP multihilo: maneja múltiples peticiones en paralelo sin bloqueos.'''
    daemon_threads = True
    allow_reuse_address = True

    def server_bind(self):
        '''Asegura que el socket reutilice la dirección sin bloquearse en TIME_WAIT.'''
        self.socket.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
        super().server_bind()


def iniciar_servidor(host=HOST, puerto=PUERTO):
    '''Inicia el servidor web multihilo en el host y puerto especificados.'''
    asegurar_base_de_datos()

    httpd = None
    try:
        httpd = ServidorThreading((host, puerto), PlataformaAPIHandler)
    except OSError as e:
        if host:
            print(f"[AVISO] No se pudo vincular a '{host}': {e}. Reintentando con interfaz abierta ('')...")
            host = ""
            httpd = ServidorThreading((host, puerto), PlataformaAPIHandler)
        else:
            raise

    with httpd:
        url_local = f"http://localhost:{puerto}"
        host_mostrar = host if host else "0.0.0.0"

        print("=" * 65)
        print("  *** PLATAFORMA EDUCATIVA PYTHON - WEB SERVICE ACTIVO ***")
        print("=" * 65)
        print(f"  * Host vinculado  : {host_mostrar}")
        print(f"  * Puerto activo   : {puerto}")
        print(f"  * URL Web         : {url_local}/")
        print(f"  * URL Healthcheck : {url_local}/health")
        print(f"  * URL Documentacion API: {url_local}/api/docs")
        print("=" * 65)
        print("  Presiona Ctrl + C en cualquier momento para detener el servidor.")
        print("=" * 65)

        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n[INFO] Servidor detenido de manera ordenada.")


if __name__ == "__main__":
    iniciar_servidor()
