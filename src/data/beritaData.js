// Data mentah berita SD Negeri Pucung
const rawData = [
  {
    id: 5,
    kategori: 'Berita',
    tanggal: '03 Juni 2026',
    judul: 'Seleksi Penerimaan Murid Baru (SPMB) Tahun Ajaran 2026/2027',
    ringkasan: 'Pelaksanaan hari pertama Seleksi Penerimaan Murid Baru (SPMB) di SD Negeri Pucung berjalan dengan lancar dan kondusif. Panitia siap melayani proses verifikasi berkas dan pendataan para calon peserta didik baru dengan ramah dan transparan.',
    foto: ['/images/pmbsatu.jpeg', '/images/pmbdua.jpeg'],
    waktu_agenda: '03 - 05 Juni 2026'
  },
  {
    id: 4,
    kategori: 'Pengumuman',
    tanggal: '3 Juni 2026',
    judul: 'Jadwal Penilaian Akhir Tahun (PAT) Semester Genap Tahun Ajaran 2025/2026',
    ringkasan: 'Pelaksanaan Penilaian Akhir Tahun (PAT) untuk siswa kelas I hingga V akan dimulai secara serentak pada tanggal 8 s/d 12 Juni 2026. Seluruh siswa diimbau untuk menjaga kesehatan dan mempersiapkan diri dengan belajar secara optimal di rumah.',
    foto: ['/images/jadwalpsat.jpg'],
    waktu_agenda: '8 Juni 2026 s/d 12 Juni 2026'
  },
  {
    id: 3,
    kategori: 'Agenda',
    tanggal: '3 Juni 2026',
    judul: 'Kegiatan Pelepasan Murid Kelas 6 Tahun Ajaran 2025/2026',
    ringkasan: 'Acara pelepasan siswa kelas 6 akan dilaksanakan di Balai Desa Kelurahan Taskomang, Klaten pada tanggal 9 Juni 2026 pukul 10.00 WIB. Momen bernuansa haru dan suka cita ini diisi dengan prosesi penyerahan kembali siswa kepada orang tua, pentas seni murid, serta doa bersama untuk menyongsong jenjang pendidikan selanjutnya.',
    foto: ['https://via.placeholder.com/400x250'],
    waktu_agenda: '9 Juni 2026'
  },
  {
    id: 2,
    kategori: 'Berita',
    tanggal: '3 Juni 2026',
    judul: 'Revitalisasi Sarana dan Prasarana SD Negeri Pucung',
    ringkasan: 'SD Negeri Pucung tengah melaksanakan program revitalisasi mencakup pembenahan, perbaikan, dan peningkatan mutu fasilitas sekolah. Program ini bertujuan untuk menciptakan lingkungan belajar yang lebih aman, nyaman, dan mendukung kegiatan belajar mengajar yang efektif.',
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
    judul: 'MPLS Ramah Anak SD Negeri Pucung Tahun Ajaran 2026/2027',
    ringkasan: 'Serunya Masa Pengenalan Lingkungan Sekolah (MPLS) Ramah Anak di SD Negeri Pucung! Mengusung konsep edukatif dan menyenangkan, kegiatan ini menyambut para siswa baru dengan hangat, penuh kasih sayang, serta bebas dari perpeloncoan sehingga anak-anak merasa betah dan nyaman di sekolah.',
    foto: ['/images/mpls1.jpeg', '/images/mpls2.jpeg', '/images/mpls3.jpeg', '/images/mpls4.jpeg', '/images/mpls5.jpeg', '/images/mpls6.jpeg', '/images/mpls7.jpeg', '/images/mpls8.jpeg', '/images/mpls9.jpeg'],
    waktu_agenda: '13 - 18 Juli 2026'
  },
  {
    id: 6,
    kategori: 'Berita',
    tanggal: '18 Juli 2026',
    judul: 'Layanan Perpustakaan Keliling di SD Negeri Pucung',
    ringkasan: 'Guna memperluas akses membaca dan meningkatkan literasi siswa, SD Negeri Pucung bekerja sama dengan Dinas Perpustakaan Sleman menggelar layanan Perpustakaan Keliling (Pusling). Menghadirkan ratusan koleksi buku cerita rakyat, sains populer, hingga pengetahuan umum, program ini disambut antusias oleh para siswa.',
    foto: ['/images/puslingj1.jpeg', '/images/puslingj2.jpeg', '/images/puslingj3.jpeg'],
    waktu_agenda: '15 Juli 2026'
  },
  {
    id: 8,
    kategori: 'Berita',
    tanggal: '25 Juli 2026',
    judul: 'Penilaian Kinerja Kepala Sekolah (PKKS) SD Negeri Pucung',
    ringkasan: 'Pelaksanaan Penilaian Kinerja Kepala Sekolah (PKKS) merupakan proses evaluasi berkala secara komprehensif untuk mengukur efektivitas kepemimpinan, kemampuan manajerial, serta komitmen dalam pengembangan mutu pendidikan yang dijalankan di SD Negeri Pucung.',
    foto: ['/images/pkks1.jpg', '/images/pkks2.jpg'],
    waktu_agenda: '21 Juni 2026'
  },
  {
    id: 9,
    kategori: 'Berita',
    tanggal: '25 Juli 2026',
    judul: 'Program Unggulan "Petani Cilik" SD Negeri Pucung',
    ringkasan: 'Melalui program unggulan "Petani Cilik", SD Negeri Pucung mengajak para siswa belajar langsung di luar kelas untuk mengenal dunia pertanian, pelestarian lingkungan, dan ketahanan pangan. Mengusung pendekatan learning by doing, siswa diajak menanam bibit, merawat tanaman, hingga memanen hasilnya sendiri.',
    foto: ['/images/ptc1.jpg', '/images/ptc2.jpg'],
    waktu_agenda: '24 Juli 2026'
  },
  {
    id: 10,
    kategori: 'Berita',
    tanggal: '27 Juli 2026',
    judul: 'Sosialisasi Visi Misi Sekolah dan Draf Kurikulum Tahun Ajaran 2026/2027',
    ringkasan: 'Menyambut Tahun Ajaran Baru 2026/2027, SD Negeri Pucung menggelar kegiatan Sosialisasi Visi Misi Sekolah dan Draf Kurikulum Operasional di Ruang Kelas 2. Acara ini dihadiri oleh Kepala Sekolah, dewan guru, komite sekolah, serta perwakilan orang tua/wali murid guna menyamakan persepsi demi kemajuan pendidikan siswa.',
    foto: ['/images/soskur1.jpg', '/images/soskur2.jpg', '/images/soskur3.jpg', '/images/soskur4.jpg'],
    waktu_agenda: '24 Juli 2026'
  },
  {  
    id: 11,
    kategori: 'Berita',
    tanggal: '27 Juli 2026',
    judul: 'Kegiatan Ekstrakurikuler Hadroh SD Negeri Pucung',
    ringkasan: 'Ekstrakurikuler Hadroh SD Negeri Pucung menjadi wadah pembinaan seni Islami untuk mengasah minat dan bakat siswa di bidang musik tradisional religius. Melalui bimbingan rutin, para anggota dilatih menguasai teknik menabuh instrumen (terbang, bass, keprak) sekaligus teknik vokal dalam melantunkan shalawat.',
    foto: ['/images/hadroh2.jpg', '/images/hadroh3.jpg'],
    waktu_agenda: '27 Juli 2026'
  },
  {
    id: 12,
    kategori: 'Berita',
    tanggal: '29 Juli 2026',
    judul: 'Ekstrakurikuler Seni Tari SD Negeri Pucung',
    ringkasan: `Seni tari merupakan salah satu bentuk ekspresi budaya yang kaya akan nilai estetika, sejarah, dan pembentukan karakter. Di SD Negeri Pucung, Ekstrakurikuler Seni Tari hadir sebagai wadah khusus bagi peserta didik untuk mengenali, mengolah, dan menyalurkan minat serta bakat mereka dalam dunia seni olah tubuh.

Melalui kegiatan ini, para siswa tidak hanya belajar menghafal ragam gerak tari, tetapi juga diajak untuk memahami makna tersirat di balik setiap ritme, keharmonisan musik pengiring, serta keindahan busana daerah. Kami percaya bahwa pendidikan seni tari sejak usia sekolah dasar berperan penting dalam membentuk kepribadian yang santun, disiplin, dan menghargai warisan budaya bangsa di era modernisasi.`,
    foto: ['/images/tari.jpg'],
    waktu_agenda: '29 Juli 2026'
  },
  {
    id: 13,
    kategori: 'Berita',
    tanggal: '02 Agustus 2026',
    judul: 'Kegiatan Senam',
    ringkasan: `Menerapkan nilai KAIH, SDN Pucung secara konsisten melatih pola hidup sehat lewat kegiatan senam bersama setiap hari Jumat pagi. Kegiatan ini bertujuan untuk menjaga kebugaran fisik seluruh warga sekolah sekaligus membangun keceriaan dan kebersamaan di lingkungan sekolah.`,
    foto: ['/images/senam.jpg'],
    waktu_agenda: '31 Agustus 2026'
  },
  {
    id: 14,
    kategori: 'Berita',
    tanggal: '02 Agustus 2026',
    judul: 'Pramuka',
    ringkasan: `Sebagai upaya membangun karakter siswa yang mandiri, berakhlak mulia, dan berjiwa kepemimpinan, SDN Pucung melaksanakan kegiatan ekstrakurikuler Pramuka secara rutin. Kegiatan ini menjadi sarana belajar yang menyenangkan melalui berbagai keterampilan kepramukaan dan kerja sama tim.`,
    foto: ['/images/pramuka.jpg'],
    waktu_agenda: '31 Agustus 2026'
  },
   {
    id: 15,
    kategori: 'Berita',
    tanggal: '02 Agustus 2026',
    judul: 'Pemakaian Baju Adat',
    ringkasan: `Suasana belajar di SDN Pucung terasa jauh lebih istimewa setiap tibanya hari Kamis Pon. Ruang-ruang kelas dan halaman sekolah diwarnai dengan keindahan ragam busana tradisional. Para siswa putra tampak gagah mengenakan surjan dan lurik lengkap dengan blangkon, sementara siswa putri tampil anggun balutan kebaya. Tradisi rutin Kamis Pon ini menjadi cara yang indah dan menyenangkan bagi anak-anak untuk merawat tradisi, sekaligus menciptakan lingkungan sekolah yang penuh dengan nuansa kebersamaan dan kesopanan ala budaya Jawa.`,
    foto: ['/images/bajuadat.jpg'],
    waktu_agenda: '30 Agustus 2026'
  },
  {
    id: 16,
    kategori: 'Berita',
    tanggal: '02 Agustus 2026',
    judul: 'Sambut Kemerdekan 17 Agustus 2026',
    ringkasan: `Menyambut Hari Ulang Tahun (HUT) Ke-81 Republik Indonesia tanggal 17 Agustus 2026, SDN Pucung mempercantik lingkungan sekolah dengan memasang berbagai atribut kemerdekaan. Halaman sekolah kini tampil semarak dengan lambaian umbul-umbul merah putih, bendera, serta pernak-pernik khas kemerdekaan yang dipasang oleh para guru, staf, dan siswa secara gotong royong. Pemasangan atribut ini menjadi momentum untuk menghidupkan semangat nasionalisme, menanamkan rasa cinta tanah air, serta menumbuhkan jiwa patriotisme di kalangan para siswa sejak dini.`,
    foto: ['/images/sambut17.jpg'],
    waktu_agenda: '31 Agustus 2026'
  }

];

// Mengurutkan otomatis berdasarkan ID dari yang terbesar (terbaru) ke terkecil
export const daftarArtikelSdn = [...rawData].sort((a, b) => b.id - a.id);