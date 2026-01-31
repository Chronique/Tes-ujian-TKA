import express from 'express';
import fs from 'fs';
import cors from 'cors';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const xlsx = require('xlsx');

const app = express();
const PORT = 3000;

// Setup Folder & File (Pastikan folder public/assets sudah ada untuk gambar)
const setup = () => {
    ['./data', './uploads', './public/assets'].forEach(d => { if (!fs.existsSync(d)) fs.mkdirSync(d, {recursive: true}); });
    if (!fs.existsSync('./data/soal.json')) fs.writeFileSync('./data/soal.json', '[]');
    if (!fs.existsSync('./data/nilai.json')) fs.writeFileSync('./data/nilai.json', '[]');
    if (!fs.existsSync('./data/config.json')) fs.writeFileSync('./data/config.json', JSON.stringify({ namaSekolah: "PUSMENDIK - ANBK", tampilNilai: false }));
};
setup();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.get('/api/soal', (req, res) => res.json(JSON.parse(fs.readFileSync('./data/soal.json'))));
app.get('/api/config', (req, res) => res.json(JSON.parse(fs.readFileSync('./data/config.json'))));
app.post('/api/submit', (req, res) => {
    const db = JSON.parse(fs.readFileSync('./data/nilai.json'));
    db.push({ ...req.body, waktu: new Date().toLocaleString() });
    fs.writeFileSync('./data/nilai.json', JSON.stringify(db, null, 2));
    res.json({ message: 'Tersimpan' });
});

app.listen(PORT, '0.0.0.0', () => console.log(`Server: http://localhost:${PORT}`));