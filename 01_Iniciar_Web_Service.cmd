@echo off
setlocal
cd /d "%~dp0"

echo =======================================================================
echo Iniciando Servicio Web de la Plataforma Educativa (Python)...
echo Direccion Local : http://localhost:8000
echo Health Check    : http://localhost:8000/health
echo API Docs        : http://localhost:8000/api/docs
echo =======================================================================

python main.py
pause
endlocal
