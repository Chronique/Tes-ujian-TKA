@echo off
title Server CBT Lokal - Admin
color 0b

echo ==========================================
echo        SISTEM CBT LOKAL AKTIF
echo ==========================================
echo.
echo [INFO] Alamat IP Laptop Admin:
ipconfig | findstr /i "IPv4"
echo.
echo ------------------------------------------
echo [INFO] Pastikan Siswa konek ke WiFi yang sama.
echo [INFO] Akses Siswa: http://[IP_DI_ATAS]:3000
echo [INFO] Akses Admin: http://localhost:3000/admin.html
echo ------------------------------------------
echo.

node server.js
pause