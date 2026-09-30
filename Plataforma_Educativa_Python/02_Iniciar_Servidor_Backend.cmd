@echo off
setlocal
cd /d "%~dp0"

echo =======================================================================
echo Iniciando Servidor Backend API (Python 3)...
echo Direccion: http://localhost:8000
echo =======================================================================

python "%~dp0backend\api_server.py"
pause
endlocal
