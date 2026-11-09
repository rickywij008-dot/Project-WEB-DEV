import { Project, PricingPackage, AddonOption, Testimonial } from '../types';

export const HERO_IMAGE = '/src/assets/images/hero_digital_studio_1794191102323.jpg';

export const PROJECTS: Project[] = [
  {
    id: 'kala-roasters',
    title: 'Kala Roasters — E-Commerce Specialty Coffee',
    client: 'Kala Roastery Indonesia',
    industry: 'Food & Beverage / Retail',
    category: 'ecommerce',
    categoryLabel: 'E-Commerce Store',
    year: '2025',
    image: '/src/assets/images/project_ecommerce_kala_1794191102998.jpg',
    summary: 'Platform toko online modern untuk roastery artisan dengan checkout multi-kurir (JNE, SiCepat, GoSend) dan integrasi payment gateway Midtrans otomatis.',
    challenge: 'Klien sebelumnya bertumpu pada pesanan manual via WhatsApp admin yang sering overload saat peluncuran batch biji kopi baru, mengakibatkan selisih stok dan penurunan konversi.',
    solution: 'Membangun platform toko online headless ultra-cepat dengan sinkronisasi inventaris real-time, rekomendasi profil roast interaktif, dan checkout 1-klik terintegrasi WhatsApp & QRIS.',
    metrics: [
      { label: 'Pertumbuhan Transaksi', value: '+185%', context: 'dalam 3 bulan pertama setelah peluncuran' },
      { label: 'Kecepatan Muat Mobile', value: '0.9s', context: '99/100 Google PageSpeed Mobile score' },
      { label: 'Penurunan Abandoned Cart', value: '-42%', context: 'dengan checkout terpadu 2 langkah' }
    ],
    techStack: ['React', 'Next.js', 'Tailwind CSS', 'Midtrans Gateway', 'RajaOngkir API', 'PostgreSQL'],
    deliverables: ['Custom UI/UX Design System', 'E-Commerce Storefront', 'Admin Inventory Dashboard', 'Automated Email Invoices'],
    demoUrl: 'https://kala-roasters-preview.example.com',
    testimonial: {
      quote: 'Website yang dibuat oleh ArkaWeb mengubah total alur bisnis kami. Peluncuran seasonal beans yang biasanya chaos kini otomatis tertangani. Penjualan naik hampir dua kali lipat.',
      author: 'Dimas Wicaksono',
      role: 'Founder & Head Roaster',
      company: 'Kala Roastery Indonesia'
    },
    featured: true
  },
  {
    id: 'samudera-logistik',
    title: 'Samudera Logistik — Portal Korporat & Pelacakan Armada',
    client: 'PT Samudera Logistik Nusantara',
    industry: 'Maritime & Supply Chain',
    category: 'company-profile',
    categoryLabel: 'Company Profile B2B',
    year: '2025',
    image: '/src/assets/images/project_corporate_logistik_1794191103627.jpg',
    summary: 'Situs web profil korporat kelas enterprise dilengkapi kalkulator estimasi tarif kontainer dan portal pelacakan armada kapal kargo domestik.',
    challenge: 'Website lama klien tidak mobile-friendly, terkesan tertinggal, serta menyulitkan mitra logistik multinasional untuk memverifikasi lisensi operasional dan tarif pengiriman.',
    solution: 'Mendesain ulang identitas digital korporat dengan tata letak bilingual (ID/EN), fitur live vessel tracking mock, serta formulir Request for Quotation (RFQ) terintegrasi CRM.',
    metrics: [
      { label: 'Pertumbuhan Inbound Leads B2B', value: '+320%', context: 'kontrak korporasi baru per kuartal' },
      { label: 'Waktu Respon Penawaran', value: '4 Jam', context: 'dari sebelumnya rata-rata 36 jam' },
      { label: 'Core Web Vitals', value: '100/100', context: 'audit performa sempurna Lighthouse' }
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Node.js', 'Bilingual i18n'],
    deliverables: ['Responsive Corporate Web', 'RFQ Automated Lead Routing', 'Vessel Map Dashboard', 'Investor Relations Center'],
    demoUrl: 'https://samudera-logistik-preview.example.com',
    testimonial: {
      quote: 'Tampilan baru website kami berhasil membuka pintu kerja sama strategis dengan perusahaan multinasional. Kesan profesional dan kredibilitasnya sangat kuat.',
      author: 'Hendro Gunawan, M.Sc',
      role: 'Director of Strategic Partnership',
      company: 'PT Samudera Logistik Nusantara'
    },
    featured: true
  },
  {
    id: 'verve-arsitektur',
    title: 'Verve Studio — Editorial Portofolio Arsitektur Mewah',
    client: 'Verve Architectural Atelier',
    industry: 'Architecture & Interior Design',
    category: 'company-profile',
    categoryLabel: 'Luxury Portfolio',
    year: '2024',
    image: '/src/assets/images/project_architecture_verve_1794191102031.jpg',
    summary: 'Showcase portofolio visual minimalis dengan navigasi interaktif, fotografi resolusi tinggi yang dioptimasi instan, dan storytelling proyek arsitektural.',
    challenge: 'Koleksi dokumentasi proyek villa dan residensial mewah berukuran gigabyte menyebabkan web lama lambat, sering patah pada perangkat mobile klien high-net-worth.',
    solution: 'Menerapkan image rendering pintar WebP adaptif, tipografi editorial elegan, dynamic floorplan viewer, serta form inquiry konsultasi privat.',
    metrics: [
      { label: 'Dwell Time Pengunjung', value: '4.8 Menit', context: 'meningkat dari rata-rata industri 1.2 menit' },
      { label: 'Nilai Inquiry Terhubung', value: 'Rp 14 Miliar', context: 'proyek residensial mewah masuk lewat web' },
      { label: 'Kompresi Aset Visual', value: '-78%', context: 'tanpa kehilangan ketajaman visual 4K' }
    ],
    techStack: ['Vite', 'React', 'Tailwind CSS', 'Next-Gen WebP Pipeline', 'Cloudflare CDN'],
    deliverables: ['Editorial Design Atelier', 'Interactive Project Lightbox', 'Client Private Portal', 'High-Res CDN Pipeline'],
    demoUrl: 'https://verve-atelier-preview.example.com',
    testimonial: {
      quote: 'ArkaWeb memiliki selera estetika yang langka di dunia developer web. Mereka paham bagaimana menerjemahkan filosofi desain spasial kami ke dalam format web yang memukau.',
      author: 'Natasya Renata, IAI',
      role: 'Principal Architect & Co-Founder',
      company: 'Verve Architectural Atelier'
    },
    featured: true
  },
  {
    id: 'glowmedika-clinic',
    title: 'GlowMedika — Klinik Estetika & Direct Booking Treatment',
    client: 'PT GlowMedika Estetika Utama',
    industry: 'Healthcare & Aesthetic Wellness',
    category: 'web-app',
    categoryLabel: 'Booking & Web App',
    year: '2025',
    image: '/src/assets/images/hero_digital_studio_1794191102323.jpg',
    summary: 'Aplikasi web reservasi jadwal dokter dan konsultasi treatment kecantikan secara real-time dengan pengingat otomatis WhatsApp.',
    challenge: 'Tingkat no-show pasien konsultasi mencapai 35% karena jadwal janji temu hanya dicatat manual melalui buku tamu klinik.',
    solution: 'Mengembangkan sistem reservasi mandiri dengan slot dokter dinamis, kalkulator analisis jenis kulit, dan notifikasi konfirmasi instan.',
    metrics: [
      { label: 'Penurunan No-Show Pasien', value: '-65%', context: 'berkat automated WhatsApp reminders' },
      { label: 'Reservasi Online Mandiri', value: '72%', context: 'dari total keseluruhan pasien baru mingguan' },
      { label: 'Peningkatan Booking Treatment', value: '+140%', context: 'dalam 60 hari paska go-live' }
    ],
    techStack: ['React', 'TypeScript', 'Express API', 'WhatsApp Cloud API', 'PostgreSQL', 'Tailwind CSS'],
    deliverables: ['Patient Booking System', 'Doctor Schedule Manager', 'Treatment Catalog & Pricing', 'WhatsApp Integration'],
    demoUrl: 'https://glowmedika-preview.example.com',
    testimonial: {
      quote: 'Sistem booking ini menghemat kerja tim front-desk kami lebih dari 20 jam seminggu. Pasien pun sangat puas bisa memilih jadwal dokter langsung dari HP.',
      author: 'dr. Claudia Sutedja, Sp.KK',
      role: 'Medical Director',
      company: 'GlowMedika Aesthetic Center'
    }
  },
  {
    id: 'finova-mandiri',
    title: 'Finova — Landing Page SaaS Manajemen Finansial UKM',
    client: 'Finova Solusi Digital',
    industry: 'Fintech & SaaS',
    category: 'landing-page',
    categoryLabel: 'High-Converting Landing Page',
    year: '2025',
    image: '/src/assets/images/project_corporate_logistik_1794191103627.jpg',
    summary: 'Landing page ultra-persuasif untuk peluncuran aplikasi pembukuan dan kasir POS UKM dengan kalkulator simulasi ROI interaktif.',
    challenge: 'Target konversi pendaftaran free trial aplikasi pada landing page lama hanya mencapai 2.1%, jauh di bawah target investor.',
    solution: 'Redesain total fokus pada value proposition konkret, demonstrasi interaktif software langsung di browser, dan alur pendaftaran 3 kolom frictionless.',
    metrics: [
      { label: 'Konversi Free Trial', value: '18.4%', context: 'kenaikan hampir 9x lipat dibanding versi sebelumnya' },
      { label: 'Pendaftar Beta 14 Hari', value: '3.420+', context: 'pengusaha UKM terverifikasi se-Indonesia' },
      { label: 'Skor Aksesibilitas Web', value: '98/100', context: 'audit WCAG AA compliance' }
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Interactive ROI Canvas', 'Mixpanel Tracking'],
    deliverables: ['Conversion-Focused Landing Page', 'Interactive ROI Calculator', 'A/B Test Variant Setup', 'Speed Optimization'],
    demoUrl: 'https://finova-landing-preview.example.com',
    testimonial: {
      quote: 'Konversi kami melonjak dari 2% menjadi 18%. Landing page yang dibuat ArkaWeb menjadi aset penjualan terbesar perusahaan kami saat ini.',
      author: 'Reza Pratama',
      role: 'Chief Marketing Officer',
      company: 'Finova Solusi Digital'
    }
  },
  {
    id: 'edukarya-platform',
    title: 'Edukarya — Platform Kursus Digital & Sertifikasi Online',
    client: 'Yayasan Pendidikan Edukarya',
    industry: 'EdTech & Training',
    category: 'web-app',
    categoryLabel: 'LMS & Learning Platform',
    year: '2024',
    image: '/src/assets/images/project_architecture_verve_1794191102031.jpg',
    summary: 'Portal pembelajaran daring lengkap dengan video streaming hemat kuota, kuis otomatis, sistem sertifikat digital PDF verifikasi QR code.',
    challenge: 'Sistem kursus sebelumnya menggunakan WordPress LMS yang sering tumbang ketika ada ujian serentak lebih dari 500 pengguna.',
    solution: 'Arsitektur modern berbasis React SPA dengan CDN cache, auto-scaling API, dan sistem verifikasi sertifikat berbasis QR code anti-pemalsuan.',
    metrics: [
      { label: 'Kapasitas Ujian Serentak', value: '5.000+', context: 'siswa aktif tanpa lag atau server error' },
      { label: 'Penghematan Bandwidth', value: '-62%', context: 'dengan adaptive video streaming player' },
      { label: 'Sertifikat Terbit Otomatis', value: '25.000+', context: 'terverifikasi instan melalui database' }
    ],
    techStack: ['React', 'Node.js', 'Tailwind CSS', 'HLS Video Stream', 'PDFKit Generator', 'Redis'],
    deliverables: ['Custom Student Dashboard', 'Course Video Curriculum', 'Automated Quiz Engine', 'QR Verified Certificates'],
    demoUrl: 'https://edukarya-preview.example.com',
    testimonial: {
      quote: 'Platform stabil, cepat, dan siswa kami sangat menyukai pengalaman belajarnya yang intuitif. Dukungan teknis dari tim ArkaWeb sangat responsif.',
      author: 'Bambang Triatmojo',
      role: 'Ketua Divisi Program Pembelajaran',
      company: 'Yayasan Pendidikan Edukarya'
    }
  }
];

export const PRICING_PACKAGES: PricingPackage[] = [
  {
    id: 'paket-landing-page',
    name: 'Landing Page Kilat',
    tagline: 'Solusi cepat & terbukti konversi tinggi untuk promosi produk, event, atau kampanye iklan berbayar.',
    price: 1499000,
    priceFormatted: 'Rp 1.499.000',
    timeline: '3 - 5 Hari Kerja',
    idealFor: 'UMKM, Produk Tunggal, Launching Event, & Lead Funnel',
    colorScheme: 'slate',
    features: [
      { text: '1 Halaman Landing Page Panjang (One-Page)', included: true, highlight: true },
      { text: 'Desain Responsif Mobile, Tablet, & Desktop', included: true },
      { text: 'Tombol CTA & Direct WhatsApp Chat Form', included: true, highlight: true },
      { text: 'Gratis Domain .com + Cloud Hosting 1 Tahun', included: true },
      { text: 'Optimasi Kecepatan Muat Ultra Cepat (<1.5s)', included: true },
      { text: 'Setup Google Tag Manager & Meta Pixel', included: true },
      { text: 'Gratis Sertifikat SSL Keamanan (HTTPS)', included: true },
      { text: 'Revisi Minor Desain 2x', included: true },
      { text: 'Garansi Teknis & Bug Fix 30 Hari', included: true },
      { text: 'Sistem Pembayaran / Payment Gateway', included: false },
      { text: 'Sistem Multi Halaman & Blog CMS', included: false }
    ]
  },
  {
    id: 'paket-bisnis-pro',
    name: 'Bisnis Pro & Company Profile',
    tagline: 'Pilihan paling diminati untuk bisnis dan korporat yang membutuhkan kredibilitas brand maksimal di mata klien.',
    price: 3850000,
    priceFormatted: 'Rp 3.850.000',
    timeline: '7 - 10 Hari Kerja',
    idealFor: 'Perusahaan B2B, Lembaga, Klinik, Kantor Hukum, & Konsultan',
    colorScheme: 'indigo',
    isPopular: true,
    features: [
      { text: '5 - 8 Halaman Lengkap (Home, About, Services, Portofolio, Kontak, dll)', included: true, highlight: true },
      { text: 'Desain Kustom Eksklusif (Bukan Template Murahan)', included: true, highlight: true },
      { text: 'CMS Mudah Kelola Konten & Artikel Blog', included: true },
      { text: 'Formulir Penawaran & Lead Capture Otomatis ke Email/WA', included: true, highlight: true },
      { text: 'Optimasi SEO On-Page Lengkap Google Friendly', included: true },
      { text: 'Gratis Domain .com / .co.id + NVMe Hosting 1 Tahun', included: true },
      { text: 'Setup Akun Email Bisnis Profesional (e.g. halo@bisnis.com)', included: true },
      { text: 'Integrasi Google Analytics 4 & Search Console', included: true },
      { text: 'Revisi Desain Fleksibel 4x', included: true },
      { text: 'Garansi & Maintenance Purna Jual 60 Hari', included: true },
      { text: 'Video Tutorial Cara Mengelola Website', included: true }
    ]
  },
  {
    id: 'paket-ecommerce-custom',
    name: 'E-Commerce & Custom Web App',
    tagline: 'Website sistem transaksi otomatis lengkap dengan payment gateway, katalog produk, atau fungsionalitas kustom.',
    price: 8900000,
    priceFormatted: 'Rp 8.900.000',
    timeline: '14 - 21 Hari Kerja',
    idealFor: 'Toko Online Retail, Sistem Booking Treatment/Hotel, & Portal Kustom',
    colorScheme: 'emerald',
    features: [
      { text: 'Halaman Tidak Terbatas (Katalog Produk & Kategori)', included: true, highlight: true },
      { text: 'Payment Gateway Otomatis (QRIS, VA BCA/Mandiri, Kartu Kredit)', included: true, highlight: true },
      { text: 'Kalkulator Ongkir Otomatis (JNE, SiCepat, J&T, GoSend)', included: true },
      { text: 'Dashboard Kelola Pesanan, Inventaris Stok, & Pelanggan', included: true },
      { text: 'Notifikasi Otomatis WhatsApp / Email Konfirmasi Pesanan', included: true, highlight: true },
      { text: 'Kupon Diskon, Voucher Promo, & Flash Sale Engine', included: true },
      { text: 'Multi Admin & Hak Akses Kasir/Gudang', included: true },
      { text: 'Cloud Server VPS Berperforma Tinggi 1 Tahun', included: true },
      { text: 'Revisi Desain & Alur Sistem Bebas Hingga Sesuai', included: true },
      { text: 'Garansi Sistem & Maintenance Prioritas 90 Hari', included: true },
      { text: 'Pendampingan Setup Produk & Live Training 1-on-1', included: true }
    ]
  }
];

export const ADDON_OPTIONS: AddonOption[] = [
  {
    id: 'addon-payment-gateway',
    name: 'Integrasi Payment Gateway Otomatis',
    description: 'Terima pembayaran via QRIS, Virtual Account bank nasional, dan dompet digital tanpa cek mutasi manual.',
    price: 1200000,
    priceFormatted: 'Rp 1.200.000',
    badge: 'Populer'
  },
  {
    id: 'addon-bilingual',
    name: 'Multi-Bahasa (Bilingual ID / EN)',
    description: 'Sistem translasi profesional 2 bahasa untuk menjangkau klien internasional atau investor luar negeri.',
    price: 850000,
    priceFormatted: 'Rp 850.000'
  },
  {
    id: 'addon-seo-advanced',
    name: 'Paket SEO Advance & Riset Kata Kunci',
    description: 'Audit kompetitor, penulisan 5 artikel pilar SEO, dan optimasi struktur schema markup Google terarah.',
    price: 1500000,
    priceFormatted: 'Rp 1.500.000',
    badge: 'Rekomendasi'
  },
  {
    id: 'addon-maintenance-priority',
    name: 'Maintenance Prioritas 6 Bulan',
    description: 'Backup mingguan terenkripsi, pembaruan keamanan, monitoring uptime 24/7, dan kuota revisi konten bulanan.',
    price: 1800000,
    priceFormatted: 'Rp 1.800.000'
  },
  {
    id: 'addon-copywriting',
    name: 'Jasa Copywriting & Penyusunan Konten',
    description: 'Tim kami menuliskan seluruh teks narasi profesional, deskripsi layanan, dan headline persuasif.',
    price: 950000,
    priceFormatted: 'Rp 950.000'
  }
];

export const TIME_SLOTS = [
  '09:00 - 09:30 WIB',
  '10:00 - 10:30 WIB',
  '11:00 - 11:30 WIB',
  '13:30 - 14:00 WIB',
  '14:30 - 15:00 WIB',
  '16:00 - 16:30 WIB',
  '19:30 - 20:00 WIB'
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'testi-1',
    quote: 'Komunikasi tim ArkaWeb sangat jelas dan transparan. Tidak ada biaya tersembunyi. Jadwal pengerjaan tepat waktu, dan website kami langsung mendatangkan 12 klien korporat baru di bulan pertama.',
    author: 'Ir. H. Gunawan Satrio',
    role: 'Managing Director',
    company: 'PT Rekacipta Energi Solusi',
    projectType: 'Company Profile Korporat',
    metricGain: '+12 Klien Baru di Bulan 1'
  },
  {
    id: 'testi-2',
    quote: 'Fitur booking konsultasi mereka sangat mulus. Sejak sesi konsultasi awal, mereka langsung membedah kelemahan web lama saya dan memberikan solusi teknis yang masuk akal tanpa memaksakan paket termahal.',
    author: 'Siti Sarah Maharani',
    role: 'Owner & Founder',
    company: 'Nala Fashion Boutique',
    projectType: 'E-Commerce Storefront',
    metricGain: '+190% Pertumbuhan Order'
  },
  {
    id: 'testi-3',
    quote: 'Loading web kami dari 4.5 detik turun menjadi 0.8 detik! PageSpeed 99 di mobile. Iklan Google Ads kami sekarang jauh lebih murah biaya per kliknya karena skor relevansi landing page tinggi.',
    author: 'Kevin Alamsyah',
    role: 'Head of Growth',
    company: 'Fintech Progresif Group',
    projectType: 'Landing Page Kilat',
    metricGain: 'PageSpeed 99 / 0.8s Load'
  }
];

export const FAQS = [
  {
    q: 'Berapa lama proses pengerjaan website sampai siap tayang?',
    a: 'Waktu pengerjaan bervariasi sesuai paket: Landing Page Kilat membutuhkan 3–5 hari kerja, Company Profile Bisnis membutuhkan 7–10 hari kerja, dan sistem E-Commerce atau Custom Web App membutuhkan 14–21 hari kerja setelah materi konten dan brief disepakati bersama.'
  },
  {
    q: 'Apakah harga paket sudah termasuk domain dan hosting?',
    a: 'Ya, seluruh paket pembuatan website kami sudah termasuk domain (.com / .co.id) dan cloud hosting NVMe berkecepatan tinggi selama 1 tahun penuh tanpa biaya tambahan. Anda juga mendapatkan sertifikat keamanan SSL gratis selamanya.'
  },
  {
    q: 'Bagaimana sistem pembayaran untuk pemesanan website?',
    a: 'Sistem pembayaran sangat aman dan adil: Down Payment (DP) 50% di awal saat kick-off proyek, dan sisa pelunasan 50% dibayarkan setelah website selesai diuji coba dan siap dipublikasikan ke domain resmi Anda.'
  },
  {
    q: 'Apakah saya bisa mengelola atau mengupdate isi website sendiri?',
    a: 'Tentu saja! Kami membangun website dengan Content Management System (CMS) yang ramah pengguna. Anda dapat dengan mudah mengganti teks, foto, produk, maupun artikel berita. Kami juga menyertakan video tutorial panduan khusus berbahasa Indonesia.'
  },
  {
    q: 'Apa yang dibahas dalam sesi Booking Konsultasi Gratis 30 Menit?',
    a: 'Pada sesi konsultasi 1-on-1 (via Google Meet / Zoom / WA Call), kami akan menganalisis kebutuhan spesifik bisnis Anda, menentukan arsitektur fitur yang tepat, memberikan estimasi budget transparan, serta membagikan rekomendasi strategi konversi agar website Anda benar-benar menghasilkan omzet.'
  },
  {
    q: 'Apakah ada garansi jika terjadi error atau bug setelah website selesai?',
    a: 'Ya! Setiap proyek kami lindungi dengan garansi teknis gratis selama 30 hingga 90 hari (sesuai paket). Jika ada error fungsi, link rusak, atau kendala tampilan, tim teknis kami akan langsung memperbaikinya tanpa pungutan biaya tambahan.'
  }
];
