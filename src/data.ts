import { SlideItem, ProgramDetail } from './types';

export const getGeneralSlides = (ptsName: string): SlideItem[] => [
  {
    id: 1,
    category: "Strategic Presentation Keynote",
    title: `Menuju Ekosistem Futuristik ${ptsName}: Akselerasi Generasi Inovator Berbasis AI & FinTech`,
    subtitle: "Mewujudkan Terobosan Nilai Guna Meningkatkan Daya Tarik & Enrollment Mahasiswa Baru",
    description: "Menjawab tantangan penurunan pendaftar PTS di tingkat nasional dengan mengubah paradigma institusi dari sekadar 'tempat kuliah' menjadi ekosistem produktif yang langsung menciptakan nilai ekonomi nyata sejak awal studi.",
    visualType: "sandbox"
  },
  {
    id: 2,
    category: "Latar Belakang & Tantangan",
    title: "Kenapa Peminat PTS Menurun? Masalahnya Bukan Sekadar Promosi",
    description: `Banyak Perguruan Tinggi Swasta mengalami tekanan dalam dua tahun terakhir lantaran naiknya kuota jalur mandiri PTN, meluasnya bootcamp digital alternatif, dan meningkatnya keraguan publik terhadap tingkat imbas balik biaya kuliah (Return on Investment).`,
    points: [
      {
        title: "Tren Nasional Kompetitif",
        text: "PTN memperluas kapasitas tampung mahasiswa, sementara jalur karir pintas (bootcamp/magang langsung) kian agresif memperebutkan lulusan SMA."
      },
      {
        title: "Tekanan Finansial Keluarga",
        text: "Calon pendaftar menyaring institusi berdasarkan biaya riil. Kampus tanpa nilai tambah finansial langsung akan tersingkir dari prioritas utama."
      },
      {
        title: "Kesenjangan Ekspektasi",
        text: "Orang tua menginginkan kejelasan prospek kerja, sedangkan Gen Z membutuhkan ekosistem yang menghargai kebebasan berinovasi dan minat digital mereka."
      }
    ],
    visualType: "none"
  },
  {
    id: 3,
    category: "Analisis Pasar",
    title: "Apa Sebenarnya yang Dicari Gen Z dan Orang Tua?",
    description: "Untuk merebut hati calon pendaftar, kita harus memahami pergeseran harapan intrinsik dari dua pemegang keputusan utama.",
    points: [
      {
        title: "Ekspektasi Gen Z",
        text: "Menginginkan penguasaan keahlian praktis yang cepat digunakan, peluang berkarya lintas batas disiplin, dan pengakuan karya langsung (Proof of Work)."
      },
      {
        title: "Ekspektasi Orang Tua",
        text: "Membutuhkan prediktabilitas struktur biaya perkuliahan serta jaminan jalur karir dan kemandirian finansial yang kokoh bagi masa depan anak."
      },
      {
        title: "Akselerator Kampus",
        text: "Institusi yang memenangkan persaingan adalah yang mampu memberikan jawaban terukur atas kekhawatiran finansial keluarga serta ambisi inovasi siswa."
      }
    ],
    visualType: "none"
  },
  {
    id: 4,
    category: "Visi Reposisi",
    title: `Strategi Reposisi ${ptsName}: Transformasi Menjadi Ekosistem Nilai`,
    description: `Strategi ini mendesain ulang hubungan antara ${ptsName}, mahasiswa, keluarga pendaftar, dan jaringan industri sehingga setiap pihak merasakan manfaat konkret sejak awal studi.`,
    points: [
      {
        title: "Early-Engagement Sejak SMA",
        text: "Mengamankan minat calon mahasiswa secara dini melalui jalur portofolio karya kreatif dan program tabungan SKS yang diakui formal via RPL."
      },
      {
        title: "Ekosistem Inklusi Finansial",
        text: "Membekali mahasiswa dengan kecakapan pengelolaan aset, kemandirian finansial, dan keterlibatan aktif mendukung ekonomi keluarga sejak semester awal."
      },
      {
        title: "Integrasi Karir Berkelanjutan",
        text: "Menjamin ketersediaan jalur kerja nyata lewat unit agensi mikro kampus yang didukung sistem AI serta kemitraan beasiswa ikatan dinas."
      }
    ],
    visualType: "flow-chart"
  },
  {
    id: 5,
    category: "Mesin Pertumbuhan",
    title: "Mesin Peningkat Enrollment: Tiga Pilar Utama",
    description: "Struktur pilar strategis yang saling mendukung untuk membangun keunggulan kompetitif mutlak.",
    points: [
      {
        title: "Pilar 1: Early-Engagement Funnel",
        text: "Menyediakan Wadah Inovator Sandbox serta Bridging Program berbasis RPL SKS guna melipatgandakan konversi minat siswa SMA menjadi pendaftar pasti."
      },
      {
        title: "Pilar 2: Inclusive & Ethical Value",
        text: "Menyelenggarakan Women & Youth Financial Inclusivity Hub serta Program Literasi Finansial Invezthink untuk membentuk diferensiasi nilai kelembagaan."
      },
      {
        title: "Pilar 3: Sustainable Career Integration",
        text: "Mengembangkan AI-Driven Campus Micro-Agency serta Corporate-Bonded Scholarship untuk menjamin ketersediaan portofolio kerja sejak dini."
      }
    ],
    visualType: "grid-summary"
  },
  {
    id: 6,
    category: "Pilar 1: Early-Engagement",
    title: "Mengunci Komitmen Calon Mahasiswa Sejak SMA Berbasis Karya",
    description: "Membuka jalur rekrutmen berbasis karya kreatif yang lebih memikat bagi generasi muda dibanding seleksi administrasi konvensional.",
    points: [
      {
        title: "Student Innovator Sandbox",
        text: "Penerimaan mahasiswa baru berbasis penilaian karya nyata (portofolio, video kreatif, prototipe aplikasi, rintisan bisnis mandiri)."
      },
      {
        title: "Sistem AI-Video Assessment",
        text: "Memanfaatkan teknologi analisis kecakapan presentasi awal untuk menilai minat dan retensi penguasaan solusi calon pendaftar secara objektif."
      },
      {
        title: "Apresiasi Prestasi",
        text: "Peserta terpilih berhak memperoleh sertifikat pengakuan langsung serta kualifikasi penentu potongan pembiayaan perkuliahan akademik."
      }
    ],
    visualType: "none"
  },
  {
    id: 7,
    category: "Pilar 1: Journey Siswa",
    title: "Alur Perjalanan Calon Mahasiswa Menuju Kampus",
    description: "Bagaimana calon pendaftar bertransisi dari fase minat, eksplorasi, hingga komitmen resmi sebagai mahasiswa baru.",
    points: [
      {
        title: "Step 1: Registrasi Sandbox",
        text: "Siswa SMA mendaftarkan portofolionya secara digital melalui portal sandbox yang dirancang interaktif."
      },
      {
        title: "Step 2: Menabung SKS Dini",
        text: "Mengikuti kelas modul pengantar mini bervolume 3-6 SKS yang diakui langsung dalam skema kurikulum RPL (Rekognisi Pembelajaran Lampau)."
      },
      {
        title: "Step 3: Pengakuan Kredit & Diskon",
        text: "Komitmen biaya pendaftaran otomatis berkurang senilai kontribusi modul yang telah dituntaskan oleh siswa."
      }
    ],
    visualType: "flow-chart"
  },
  {
    id: 8,
    category: "Pilar 2: Inclusive & Ethical Value",
    title: "Diferensiasi Humanis: Nilai Tambah Sejak Semester Satu",
    description: "Mempersiapkan lulusan yang tangguh melalui peningkatan kecakapan pengelolaan finansial mandiri yang aman dan berintegritas.",
    points: [
      {
        title: "Women & Youth Inclusivity Hub",
        text: "Pusat pendampingan peningkatan kecakapan literasi keuangan bagi perempuan dan pemuda guna mendesentralisasi ketangguhan ekonomi regional."
      },
      {
        title: "Invezthink Financial Literacy",
        text: "Kurikulum pengantar bernilai praktis untuk mendidik mahasiswa mengidentifikasi peluang bisnis, menata arus kas, dan meminimalkan kerugian investasi."
      },
      {
        title: "Pemberlakuan Etika Ketat",
        text: "Membatasi spekulasi berisiko tinggi; membimbing dana hibah stimulus untuk difokuskan pada kegiatan operasional sektor riil produktif."
      }
    ],
    visualType: "roi"
  },
  {
    id: 9,
    category: "Pilar 2: Dampak Nyata",
    title: "Dampak Nyata: Mengubah Pola Keuangan Meja Makan Keluarga",
    description: `Dengan keterlibatan langsung di dalam program ini, mahasiswa memberikan dampak nyata bagi kesejahteraan finansial keluarga and ekosistem sekitar ${ptsName}.`,
    points: [
      {
        title: "Kemandirian Keluarga",
        text: "Mahasiswa membantu merestrukturisasi manajemen anggaran rumah tangga, menekan pembiayaan konsumtif tak sehat, dan merancang tabungan."
      },
      {
        title: "Sinergi UMKM Sekitar",
        text: "Menugaskan mahasiswa untuk mendampingi pencatatan akuntansi digital dasar serta perancangan penetapan harga pada usaha mikro mitra."
      },
      {
        title: "Publikasi Cerita Sukses",
        text: "Dokumentasi keberhasilan nyata ini diangkat menjadi alat kampanye promosi emosional yang meningkatkan reputasi kelembagaan kampus."
      }
    ],
    visualType: "none"
  },
  {
    id: 10,
    category: "Pilar 3: Career Integration",
    title: "Karier yang Terdesain Secara Sistematis Sejak Hari Pertama",
    description: "Menghapuskan kecemasan pasca-kelulusan dengan membangun jembatan produktif langsung ke dunia industri.",
    points: [
      {
        title: "AI-Driven Campus Micro-Agency",
        text: "Unit digital internal yang ditugasi mengeksekusi proyek industri (pencatatan laporan, media sosial, desain solusi digital) oleh mahasiswa terpilih."
      },
      {
        title: "Corporate-Bonded Track",
        text: "Kemitraan terarah di mana industri mendanai pembiayaan studi dengan imbal balik kepastian ketersediaan talenta siap kerja pasca-kelulusan."
      },
      {
        title: "Klausul Adil & Fleksibel",
        text: "Program mencakup opsi pengalihan kompensasi berimbang jika mahasiswa kelak memilih membangun lapangan usaha sendiri ketika lulus."
      }
    ],
    visualType: "none"
  },
  {
    id: 11,
    category: "Pilar 3: Alur Karir",
    title: "Visualisasi Jalur Perkembangan Profesional Mahasiswa",
    description: "Langkah terarah bagi mahasiswa untuk membangun profil keahlian mumpuni sedari tahun-tahun pertama perkuliahan.",
    points: [
      {
        title: "Semester 1–2: Asisten Riset & Data",
        text: "Berfokus pada dasar pemetaan kebutuhan pasar digital, entri dokumen laporan bisnis, serta orientasi kerja agensi digital kampus."
      },
      {
        title: "Semester 3–5: Spesialis Eksekutor Proyek",
        text: "Menangani pengerjaan proyek dari institusi klien luar, termasuk tata kelola pemasaran online, optimalisasi otomasi bisnis berbasis kecerdasan buatan."
      },
      {
        title: "Semester 6+: Pemimpin Tim & Penempatan",
        text: "Mengawasi jaminan standar kualitas mutu konten, beralih penuh menuju kontrak ikatan dinas perusahaan, atau menginkubasi rintisan usaha sendiri."
      }
    ],
    visualType: "flow-chart"
  },
  {
    id: 12,
    category: "Studi Kelayakan",
    title: "Mengapa Program Ini Sangat Realistis Dilaksanakan?",
    description: `Formula model yang dirancang khusus guna menjamin keberlangsungan implementasi tanpa membebani keuangan internal ${ptsName}.`,
    points: [
      {
        title: "Rasionalisasi Anggaran Operasional",
        text: "Infrastruktur bertumpu memaksimalkan integrasi teknologi kecerdasan buatan, kolaborasi dana kemitraan CSR, dan monetisasi kelas modular SMA."
      },
      {
        title: "Kesesuaian Regulasi Mutlak",
        text: "Seluruh rancangan sepenuhnya mematuhi asas Merdeka Belajar (MBKM), pelaporan RPL Kemdikbudristek, prinsip regulasi transaksi keuangan OJK."
      },
      {
        title: "Kekuatan Dampak Emosional",
        text: "Menjawab isu krusial masa depan karir anak yang paling dikhawatirkan orang tua, memosisikan kampus sebagai mitra masa depan terbaik."
      }
    ],
    visualType: "none"
  },
  {
    id: 13,
    category: "Roadmap Strategis",
    title: "Roadmap Implementasi 2 Siklus PMB: Terarah & Terukur",
    description: "Pendekatan bertahap guna memastikan evaluasi berkala dan meminimalkan risiko operasional sistemik.",
    points: [
      {
        title: "Fase 01: Pilot & Validasi (Tahun 1)",
        text: "Meluncurkan program Sandbox & Kelas Bridging pada 3-5 SMA binaan utama. Membuka batch awal agensi mikro dan modul FinLit di jurusan percontohan."
      },
      {
        title: "Fase 02: Peningkatan Skala (Tahun 2)",
        text: "Melakukan perluasan skala seleksi sekolah mitra, pembukaan program ikatan dinas gelombang pertama, standardisasi sistem otomasi AI."
      },
      {
        title: "Fase 03: Integrasi Sistemik",
        text: "Mengonsolidasikan seluruh data hasil capaian sebagai profil branding utama yang berskala luas bagi penetrasi target pasar pendaftar."
      }
    ],
    visualType: "flow-chart"
  },
  {
    id: 14,
    category: "Langkah Lanjutan",
    title: `Komitmen & Mandat yang Diperlukan dari Pimpinan ${ptsName}`,
    description: "Kunci keberhasilan reformasi kurikulum rekrutmen ini mengandalkan keselarasan visi pengambil keputusan.",
    points: [
      {
        title: "1. Mandat Integrasi Lintas Unit",
        text: `Dukungan formal untuk mensinergikan manajemen Akademik, Humas Promosi PMB, Kerja Sama Industri, dan Hubungan Komunitas Mahasiswa ${ptsName}.`
      },
      {
        title: "2. Jaminan Pelaksanaan Dua Siklus",
        text: "Memberikan kepastian waktu pengembangan sehingga sistem mampu beroperasi, menguji kegunaan instrumen, dan merilis dampak peningkatan pendaftar."
      },
      {
        title: "3. Fasilitasi Kolaborasi Aktif",
        text: "Mengizinkan kami mendampingi perancangan teknis, optimalisasi teknologi, serta sinkronisasi model bisnis demi keberhasilan bersama."
      }
    ],
    visualType: "none"
  },
  {
    id: 15,
    category: "Appendix Portal",
    title: "Lampiran Dokumen Teknis Rencana Program",
    subtitle: `Deep-Dive Portal: Rencana Detail 8 Eksplorasi Program Proposal untuk ${ptsName}`,
    description: "Klik kartu di bawah untuk membuka lembaran rancangan utuh kurikulum, aspek kepatuhan legalitas hukum, batas mitigasi risiko keuangan, serta tahapan standardisasi eksekusi program.",
    visualType: "grid-summary"
  }
];

