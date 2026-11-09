import React, { useState, useId } from 'react';
import {
  Calendar as CalendarIcon,
  Clock,
  Video,
  Phone,
  MessageSquare,
  CheckCircle2,
  CalendarPlus,
  Send,
  Sparkles,
  ArrowRight,
  ShieldAlert,
  Download
} from 'lucide-react';
import { PricingPackage, ConsultationPlatform, BookingAppointment } from '../types';
import { PRICING_PACKAGES, ADDON_OPTIONS, TIME_SLOTS } from '../data/mockData';

interface BookingSectionProps {
  preselectedPackage?: PricingPackage | null;
  preselectedAddons?: string[];
  onBookingSuccess: (booking: BookingAppointment) => void;
}

export const BookingSection: React.FC<BookingSectionProps> = ({
  preselectedPackage,
  preselectedAddons = [],
  onBookingSuccess,
}) => {
  // Generate next 10 selectable business days
  const availableDates = React.useMemo(() => {
    const dates = [];
    const today = new Date();
    
    for (let i = 1; i <= 12; i++) {
      const d = new Date(today);
      d.setDate(today.getDate() + i);
      // Skip Sundays (0)
      if (d.getDay() !== 0) {
        const iso = d.toISOString().split('T')[0];
        const dayName = d.toLocaleDateString('id-ID', { weekday: 'short' });
        const dayNumber = d.getDate();
        const monthName = d.toLocaleDateString('id-ID', { month: 'short' });
        dates.push({
          iso,
          label: `${dayName}, ${dayNumber} ${monthName}`,
          fullLabel: d.toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })
        });
      }
    }
    return dates;
  }, []);

  // Form State
  const [selectedDate, setSelectedDate] = useState<string>(availableDates[0]?.iso || '');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>(TIME_SLOTS[1]);
  const [selectedPlatform, setSelectedPlatform] = useState<ConsultationPlatform>('google-meet');
  const [selectedPackageId, setSelectedPackageId] = useState<string>(
    preselectedPackage ? preselectedPackage.id : 'paket-bisnis-pro'
  );
  const [selectedAddons, setSelectedAddons] = useState<string[]>(preselectedAddons);

  // Client Details
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [projectBrief, setProjectBrief] = useState('');

  // Validation & Submission State
  const [errorMsg, setErrorMsg] = useState('');
  const [latestBooking, setLatestBooking] = useState<BookingAppointment | null>(null);

  // Sync when prop changes
  React.useEffect(() => {
    if (preselectedPackage) {
      setSelectedPackageId(preselectedPackage.id);
    }
    if (preselectedAddons.length > 0) {
      setSelectedAddons(preselectedAddons);
    }
  }, [preselectedPackage, preselectedAddons]);

  const activePackage = PRICING_PACKAGES.find((p) => p.id === selectedPackageId) || PRICING_PACKAGES[1];

  const addonsTotal = selectedAddons.reduce((sum, id) => {
    const addon = ADDON_OPTIONS.find((a) => a.id === id);
    return sum + (addon ? addon.price : 0);
  }, 0);

  const estimatedTotal = activePackage.price + addonsTotal;

  const handleSubmitBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!clientName.trim()) {
      setErrorMsg('Mohon masukkan Nama Lengkap Anda.');
      return;
    }
    if (!clientEmail.trim() || !clientEmail.includes('@')) {
      setErrorMsg('Mohon masukkan Alamat Email yang valid.');
      return;
    }
    if (!clientPhone.trim() || clientPhone.length < 8) {
      setErrorMsg('Mohon masukkan Nomor WhatsApp aktif untuk koordinasi sesi.');
      return;
    }
    if (!businessName.trim()) {
      setErrorMsg('Mohon masukkan Nama Usaha / Brand Anda.');
      return;
    }

    const bookingCode = `ARKA-${Math.floor(1000 + Math.random() * 9000)}`;
    const newBooking: BookingAppointment = {
      id: `booking-${Date.now()}`,
      bookingCode,
      date: selectedDate,
      timeSlot: selectedTimeSlot,
      platform: selectedPlatform,
      packageId: activePackage.id,
      packageName: activePackage.name,
      selectedAddons,
      clientName,
      clientEmail,
      clientPhone,
      businessName,
      projectBrief: projectBrief.trim() || 'Konsultasi kebutuhan website bisnis & strategi konversi.',
      estimatedTotal,
      createdAt: new Date().toISOString(),
      status: 'confirmed'
    };

    // Save to localStorage
    try {
      const existing = JSON.parse(localStorage.getItem('arkaweb_bookings') || '[]');
      localStorage.setItem('arkaweb_bookings', JSON.stringify([newBooking, ...existing]));
    } catch {
      // Local storage fallback
    }

    setLatestBooking(newBooking);
    onBookingSuccess(newBooking);
  };

  const getFullSelectedDateLabel = () => {
    const item = availableDates.find((d) => d.iso === selectedDate);
    return item ? item.fullLabel : selectedDate;
  };

  // Google Calendar URL generator
  const getGoogleCalendarUrl = (booking: BookingAppointment) => {
    const title = encodeURIComponent(`Konsultasi Pembuatan Website — ArkaWeb Studio & ${booking.businessName}`);
    const details = encodeURIComponent(
      `Sesi Konsultasi Kebutuhan Website\nKode Booking: ${booking.bookingCode}\nPaket: ${booking.packageName}\nKlien: ${booking.clientName} (${booking.businessName})\nPlatform: ${booking.platform.toUpperCase()}\nKontak Tim ArkaWeb: +62 895-3287-87655`
    );
    const location = encodeURIComponent(
      booking.platform === 'google-meet' ? 'Google Meet Video Call' : booking.platform === 'zoom' ? 'Zoom Meetings' : 'WhatsApp Call'
    );
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}`;
  };

  // WhatsApp formatted confirmation URL
  const getWhatsAppMessageUrl = (booking: BookingAppointment) => {
    const text = encodeURIComponent(
      `Halo Tim ArkaWeb Studio,\n\nSaya telah melakukan booking konsultasi pembuatan website:\n\n` +
      `• Kode Booking: ${booking.bookingCode}\n` +
      `• Nama: ${booking.clientName}\n` +
      `• Bisnis: ${booking.businessName}\n` +
      `• Paket: ${booking.packageName}\n` +
      `• Jadwal: ${getFullSelectedDateLabel()}\n` +
      `• Jam: ${booking.timeSlot}\n` +
      `• Platform: ${booking.platform.toUpperCase()}\n\n` +
      `Mohon konfirmasi link pertemuan. Terima kasih!`
    );
    return `https://wa.me/62895328787655?text=${text}`;
  };

  return (
    <section id="booking" className="py-16 lg:py-24 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2">
            Sistem Reservasi Langsung
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
            Booking Sesi Konsultasi Proyek (Gratis 30 Menit)
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
            Pilih tanggal, jam, dan platform pertemuan online. Konsultan web senior kami akan membedah strategi arsitektur, estimasi biaya, dan wireframe website bisnis Anda.
          </p>
        </div>

        {/* If Booking is Completed: Render Instant Pass */}
        {latestBooking ? (
          <div className="max-w-2xl mx-auto p-6 sm:p-10 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
            <div className="text-center space-y-3">
              <div className="w-16 h-16 rounded-2xl bg-emerald-100 dark:bg-emerald-950/70 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Jadwal Konsultasi Berhasil Dikonfirmasi!
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Kami telah mengunci jadwal sesi konsultasi Anda. Undangan kalender dan rincian teknis telah dipersiapkan.
              </p>
            </div>

            {/* Booking Ticket Card */}
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-4">
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-700">
                <div>
                  <span className="text-xs text-slate-500 dark:text-slate-400">Kode Booking Resmi</span>
                  <div className="text-lg font-mono font-extrabold text-indigo-600 dark:text-indigo-400">
                    {latestBooking.bookingCode}
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs text-slate-500 dark:text-slate-400">Status</span>
                  <div className="text-xs font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950 px-2.5 py-0.5 rounded-full">
                    Terkonfirmasi
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                <div>
                  <span className="text-slate-500 dark:text-slate-400">Klien & Usaha:</span>
                  <div className="font-bold text-slate-900 dark:text-white">
                    {latestBooking.clientName} ({latestBooking.businessName})
                  </div>
                </div>

                <div>
                  <span className="text-slate-500 dark:text-slate-400">Paket Website:</span>
                  <div className="font-bold text-slate-900 dark:text-white">
                    {latestBooking.packageName}
                  </div>
                </div>

                <div>
                  <span className="text-slate-500 dark:text-slate-400">Jadwal Sesi:</span>
                  <div className="font-bold text-slate-900 dark:text-white">
                    {getFullSelectedDateLabel()}
                  </div>
                </div>

                <div>
                  <span className="text-slate-500 dark:text-slate-400">Waktu & Platform:</span>
                  <div className="font-bold text-slate-900 dark:text-white">
                    {latestBooking.timeSlot} ({latestBooking.platform === 'google-meet' ? 'Google Meet' : latestBooking.platform === 'zoom' ? 'Zoom Meeting' : 'WhatsApp Call'})
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Connect Buttons */}
            <div className="space-y-3 pt-2">
              <a
                href={getWhatsAppMessageUrl(latestBooking)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 rounded-xl shadow-md transition-all cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Kirim Konfirmasi Langsung ke WhatsApp Consultant</span>
              </a>

              <a
                href={getGoogleCalendarUrl(latestBooking)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-xl transition-colors cursor-pointer"
              >
                <CalendarPlus className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <span>Tambahkan ke Google Calendar Anda</span>
              </a>

              <button
                onClick={() => {
                  setLatestBooking(null);
                  setClientName('');
                  setBusinessName('');
                  setProjectBrief('');
                }}
                className="w-full py-2.5 text-xs font-semibold text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-colors cursor-pointer text-center"
              >
                Buat Janji Konsultasi Lainnya
              </button>
            </div>
          </div>
        ) : (
          /* Live Interactive Booking Form Layout */
          <form
            onSubmit={handleSubmitBooking}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start"
          >
            {/* Left 7 Columns: Date, Time Slot & Platform Selection */}
            <div className="lg:col-span-7 space-y-8 bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
              {/* Step A: Date Picker */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-2 mb-3">
                  <CalendarIcon className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                  <span>1. Pilih Tanggal Konsultasi</span>
                </label>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
                  {availableDates.map((item) => {
                    const isSelected = selectedDate === item.iso;
                    return (
                      <button
                        key={item.iso}
                        type="button"
                        onClick={() => setSelectedDate(item.iso)}
                        className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                          isSelected
                            ? 'border-indigo-600 bg-indigo-50 dark:bg-indigo-950/60 dark:border-indigo-500 text-indigo-700 dark:text-indigo-300 font-bold shadow-xs'
                            : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 text-slate-700 dark:text-slate-300'
                        }`}
                      >
                        <div className="text-xs font-semibold">{item.label}</div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step B: Time Slot Selection */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-2 mb-3">
                  <Clock className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                  <span>2. Pilih Sesi Waktu (WIB / GMT+7)</span>
                </label>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {TIME_SLOTS.map((slot) => {
                    const isSelected = selectedTimeSlot === slot;
                    return (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setSelectedTimeSlot(slot)}
                        className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer flex items-center justify-center gap-2 ${
                          isSelected
                            ? 'border-indigo-600 bg-indigo-600 text-white font-bold shadow-xs'
                            : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 text-slate-700 dark:text-slate-300'
                        }`}
                      >
                        <span className="text-xs font-mono">{slot}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step C: Platform Selector */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-2 mb-3">
                  <Video className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                  <span>3. Media Pertemuan Online</span>
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { id: 'google-meet', label: 'Google Meet', desc: 'Link via kalender (HD)', icon: Video },
                    { id: 'zoom', label: 'Zoom Video', desc: 'Screen share & mockup', icon: Video },
                    { id: 'whatsapp-call', label: 'WhatsApp Call', desc: 'Langsung dari ponsel', icon: Phone }
                  ].map((plat) => {
                    const isSelected = selectedPlatform === plat.id;
                    const Icon = plat.icon;
                    return (
                      <button
                        key={plat.id}
                        type="button"
                        onClick={() => setSelectedPlatform(plat.id as ConsultationPlatform)}
                        className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                          isSelected
                            ? 'border-indigo-600 bg-indigo-50/70 dark:bg-indigo-950/40 dark:border-indigo-500'
                            : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                        }`}
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <Icon className={`w-4 h-4 ${isSelected ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-500'}`} />
                          <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                            {plat.label}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400">
                          {plat.desc}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step D: Package Selection in Form */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-2 mb-3">
                  <Sparkles className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                  <span>4. Paket Website yang Dituju</span>
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {PRICING_PACKAGES.map((pkg) => {
                    const isSelected = selectedPackageId === pkg.id;
                    return (
                      <button
                        key={pkg.id}
                        type="button"
                        onClick={() => setSelectedPackageId(pkg.id)}
                        className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                          isSelected
                            ? 'border-indigo-600 bg-indigo-50/60 dark:bg-indigo-950/40 dark:border-indigo-500'
                            : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                        }`}
                      >
                        <div className="text-xs font-bold text-slate-900 dark:text-white">
                          {pkg.name}
                        </div>
                        <div className="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400 mt-0.5">
                          {pkg.priceFormatted}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right 5 Columns: Client Data & Confirmation Action */}
            <div className="lg:col-span-5 bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Data Calon Klien
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Informasi ini digunakan konsultan untuk mempersiapkan studi kasus industri Anda sebelum sesi dimulai.
                </p>
              </div>

              {errorMsg && (
                <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-900 text-xs text-rose-700 dark:text-rose-300 flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                    Nama Lengkap *
                  </label>
                  <input
                    type="text"
                    required
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder="Contoh: Budi Pratama"
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                    Nomor WhatsApp Aktif *
                  </label>
                  <input
                    type="tel"
                    required
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    placeholder="Contoh: 081234567890"
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                    Alamat Email Bisnis *
                  </label>
                  <input
                    type="email"
                    required
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                    placeholder="nama@perusahaan.com"
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                    Nama Bisnis / Brand / Perusahaan *
                  </label>
                  <input
                    type="text"
                    required
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    placeholder="Contoh: Kopi Nusantara Mandiri"
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                    Catatan Kebutuhan / Referensi Website (Opsional)
                  </label>
                  <textarea
                    rows={3}
                    value={projectBrief}
                    onChange={(e) => setProjectBrief(e.target.value)}
                    placeholder="Ceritakan fitur utama yang Anda impikan atau website kompetitor yang Anda sukai..."
                    className="w-full px-3.5 py-2 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all resize-none"
                  />
                </div>
              </div>

              {/* Order / Consultation Summary Recap */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Ringkasan Konsultasi
                </div>
                <div className="flex justify-between text-xs text-slate-600 dark:text-slate-300">
                  <span>Jadwal Terpilih:</span>
                  <span className="font-semibold text-slate-900 dark:text-white">
                    {availableDates.find((d) => d.iso === selectedDate)?.label}, {selectedTimeSlot}
                  </span>
                </div>
                <div className="flex justify-between text-xs text-slate-600 dark:text-slate-300">
                  <span>Paket yang Dituju:</span>
                  <span className="font-semibold text-slate-900 dark:text-white">
                    {activePackage.name}
                  </span>
                </div>
                <div className="flex justify-between text-xs text-slate-600 dark:text-slate-300">
                  <span>Biaya Konsultasi:</span>
                  <span className="font-bold text-emerald-600 dark:text-emerald-400">
                    GRATIS (0 Rupiah)
                  </span>
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-4 px-6 text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <span>Konfirmasi & Kunci Jadwal Konsultasi</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-[11px] text-center text-slate-400 dark:text-slate-500">
                Data Anda 100% aman dan tidak akan disebarluaskan. Tidak ada kewajiban membeli setelah sesi konsultasi.
              </p>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};
