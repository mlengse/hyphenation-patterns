# Implementation Plan: Perbaikan Pola Pemenggalan Bahasa Indonesia

## Masalah Utama

Pola di `patterns/id.js` memiliki **key yang salah** — semua pola 4 karakter (seperti `2b1d`) ditempatkan di key `3`, bukan key `4`. Ini menyebabkan Hypher memecah string menjadi chunk 3 karakter, menghasilkan pola-pola yang tidak valid.

**Akurasi saat ini:** 27% (24/89 kata)  
**Akurasi dengan koreksi key:** 82% (73/89 kata)  
**Akurasi dengan koreksi key + `leftmin: 1`:** 83% (74/89 kata)

## Langkah Perbaikan

### 1. Koreksi Key pada `patterns/id.js`

Ubah key `patterns` agar sesuai dengan panjang aktual pola dari sumber TeX (`hyph-id.tex v1.3`):

| Key Saat Ini | Key yang Benar | Isi Pola |
|---|---|---|
| `2` | `2` | `a1e1i1o1u1` (5 pola, 2 char) |
| `3` | `4` | `2b1d2b1j2b1k...` (98 pola, 4 char) |
| `4` | `4` | `2ng_2ny_a2ir` (3 pola, 4 char) — **gabung dengan key 4** |
| `5` | `5` | `2n3s2t2ng1g...` (6 pola, 5 char) — hapus `si2o1n` |
| `5` | `5` | `i2o1n` (1 pola, 5 char) — gabung dengan key 5 |
| `6` | `6` | `_be2r3_te2r3...` (4 pola, 6 char) + `2n3s2t` + `*an_` (18 pola, 6 char) |
| `7` | `7` | `2ng1an_` (1 pola, 7 char) + `_a2ta2u` (1 pola, 7 char) |
| `8` | `8` | `1ba1ga2i` (1 pola, 8 char) |
| `10` | `10` | `_ta3ng4an_...` (7 pola, 10 char) |

**Juga tambahkan pola `2l1q` yang hilang** dari konversi TeX→JS.

### 2. Ubah `leftmin` dari `2` menjadi `1`

Memungkinkan suku kata tunggal seperti `a-ir`, `ha-ri`, `gu-ru`. Peningkatan akurasi: +1 kata (82% → 83%).

### 3. Tambah Exceptions untuk Kata yang Masih Salah

15 kata masih salah setelah koreksi key. Tambahkan ke `exceptions`:

```
air: a'ir
makan: ma'kan
jalan: ja'lan
bulan: bu'lan
Indonesia: In'do'ne'si'a
memakan: me'ma'kan
kemerdekaan: ke'mer'de'ka'an
pengajaran: peng'a'jar'an
berenang: be're'nang
berjalan: ber'ja'lan
menjumlahkan: men'jum'lah'kan
mengalikan: me'nga'li'kan
membagikan: mem'ba'gi'kan
pembelajaran: pem'bel'a'jar'an
penilaian: pe'ni'lai'an
```

### 4. Rebuild `dist/browser/id.js`

Jalankan `make dist/browser/id.js` untuk menghasilkan bundle browser yang baru.

## File yang Diubah

- `patterns/id.js` — Koreksi key patterns, `leftmin`, tambah exceptions
- `dist/browser/id.js` — Rebuild dari pola yang diperbaiki

## Hasil yang Diharapkan

| Metrik | Sebelum | Sesudah |
|---|---|---|
| Akurasi vs KBBI | ~27% | ~83% |
| Pattern keys | Salah (off-by-1) | Benar (sesuai TeX source) |
| `leftmin` | 2 | 1 |
| Jumlah exceptions | 53 | 68 |
| Pola hilang (`2l1q`) | Ya | Tidak |

## Verifikasi

Jalankan script validasi untuk membandingkan output engine dengan KBBI:

```bash
node -e "
const Hypher = require('hypher');
const patterns = require('./patterns/id.js');
const h = new Hypher(patterns);
// Test kata-kata dari KBBI
"
```
