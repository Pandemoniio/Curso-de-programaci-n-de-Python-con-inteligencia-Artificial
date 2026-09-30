# =============================================================================
# APLICACIÓN WSGI PARA PRODUCCIÓN (GUNICORN / WAITRESS / UWSGI)
# Plataforma Educativa de Programación con Python e Inteligencia Artificial
# Autor: Eivar Daniel Pantoja Carvajal | Docente: Simena Dinas
# =============================================================================

import os
import sys
import json
import csv
import mimetypes

# Configuración de rutas
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
PLATAFORMA_DIR = os.path.join(BASE_DIR, "Plataforma_Educativa_Python")
BACKEND_DIR = os.path.join(PLATAFORMA_DIR, "backend")

for path in [BASE_DIR, PLATAFORMA_DIR, BACKEND_DIR]:
    if path not in sys.path and os.path.exists(path):
        sys.path.insert(0, path)

try:
    import database_manager
    # Auto-asegurar base de datos
    db_file = os.path.join(PLATAFORMA_DIR, "database", "plataforma.db")
    if not os.path.exists(db_file) or os.path.getsize(db_file) == 0:
        database_manager.inicializar_base_de_datos()
except Exception as e:
    print(f"[WSGI] Aviso base de datos: {e}")
    database_manager = None


def json_response(start_response, data, status="200 OK"):
    """Genera una respuesta JSON con cabeceras CORS estándar."""
    body = json.dumps(data, ensure_ascii=False, indent=2).encode("utf-8")
    headers = [
        ("Content-Type", "application/json; charset=utf-8"),
        ("Content-Length", str(len(body))),
        ("Access-Control-Allow-Origin", "*"),
        ("Access-Control-Allow-Methods", "GET, POST, OPTIONS"),
        ("Access-Control-Allow-Headers", "Content-Type, Authorization"),
    ]
    start_response(status, headers)
    return [body]


def file_response(start_response, file_path):
    """Sirve archivos estáticos con el Content-Type adecuado."""
    if not os.path.isfile(file_path):
        return json_response(start_response, {"error": "Archivo no encontrado"}, "404 Not Found")

    mime_type, _ = mimetypes.guess_type(file_path)
    if not mime_type:
        mime_type = "application/octet-stream"

    try:
        with open(file_path, "rb") as f:
            content = f.read()

        headers = [
            ("Content-Type", mime_type),
            ("Content-Length", str(len(content))),
            ("Access-Control-Allow-Origin", "*"),
            ("Cache-Control", "public, max-age=3600"),
        ]
        start_response("200 OK", headers)
        return [content]
    except Exception as e:
        return json_response(start_response, {"error": str(e)}, "500 Internal Server Error")


