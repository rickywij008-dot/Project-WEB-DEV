import React from 'react';
import { X, Calendar, Clock, Video, Phone, MessageSquare, Trash2, CalendarPlus } from 'lucide-react';
import { BookingAppointment } from '../types';

interface MyBookingsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  bookings: BookingAppointment[];
  onCancelBooking: (bookingId: string) => void;
}

export const MyBookingsDrawer: React.FC<MyBookingsDrawerProps> = ({
  isOpen,
  onClose,
  bookings,
  onCancelBooking,
}) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex justify-end bg-slate-950/70 backdrop-blur-xs"
    >
      <div className="w-full max-w-md bg-white dark:bg-slate-900 h-full shadow-2xl flex flex-col justify-between border-l border-slate-200 dark:border-slate-800">
        {/* Header */}
        <div className="p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-900">
          <div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Jadwal Konsultasi Saya
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {bookings.length} sesi konsultasi aktif tersimpan
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 space-y-4 overflow-y-auto flex-1">
          {bookings.length === 0 ? (
            <div className="text-center py-16 text-slate-500">
              <Calendar className="w-12 h-12 mx-auto text-slate-300 dark:text-slate-600 mb-3" />
              <p className="text-sm font-medium">Belum ada jadwal konsultasi tersimpan.</p>
              <p className="text-xs text-slate-400 mt-1">
                Gunakan tombol "Booking Konsultasi" untuk menjadwalkan sesi gratis 30 menit.
              </p>
            </div>
          ) : (
            bookings.map((item) => (
              <div
                key={item.id}
                className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/60 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-extrabold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950 px-2 py-0.5 rounded">
                    {item.bookingCode}
                  </span>
                  <span className="text-[11px] font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950 px-2 py-0.5 rounded-full">
                    {item.status === 'confirmed' ? 'Terkonfirmasi' : item.status}
                  </span>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    {item.packageName}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {item.clientName} ({item.businessName})
                  </p>
                </div>

                <div className="space-y-1 text-xs text-slate-600 dark:text-slate-300 font-mono">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                    <span>{item.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                    <span>{item.timeSlot}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {item.platform === 'whatsapp-call' ? (
                      <Phone className="w-3.5 h-3.5 text-emerald-600" />
                    ) : (
                      <Video className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                    )}
                    <span className="uppercase">{item.platform}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-2 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between gap-2">
                  <a
                    href={`https://wa.me/6281234567890?text=${encodeURIComponent(
                      `Halo ArkaWeb Studio, saya ingin menanyakan sesi konsultasi booking code ${item.bookingCode} atas nama ${item.clientName}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-1.5 px-2.5 text-xs font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 rounded-lg hover:bg-emerald-100 dark:hover:bg-emerald-900/60 text-center flex items-center justify-center gap-1.5"
                  >
                    <MessageSquare className="w-3 h-3" />
                    <span>Hubungi WA</span>
                  </a>

                  <button
                    onClick={() => onCancelBooking(item.id)}
                    className="p-1.5 text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                    title="Batalkan Jadwal"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
          <button
            onClick={onClose}
            className="w-full py-2.5 text-xs font-semibold text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
          >
            Tutup Panel
          </button>
        </div>
      </div>
    </div>
  );
};
