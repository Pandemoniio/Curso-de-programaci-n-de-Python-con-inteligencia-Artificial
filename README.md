# Plataforma Educativa: Bitácora Visual de Programación, Datos e IA

[![Python 3](https://img.shields.io/badge/Python-3.11%20%7C%203.12%20%7C%203.14-blue.svg)](https://www.python.org/)
[![Docker Ready](https://img.shields.io/badge/Docker-Ready-2496ED.svg)](./Dockerfile)
[![Render Ready](https://img.shields.io/badge/Render-Deploy-brightgreen.svg)](./render.yaml)
[![Status](https://img.shields.io/badge/Web%20Service-Operational-success.svg)](#)

- **Desarrollador y Diseñador:** Eivar Daniel Pantoja Carvajal
- **Docente:** Simena Dinas
- **Institución:** Fundación Universitaria de Popayán (FUP)

---

## 🌟 Acerca del Proyecto

Esta plataforma reúne en una interfaz web pedagógica e interactiva todos los conocimientos, ejercicios prácticos, proyectos y análisis desarrollados durante el curso de programación.

El proyecto está diseñado con una **arquitectura desacoplada y empaquetada como Web Service**, lista para ser desplegada en la nube (Render, Railway, Fly.io, Google Cloud Run, Docker o VPS) con un solo clic.

### Características Principales:
* **Frontend Interactivo:** Estructurado en 13 frames visuales, con diseño editorial, animaciones 3D en tarjetas, visor de código en tiempo real y tipografía moderna.
* **Backend y API REST:** Servidor web nativo multi-hilo en Python 3 (`api_server.py`) y punto de entrada universal (`main.py` / `wsgi.py`).
* **Base de Datos Relacional:** SQLite integrado (`plataforma.db`) con creación y carga automática de esquemas (`schema.sql`) y datos iniciales (`seed_data.sql`).
* **Datasets Híbridos:** Consumo analítico de datos en formato JSON (`clases_data.json`, `inventario_data.json`) y CSV (`estudiantes.csv`).
* **Empaquetado para la Nube:** Incluye `Dockerfile`, `docker-compose.yml`, `Procfile`, `render.yaml`, `railway.json` y healthcheck en `/health`.

---

## ⚡ Inicio Rápido Local

No requieres instalar dependencias externas para arrancar el servicio en tu equipo:

```bash
# 1. Clonar el repositorio
git clone https://github.com/DanielPantoja1/Curso-de-programaci-n-de-Python-con-inteligencia-Artificial.git
cd Curso-de-programaci-n-de-Python-con-inteligencia-Artificial

# 2. Iniciar el servicio web
python main.py
```

Abre en tu navegador: **[http://localhost:8000](http://localhost:8000)**

---

## 🐳 Ejecución con Docker

```bash
# Construir y levantar con Docker Compose
docker compose up -d --build

# Ver logs
docker compose logs -f
```

---

## 🚀 Despliegue en la Nube (Web Service)

El proyecto está 100% listo para desplegarse en plataformas gratuitas como **Render** o **Railway**:

1. Sube tu código a GitHub.
2. En **Render.com**, crea un **New Web Service** y conecta tu repositorio.
3. Elige el runtime **Python** y usa el comando de inicio `python main.py`.
4. ¡Listo! Render desplegará tu plataforma y te brindará una URL HTTPS pública.

> Para instrucciones detalladas paso a paso en cada plataforma, consulta la [**Guía Maestra de Despliegue (GUIA_DESPLIEGUE.md)**](./GUIA_DESPLIEGUE.md).

---

## 📡 Endpoints de la API REST

| Método | Endpoint | Descripción | Formato |
| :--- | :--- | :--- | :--- |
| `GET` | `/` | Aplicación Web Maestra | HTML / CSS / JS |
| `GET` | `/health` | Health Check para balanceadores y la nube | JSON |
| `GET` | `/api/status` | Metadatos y estado del servicio | JSON |
| `GET` | `/api/docs` | Documentación técnica interactiva | JSON |
| `GET` | `/api/clases` | Catálogo de clases del curso | JSON |
| `GET` | `/api/inventario` | Catálogo de la Tienda del Caos | JSON |
| `GET` | `/api/estudiantes` | Registro de estudiantes | CSV a JSON |
| `GET` | `/api/db/clases` | Consulta SQL directa a tabla `clases` | SQLite JSON |
| `GET` | `/api/db/inventario` | Consulta SQL directa a tabla `productos_inventario` | SQLite JSON |
| `GET` | `/api/db/estudiantes` | Consulta SQL directa a tabla `estudiantes` | SQLite JSON |

---

## 📂 Estructura del Repositorio

```text
├── .dockerignore
├── .env.example
├── .gitignore
├── Dockerfile
├── docker-compose.yml
├── GUIA_DESPLIEGUE.md
├── main.py
├── Procfile
├── railway.json
├── README.md
├── render.yaml
├── requirements.txt
├── runtime.txt
├── wsgi.py
└── Plataforma_Educativa_Python/
    ├── index.html
    ├── assets/
    ├── backend/
    ├── data/
    ├── database/
    ├── docs/
    └── proyectos_python/
```