def app(environ, start_response):
    """Punto de entrada WSGI universal (compatible con Gunicorn, Waitress, uWSGI)."""
    method = environ.get("REQUEST_METHOD", "GET").upper()
    path = environ.get("PATH_INFO", "/").rstrip("/")
    if path == "":
        path = "/"

    # Manejo de preflight CORS
    if method == "OPTIONS":
        headers = [
            ("Content-Type", "text/plain"),
            ("Access-Control-Allow-Origin", "*"),
            ("Access-Control-Allow-Methods", "GET, POST, OPTIONS"),
            ("Access-Control-Allow-Headers", "Content-Type, Authorization"),
        ]
        start_response("204 No Content", headers)
        return [b""]

    # 1. Health checks para orquestadores en la nube (Render, Railway, Fly.io, K8s)
    if path in ("/health", "/healthz", "/ping"):
        return json_response(start_response, {
            "status": "ok",
            "service": "Plataforma Educativa Python",
            "runtime": "WSGI Production",
            "version": "2.0.0"
        })

    # 2. Metadatos de la plataforma
    if path == "/api/status":
        return json_response(start_response, {
            "plataforma": "Bitacora Visual de Programacion e IA",
            "version": "2.0 Modular Web Service",
            "estado": "Activo y Operacional",
            "estudiante": "Eivar Daniel Pantoja Carvajal",
            "docente": "Simena Dinas",
            "servidor": "WSGI (Gunicorn / Production Ready)"
        })

    # 3. Clases (JSON)
    if path == "/api/clases":
        clases_path = os.path.join(PLATAFORMA_DIR, "data", "clases_data.json")
        if os.path.exists(clases_path):
            with open(clases_path, "r", encoding="utf-8") as f:
                return json_response(start_response, json.load(f))
        return json_response(start_response, {"error": "No se encontró clases_data.json"}, "404 Not Found")

    # 4. Inventario (JSON)
    if path == "/api/inventario":
        inv_path = os.path.join(PLATAFORMA_DIR, "data", "inventario_data.json")
        if os.path.exists(inv_path):
            with open(inv_path, "r", encoding="utf-8") as f:
                return json_response(start_response, json.load(f))
        return json_response(start_response, {"error": "No se encontró inventario_data.json"}, "404 Not Found")

    # 5. Estudiantes (CSV)
    if path == "/api/estudiantes":
        csv_path = os.path.join(PLATAFORMA_DIR, "database", "estudiantes.csv")
        if os.path.exists(csv_path):
            with open(csv_path, "r", encoding="utf-8") as f:
                lector = csv.DictReader(f)
                estudiantes = list(lector)
            return json_response(start_response, {"total": len(estudiantes), "estudiantes": estudiantes})
        return json_response(start_response, {"error": "No se encontró estudiantes.csv"}, "404 Not Found")

    # 6. Consultas directas a base de datos SQLite
    if path == "/api/db/clases":
        if database_manager:
            try:
                clases = database_manager.consultar_clases_dict()
                return json_response(start_response, {"total": len(clases), "origen": "SQLite", "clases": clases})
            except Exception as e:
                return json_response(start_response, {"error": str(e)}, "500 Internal Server Error")
        return json_response(start_response, {"error": "database_manager no disponible"}, "500 Internal Server Error")

    if path == "/api/db/inventario":
        if database_manager:
            try:
                prods = database_manager.consultar_productos_dict()
                return json_response(start_response, {"total": len(prods), "origen": "SQLite", "inventario": prods})
            except Exception as e:
                return json_response(start_response, {"error": str(e)}, "500 Internal Server Error")
        return json_response(start_response, {"error": "database_manager no disponible"}, "500 Internal Server Error")

    if path == "/api/db/estudiantes":
        if database_manager:
            try:
                ests = database_manager.consultar_estudiantes_dict()
                return json_response(start_response, {"total": len(ests), "origen": "SQLite", "estudiantes": ests})
            except Exception as e:
                return json_response(start_response, {"error": str(e)}, "500 Internal Server Error")
        return json_response(start_response, {"error": "database_manager no disponible"}, "500 Internal Server Error")

    # 7. Documentación interactiva de la API
    if path == "/api/docs":
        return json_response(start_response, {
            "titulo": "Documentación de la API - Plataforma Educativa Python",
            "arquitectura": "WSGI Multi-worker",
            "rutas": {
                "GET /": "Interfaz web de la bitácora educativa (index.html)",
                "GET /health": "Comprobación de salud (Health Check) para servicios en la nube",
                "GET /api/status": "Estado operativo del servicio y metadatos",
                "GET /api/clases": "Datos de las 5 clases formativas",
                "GET /api/inventario": "Catálogo completo de la Tienda del Caos",
                "GET /api/estudiantes": "Estudiantes procesados dinámicamente desde CSV",
                "GET /api/db/clases": "Consulta directa a la tabla SQLite de clases",
                "GET /api/db/inventario": "Consulta directa a la tabla SQLite de inventario",
                "GET /api/db/estudiantes": "Consulta directa a la tabla SQLite de estudiantes",
                "GET /api/docs": "Resumen técnico de la API"
            }
        })

    # 8. Servir archivos estáticos del frontend
    ruta_relativa = path.lstrip("/")
    if not ruta_relativa or ruta_relativa == "":
        ruta_relativa = "index.html"

    archivo_destino = os.path.abspath(os.path.join(PLATAFORMA_DIR, ruta_relativa))

    # Prevenir Directory Traversal
    if not archivo_destino.startswith(PLATAFORMA_DIR):
        return json_response(start_response, {"error": "Acceso denegado"}, "403 Forbidden")

    # Si solicitan un directorio, servir index.html dentro de él
    if os.path.isdir(archivo_destino):
        archivo_destino = os.path.join(archivo_destino, "index.html")

    return file_response(start_response, archivo_destino)


if __name__ == "__main__":
    from main import main
    main()
