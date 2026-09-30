# 🚀 Guía Maestra de Despliegue en Servicios Web (Web Service)

Esta guía explica paso a paso cómo empaquetar y poner en producción la **Plataforma Educativa de Programación, Datos e IA** en servicios web en la nube (PaaS, contenedores Docker o VPS).

---

## 📋 Arquitectura del Proyecto

El proyecto está empaquetado para funcionar sin fricciones en cualquier entorno:

```text
├── Dockerfile                  # Contenedor de producción con usuario seguro y healthcheck
├── docker-compose.yml          # Orquestación para pruebas locales y servidores
├── Procfile                    # Entrada estándar para Render, Railway, Heroku
├── render.yaml                 # Blueprint para despliegue automatizado en Render
├── railway.json                # Configuración de compilación para Railway
├── requirements.txt            # Dependencias de producción (Gunicorn opcional)
├── runtime.txt                 # Especificación de versión de Python (3.11.9)
├── .env.example                # Variables de entorno de referencia
├── main.py                     # Punto de entrada universal (servidor nativo multihilo)
├── wsgi.py                     # Punto de entrada WSGI para Gunicorn / producción
└── Plataforma_Educativa_Python/
    ├── index.html              # Frontend web interactivo
    ├── assets/                 # Estilos CSS, animaciones JS, iconos e imágenes
    ├── backend/
    │   ├── api_server.py       # Servidor HTTP/REST concurrente
    │   └── database_manager.py # Gestor relacional SQLite
    ├── data/                   # Datasets JSON (clases e inventario)
    └── database/               # Esquema SQL, seeds y base de datos SQLite
```

---

## 🌐 Opción 1: Despliegue en Render (Recomendado - 100% Gratuito)

Render ofrece alojamiento gratuito para servicios web con soporte nativo de Python y Docker.

### Pasos:
1. Sube tus cambios a tu repositorio de GitHub:
   ```bash
   git add .
   git commit -m "Empaquetar proyecto para Web Service"
   git push origin main
   ```
2. Entra en [Render.com](https://render.com) e inicia sesión con tu cuenta de GitHub.
3. Haz clic en **"New +"** y selecciona **"Web Service"**.
4. Conecta tu repositorio de GitHub: `Curso-de-programaci-n-de-Python-con-inteligencia-Artificial`.
5. Configura los siguientes campos:
   - **Name:** `plataforma-educativa-python` (o el nombre que prefieras).
   - **Region:** Elige la más cercana (ej. `Oregon (US West)` o `Frankfurt (EU)`).
   - **Branch:** `main`.
   - **Runtime:** `Python 3` (o `Docker`).
   - **Build Command:** `pip install -r requirements.txt`.
   - **Start Command:** `python main.py` (o `gunicorn wsgi:app`).
   - **Instance Type:** `Free`.
6. En **Advanced** (Opcional):
   - **Health Check Path:** `/health`.
7. Haz clic en **"Create Web Service"**.

En 1-2 minutos, Render compilará tu aplicación y te entregará una URL pública segura (ejemplo: `https://plataforma-educativa-python.onrender.com`).

---

## 🚂 Opción 2: Despliegue en Railway

Railway detecta automáticamente los archivos del repositorio:

1. Ve a [Railway.app](https://railway.app) y haz clic en **"New Project"**.
2. Selecciona **"Deploy from GitHub repo"**.
3. Selecciona tu repositorio.
4. Railway leerá automáticamente `railway.json` y `Procfile`.
5. En la configuración de tu servicio, ve a **Settings** > **Networking** y haz clic en **"Generate Domain"** para obtener tu enlace público HTTPS.

---

## 🐳 Opción 3: Despliegue con Docker / Docker Compose

Si cuentas con tu propio VPS (Ubuntu/Debian, DigitalOcean, AWS, Linode) o quieres probar en Docker:

### Usando Docker directo:
```bash
# 1. Construir la imagen
docker build -t plataforma-python .

# 2. Ejecutar el contenedor
docker run -d -p 8000:8000 --name web-plataforma plataforma-python
```

### Usando Docker Compose:
```bash
# Levantar en segundo plano
docker compose up -d --build

# Ver logs en vivo
docker compose logs -f

# Detener el servicio
docker compose down
```

Accede desde tu navegador a `http://localhost:8000` o la IP pública de tu servidor.

---

## 💻 Opción 4: Ejecución Local en tu Computadora

### Modo 1: Servidor Nativo (Sin necesidad de instalar nada)
```bash
python main.py
```
Abre en tu navegador: [http://localhost:8000](http://localhost:8000)

### Modo 2: Servidor WSGI de Producción (Linux/Mac o con Gunicorn/Waitress)
```bash
pip install -r requirements.txt
gunicorn wsgi:app --bind 0.0.0.0:8000 --workers 3
```

---

## 📡 Endpoints de la API REST Disponibles

Tu servicio web provee tanto la interfaz gráfica como endpoints JSON estructurados:

| Método | Ruta | Descripción |
| :--- | :--- | :--- |
| `GET` | `/` | Página web completa e interactiva (`index.html`) |
| `GET` | `/health` | Health Check para balanceadores de carga y monitores |
| `GET` | `/api/status` | Metadatos y estado del servicio web |
| `GET` | `/api/docs` | Documentación técnica de todos los endpoints |
| `GET` | `/api/clases` | Las 5 clases formativas del curso (JSON desacoplado) |
| `GET` | `/api/inventario` | Catálogo de productos de la Tienda del Caos |
| `GET` | `/api/estudiantes` | Registro de estudiantes leídos desde CSV |
| `GET` | `/api/db/clases` | Consulta relacional directa a la tabla SQLite de clases |
| `GET` | `/api/db/inventario` | Consulta directa a productos en SQLite |
| `GET` | `/api/db/estudiantes` | Consulta directa de alumnos en SQLite |

### Ejemplo de prueba con cURL:
```bash
curl -s http://localhost:8000/health
curl -s http://localhost:8000/api/db/clases
```
