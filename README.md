# Arya Sura Pratama — Profil Akademik & Teknologi

Website personal **Arya Sura Pratama, M.Kom.**, dosen tetap di **Jinarakkhita Buddhist College of Lampung** dengan homebase **Program Studi Pendidikan Keagamaan Buddha**, serta **Founder & Technology Lead SoftKlinik**.

Situs: **https://aryasurapratama.github.io/**.

Desain akademik dengan warna putih, navy, dan biru. Memuat profil akademik, pendidikan S1–S2, publikasi pilihan, tesis, SoftKlinik, proyek pengembangan, Google Scholar, SINTA, ORCID, GitHub, Instagram, serta kontak WhatsApp. Navigasi responsif dan tombol salin nomor kontak bekerja dengan JavaScript; konten utama tetap tersedia tanpa JavaScript.

## Menjalankan lokal

Memerlukan Node.js 18 atau lebih baru. Tidak perlu menginstal dependency aplikasi.

```sh
npm run dev
```

Buka http://127.0.0.1:4173. Jika port terpakai, jalankan `PORT=4174 npm run dev`.

```sh
npm run check
npm run build
```

Hasil build ada di `dist/`. Foto dan font tersimpan lokal.

## Memperbarui situs

Repositori: https://github.com/aryasurapratama/aryasurapratama.github.io.

GitHub Pages sudah memakai **GitHub Actions**. Setiap push ke `main` menjalankan `.github/workflows/deploy.yml` untuk membangun dan menerbitkan `dist/`.

```sh
git add .
git commit -m "Update academic portfolio"
git push origin main
```

Pantau hasil di tab Actions repositori. Nama repositori harus tetap `aryasurapratama.github.io` untuk menggunakan alamat tersebut. Lihat [dokumentasi GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).

## Berkas utama

- `index.html`: profil, pendidikan, publikasi, proyek, kontak, dan metadata SEO.
- `assets/style.css`: tampilan desktop, tablet, dan seluler.
- `assets/main.js`: menu, penanda navigasi aktif, dan salin nomor WhatsApp.
- `assets/profile.jpg`: foto formal pemilik dari situs SoftKlinik.
- `assets/softklinik-preview.png`: tangkapan layar website resmi SoftKlinik.
- `404.html`: halaman tautan tidak ditemukan.
- `sitemap.xml` dan `robots.txt`: pengindeksan situs.

## Sumber konten

Status dosen tetap, homebase, gelar, riwayat S1/S2 beserta tahun, kontak WhatsApp, dan tautan profil diberikan oleh pemilik. Data pendidikan tidak diklaim sebagai hasil verifikasi langsung melalui PDDikti.

Foto formal, peran Founder & Technology Lead, serta deskripsi usaha berasal dari [SoftKlinik](https://softklinik.my.id/tentang-kami). Sampul SoftKlinik merupakan tangkapan layar situs aslinya. Proyek pribadi menggunakan repositori [ISambuddha 2023](https://github.com/aryasurapratama/IsamBuddha-2023) dan [WA Autokick](https://github.com/aryasurapratama/wa-autokick).

Publikasi pilihan ditautkan ke sumber penerbit; judul pada situs adalah ringkasan topik dalam Bahasa Indonesia, bukan transkripsi judul resmi:

- [Literasi digital, kesiapan belajar, dan pembelajaran AI (2025)](https://jurnalp4i.com/index.php/edutech/article/view/7972).
- [Mindfulness dan kualitas pembelajaran (2024)](https://jurnal.uns.ac.id/ijsascs/article/view/95098).
- [Media audiovisual pada pembelajaran agama Buddha (2024)](https://jurnal.uns.ac.id/ijsascs/article/view/95174).
- [Tesis tata kelola TI dengan COBIT 2019 dan ITIL (2025)](https://repo.darmajaya.ac.id/23352/).

Profil Google Scholar, SINTA, dan ORCID memakai ID yang diberikan pemilik. Situs tidak menampilkan angka sitasi, jumlah publikasi, atau klaim pelanggan yang belum terverifikasi.
