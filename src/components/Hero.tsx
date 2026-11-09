import React from 'react';
import { Calendar, ArrowRight, ShieldCheck, Zap, Award, Sparkles } from 'lucide-react';
import { HERO_IMAGE } from '../data/mockData';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Eyebrow */}
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-4">
          <span>ArkaWeb Digital Engineering Atelier</span>
          <span aria-hidden="true">·</span>
          <span>Jakarta Selatan, Indonesia</span>
        </div>

        {/* 2-Column Split: Headline + Narrative left, Studio Showcase right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15] text-balance">
              Bangun Website Kredibel & Cepat yang Mengubah Pengunjung Menjadi Pelanggan Nyata.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
              Kami merancang dan mengembangkan landing page persuasif, profil korporat, toko online, hingga aplikasi web kustom. Tanpa template murahan, dioptimasi untuk kecepatan ekstrem, dan terintegrasi sistem WhatsApp serta payment gateway nasional.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer whitespace-nowrap"
              >
                <Calendar className="w-5 h-5" />
                <span>Booking Konsultasi Gratis (30 Menit)</span>
              </button>

              <a
                href="#proyek"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-medium text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors whitespace-nowrap"
              >
                <span>Lihat Portofolio</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Micro Guarantees */}
            <div className="pt-2 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                Garansi Teknis & Bug-Free 30–90 Hari
              </span>
              <span className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-amber-500" />
                Kecepatan Muat Di Bawah 1.5 Detik
              </span>
              <span className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-indigo-500" />
                100% Hak Milik Source Code & Domain
              </span>
            </div>
          </div>

          {/* Right Visual Carrier: Studio Showcase with measured frame */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl bg-slate-900 group">
              <img
                src={HERO_IMAGE}
                alt="Suasana studio perancangan dan engineering website ArkaWeb Studio"
                className="w-full h-[320px] sm:h-[400px] object-cover transition-transform duration-700 group-hover:scale-102"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent pointer-events-none" />
              
              <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 text-white space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-indigo-300">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Dibuat dengan Standar Industri Modern</span>
                </div>
                <p className="text-sm text-slate-200 leading-snug">
                  Setiap baris kode dioptimasi untuk SEO Google, performa Core Web Vitals, dan tingkat konversi bisnis maksimal.
                </p>
                <div className="pt-1 flex items-center gap-3 text-xs text-slate-300 font-mono">
                  <span>Stack: React · Next.js · Tailwind · Node.js</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width KPI Strip placed below hero split */}
        <div className="mt-14 pt-8 border-t border-slate-200/80 dark:border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tabular-nums tracking-tight">
              120+
            </div>
            <div className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 mt-1">
              Proyek Web Berhasil Go-Live
            </div>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-indigo-600 dark:text-indigo-400 tabular-nums tracking-tight">
              99.8%
            </div>
            <div className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 mt-1">
              Tingkat Kepuasan & Retensi Klien
            </div>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tabular-nums tracking-tight">
              &lt; 0.9s
            </div>
            <div className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 mt-1">
              Rata-rata Kecepatan Muat Halaman
            </div>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600 dark:text-emerald-400 tabular-nums tracking-tight">
              100%
            </div>
            <div className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 mt-1">
              Hak Akses & Source Code Milik Anda
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
