# Audit UI/UX portofolio

Tanggal: 11 Oktober 2026. Situs: https://aryasurapratama.github.io/.

## Perbaikan

- Teks isi diperbesar menjadi 16px; ukuran tombol 14px dan informasi pendukung 12–14px. Label kecil tetap memiliki hierarki visual yang jelas.
- Grid dan jarak antarbagian diselaraskan. Susunan tablet dan seluler menyesuaikan ruang dengan mempertahankan keterbacaan teks.
- Bingkai foto memiliki ruang di atas kepala dan caption yang sejajar. Pratinjau SoftKlinik diluruskan dan ditempatkan di dalam bingkai.
- Tombol utama memiliki tinggi minimal 48px; kontrol dan tautan tindakan memiliki area sentuh setinggi minimal 44px.
- Penanda navigasi diperbaiki agar Kontak aktif saat mencapai bagian bawah halaman. Warna tombol navigasi aktif tetap memiliki kontras.
- Navigasi keyboard memindahkan fokus ke judul tujuan. Escape menutup menu dan mengembalikan fokus. Menu landscape dapat digulir.
- Tautan keluar menyampaikan informasi tab baru kepada pembaca layar. Tautan langsung ke konten dapat menerima fokus.
- Navigasi tanpa JavaScript, preferensi pengurangan gerakan, salin nomor WhatsApp, dan halaman 404 diperiksa.

## Verifikasi

Pengujian otomatis menggunakan Playwright/Chromium pada lebar 320, 375, 390, 430, 620, 768, 800, 801, 860, 1024, 1025, 1280, 1440, dan 1920 piksel:

- Tidak ada scroll horizontal atau elemen teks utama melewati tepi layar.
- Navigasi tujuan, fokus keyboard, target sentuh, dan tombol WhatsApp lulus.
- Menu landscape 667 × 320 piksel tetap berada di dalam viewport dan dapat digulir.
- Pembesaran teks dan pengaturan jarak teks tidak menyebabkan scroll horizontal pada 390 piksel.
- Navigasi tanpa JavaScript tersedia pada 320, 390, dan 1024 piksel.
- Tidak ada galat JavaScript atau respons aset lokal 4xx/5xx.
- Pemeriksaan axe pada 320, 390, 768, 1024, dan 1440 piksel tidak menemukan pelanggaran pada aturan aksesibilitas yang diuji.

Review visual dilakukan pada desktop, tablet, dan seluler. Pemeriksaan otomatis tidak menggantikan pengujian langsung dengan pengguna maupun seluruh browser dan perangkat.

## Pembaruan ikon dan kepadatan

- Google Scholar dan SINTA menggunakan ikon dari situs resmi; ORCID menggunakan SVG dari repositori resminya. Bentuk dan warna ketiganya dipertahankan. Lihat [sumber ikon akademik](assets/icons/BRAND_SOURCES.md) dan [sumber SVG serta lisensi](assets/icons/ICON_SOURCES.md).
- Ikon navigasi, panah, akademik, salin, dan lokasi memakai satu keluarga Lucide. Merek sosial menggunakan geometri Simple Icons. Semua aset disimpan lokal.
- Judul bagian, paragraf pengantar, jarak vertikal, dan metadata publikasi diringkas. Tautan akademik tetap tersedia di hero; tiga kartu tautan berulang di bawah publikasi dihapus.
- Teks isi tetap 16px dan target sentuh tetap minimal 44px. Ketiga tautan akademik tampil dalam satu baris pada lebar 320px dengan ikon asli berukuran 24px.

Perbandingan tinggi halaman dengan viewport setinggi 900px:

| Lebar layar | Sebelum | Sesudah | Pengurangan |
| ----------- | ------: | ------: | ----------: |
| 1440px      |  4780px |  3672px |         23% |
| 860px       |  5492px |  4190px |         24% |
| 390px       |  7257px |  5669px |         22% |
| 320px       |  7368px |  5882px |         20% |

Ikon SVG yang terlihat diperiksa agar benar-benar dirender, termasuk ikon penutup menu. Layout, navigasi, fokus, salin nomor, pembesaran teks, menu landscape, dan aksesibilitas diuji ulang setelah perubahan.

## Bahasa Indonesia dan English

