import React, { useState } from 'react';
import { Check, Clock, Sparkles, ArrowRight, Calculator, Plus, HelpCircle } from 'lucide-react';
import { PricingPackage, AddonOption } from '../types';
import { PRICING_PACKAGES, ADDON_OPTIONS } from '../data/mockData';

interface PricingSectionProps {
  onSelectPackageForBooking: (pkg: PricingPackage, addons?: string[]) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPackageForBooking }) => {
  // Interactive Calculator State
  const [selectedBasePackageId, setSelectedBasePackageId] = useState<string>('paket-bisnis-pro');
  const [selectedAddonIds, setSelectedAddonIds] = useState<string[]>(['addon-payment-gateway']);

  const selectedBasePackage = PRICING_PACKAGES.find((p) => p.id === selectedBasePackageId) || PRICING_PACKAGES[1];

  const toggleAddon = (addonId: string) => {
    setSelectedAddonIds((prev) =>
      prev.includes(addonId) ? prev.filter((id) => id !== addonId) : [...prev, addonId]
    );
  };

  const calculatedAddonsTotal = selectedAddonIds.reduce((sum, id) => {
    const addon = ADDON_OPTIONS.find((a) => a.id === id);
    return sum + (addon ? addon.price : 0);
  }, 0);

  const grandTotal = selectedBasePackage.price + calculatedAddonsTotal;

  const formatRupiah = (val: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <section id="harga" className="py-16 lg:py-24 bg-white dark:bg-slate-900/60 border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2">
            Investasi Transparan
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
            Pilihan Paket Harga Pembuatan Website
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
            Tanpa biaya tersembunyi. Termasuk domain, cloud hosting cepat 1 tahun, sertifikat SSL HTTPS, dan garansi perbaikan teknis.
          </p>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-20">
          {PRICING_PACKAGES.map((pkg) => {
            const isPopular = pkg.isPopular;
            return (
              <div
                key={pkg.id}
                className={`relative rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-200 ${
                  isPopular
                    ? 'bg-slate-900 text-white dark:bg-indigo-950/60 border-2 border-indigo-500 shadow-xl lg:-translate-y-2'
                    : 'bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100'
                }`}
              >
                {/* Popular Highlight Badge */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-indigo-600 text-white px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm flex items-center gap-1.5 whitespace-nowrap">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Pilihan Paling Diminati</span>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className={`text-xl font-bold ${isPopular ? 'text-white' : 'text-slate-900 dark:text-white'}`}>
                      {pkg.name}
                    </h3>
                  </div>

                  <p className={`text-xs sm:text-sm leading-relaxed mb-6 ${isPopular ? 'text-slate-300' : 'text-slate-600 dark:text-slate-300'}`}>
                    {pkg.tagline}
                  </p>

                  {/* Price Block */}
                  <div className="mb-6 pb-6 border-b border-slate-200/80 dark:border-slate-800">
                    <div className="flex items-baseline gap-1">
                      <span className={`text-3xl sm:text-4xl font-extrabold tracking-tight tabular-nums font-mono ${
                        isPopular ? 'text-white' : 'text-slate-900 dark:text-white'
                      }`}>
                        {pkg.priceFormatted}
                      </span>
                    </div>
                    <div className={`mt-2 flex items-center gap-2 text-xs ${isPopular ? 'text-indigo-200' : 'text-indigo-600 dark:text-indigo-400 font-medium'}`}>
                      <Clock className="w-3.5 h-3.5" />
                      <span>Estimasi Selesai: {pkg.timeline}</span>
                    </div>
                  </div>

                  {/* Ideal For Note */}
                  <div className={`mb-6 p-3 rounded-xl text-xs font-medium ${
                    isPopular ? 'bg-white/10 text-slate-200' : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60'
                  }`}>
                    <span className="font-bold">Cocok untuk:</span> {pkg.idealFor}
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    <div className={`text-xs font-bold uppercase tracking-wider ${isPopular ? 'text-slate-400' : 'text-slate-500 dark:text-slate-400'}`}>
                      Fitur Termasuk:
                    </div>
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                        <Check className={`w-4 h-4 mt-0.5 shrink-0 ${
                          feature.included
                            ? isPopular ? 'text-emerald-400' : 'text-indigo-600 dark:text-indigo-400'
                            : 'text-slate-300 dark:text-slate-600'
                        }`} />
                        <span className={`${
                          feature.included
                            ? feature.highlight
                              ? 'font-semibold ' + (isPopular ? 'text-white' : 'text-slate-900 dark:text-white')
                              : isPopular ? 'text-slate-200' : 'text-slate-600 dark:text-slate-300'
                            : 'line-through text-slate-400 dark:text-slate-500'
                        }`}>
                          {feature.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Primary Package Selection CTA */}
                <button
                  onClick={() => onSelectPackageForBooking(pkg)}
                  className={`w-full py-3.5 px-4 rounded-xl text-sm font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm ${
                    isPopular
                      ? 'bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white shadow-md'
                      : 'bg-slate-900 hover:bg-slate-800 text-white dark:bg-indigo-600 dark:hover:bg-indigo-700'
                  }`}
                >
                  <span>Pilih Paket {pkg.name.split(' ')[0]}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Interactive Custom Cost Estimator / Add-on Calculator */}
        <div id="kalkulator" className="p-6 sm:p-10 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-200 dark:border-slate-800">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-1">
                <Calculator className="w-4 h-4" />
                <span>Simulasi Biaya & Kustomisasi Fitur</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                Kalkulator Estimasi Proyek Kustom
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                Pilih paket dasar dan tambahkan fitur pendukung sesuai kebutuhan spesifik bisnis Anda.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-right shrink-0">
              <span className="text-xs text-slate-500 dark:text-slate-400">Total Estimasi Investasi</span>
              <div className="text-2xl sm:text-3xl font-extrabold text-indigo-600 dark:text-indigo-400 tabular-nums font-mono mt-0.5">
                {formatRupiah(grandTotal)}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Step 1: Base Package Selection */}
            <div className="lg:col-span-5 space-y-4">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 block">
                1. Pilih Paket Dasar
              </label>

              <div className="space-y-2.5">
                {PRICING_PACKAGES.map((pkg) => {
                  const isSelected = selectedBasePackageId === pkg.id;
                  return (
                    <div
                      key={pkg.id}
                      onClick={() => setSelectedBasePackageId(pkg.id)}
                      className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                        isSelected
                          ? 'border-indigo-600 bg-indigo-50/70 dark:bg-indigo-950/40 dark:border-indigo-500 shadow-xs'
                          : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/60 hover:border-slate-300 dark:hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                          isSelected ? 'border-indigo-600 bg-indigo-600' : 'border-slate-400'
                        }`}>
                          {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                        </div>
                        <div>
                          <div className="text-sm font-bold text-slate-900 dark:text-white">
                            {pkg.name}
                          </div>
                          <div className="text-xs text-slate-500 dark:text-slate-400">
                            {pkg.timeline}
                          </div>
                        </div>
                      </div>

                      <div className="text-sm font-extrabold text-slate-900 dark:text-white font-mono tabular-nums">
                        {pkg.priceFormatted}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Add-on Checkboxes */}
            <div className="lg:col-span-7 space-y-4">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 block">
                2. Tambah Fitur Kustom & Layanan Ekstra (Opsional)
              </label>

              <div className="space-y-2.5">
                {ADDON_OPTIONS.map((addon) => {
                  const isChecked = selectedAddonIds.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                        isChecked
                          ? 'border-indigo-500 bg-indigo-50/50 dark:bg-indigo-950/30 dark:border-indigo-600'
                          : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/50 hover:border-slate-300 dark:hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`mt-0.5 w-4 h-4 rounded border flex items-center justify-center shrink-0 ${
                          isChecked ? 'border-indigo-600 bg-indigo-600 text-white' : 'border-slate-300 dark:border-slate-600'
                        }`}>
                          {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                              {addon.name}
                            </span>
                            {addon.badge && (
                              <span className="text-[10px] font-bold text-indigo-700 dark:text-indigo-300 bg-indigo-100 dark:bg-indigo-900/50 px-1.5 py-0.2 rounded">
                                {addon.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-1">
                            {addon.description}
                          </p>
                        </div>
                      </div>

                      <div className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 font-mono tabular-nums whitespace-nowrap">
                        +{addon.priceFormatted}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Calculator Bottom Summary & CTA */}
          <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-500 dark:text-slate-400">
              *Estimasi ini bersifat fleksibel dan akan difinalisasi bersama saat sesi konsultasi langsung 30 menit gratis.
            </div>

            <button
              onClick={() => onSelectPackageForBooking(selectedBasePackage, selectedAddonIds)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-sm transition-all cursor-pointer whitespace-nowrap"
            >
              <span>Booking Konsultasi dengan Paket & Add-on Ini</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
