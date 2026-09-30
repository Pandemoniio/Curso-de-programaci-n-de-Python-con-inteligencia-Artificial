@echo off
setlocal
cd /d "%~dp0"

set "TARGET_DIR=%~dp0."
set "INDEX_FILE=%~dp0index.html"
set "VSCODE_EXE=%LOCALAPPDATA%\Programs\Microsoft VS Code\Code.exe"

if not exist "%VSCODE_EXE%" (
  if exist "%PROGRAMFILES%\Microsoft VS Code\Code.exe" (
    set "VSCODE_EXE=%PROGRAMFILES%\Microsoft VS Code\Code.exe"
  )
)

if not exist "%VSCODE_EXE%" (
  for /f "delims=" %%I in ('where code.cmd 2^>nul') do set "VSCODE_EXE=%%I"
)

if not exist "%VSCODE_EXE%" (
  for /f "delims=" %%I in ('where code.exe 2^>nul') do set "VSCODE_EXE=%%I"
)

if not exist "%VSCODE_EXE%" (
  echo ERROR: No se encontro la instalacion de Visual Studio Code.
  echo Abre manualmente esta carpeta desde VS Code:
  echo %TARGET_DIR%
  pause
  exit /b 1
)

echo =======================================================================
echo Abriendo carpeta en Visual Studio Code:
echo %TARGET_DIR%
echo =======================================================================

start "" "%VSCODE_EXE%" --reuse-window "%TARGET_DIR%" "%INDEX_FILE%"

if errorlevel 1 (
  echo ERROR: No se pudo abrir la carpeta en VS Code.
  pause
  exit /b 1
)

endlocal
