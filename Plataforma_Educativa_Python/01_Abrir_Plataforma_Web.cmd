@echo off
setlocal
cd /d "%~dp0"

set "TARGET=%~dp0index.html"

if not exist "%TARGET%" (
    echo ERROR: No se encontro el archivo index.html en:
    echo %TARGET%
    pause
    exit /b 1
)

echo =======================================================================
echo Abriendo la Plataforma Educativa en tu navegador...
echo =======================================================================
start "" "%TARGET%"
endlocal
