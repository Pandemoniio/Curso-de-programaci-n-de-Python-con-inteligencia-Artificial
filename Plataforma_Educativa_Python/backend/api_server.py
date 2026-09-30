# =============================================================================
# SERVIDOR API REST NATIVO (PYTHON 3 HTTP.SERVER)
# Plataforma Educativa de Programación con Python e Inteligencia Artificial
# Autor: Eivar Daniel Pantoja Carvajal | Docente: Simena Dinas
#
# DESCRIPCIÓN:
# Este servidor provee servicios web backend (API REST) para la plataforma sin
# necesidad de instalar dependencias externas como Flask o FastAPI.
# 
# ENDPOINTS DISPONIBLES:
# - GET /                   : Sirve la plataforma web (index.html).
# - GET /api/status         : Verifica el estado del servidor y metadatos.
# - GET /api/clases         : Retorna la lista de las 5 clases del curso en JSON.
# - GET /api/inventario     : Retorna el catálogo y stock de la Tienda del Caos.
# - GET /api/estudiantes    : Retorna la lista de alumnos procesados desde CSV.
# =============================================================================

import http.server
import socketserver
import json
import os
import csv

PUERTO = 8000
DIRECTORIO_RAIZ = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

class PlataformaAPIHandler(http.server.SimpleHTTPRequestHandler):
    '''Manejador personalizado de peticiones HTTP para la plataforma educativa.'''

    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORIO_RAIZ, **kwargs)

    def responder_json(self, datos, codigo=200):
        '''Helper para responder payloads JSON con encabezados CORS habilitados.'''
        self.send_response(codigo)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.end_headers()
        self.wfile.write(json.dumps(datos, ensure_ascii=False, indent=2).encode("utf-8"))

    def do_GET(self):
        '''Enrutador de peticiones GET.'''
        if self.path == "/api/status":
            self.responder_json({
                "plataforma": "Bitacora Visual de Programacion e IA",
                "version": "2.0 Modular",
                "estado": "Activo y Operacional",
                "estudiante": "Daniel Pantoja",
                "docente": "Simena Dinas"
            })
        elif self.path == "/api/clases":
            ruta_json = os.path.join(DIRECTORIO_RAIZ, "data", "clases_data.json")
            if os.path.exists(ruta_json):
                with open(ruta_json, "r", encoding="utf-8") as f:
                    self.responder_json(json.load(f))
            else:
                self.responder_json({"error": "Archivo no encontrado"}, 404)
        elif self.path == "/api/inventario":
            ruta_inv = os.path.join(DIRECTORIO_RAIZ, "data", "inventario_data.json")
            if os.path.exists(ruta_inv):
                with open(ruta_inv, "r", encoding="utf-8") as f:
                    self.responder_json(json.load(f))
            else:
                self.responder_json({"error": "Inventario no encontrado"}, 404)
        elif self.path == "/api/estudiantes":
            ruta_csv = os.path.join(DIRECTORIO_RAIZ, "database", "estudiantes.csv")
            estudiantes = []
            if os.path.exists(ruta_csv):
                with open(ruta_csv, "r", encoding="utf-8") as f:
                    lector = csv.DictReader(f)
                    for fila in lector:
                        estudiantes.append(fila)
                self.responder_json({"total": len(estudiantes), "estudiantes": estudiantes})
            else:
                self.responder_json({"error": "Archivo CSV no encontrado"}, 404)
        else:
            # Si no es un endpoint de API, sirve los archivos estáticos normales (HTML, CSS, JS, imágenes)
            super().do_GET()

def iniciar_servidor():
    '''Inicia el socket server en el puerto especificado.'''
    with socketserver.TCPServer(("", PUERTO), PlataformaAPIHandler) as httpd:
        print("============================================================")
        print(f"  SERVIDOR BACKEND ACTIVO EN: http://localhost:{PUERTO}")
        print(f"  Abre en tu navegador: http://localhost:{PUERTO}/index.html")
        print("  Presiona Ctrl + C en esta consola para detener el servidor.")
        print("============================================================")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nServidor detenido correctamente.")

if __name__ == "__main__":
    iniciar_servidor()
