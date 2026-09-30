# =============================================================================
# DOCKERFILE - PLATAFORMA EDUCATIVA PYTHON & WEB SERVICE
# Imagen ligera, segura y optimizada para producción
# =============================================================================

FROM python:3.11-slim

# Metadatos
LABEL maintainer="Eivar Daniel Pantoja Carvajal"
LABEL description="Plataforma Educativa de Programación con Python e Inteligencia Artificial"

# Variables de entorno de Python y red
ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    PORT=8000 \
    HOST=0.0.0.0

# Instalar curl para healthcheck y utilidades mínimas
RUN apt-get update && apt-get install -y --no-install-recommends \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Crear usuario sin privilegios por seguridad
RUN groupadd -g 1000 appgroup && \
    useradd -u 1000 -g appgroup -m -s /bin/bash appuser

# Directorio de trabajo
WORKDIR /app

# Instalar dependencias si las hay
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

# Copiar el código fuente completo
COPY . .

# Ajustar permisos para el usuario no privilegiado
RUN chown -R appuser:appgroup /app

# Cambiar al usuario no root
USER appuser

# Exponer el puerto por defecto (Render / Railway inyectan la variable PORT)
EXPOSE 8000

# Verificación de salud (Health Check)
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
    CMD curl -f http://localhost:${PORT:-8000}/health || exit 1

# Comando de inicio del servicio web
CMD ["python", "main.py"]