- Konten lengkap tersedia pada `/` (Indonesia) dan `/en/` (English), termasuk navigasi, label aksesibilitas, deskripsi gambar, metadata, dan halaman 404.
- Tombol bahasa dengan ikon bendera SVG selalu terlihat di header, memiliki area sentuh 44px dan label bahasa bagi pembaca layar, serta mempertahankan bagian yang dibuka saat JavaScript aktif. Kedua versi tetap dapat dibaca dan dipilih tanpa JavaScript.
- Nama **Arya Sura Pratama, M.Kom.**, gelar S.Kom./M.Kom., nama institusi, tahun pendidikan, dan tautan sumber tetap konsisten.
- Kedua versi menggunakan canonical sendiri dan tautan `hreflang` timbal balik; sitemap memuat kedua alamat beserta alternatif bahasanya.

Playwright/Chromium menguji setiap bahasa pada 320, 390, 620, 768, 860, 1024, 1025, 1440, dan 1920 piksel. Tidak ada scroll horizontal, teks utama terpotong, atau header bertumpuk. Semua lima tujuan navigasi, fokus keyboard, pergantian bahasa dua arah, salin nomor beserta pesan cadangan, dan menu landscape lulus.

Pemeriksaan axe pada 320, 1025, dan 1440 piksel di masing-masing bahasa tidak menemukan pelanggaran pada aturan yang diuji. Pembesaran teks isi dan penyesuaian jarak teks diperiksa pada 390 piksel. Kedua bahasa tanpa JavaScript lulus pada 320, 390, 1024, dan 1440 piksel. Halaman 404 dan respons 404 bawaan GitHub Pages untuk URL English juga diperiksa. Tidak ditemukan galat JavaScript atau kegagalan pemuatan aset.

## Penyederhanaan header, kontak, dan footer

- Blok logo/nama yang berulang dan label pembuka di atas judul dihapus pada kedua bahasa. Nama lengkap tetap tampil pada judul utama dan copyright. Header dipadatkan menjadi 64px; jarak tujuan navigasi dan tinggi menu disesuaikan agar konten tetap terlihat di bawah header.
- WhatsApp, Instagram, dan GitHub memakai kelas baris kontak yang sama: ikon merek, label, nilai kontak 16px, dan panah. Ukuran teks, jarak, dan posisi ikon ketiganya konsisten. Panel nomor besar dan tombol salin nomor dihapus.
- Kembali ke atas menjadi ikon panah mengambang 48px di kanan bawah. Ikon muncul setelah halaman digulir 300px, kembali ke bagian awal, dan memindahkan fokus keyboard ke nama utama. Tanpa JavaScript, tautan ikon tetap tersedia.
- Teks dan panah tombol biru tampil putih pada pemeriksaan Chromium. Tampilan kosong pada gambar yang diberikan belum berhasil direproduksi; tidak ada klaim bahwa penyebabnya telah diketahui.

Kedua bahasa diuji pada lebar 320, 390, 620, 768, 800, 860, 1024, 1025, 1440, dan 1920px. Layout, semua tujuan navigasi, fokus, target sentuh, keseragaman kontak, tampilan tombol utama, serta ikon kembali ke atas diperiksa. Pengujian tambahan mencakup pergantian bahasa, menu landscape, pembesaran teks, kedua halaman 404, dan navigasi tanpa JavaScript.

Pemeriksaan axe pada 320, 1025, dan 1440px di masing-masing bahasa tidak menemukan pelanggaran pada aturan yang diuji. Pemeriksaan visual dilakukan pada desktop dan ponsel. Verifikasi browser ini memakai Chromium, bukan seluruh browser atau perangkat.

## Halaman terpisah — 11 Oktober 2026

