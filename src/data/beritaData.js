// Data mentah berita
const rawData = [
  {
    id: 5,
    kategori: 'Berita',
    tanggal: '03 Juni 2026',
    judul: 'Seleksi Penerimaan Murid Baru (SPMB) Tahun AJaran 2026/2027',
    ringkasan: 'Seleksi Penerimaan Siswa baru SD negeri Pucung hari ke-1.',
    foto: ['/images/pmbsatu.jpeg', '/images/pmbdua.jpeg'],
    waktu_agenda: '03 - 05 Juni 2026'
  },
  {
    id: 4,
    kategori: 'Pengumuman',
    tanggal: '3 Juni 2026',
    judul: 'Jadwal Penilaian Akhir Tahun (PAT) Semester Genap Tahun Ajaran 2025/2026',
    ringkasan: 'Pelaksanaan PAT untuk kelas I-V akan dimulai serentak dari tanggal 8 Juni 2026 s/d 12 Juni 2026.',
    foto: ['/images/jadwalpsat.jpg'],
    waktu_agenda: '8 Juni 2026 s/d 12 Juni 2026'
  },
  {
    id: 3,
    kategori: 'Agenda',
    tanggal: '3 Juni 2026',
    judul: 'Kegiatan Pelepasan Murid kelas 6 Tahun Ajaran 2025/2026',
    ringkasan: 'Acara pelepasan akan dilaksanakan di Balai Desa Kelurahan Taskomang, Klaten pada tanggal 9 Juni 2026 pukul 10.00 WIB. Momen ini menggabungkan suasana haru dan suka cita, diisi dengan prosesi penyerahan kembali siswa kepada orang tua, pertunjukan seni, serta doa bersama untuk menyongonsong masa depan',
    foto: ['https://via.placeholder.com/400x250'],
    waktu_agenda: '9 Juni 2026'
  },
  {
    id: 2,
    kategori: 'Berita',
    tanggal: '3 Juni 2026',
    judul: 'Revitalisasi SD Negeri Pucung',
    ringkasan: 'Program pembenahan, perbaikan, dan peningkatan mutu sarana dan prasarana sekolah. Tujuan utama kegiatan ini untuk menciptakan suasana  belajar yang nyaman',
    foto: [
      '/images/revsatu.jpg',
      '/images/revdua.jpeg'
    ],
    waktu_agenda: ''
  },
  {
    id: 7,
    kategori: 'Berita',
    tanggal: '18 Juli 2026',
    judul: 'MPLS Ramah SD Negeri Pucung Tahun AJaran 2026/2027',
    ringkasan: 'Serunya MPLS Ramah Anak di SD Negeri Pucung! Hadirkan suasana belajar yang menyenangkan dan edukatif, SD Negeri Pucung sambut siswa baru dengan kegiatan orientasi yang penuh kasih sayang, bebas perpeloncoan, dan bikin betah di sekolah.',
    foto: ['/images/mpls1.jpeg', '/images/mpls2.jpeg','/images/mpls3.jpeg', '/images/mpls4.jpeg', '/images/mpls5.jpeg', '/images/mpls6.jpeg', '/images/mpls7.jpeg', '/images/mpls8.jpeg', '/images/mpls9.jpeg'],
    waktu_agenda: '13 - 18 Juli 2026'
  },
   {
    id: 6,
    kategori: 'Berita',
    tanggal: '18 Juli 2026',
    judul: 'Perpustakaan Keliling SD Negeri Pucung',
    ringkasan: 'Guna memperluas akses bahan bacaan berkualitas bagi para siswa, SD Negeri Pucung bekerja sama dengan Dinas Perpustakaan Sleman menggelar layanan Perpustakaan Keliling (Pusling). Kegiatan ini menghadirkan ratusan koleksi buku mulai dari cerita rakyat, sains populer, hingga buku pengetahuan umum. Program jemput bola ini diharapkan dapat mendukung proses belajar mengajar serta menumbuhkan kebiasaan membaca di lingkungan sekolah.',
    foto: ['/images/puslingj1.jpeg', '/images/puslingj2.jpeg','/images/puslingj3.jpeg'],
    waktu_agenda: '15 Juli 2026'
  },
   {
    id: 8,
    kategori: 'Berita',
    tanggal: '25 Juli 2026',
    judul: 'Penilaian Kinerja Kepala Sekolah (PKKS) SD Negeri Pucung',
    ringkasan: 'Penilaian Kinerja Kepala Sekolah (PKKS) adalah proses evaluasi berkala yang komprehensif untuk menilai efektivitas kepemimpinan, manajerial, dan pengembangan mutu edukasi yang dijalankan oleh Kepala SD Negeri Pucung.',
    foto: ['/images/pkks1.jpg', '/images/pkks2.jpg'],
    waktu_agenda: '21 Juni 2026'
  },
  {
    id: 9,
    kategori: 'Berita',
    tanggal: '25 Juli 2026',
    judul: 'Petani Cilik',
    ringkasan: 'Petani Cilik adalah program unggulan SD Negeri Pucung yang mengajak siswa belajar langsung di luar kelas untuk mengenal dunia pertanian, pelestarian lingkungan, dan ketahanan pangan sejak dini. Melalui pendekatan belajar sambil bermain (learning by doing), para siswa diajak untuk menyentuh tanah, menanam bibit, merawat tanaman, hingga memanen hasilnya sendiri.',
    foto: ['/images/ptc1.jpg', '/images/ptc2.jpg'],
    waktu_agenda: '24 Juli 2026'
  },
  {
    id: 10,
    kategori: 'Berita',
    tanggal: '27 Juli 2026',
    judul: 'Sosialisasi Visi Misi Sekolah dan Draf Kurikulum Tahun Ajaran 2026/2027',
    ringkasan: 'Dalam rangka menyambut Tahun Ajaran Baru 2026/2027, [Nama Sekolah] menggelar kegiatan Sosialisasi Visi Misi Sekolah dan Draf Kurikulum Operasional. Acara ini berlangsung di ruang kelas 2 dan dihadiri oleh kepala sekolah, dewan guru, komite sekolah, serta perwakilan orang tua/wali murid.',
    foto: ['/images/soskur1.jpg', '/images/soskur2.jpg', '/images/soskur3.jpg', '/images/soskur4.jpg'],
    waktu_agenda: '24 Juli 2026'
  },
  {  
  id: 11,
    kategori: 'Berita',
    tanggal: '27 Juli 2026',
    judul: 'Ekstrakurikuler Hadroh',
    ringkasan: ' Ekstrakurikuler Hadroh SD Negeri Pucung merupakan wadah kreativitas seni Islami yang bertujuan untuk mengasah minat dan bakat siswa di bidang musik tradisional religius. Melalui kegiatan ini, para anggota dibekali dengan keterampilan menabuh instrumen (terbang, bass, keprak) serta teknik vokal shalawat.',
    foto: ['/images/hadroh1.jpg', '/images/hadroh2.jpg', '/images/hadroh3.jpg'],
    waktu_agenda: '27 Juli 2026'
    }
];

// // Mengurutkan otomatis berdasarkan ID dari yang terbesar (terbaru) ke terkecil
export const daftarArtikelSdn = [...rawData].sort((a, b) => b.id - a.id);