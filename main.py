#!/usr/bin/env python3
# =============================================================================
# PUNTO DE ENTRADA PRINCIPAL PARA SERVICIOS WEB (WEB SERVICE ENTRYPOINT)
# Plataforma Educativa de Programación con Python e Inteligencia Artificial
# Autor: Eivar Daniel Pantoja Carvajal | Docente: Simena Dinas
# =============================================================================

import os
import sys
import signal

# Asegurar que la raíz del proyecto y el backend estén en el sys.path
RAIZ_REPOSITORIO = os.path.dirname(os.path.abspath(__file__))
CARPETA_PLATAFORMA = os.path.join(RAIZ_REPOSITORIO, "Plataforma_Educativa_Python")
CARPETA_BACKEND = os.path.join(CARPETA_PLATAFORMA, "backend")

for ruta in [RAIZ_REPOSITORIO, CARPETA_PLATAFORMA, CARPETA_BACKEND]:
    if ruta not in sys.path and os.path.exists(ruta):
        sys.path.insert(0, ruta)

# Importar el servidor API y el gestor de base de datos
try:
    from api_server import iniciar_servidor, PUERTO, HOST, asegurar_base_de_datos
except ImportError:
    from Plataforma_Educativa_Python.backend.api_server import (
        iniciar_servidor,
        PUERTO,
        HOST,
        asegurar_base_de_datos,
    )


def manejar_cierre(sig, frame):
    """Manejador limpio para señales SIGTERM y SIGINT (vital para Docker y Cloud Web Services)."""
    print("\n[INFO] Señal de terminación recibida. Cerrando el servicio web con seguridad...")
    sys.exit(0)


def main():
    """Inicializa la base de datos y arranca el servidor web multihilo."""
    # Registrar señales del sistema operativo (Render / Heroku / Docker envían SIGTERM para reiniciar)
    signal.signal(signal.SIGINT, manejar_cierre)
    if hasattr(signal, "SIGTERM"):
        signal.signal(signal.SIGTERM, manejar_cierre)

    puerto = int(os.environ.get("PORT", os.environ.get("PUERTO", PUERTO)))
    host = os.environ.get("HOST", HOST)

    # Iniciar el servicio web
    iniciar_servidor(host=host, puerto=puerto)


if __name__ == "__main__":
    main()