- Beranda, Profil, Pendidikan, Penelitian, Karya, dan Kontak mempunyai URL tersendiri. Setiap halaman hanya berisi konten menu yang dipilih; konten akademik dan SoftKlinik tetap dipertahankan. Tersedia enam halaman Indonesia dan enam halaman English.
- Menu Beranda mengembalikan pengguna ke halaman awal. Halaman aktif ditandai dengan warna, garis bawah, dan `aria-current="page"`; tombol Kontak aktif memakai latar biru. Pada ponsel, nama halaman terlihat di header.
- Bendera bahasa membuka halaman yang setara, misalnya `/pendidikan/` ↔ `/en/education/`, tanpa bergantung pada JavaScript. Semua menu memakai tautan HTML biasa dan mendukung reload, bookmark, serta riwayat browser.
- Setiap halaman memiliki satu `h1`, hierarki judul berurutan, judul browser dan deskripsi yang sesuai, canonical sendiri, serta alternatif bahasa timbal balik. Sitemap memuat seluruh 12 alamat. Tautan bagian lama seperti `/#penelitian` diarahkan ke halaman yang sesuai ketika JavaScript aktif, dengan parameter URL tetap dipertahankan.
- Header, footer, dan kontrol bahasa berasal dari satu template. Konten kedua bahasa tersimpan di `src/content/`; generator menghasilkan HTML statis tanpa dependency aplikasi. Foto hanya diprioritaskan pemuatannya pada halaman Beranda.
- Ikon kembali ke atas bekerja pada setiap halaman dan mengembalikan fokus ke `h1`. Navigasi ponsel tetap mendukung Escape, fokus keyboard, dan gulir pada layar landscape. Format kontak serta aset ikon resmi dipertahankan.

Verifikasi Playwright/Chromium:

- 96 pemeriksaan layout: seluruh 12 halaman pada 320, 390, 620, 768, 860, 1024, 1025, dan 1440px. Tidak ada scroll horizontal atau judul/kartu/tombol utama keluar dari viewport.
- 20 alur navigasi melalui menu, pergantian bahasa dua arah, dan reload pada ponsel serta desktop; kembali lewat riwayat browser juga diperiksa.
- 24 pemindaian axe: seluruh halaman pada 320 dan 1440px, tanpa pelanggaran pada aturan yang diuji.
- 30 alur halaman tanpa JavaScript pada 320, 1024, dan 1440px, termasuk pergantian bahasa dan penanda menu aktif.
- Sepuluh tautan bagian lama diperiksa, beserta normalisasi trailing slash, dua bahasa halaman 404, navigasi keyboard, ikon mengambang, pembesaran teks, dan menu landscape 667 × 320px.
- Tidak ditemukan galat JavaScript atau kegagalan aset dalam pemeriksaan halaman utama. `npm run check` dan `npm run build` lulus. Screenshot desktop serta ponsel ditinjau secara visual.

Catatan bagian audit sebelumnya merekam versi halaman tunggal. Struktur saat ini menggunakan halaman terpisah. Pengujian ini menggunakan Chromium dan pemeriksaan otomatis; hasilnya bukan penilaian mutlak untuk seluruh perangkat atau pengguna.

## Perluasan isi seluruh menu

- Beranda memuat ikhtisar aktivitas, panduan penelusuran, dan jalur menuju kontak. Profil memuat biografi, identitas profesional, pengajaran TIK, hubungan bidang aktivitas, dan profil ilmiah resmi. Konfirmasi pengajaran TIK diberikan langsung oleh pemilik.
- Pendidikan memuat perjalanan S1–S2, konteks tesis, serta hubungan latar pendidikan dengan aktivitas akademik dan pengembangan. Penelitian memuat bidang kajian, tiga ringkasan publikasi, panel metode/konteks, DOI, dan jalur diskusi penelitian.
- Karya memuat bidang pengembangan yang tercantum pada GitHub, lingkup layanan SoftKlinik, tahapan pengembangan, dan ekosistem teknologi tim. Daftar teknologi dikaitkan dengan SoftKlinik. Kontak memuat jenis percakapan, panduan informasi awal, penyusun pesan, dan FAQ.
- Isi tersedia dalam Indonesia dan English. Setiap halaman tetap memiliki satu bagian utama dan satu `h1`; daftar isi dan tautan antarhalaman membantu penelusuran. Panel metode serta FAQ menggunakan elemen `details`/`summary` bawaan browser. Tabel teknologi ditampilkan sebagai baris yang mudah dibaca pada ponsel.
- Penyusun pesan melakukan validasi, menampilkan teks pratinjau, dan membentuk URL WhatsApp dengan pesan yang dikodekan. Perubahan isian menyembunyikan pratinjau lama. Pilihan topik diteruskan saat berganti bahasa. Tanpa JavaScript, panduan kontak, tautan WhatsApp, dan FAQ tersedia.
- Tombol kembali ke atas ditempatkan dalam landmark footer agar terjangkau secara semantik ketika tampil mengambang. Sumber konten dan batas interpretasinya dicatat pada [CONTENT_SOURCES.md](CONTENT_SOURCES.md).

