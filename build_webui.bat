@echo off
REM Run this inside your maildesk-webui folder (the one with package.json)
call npm install
if errorlevel 1 exit /b 1
call npm run build
if errorlevel 1 exit /b 1
if exist webui.zip del webui.zip
cd dist
tar -a -c -f ..\webui.zip *
cd ..
echo.
echo Done: webui.zip created in this folder.
