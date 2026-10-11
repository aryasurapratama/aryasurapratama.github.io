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
- Tombol EN/ID selalu terlihat di header, memiliki area sentuh 44px, dan mempertahankan bagian yang dibuka saat JavaScript aktif. Kedua versi tetap dapat dibaca dan dipilih tanpa JavaScript.
- Nama **Arya Sura Pratama, M.Kom.**, gelar S.Kom./M.Kom., nama institusi, tahun pendidikan, dan tautan sumber tetap konsisten.
- Kedua versi menggunakan canonical sendiri dan tautan `hreflang` timbal balik; sitemap memuat kedua alamat beserta alternatif bahasanya.

Playwright/Chromium menguji setiap bahasa pada 320, 390, 620, 768, 860, 1024, 1025, 1440, dan 1920 piksel. Tidak ada scroll horizontal, teks utama terpotong, atau header bertumpuk. Semua lima tujuan navigasi, fokus keyboard, pergantian bahasa dua arah, salin nomor beserta pesan cadangan, dan menu landscape lulus.

Pemeriksaan axe pada 320, 1025, dan 1440 piksel di masing-masing bahasa tidak menemukan pelanggaran pada aturan yang diuji. Pembesaran teks isi dan penyesuaian jarak teks diperiksa pada 390 piksel. Kedua bahasa tanpa JavaScript lulus pada 320, 390, 1024, dan 1440 piksel. Halaman 404 dan respons 404 bawaan GitHub Pages untuk URL English juga diperiksa. Tidak ditemukan galat JavaScript atau kegagalan pemuatan aset.