Verifikasi Chromium mencakup 96 pemeriksaan layout pada seluruh halaman dengan lebar 320, 390, 620, 768, 860, 1024, 1025, dan 1440px; navigasi menu, riwayat browser, pergantian bahasa, tautan daftar isi, ID unik, serta panel metode/FAQ. Navigasi tanpa JavaScript lulus pada 320, 1024, dan 1440px. Pemeriksaan pembesaran teks, menu landscape, fokus keyboard, dan ikon kembali ke atas juga lulus.

Delapan alur formulir pada kedua bahasa dan empat lebar layar menguji isian wajib, spasi kosong, pratinjau, fokus, teks khusus/Unicode, URL pesan, perubahan isian, organisasi opsional, dan kesinambungan topik saat berpindah bahasa. Pemeriksaan hanya menyiapkan tautan pesan; tidak mengirim percakapan. Dua halaman kontak tanpa JavaScript beserta FAQ diperiksa terpisah.

Sebanyak 44 pemindaian axe pada keadaan halaman awal, panel terbuka, ikon mengambang terlihat, dan pratinjau formulir tidak menemukan pelanggaran pada aturan yang diuji. Tidak ditemukan galat JavaScript atau kegagalan aset dalam pengujian halaman utama. Screenshot desktop dan ponsel ditinjau. `npm run check` dan `npm run build` lulus.

## Penyempurnaan mobile — 12 Oktober 2026

- Daftar isi menggunakan grid dua kolom dengan permukaan tombol, jarak seragam, dan area sentuh minimal 44px. Label panjang dapat membungkus ketika teks diperbesar. Tautan daftar isi tetap menempatkan judul tujuan di bawah header.
- Padding serta jarak kartu diringkas pada ponsel. Teks isi tetap 16px; identitas, konten akademik, ikon resmi, dan kedua bahasa dipertahankan.
- Menu mobile menandai halaman aktif dengan latar lembut serta garis vertikal. Saat dibuka, fokus masuk ke tautan pertama. Panah atas/bawah, Home, End, dan Escape tersedia; membuka ulang menu mengembalikan gulir menu ke awal. Menu landscape tetap dapat digulir dalam viewport.
- Pemilih topik kontak tetap memakai elemen `select` native, dengan ukuran yang konsisten di WebKit dan Chromium serta panah Lucide. Ukurannya mengikuti pembesaran teks. Latar area kontak ditegaskan pada komponen agar kontras terdeteksi konsisten di kedua mesin browser.
- Tombol mengambang disembunyikan saat fokus berada dalam formulir atau pratinjau pesan, sehingga tidak menutupi tombol WhatsApp pada viewport yang pendek. Efek pergeseran hover dinonaktifkan pada perangkat sentuh.
- Judul panjang serta label daftar isi dapat membungkus; kolom tahun pada timeline mengikuti ukuran teks. Pembesaran teks tidak menghasilkan scroll horizontal.

Verifikasi pada Chromium dan WebKit dengan emulasi sentuh:

