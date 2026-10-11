# Arya Sura Pratama — Portofolio

Website personal untuk **Arya Sura Pratama, M.Kom.**, dosen di **Jinarakkhita Buddhist College of Lampung** dan pengembang web/software. Tujuan publikasi: **https://aryasurapratama.github.io/**.

Desain responsif dengan navigasi seluler, detail proyek, tautan profil akademik ORCID, kontak Instagram, dan tombol salin profil GitHub. HTML, CSS, serta JavaScript biasa; tidak memerlukan instalasi dependency. Foto profil dan font disimpan lokal.

## Pratinjau lokal

Dengan Node.js 18 atau lebih baru:

```sh
npm run dev
```

Buka http://127.0.0.1:4173. Gunakan `PORT=4174 npm run dev` jika port sudah terpakai.

```sh
npm run check
npm run build
```

Hasil build ada di `dist/`.

## Publikasi ke GitHub Pages

Nama folder lokal bebas. Agar mendapatkan alamat `aryasurapratama.github.io`, nama repositori di akun `aryasurapratama` harus **`aryasurapratama.github.io`**.

1. Buat repositori publik dengan nama tersebut. Jangan tambahkan README atau `.gitignore` otomatis karena file sudah tersedia di proyek ini.
2. Unggah sumber proyek, termasuk `.github/workflows/deploy.yml`. Jika menggunakan Git lokal:

   ```sh
   git init -b main
   git add .
   git commit -m "Create lecturer and developer portfolio"
   git remote add origin https://github.com/aryasurapratama/aryasurapratama.github.io.git
   git push -u origin main
   ```

3. Di repositori, buka **Settings → Pages → Build and deployment → Source**, pilih **GitHub Actions**.
4. Buka **Actions → Deploy portfolio to GitHub Pages → Run workflow** jika workflow pertama belum berhasil. Selanjutnya, setiap push ke `main` akan memperbarui situs otomatis.
5. Setelah workflow berhasil, buka https://aryasurapratama.github.io/.

Rujukan: [membuat situs GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site) dan [workflow GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).

## Menyesuaikan konten

- `index.html`: profil, teks, proyek, kontak, serta metadata SEO.
- `assets/main.js`: isi detail proyek, menu, dan tombol salin profil.
- `assets/style.css`: warna, tipografi, dan layout responsif.
- `assets/profile.jpg`: foto profil. Ganti dengan foto pilihan Anda.

Identitas dosen/pengembang, gelar M.Kom., dan afiliasi kampus berasal dari keterangan pemilik. Lokasi, ORCID, Instagram, bidang eksplorasi, serta proyek berasal dari [profil GitHub publik](https://github.com/aryasurapratama) dan repositori [ISambuddha 2023](https://github.com/aryasurapratama/IsamBuddha-2023) / [WA Autokick](https://github.com/aryasurapratama/wa-autokick). Sampul proyek merupakan ilustrasi grafis, bukan tangkapan layar aplikasi. Daftar publikasi, email, dan CV belum dicantumkan karena belum diberikan.
