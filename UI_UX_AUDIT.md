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