- 240 pemeriksaan layout: seluruh 12 halaman, di setiap mesin browser, pada lebar 320, 360, 375, 390, 414, 430, 620, 768, 1024, dan 1440px. Tidak ditemukan scroll horizontal, teks utama keluar viewport, atau kontrol mobile berukuran kurang dari 44 × 44px. Isian formulir menggunakan font minimal 16px.
- 48 pemindaian axe pada seluruh halaman di 320 dan 430px, tanpa pelanggaran pada aturan yang diuji.
- Navigasi sentuh melalui seluruh menu, daftar isi, fokus pembuka menu, navigasi panah, Escape, menu landscape 667 × 320px, dan pembukaan ulang menu lulus. Chromium memeriksa urutan Tab; WebKit desktop memeriksa Option-Tab sesuai [pintasan Safari](https://support.apple.com/en-gb/guide/safari/cpsh003/mac), sedangkan emulasi mobile WebKit memeriksa navigasi panah.
- Formulir dan pratinjau kedua bahasa lulus pada viewport 390 × 390px. Ikon kembali ke atas tidak menutupi pratinjau saat mendapat fokus; FAQ dan perpindahan fokus ke judul utama juga lulus. Pemeriksaan menyiapkan tautan WhatsApp tanpa mengirim pesan.
- Pembesaran teks 200% dan penambahan jarak teks lulus pada seluruh halaman dalam kedua bahasa di kedua mesin browser. Seluruh 24 pemeriksaan halaman tanpa JavaScript tetap menyediakan navigasi dan tidak menghasilkan scroll horizontal.
- Screenshot halaman, menu landscape, dan formulir pendek ditinjau secara visual. Tidak ditemukan galat JavaScript atau kegagalan aset dalam pengujian halaman utama. `npm run check`, `npm run build`, dan pemeriksaan whitespace Git lulus.

Pengujian menggunakan emulasi browser, bukan perangkat iPhone atau Android fisik. Hasil di atas merupakan bukti pemeriksaan yang dilakukan, bukan skor mutlak untuk semua perangkat.

## Tampilan mobile lebih padat — 12 Oktober 2026

- Pada lebar maksimal 620px, header menjadi 56px dan margin samping 16px. Padding bagian menjadi 24px, jarak kelompok isi 20px, dan padding kartu 14px. Teks isi tetap 16px dengan tinggi baris 1,6; tombol dan tautan tindakan tetap minimal 44 × 44px.
- Foto beranda menjadi panel horizontal dengan foto 112 × 148px, homebase, serta lokasi. Ikon dekoratif caption tidak diulang. Seluruh informasi teks dan foto asli tetap tersedia.
- Ikon kartu ditempatkan sejajar dengan judul. Kartu pendidikan, daftar publikasi, timeline, tabel teknologi, panel SoftKlinik, kontak, dan formulir menggunakan jarak mobile yang lebih ringkas. Perubahan hanya berlaku pada breakpoint ponsel.
- Perbandingan isi utama pada 36 keadaan halaman (12 halaman × lebar 320, 390, dan 430px) memastikan teks yang terlihat sama dengan versi sebelum pemadatan. Tidak ada ringkasan, publikasi, atau bagian isi yang disembunyikan.

Tinggi halaman Indonesia pada viewport 390 × 844px, diukur di Chromium:

| Halaman    | Sebelum | Sesudah | Lebih pendek |
| ---------- | ------: | ------: | -----------: |
| Beranda    | 3607px  | 2620px  | 27%          |
| Profil     | 4377px  | 3487px  | 20%          |
| Pendidikan | 3765px  | 3007px  | 20%          |
| Penelitian | 4385px  | 3499px  | 20%          |
| Karya      | 6106px  | 4992px  | 18%          |
| Kontak     | 3880px  | 3120px  | 20%          |

Setelah pemadatan, seluruh 12 halaman diuji di Chromium dan WebKit pada 320, 360, 375, 390, 414, 430, 620, 768, 1024, dan 1440px: 240 pemeriksaan layout dan 48 pemindaian axe lulus. Navigasi sentuh/keyboard, tautan daftar isi, menu landscape, formulir dan FAQ, pembesaran teks 200%, pengaturan jarak teks, serta 24 halaman tanpa JavaScript juga lulus. Penyesuaian akhir jarak beranda diperiksa lagi di kedua mesin browser. Screenshot beranda, pendidikan, penelitian, karya, dan kontak ditinjau secara visual.

## Nama beranda dalam satu baris — 12 Oktober 2026

Atas permintaan pemilik, judul **Arya Sura Pratama, M.Kom.** menggunakan satu baris di kedua bahasa. Ukuran huruf menyesuaikan lebar kolom melalui container query units, dengan batas 20–54px; teks lengkap tetap tersedia tanpa pemotongan atau elipsis.

Sebanyak 48 pemeriksaan judul di Chromium dan WebKit pada lebar 320, 360, 390, 430, 620, 768, 800, 860, 1024, 1025, 1440, dan 1920px memastikan satu baris, teks lengkap, serta tidak adanya scroll horizontal. Kedua mesin juga memeriksa halaman tanpa JavaScript pada 320px. Screenshot mobile dan desktop ditinjau. Pemeriksaan ini dilakukan pada ukuran teks normal; ketentuan satu baris menggantikan pembungkusan nama pada versi sebelumnya.