export const getProgramDetails = (ptsName: string): ProgramDetail[] => [
  {
    id: "modal-sandbox",
    num: "01",
    title: "Student Innovator Sandbox & Portofolio Mandiri",
    subtitle: "Sistem Rekrutmen Berbasis Karya Nyata Calon Pendaftar",
    concept: "Mengubah alur pendaftaran dari sekadar berkas administratif menjadi ajang penyajian Proof of Work. Calon mahasiswa SMA memaparkan solusi kreatif/aplikatif orisinal baik di bidang bisnis, teknologi, maupun komunikasi.",
    strategicWeight: "Sangat Tinggi sebagai corong konversi pendaftar yang bernilai apresiasi tinggi di kalangan pelajar SMA kreatif.",
    rplRelevance: "Siswa memperoleh portofolio yang terverifikasi dan poin rekam jejak yang dapat langsung dikonversi menjadi keunggulan saat mendaftar kuliah.",
    implementationSteps: [
      "Penyusunan portal sandbox digital dan rubrik standardisasi penilaian portofolio multiklasifikasi.",
      "Sosialisasi program melalui kemitraan dengan guru Bimbingan Konseling (BK) di sekolah menenengah atas.",
      "Asesmen asinkronus awal dengan dukungan mesin kecerdasan buatan, diikuti konfirmasi live wawancara oleh tim dosen prodi."
    ],
    ethicsRegulations: "Menjaga kerahasiaan kepemilikan hak cipta karya orisinal siswa SMA; dilarang keras mereproduksi inovasi peserta tanpa izin tertulis.",
    fundingStructure: "Optimasi alokasi anggaran promo PMB dialihkan ke subsidi potongan pendaftaran berbasis prestasi portofolio Sandbox.",
    budgetImpact: "Rendah, efisiensinya didukung teknologi otomatisasi penyaringan data portofolio awal.",
    visualLabel: "Daftar Sandbox"
  },
  {
    id: "modal-nanodegree",
    num: "02",
    title: "Hybrid Nano-Degree & Kemitraan Pra-Sarjana RPL",
    subtitle: "Menabung Kredit SKS Formal Sejak Bangku Sekolah Menengah",
    concept: `Siswa kelas XII dapat mulai mengambil modul perkuliahan terstandar berbobot 3-6 SKS. SKS yang diperoleh disimpan dalam sistem repositori dan diakui secara instan sebagai Rekognisi Pembelajaran Lampau ketika resmi mendaftar di ${ptsName}.`,
    strategicWeight: "Mengunci loyalitas calon pendaftar lebih cepat (lock-in effect) karena mereka terlanjur menginvestasikan SKS di kampus.",
    rplRelevance: "Sesuai regulasi Kemdikbudristek terkait program RPL Tipe A untuk pengakuan capaian pembelajaran secara linier.",
    implementationSteps: [
      "Penyusunan 3 klaster modul kompetensi dasar digital yang ramah bagi pemahaman umum tingkat sekolah menengah.",
      "Integrasi registrasi siswa melalui akun program bimbingan belajar sekolah mitra.",
      "Penerbitan kartu rekam kredit SKS digital tersertifikasi oleh Senat Akademik universitas."
    ],
    ethicsRegulations: "Materi modular dirancang edukatif, non-komersial, serta tidak mengganggu konsentrasi belajar ujian akhir nasional siswa.",
    fundingStructure: "Mengandalkan model voucher prabayar ramah kantong, yang nantinya menjadi potongan langsung saldo uang pangkal masuk universitas.",
    budgetImpact: "Berdampak positif pada perolehan kas masuk awal dari registrasi program modular pra-sarjana.",
    visualLabel: "Daftar SKS"
  },
  {
    id: "modal-financial",
    num: "03",
    title: "Invezthink Financial Literacy & Wirausaha Track",
    subtitle: "Melahirkan Lulusan Mandiri dengan Pembekalan Pengelolaan Aset",
    concept: "Program pembekalan lintas fakultas yang fokus mendidik tata kelola budgeting riil, investasi aman non-spekulatif, serta optimalisasi pendanaan UMKM. Dilengkapi kompetensi stimulan hibah kelolaan usaha berbasis kompetisi akademis.",
    strategicWeight: "Membangun diferensiasi kurikulum yang humanis, membekali pertahanan finansial mahasiswa di era gejolak digital.",
    rplRelevance: "Dikonversikan sebagai poin pemenuhan mata kuliah kewirausahaan wajib atau sertifikasi kompetensi pendamping ijazah (SKPI).",
    implementationSteps: [
      "Pengembangan kurikulum literasi bersama konsultan keuangan bersertifikasi.",
      "Penyediaan aplikasi simulasi portofolio kelolaan bisnis riil bebas risiko spekulasi.",
      "Penyelenggaraan kompetisi pemaparan draf usaha sebagai penentu distribusi stimulus modal hibah bergulir."
    ],
    ethicsRegulations: "Kepatuhannya diawasi ketat. Menggunakan model simulasi pendidikan nonposisi investasi aktual. Dana dilarang keras dilarikan ke instrumen pasar spekulatif berisiko tinggi.",
    fundingStructure: "Sponsor korporasi, subsidi dana praktikum, serta kemitraan dengan institusi keuangan berskala nasional.",
    budgetImpact: "Moderat; namun menghasilkan output berupa tingkat ketertarikan pendaftar yang tinggi dari perspektif orang tua.",
    visualLabel: "FinLit Simulator"
  },
  {
    id: "modal-agency",
    num: "04",
    title: "AI-Driven Campus Micro-Agency",
    subtitle: "Laboratorium Praktik Agensi Digital & Konsultasi UMKM",
    concept: "Mendirikan unit agensi internal kampus yang dikelola langsung oleh kolaborasi tim mahasiswa lintas bidang ilmu menggunakan asisten kecerdasan buatan, guna menyediakan solusi jasa pemasaran, data pencatatan, dan pembuatan konten bagi klien bisnis.",
    strategicWeight: "Membuktikan kesiapan kerja lulusan secara konkrit lewat bukti pencatatan portofolio pengerjaan proyek klien nyata.",
    rplRelevance: "Ekuivalen dengan pemenuhan skema Magang Industri MBKM sebesar 10-20 SKS.",
    implementationSteps: [
      "Penyusunan standar operasional prosedur penjaminan kualitas hasil kustomisasi solusi agensi oleh dosen pembina.",
      "Pencarian klien kemitraan di lingkup paguyuban usaha kecil menengah regional.",
      "Pembagian penugasan tim mahasiswa berbasis hierarki kompetensi: Analis Junior, Spesialis Teknis, hingga Pengawas Mutu."
    ],
    ethicsRegulations: "Kepatuhan mutlak penandatanganan Perjanjian Kerahasiaan Informasi Klien (NDA) agar tidak terjadi penyebaran rahasia bisnis.",
    fundingStructure: "Model sharing-revenue dari hasil pembayaran kontrak jasa dengan badan usaha klien luar.",
    budgetImpact: "Swadana mandiri (self-sustaining), bahkan berpotensi menyumbang nilai pemasukan non-akademik (non-tuition revenue).",
    visualLabel: "Work Project"
  },
  {
    id: "modal-bonded",
    num: "05",
    title: "Corporate-Bonded Scholarship & Placement",
    subtitle: "Skema Beasiswa Ikatan Dinas Bermitra dengan Sektor Industri",
    concept: "Melakukan integrasi kemitraan strategis dengan perusahaan penyedia kebutuhan kerja secara dini. Perusahaan membiayai pengeluaran uang kuliah mahasiswa potensial dengan penandatanganan kontrak kerja tetap pasca-kelulusan.",
    strategicWeight: "Sangat tinggi dalam menghapus kekhawatiran terbesar setiap orang tua calon pendaftar mengenai masa depan pekerjaan anaknya.",
    rplRelevance: "Sinkronisasi kurikulum kelas industri serta pengakuan konversi masa pemagangan langsung.",
    implementationSteps: [
      "Penyusunan kesepakatan parameter kualifikasi seleksi mahasiswa bersama perwakilan manajemen HR perusahaan mitra.",
      "Implementasi pembelajaran kelas industri di bawah bimbingan mentorship rutin profesional senior.",
      "Format transisi rekrutmen kerja serta klausul penyelesaian kompensasi berimbang jika mahasiswa kelak beralih ketetapan."
    ],
    ethicsRegulations: "Sarat jaminan hukum hak asasi tenaga kerja mahasiswa; penyusunan klausul ikatan dinas yang adil, transparan, dan antimerugikan.",
    fundingStructure: "Pembiayaan ditanggung penuh oleh alokasi dana rekrutmen atau dana beasiswa tanggung jawab korporat mitra.",
    budgetImpact: "Nol risiko bagi anggaran kampus, sekaligus meningkatkan rasio serapan kerja lulusan secara maksimal.",
    visualLabel: "Kemitraan Industri"
  },
  {
    id: "modal-womenhub",
    num: "06",
    title: "Women & Youth Financial Inclusivity Hub",
    subtitle: "Pusat Inkubasi Literasi Ekonomi Inklusif & Berdampak Sosial",
    concept: "Pusat aktivitas yang didedikasikan untuk peningkatan kemandirian ekonomi, pemberian bimbingan pengembangan karir, serta pengentasan kerentanan finansial bagi perempuan muda dan komunitas pelaku usaha di sekitar kampus.",
    strategicWeight: "Meningkatkan citra publik (reputation branding) universitas sebagai institusi yang berjiwa sosial, peduli dampak nyata berkelanjutan.",
    rplRelevance: "Dihargai sebagai laporan bobot SKS Kuliah Kerja Nyata (KKN) Tematik atau Program Pengabdian Masyarakat.",
    implementationSteps: [
      "Penyusunan modul pelatihan yang peka gender, bahasa yang mudah dicerna, dan pendekatan pendampingan yang akrab secara kultural.",
      "Penyelenggaraan sesi konsultasi berkala gratis bagi ibu-ibu pengelola industri rumahan sekitar.",
      "Penyaluran beasiswa khusus literasi ekonomi bagi mahasiswi rintisan berprestasi."
    ],
    ethicsRegulations: "Mengedepankan penghormatan penuh atas hak privasi kondisi ekonomi peserta; penggunaan data teranonimisasi bebas bocor.",
    fundingStructure: "Kemitraan pendanaan CSR Lembaga Keuangan, Filantropi, atau Hibah Pemberdayaan tingkat daerah/nasional.",
    budgetImpact: "Mandiri dari sumbangan hibah eksternal, berstatus zero footprint pada kas induk universitas.",
    visualLabel: "Dampak Inklusi"
  },
  {
    id: "modal-ambassador",
    num: "07",
    title: "Peer-to-Peer Student Ambassador Network",
    subtitle: "Duta Kampus Berkelanjutan Melalui Komunikasi Sebaya yang Organik",
    concept: "Program seleksi dan pelatihan bagi mahasiswa berkarakter unggul untuk dididik sebagai juru komunikasi representatif kampus. Mereka bertugas menyebarkan keberhasilan ekosistem belajar digital orisinal ke sekolah asal secara organik.",
    strategicWeight: "Efektivitas pemasaran model peer-to-peer terbukti menghasilkan persentase keyakinan mendaftar yang jauh lebih kuat bagi Gen Z.",
    rplRelevance: "Apresiasi dikonversikan sebagai bobot angka pemenuhan Satuan Kredit Kegiatan Mahasiswa (SKKM) wajib kelulusan perkuliahan.",
    implementationSteps: [
      "Asesmen kelayakan duta, dilanjutkan pembekalan materi kepemimpinan dan teknik berbicara publik di depan khalayak luas.",
      "Penugasan pameran interaktif orisinal secara terjadwal di sekolah menengah atas wilayah sasaran utama.",
      "Penyediaan jalur rujukan (referral program) terdaftar untuk pencatatan kredibilitas duta berkinerja apik."
    ],
    ethicsRegulations: "Dilarang memicu iklim persaingan transaksional tidak sehat atau komersialisasi akademis; duta beroperasi murni sebagai penyebar nilai kebaikan belajar.",
    fundingStructure: "Pembiayaan operasional pendampingan duta didukung porsi pembagian kas promosi tahunan Biro PMB.",
    budgetImpact: "Bernilai penghematan tinggi dibanding pengeluaran iklan media luar ruang berskala besar.",
    visualLabel: "Daftar Duta"
  },
  {
    id: "modal-greenledger",
    num: "08",
    title: "Green Ledger Campus",
    subtitle: "Sistem Data Pelaporan Rekam Jejak Pelestarian Lingkungan Kampus",
    concept: "Mengembangkan platform pemantauan digital yang melacak secara transparan and terukur peran serta mahasiswa dalam program konservasi, gerakan hemat kertas, reduksi emisi, and penghematan listrik harian di lingkungan kampus.",
    strategicWeight: "Meningkatkan daya pikat tersendiri di kalangan Gen Z yang memiliki kepedulian tinggi terhadap upaya keberlanjutan iklim global.",
    rplRelevance: "Dikonversikan sebagai piagam penghargaan penguat berkas Surat Keterangan Pendamping Ijazah (SKPI).",
    implementationSteps: [
      "Instalasi teknologi sensor pencatatan daya hemat lingkungan di beberapa titik fasilitas publik kampus.",
      "Pemberian skor 'Green Point' bagi mahasiswa yang berkontribusi aktif dalam aksi aksi penghematan.",
      "Integrasi visualisasi capaian konservasi komunitas dalam layar sirkulasi informasi digital universitas."
    ],
    ethicsRegulations: "Seluruh pencatatan diawasi secara valid; melarang keras segala bentuk klaim orisinal semu (greenwashing) tanpa bukti empiris data.",
    fundingStructure: "Pendanaan patungan bersama Lembaga Konservasi Lingkungan, Swasta Peduli Iklim, atau program subsidi hijau.",
    budgetImpact: "Dapat menghasilkan penghematan biaya pengeluaran operasional ritel utilitas energi kampus hingga 15-20%.",
    visualLabel: "Visual Jejak Hijau"
  }
];
