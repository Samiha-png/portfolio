@echo off
cd /d "%~dp0"
echo Installing dependencies (first run only)...
npm install
if errorlevel 1 pause & exit /b 1
npm run dev
pause
