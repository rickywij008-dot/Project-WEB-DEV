import React from 'react';
import { Layout, Cpu, CreditCard, ShieldCheck } from 'lucide-react';

const SERVICES = [
  {
    number: '01',
    icon: Layout,
    title: 'Desain UI/UX Berorientasi Konversi',
    description: 'Bukan sekadar indah dipandang. Kami meneliti kebiasaan target audiens Anda, menyusun hierarki visual yang mengarahkan pandangan pembaca langsung ke penawaran utama dan tombol pemesanan WhatsApp/Form.',
    features: ['Riset Alur Pengguna (User Journey)', 'Desain Responsif Mobile-First', 'Prototipe Interaktif & Revisi Fleksibel']
  },
  {
    number: '02',
    icon: Cpu,
    title: 'Arsitektur Kinerja Tinggi & SEO On-Page',
    description: 'Website lambat membunuh 53% calon pembeli. Kami membangun dengan standar Next-Gen React & Tailwind yang ringan, menghasilkan skor Core Web Vitals 95+ dan struktur metadata ramah mesin pencari Google.',
    features: ['Skor Google PageSpeed 95+', 'Struktur Schema.org & OpenGraph', 'Kompresi Gambar Otomatis WebP']
  },
  {
    number: '03',
    icon: CreditCard,
    title: 'Sistem Pembayaran & Integrasi Bisnis',
    description: 'Otomatisasi alur transaksi bisnis Anda. Dukungan penuh payment gateway terverifikasi (QRIS, BCA, Mandiri, BRI, Kartu Kredit), kalkulator ongkos kirim ekspedisi nasional, serta notifikasi otomatis ke WhatsApp.',
    features: ['Integrasi Midtrans / Xendit / Duitku', 'Kalkulasi Ongkir JNE, SiCepat, J&T', 'Automated WhatsApp Notifier']
  },
  {
    number: '04',
    icon: ShieldCheck,
    title: 'Pemeliharaan, Backup & Keamanan Purna Jual',
    description: 'Proyek tidak berakhir saat go-live. Kami menjaga kelancaran website Anda dengan backup berkala terenkripsi, pembaruan patch keamanan sistem, sertifikat SSL HTTPS gratis, serta garansi perbaikan bug purna jual.',
    features: ['Garansi Teknis 30–90 Hari', 'Backup Mingguan Terisolasi', 'Monitoring Uptime Server 24/7']
  }
];

export const ServicesOverview: React.FC = () => {
  return (
    <section id="layanan" className="py-16 lg:py-24 bg-white dark:bg-slate-900/60 border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2">
            Kapabilitas & Spesialisasi
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
            Standar Teknis Kami untuk Membantu Bisnis Anda Berkembang
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
            Setiap website dikembangkan khusus dengan ketelitian tinggi, menggabungkan psikologi visual dan arsitektur kode modern.
          </p>
        </div>

        {/* 4-Item Grid with Editorial Numbering */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.number}
                className="p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 hover:border-indigo-200 dark:hover:border-indigo-800/80 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-sm font-bold text-indigo-600 dark:text-indigo-400">
                      {service.number}.
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/70 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <ul className="space-y-2 border-t border-slate-200/80 dark:border-slate-800 pt-4 text-xs font-medium text-slate-600 dark:text-slate-400">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
