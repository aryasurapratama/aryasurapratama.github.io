# Arya Sura Pratama, M.Kom. — Profil Akademik & Teknologi

Website personal **Arya Sura Pratama, M.Kom.**, dosen tetap di **Jinarakkhita Buddhist College of Lampung** dengan homebase **Program Studi Pendidikan Keagamaan Buddha**, serta **Founder & Technology Lead SoftKlinik**.

Situs: **https://aryasurapratama.github.io/**.

Setiap menu membuka halaman tersendiri, dengan satu bagian konten utama per halaman. Bahasa Indonesia dan English tersedia pada seluruh halaman:

| Halaman    | Indonesia      | English           |
| ---------- | -------------- | ----------------- |
| Beranda    | `/`            | `/en/`            |
| Profil     | `/profil/`     | `/en/profile/`    |
| Pendidikan | `/pendidikan/` | `/en/education/`  |
| Penelitian | `/penelitian/` | `/en/research/`   |
| Karya      | `/karya/`      | `/en/technology/` |
| Kontak     | `/kontak/`     | `/en/contact/`    |

Tombol bahasa di header memakai ikon bendera SVG dari flag-icons: Indonesia untuk beralih ke Bahasa Indonesia, dan United Kingdom untuk beralih ke English. Label EN/ID tersedia bagi pembaca layar. Pergantian bahasa membuka halaman yang setara, termasuk tanpa JavaScript. Setiap halaman mempunyai `lang`, canonical, metadata, dan tautan `hreflang` sendiri. Nama pribadi, gelar resmi, dan nama institusi tetap dipertahankan.

Desain akademik dengan warna putih, navy, dan biru. Memuat profil akademik, pendidikan S1–S2, publikasi pilihan, tesis, SoftKlinik, Google Scholar, SINTA, ORCID, GitHub, Instagram, serta kontak WhatsApp. Navigasi memakai tautan halaman biasa; menu aktif ditandai dengan warna, garis bawah, dan `aria-current="page"`. Pada ponsel, nama halaman terlihat di header. Tautan lama seperti `/#pendidikan` diarahkan ke halaman baru ketika JavaScript aktif.

Nama lengkap tampil pada judul utama dan copyright. Blok logo/nama yang berulang serta label pembuka di atas judul telah dihapus. WhatsApp, Instagram, dan GitHub memakai format baris kontak yang sama. Tombol kembali ke atas berupa ikon mengambang di kanan bawah, muncul setelah halaman digulir 300px, dan mengembalikan fokus ke judul utama saat digunakan. Tanpa JavaScript, tautan ikon tetap tersedia.

Tipografi isi 16px, tombol minimal 48px, dan kontrol sentuh minimal 44px. Layout menyesuaikan lebar layar tanpa mengecilkan teks isi. Navigasi mendukung keyboard, penanda halaman aktif, dan menu yang dapat digulir pada layar landscape. Ringkasan audit tersedia di [UI_UX_AUDIT.md](UI_UX_AUDIT.md).

Tautan akademik menggunakan ikon asli Google Scholar, SINTA, dan ORCID. Ikon antarmuka memakai Lucide SVG; ikon merek sosial memakai geometri Simple Icons. Aset, sumber, dan lisensi disimpan lokal di `assets/icons/`. Jarak serta judul bagian dipadatkan, dan tautan akademik berulang di bawah publikasi dihapus.

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

`dev` dan `build` menghasilkan seluruh halaman dari sumber yang sama. Setelah mengubah sumber ketika server sedang berjalan, jalankan `npm run generate` untuk memperbarui halaman lokal.

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

- `src/content/id/` dan `src/content/en/`: isi setiap halaman; perbarui kedua bahasa saat konten berubah.
- `src/layout.html`: header, footer, tombol bahasa, dan struktur bersama seluruh halaman.
- `scripts/generate.mjs`: alamat halaman, judul, deskripsi SEO, navigasi, dan sitemap. Tidak membutuhkan dependency aplikasi.
- `index.html`, direktori halaman Indonesia, dan `en/`: HTML statis hasil generator. Edit sumber di `src/`, lalu jalankan `npm run generate`; jangan mengedit hasil generator langsung.
- `assets/style.css`: tampilan desktop, tablet, dan seluler.
- `assets/main.js`: menu ponsel, pengalihan tautan bagian lama, dan ikon kembali ke atas. Navigasi antarhalaman serta pergantian bahasa memakai tautan HTML.
- `assets/profile.jpg`: foto formal terbaru yang diberikan oleh pemilik, disiapkan untuk web.
- `assets/softklinik-preview.png`: tangkapan layar website resmi SoftKlinik.
- `assets/icons/`: ikon asli merek, sprite SVG antarmuka, sumber, dan lisensi.
- `404.html`: halaman tautan tidak ditemukan.
- `en/404.html` dan `assets/not-found.js`: halaman 404 English dan penyesuaian bahasa untuk URL English yang tidak ditemukan di GitHub Pages.
- `sitemap.xml` dan `robots.txt`: pengindeksan situs.

## Sumber konten

Status dosen tetap, homebase, gelar, riwayat S1/S2 beserta tahun, kontak WhatsApp, dan tautan profil diberikan oleh pemilik. Data pendidikan tidak diklaim sebagai hasil verifikasi langsung melalui PDDikti.

Foto formal terbaru diberikan langsung oleh pemilik. Peran Founder & Technology Lead serta deskripsi usaha berasal dari [SoftKlinik](https://softklinik.my.id/tentang-kami). Sampul SoftKlinik merupakan tangkapan layar situs aslinya.

Publikasi pilihan ditautkan ke sumber penerbit; judul pada kedua versi bahasa merupakan ringkasan topik, bukan transkripsi judul resmi:

- [Literasi digital, kesiapan belajar, dan pembelajaran AI (2025)](https://jurnalp4i.com/index.php/edutech/article/view/7972).
- [Mindfulness dan kualitas pembelajaran (2024)](https://jurnal.uns.ac.id/ijsascs/article/view/95098).
- [Media audiovisual pada pembelajaran agama Buddha (2024)](https://jurnal.uns.ac.id/ijsascs/article/view/95174).
- [Tesis tata kelola TI dengan COBIT 2019 dan ITIL (2025)](https://repo.darmajaya.ac.id/23352/).

Profil Google Scholar, SINTA, dan ORCID memakai ID yang diberikan pemilik. Situs tidak menampilkan angka sitasi, jumlah publikasi, atau klaim pelanggan yang belum terverifikasi.
