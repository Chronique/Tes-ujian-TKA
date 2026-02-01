# SIMULASI UJIAN SEKOLAH

---

 ***TUTORIAL***
--
## 🛠️ Komponen Wajib di Komputer Admin

1. **Node.js** (Runtime Utama)
   
  Ini adalah mesin yang menjalankan server.js kamu.

  Download: Buka [nodejs.org](https://nodejs.org/en) dan pilih versi LTS (Recommended For Most Users).

  *Cek Instalasi*: Buka Terminal/CMD, ketik 

  ```bash
  node -v.
  ```
  Jika muncul versi (misal: v20.x.x), berarti sudah berhasil.


---
2. **Library Pendukung** (Dependencies)
   
Setelah Node.js terpasang, kamu perlu meng-install "bahan-bahan" atau library yang kita pakai di kode server. Buka terminal di folder proyek kamu, lalu ketik perintah ini:

```Bash
# Inisialisasi proyek (hanya sekali di awal)

npm install
npm init -y

# Install semua bahan yang kita butuhkan
npm install express cors multer xlsx
```

* *express:* Untuk membuat server web.

* *cors:* Agar laptop siswa bisa mengakses server tanpa diblokir.

* *multer:* Untuk menangani proses upload file Excel.

* *xlsx:* Untuk membaca data dari file Excel ke dalam sistem.
---
3. **Web Browser Terbaru**

   
Gunakan Google Chrome atau Microsoft Edge. Browser ini digunakan untuk membuka admin.html guna memantau hasil ujian dan mengunggah soal.

## 📂 Struktur Folder yang Benar
Pastikan susunan folder di laptop Admin terlihat seperti ini agar tidak terjadi error:

📁 **cbt-lokal/** (Folder utama)

📁 **data/** (Berisi soal.json, nilai.json, config.json)

📁 **uploads/** (Folder sementara saat upload Excel)

📁 **public/**

📁 **assets/** (Taruh semua gambar soal di sini)

📄 ***index.html*** (Halaman siswa)

📄 ***admin.html*** (Halaman admin)

📄 ***server.js***

📄 ***package.json***




---

Cara Menjalankan di Localhost
Setelah semua library di-install, ikuti langkah ini untuk menghidupkan servernya:

Buka Terminal di VS Code (tekan Ctrl + J).

Ketik Perintah:

```Bash
node server.js
```
*Lihat Pesan:* Jika muncul tulisan Server jalan di http://localhost:3000, berarti server sudah aktif.

* **Buka Browser:**

Untuk kamu (Admin): Ketik 

```bash
http://localhost:3000/admin.html.
```

Untuk tes sebagai Siswa: Ketik 
```bash
http://localhost:3000/index.html.
```
---
## 💡 Tips Biar Lebih Cepat (Pake File .bat)

⚙️ ***jalankan_server.bat*** (File untuk klik dua kali langsung jalan)

Gunakan file
```bash
jalankan_server.bat
```
Klik dua kali file tersebut.

Server akan langsung jalan tanpa kamu perlu buka VS Code atau ngetik di terminal.

## ⚠️ Hal Penting Saat Jalankan Localhost

***Jangan Tutup Terminal: Kalau terminal/CMD kamu tutup, servernya mati dan siswa tidak bisa akses. Biarkan terminal tetap terbuka selama ujian berlangsung.***


Update Folder: 

* Pastikan folder uploads dan data sudah muncul setelah kamu menjalankan server untuk pertama kali agar tidak ada error saat upload Excel.

---

📡 ***Perangkat Pendukung*** (Hardware)

Selain software, kamu butuh Router WiFi atau Access Point.

Laptop Admin dan semua perangkat siswa harus terhubung ke WiFi yang sama.

Kamu tidak butuh koneksi internet (bisa offline), yang penting adalah kabel LAN atau sinyal WiFi yang stabil agar pengiriman jawaban tidak terputus.

