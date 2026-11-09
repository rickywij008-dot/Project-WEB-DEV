import React from 'react';
import { X, Check, Zap, Gauge, Search, Smartphone } from 'lucide-react';

export const BenchmarkSection: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-slate-100/60 dark:bg-slate-900/40 border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2">
            Perbandingan Standar Kualitas
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
            Kenapa Website Murahan Sering Menghambat Penjualan?
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
            Perbedaan antara website sekadar jadi dengan website yang dirancang khusus untuk menghasilkan omzet bisnis Anda.
          </p>
        </div>

        {/* Comparison Table / Split Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Template Biasa */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-rose-100 dark:bg-rose-950/70 text-rose-600 dark:text-rose-400 flex items-center justify-center font-bold">
                ✕
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Website Template / Builder Murahan
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-6">
              Seringkali menggunakan tema bajakan berat, plugin bertumpuk yang rentan disusupi malware, dan server lambat.
            </p>

            <ul className="space-y-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              <li className="flex items-start gap-3">
                <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <span>Loading lambat 4–8 detik; pengunjung keburu kabur sebelum halaman terbuka.</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <span>Tampilan berantakan di layar ponsel; form terpotong dan tombol sulit dipencet.</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <span>Tanpa struktur SEO baku; sulit sekali muncul di halaman 1 pencarian Google.</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <span>Developer menghilang setelah terima uang; tanpa garansi bug maupun panduan.</span>
              </li>
            </ul>
          </div>

          {/* ArkaWeb Studio Standard */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border-2 border-indigo-500/80 dark:border-indigo-600 shadow-lg relative">
            <div className="absolute -top-3 right-6 bg-indigo-600 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-0.5 rounded-full">
              Standar ArkaWeb
            </div>

            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-950/70 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
                ✓
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Website Khusus ArkaWeb Studio
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-6">
              Dibangun dengan kode bersih modern, server NVMe cepat, dan hierarki visual yang terbukti melipatgandakan kontak leads.
            </p>

            <ul className="space-y-4 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <span>Loading kilat di bawah 1 detik dengan skor Google PageSpeed 95+.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <span>Alur Mobile-First; tombol kontak WhatsApp dan checkout selalu nyaman diakses jempol.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <span>Struktur SEO Google & OpenGraph komplit untuk mempermudah ranking organik.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <span>Garansi resmi 30–90 hari, video tutorial kelola website, & backup cloud berkala.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
