import React from 'react';
import { Quote, Star } from 'lucide-react';
import { TESTIMONIALS } from '../data/mockData';

export const TestimonialSection: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-white dark:bg-slate-900/60 border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2">
            Bukti Nyata Klien
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
            Dipercaya Oleh Para Founder & Pemilik Bisnis
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
            Dengar langsung pengalaman para pengusaha yang telah mentransformasi kehadiran digital mereka bersama kami.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testi) => (
            <div
              key={testi.id}
              className="p-6 sm:p-8 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col justify-between"
            >
              <div>
                {/* Metric Gain Highlight */}
                <div className="mb-4 inline-block font-mono text-xs font-extrabold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-1 rounded-md">
                  {testi.metricGain}
                </div>

                <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed italic mb-6">
                  "{testi.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
                <div className="text-sm font-bold text-slate-900 dark:text-white">
                  {testi.author}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  {testi.role} · {testi.company}
                </div>
                <div className="text-[11px] font-medium text-indigo-600 dark:text-indigo-400 mt-1">
                  Proyek: {testi.projectType}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
