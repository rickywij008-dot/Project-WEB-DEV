import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesOverview } from './components/ServicesOverview';
import { ProjectGallery } from './components/ProjectGallery';
import { PricingSection } from './components/PricingSection';
import { BookingSection } from './components/BookingSection';
import { BenchmarkSection } from './components/BenchmarkSection';
import { TestimonialSection } from './components/TestimonialSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { MyBookingsDrawer } from './components/MyBookingsDrawer';
import { Project, PricingPackage, BookingAppointment } from './types';
import { PRICING_PACKAGES } from './data/mockData';
import { MessageCircle } from 'lucide-react';

export default function App() {
  // Theme state: default dark for sleek agency feel, with toggle support
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('arkaweb_theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return true;
  });

  // Active bookings list
  const [bookings, setBookings] = useState<BookingAppointment[]>(() => {
    try {
      const stored = localStorage.getItem('arkaweb_bookings');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const [isMyBookingsOpen, setIsMyBookingsOpen] = useState(false);

  // Selected package & addons for booking
  const [selectedPackage, setSelectedPackage] = useState<PricingPackage | null>(null);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);

  // Apply dark mode class to html element
  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      localStorage.setItem('arkaweb_theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('arkaweb_theme', 'light');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  const scrollToBooking = () => {
    const bookingEl = document.getElementById('booking');
    if (bookingEl) {
      bookingEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPackageForBooking = (pkg: PricingPackage, addons: string[] = []) => {
    setSelectedPackage(pkg);
    setSelectedAddons(addons);
    scrollToBooking();
  };

  const handleSelectProjectForBooking = (project: Project) => {
    let targetPkgId = 'paket-bisnis-pro';
    if (project.category === 'ecommerce') {
      targetPkgId = 'paket-ecommerce-custom';
    } else if (project.category === 'landing-page') {
      targetPkgId = 'paket-landing-page';
    } else if (project.category === 'web-app') {
      targetPkgId = 'paket-ecommerce-custom';
    }
    const pkg = PRICING_PACKAGES.find((p) => p.id === targetPkgId) || PRICING_PACKAGES[1];
    setSelectedPackage(pkg);
    scrollToBooking();
  };

  const handleBookingSuccess = (newBooking: BookingAppointment) => {
    setBookings((prev) => [newBooking, ...prev]);
  };

  const handleCancelBooking = (bookingId: string) => {
    const updated = bookings.filter((b) => b.id !== bookingId);
    setBookings(updated);
    try {
      localStorage.setItem('arkaweb_bookings', JSON.stringify(updated));
    } catch {
      // Ignore
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-indigo-600 selection:text-white transition-colors duration-200">
      {/* 3-Zone Strict Top Bar Contract */}
      <Navbar
        onOpenBooking={scrollToBooking}
        onOpenMyBookings={() => setIsMyBookingsOpen(true)}
        activeBookingsCount={bookings.length}
        isDarkMode={isDarkMode}
        onToggleDarkMode={toggleDarkMode}
      />

      {/* Main Content Flow */}
      <main>
        {/* 1. Proposition: Hero Section */}
        <Hero onOpenBooking={scrollToBooking} />

        {/* 2. Mechanism & Capabilities: Services Overview */}
        <ServicesOverview />

        {/* 3. Proof & Portfolio: Interactive Project Gallery */}
        <ProjectGallery onSelectProjectForBooking={handleSelectProjectForBooking} />

        {/* 4. Conversion & Clarity: Transparent Pricing Packages & Cost Estimator */}
        <PricingSection onSelectPackageForBooking={handleSelectPackageForBooking} />

        {/* 5. Direct Action: Live Direct Consultation Booking System */}
        <BookingSection
          preselectedPackage={selectedPackage}
          preselectedAddons={selectedAddons}
          onBookingSuccess={handleBookingSuccess}
        />

        {/* 6. Differentiation: Quality Benchmark Comparison */}
        <BenchmarkSection />

        {/* 7. Attributable Social Proof: Client Testimonials */}
        <TestimonialSection />

        {/* 8. Objection Handling: FAQ Accordion */}
        <FAQSection />
      </main>

      {/* 9. Quiet Footer */}
      <Footer />

      {/* Booking Management Drawer */}
      <MyBookingsDrawer
        isOpen={isMyBookingsOpen}
        onClose={() => setIsMyBookingsOpen(false)}
        bookings={bookings}
        onCancelBooking={handleCancelBooking}
      />

      {/* Floating Instant WhatsApp Button */}
      <aside aria-label="Direct WhatsApp Contact" className="fixed bottom-6 right-6 z-30">
        <a
          href="https://wa.me/62895328787655?text=Halo%20ArkaWeb%20Studio,%20saya%20tertarik%20dengan%20jasa%20pembuatan%20website%20Anda."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 px-4 py-3 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all font-semibold text-xs sm:text-sm group"
          title="Tanya langsung via WhatsApp"
        >
          <MessageCircle className="w-5 h-5 transition-transform group-hover:scale-110" />
          <span className="hidden sm:inline">Chat Konsultan Langsung</span>
        </a>
      </aside>
    </div>
  );
}
