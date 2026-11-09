import React from 'react';
import { Mail, Phone, MapPin, MessageSquare, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 dark:bg-slate-950 border-t border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-indigo-600 text-white font-black text-base flex items-center justify-center">
                A
              </span>
              <span className="text-xl font-bold tracking-tight text-white">
                ArkaWeb Studio
              </span>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Studio pengembangan website profesional berbasis di Jakarta. Berfokus pada kecepatan muat tinggi, keindahan desain visual, dan hasil konversi penjualan nyata untuk bisnis Anda.
            </p>

            <div className="pt-2 space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>Senopati Office Tower Lt. 8, Jakarta Selatan 12190</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>halo@arkawebstudio.id</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>+62 895-3287-87655 (WhatsApp Direct)</span>
              </div>
            </div>
          </div>

          {/* Nav Links Column 1: Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Layanan Website
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#harga" className="hover:text-white transition-colors">Landing Page Kilat</a></li>
              <li><a href="#harga" className="hover:text-white transition-colors">Company Profile Bisnis</a></li>
              <li><a href="#harga" className="hover:text-white transition-colors">Toko Online & E-Commerce</a></li>
              <li><a href="#harga" className="hover:text-white transition-colors">Web Application Kustom</a></li>
              <li><a href="#kalkulator" className="hover:text-white transition-colors">Integrasi Payment Gateway</a></li>
            </ul>
          </div>

          {/* Nav Links Column 2: Portofolio */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Kategori Portofolio
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#proyek" className="hover:text-white transition-colors">F&B & Retail E-Commerce</a></li>
              <li><a href="#proyek" className="hover:text-white transition-colors">Korporat Logistik & B2B</a></li>
              <li><a href="#proyek" className="hover:text-white transition-colors">Arsitektur & Interior</a></li>
              <li><a href="#proyek" className="hover:text-white transition-colors">Klinik & Reservasi Dokter</a></li>
              <li><a href="#proyek" className="hover:text-white transition-colors">SaaS & Edukasi Online</a></li>
            </ul>
          </div>

          {/* Direct CTA Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Konsultasi Langsung
            </h4>
            <p className="text-xs text-slate-400 mb-3 leading-relaxed">
              Diskusikan rancangan website Anda bersama lead developer kami.
            </p>
            <a
              href="https://wa.me/6281234567890?text=Halo%20ArkaWeb%20Studio,%20saya%20ingin%20konsultasi%20pembuatan%20website."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Kami</span>
            </a>
          </div>
        </div>

        {/* Quiet Legal & Copyright Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} PT Arka Cipta Teknologi Digital (ArkaWeb Studio). Seluruh Hak Cipta Dilindungi.
          </div>

          <div className="flex items-center gap-6">
            <span className="hover:text-slate-400 cursor-pointer">Syarat & Ketentuan Layanan</span>
            <span className="hover:text-slate-400 cursor-pointer">Kebijakan Privasi Klien</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors"
              aria-label="Scroll back to top"
              title="Kembali ke atas"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
