import React, { useState } from 'react';
import { ExternalLink, X, ArrowUpRight, CheckCircle2, Monitor, Smartphone, Sparkles, MessageCircle } from 'lucide-react';
import { Project, ProjectCategory } from '../types';
import { PROJECTS } from '../data/mockData';

interface ProjectGalleryProps {
  onSelectProjectForBooking: (project: Project) => void;
}

export const ProjectGallery: React.FC<ProjectGalleryProps> = ({ onSelectProjectForBooking }) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [previewDevice, setPreviewDevice] = useState<'desktop' | 'mobile'>('desktop');

  const filteredProjects = activeCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="proyek" className="py-16 lg:py-24 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-14">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2">
              Portofolio Pilihan
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
              Galeri Proyek Nyata & Hasil Terukur
            </h2>
            <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
              Eksplorasi portofolio website yang kami rancang dari nol. Setiap karya memiliki metrik dampak nyata terhadap pertumbuhan bisnis klien kami.
            </p>
          </div>

          {/* Interactive Category Segmented Tabs (Functional button controls) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-200/70 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shrink-0">
            {[
              { id: 'all', label: 'Semua Proyek' },
              { id: 'ecommerce', label: 'E-Commerce' },
              { id: 'company-profile', label: 'Company Profile' },
              { id: 'landing-page', label: 'Landing Page' },
              { id: 'web-app', label: 'Web App & Sistem' }
            ].map((tab) => {
              const isActive = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id as ProjectCategory)}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-sm font-semibold'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-md hover:border-indigo-300 dark:hover:border-indigo-700/60 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Visual Thumbnail */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      // Fallback styled state if image path fails
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="w-full py-2 px-3 text-xs font-semibold text-white bg-indigo-600/90 hover:bg-indigo-600 backdrop-blur-sm rounded-lg flex items-center justify-center gap-1.5 cursor-pointer shadow"
                    >
                      <span>Buka Detail Kasus & Demo</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Card Content: Zero-pill clean metadata */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-2">
                    <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                      {project.categoryLabel}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{project.client}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono">{project.year}</span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2 mb-4">
                    {project.summary}
                  </p>

                  {/* Primary Metric Gain */}
                  {project.metrics[0] && (
                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200/70 dark:border-slate-800 mb-4">
                      <div className="flex items-baseline justify-between">
                        <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                          {project.metrics[0].label}
                        </span>
                        <span className="text-base font-extrabold text-emerald-600 dark:text-emerald-400 tabular-nums font-mono">
                          {project.metrics[0].value}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-1">
                        {project.metrics[0].context}
                      </p>
                    </div>
                  )}

                  {/* Clean unboxed Tech Stack text */}
                  <div className="text-xs text-slate-400 dark:text-slate-500 font-mono">
                    Tech: {project.techStack.slice(0, 3).join(' · ')}
                    {project.techStack.length > 3 ? ` · +${project.techStack.length - 3}` : ''}
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="px-6 py-4 bg-slate-50/70 dark:bg-slate-900/60 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <span>Lihat Studi Kasus</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => onSelectProjectForBooking(project)}
                  className="px-3 py-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 hover:bg-indigo-100 dark:hover:bg-indigo-900/60 rounded-lg transition-colors cursor-pointer"
                >
                  Pesan Seperti Ini
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Lightbox Modal */}
      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-sm overflow-y-auto"
        >
          <div className="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col">
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4 bg-slate-50/80 dark:bg-slate-900/80 sticky top-0 z-10">
              <div>
                <div className="flex items-center gap-2 text-xs text-indigo-600 dark:text-indigo-400 font-semibold uppercase tracking-wider">
                  <span>{selectedProject.categoryLabel}</span>
                  <span aria-hidden="true">·</span>
                  <span>{selectedProject.client}</span>
                  <span aria-hidden="true">·</span>
                  <span className="font-mono">{selectedProject.year}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mt-0.5">
                  {selectedProject.title}
                </h3>
              </div>

              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                aria-label="Tutup detail modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-8 overflow-y-auto flex-1">
              {/* Responsive Device Mockup Container */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Simulasi Tampilan Perangkat
                  </span>
                  <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-800 rounded-lg">
                    <button
                      onClick={() => setPreviewDevice('desktop')}
                      className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-md transition-all cursor-pointer ${
                        previewDevice === 'desktop'
                          ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-400 shadow-xs'
                          : 'text-slate-500'
                      }`}
                    >
                      <Monitor className="w-3.5 h-3.5" />
                      <span>Desktop</span>
                    </button>
                    <button
                      onClick={() => setPreviewDevice('mobile')}
                      className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-md transition-all cursor-pointer ${
                        previewDevice === 'mobile'
                          ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-400 shadow-xs'
                          : 'text-slate-500'
                      }`}
                    >
                      <Smartphone className="w-3.5 h-3.5" />
                      <span>Mobile</span>
                    </button>
                  </div>
                </div>

                <div className="w-full flex justify-center bg-slate-950 p-4 sm:p-6 rounded-2xl border border-slate-800">
                  <div
                    className={`transition-all duration-300 overflow-hidden rounded-xl border border-slate-800 bg-slate-900 shadow-2xl ${
                      previewDevice === 'desktop'
                        ? 'w-full max-w-3xl aspect-[16/10]'
                        : 'w-[280px] sm:w-[320px] aspect-[9/16]'
                    }`}
                  >
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>

              {/* Quantified Metrics Row */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                  Hasil & Dampak Terukur
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {selectedProject.metrics.map((metric, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800"
                    >
                      <div className="text-xs font-medium text-slate-500 dark:text-slate-400">
                        {metric.label}
                      </div>
                      <div className="text-2xl font-extrabold text-emerald-600 dark:text-emerald-400 tabular-nums font-mono mt-1">
                        {metric.value}
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                        {metric.context}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Problem vs Solution Editorial */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-xl border border-rose-200/80 dark:border-rose-900/40 bg-rose-50/30 dark:bg-rose-950/10">
                  <h4 className="text-sm font-bold text-rose-900 dark:text-rose-300 mb-2">
                    Tantangan Klien Sebelumnya
                  </h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {selectedProject.challenge}
                  </p>
                </div>

                <div className="p-5 rounded-xl border border-indigo-200/80 dark:border-indigo-900/40 bg-indigo-50/30 dark:bg-indigo-950/10">
                  <h4 className="text-sm font-bold text-indigo-900 dark:text-indigo-300 mb-2">
                    Solusi Teknis ArkaWeb
                  </h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {selectedProject.solution}
                  </p>
                </div>
              </div>

              {/* Deliverables Checklist */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                  Komponen & Deliverables yang Diserahkan
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedProject.deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Attributable Testimonial */}
              {selectedProject.testimonial && (
                <div className="p-6 rounded-2xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
                  <p className="text-sm sm:text-base italic text-slate-800 dark:text-slate-200 leading-relaxed">
                    "{selectedProject.testimonial.quote}"
                  </p>
                  <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between">
                    <div>
                      <div className="text-sm font-bold text-slate-900 dark:text-white">
                        {selectedProject.testimonial.author}
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">
                        {selectedProject.testimonial.role} · {selectedProject.testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer Actions */}
            <div className="px-6 py-4 bg-slate-50 dark:bg-slate-900/90 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 sticky bottom-0">
              <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                Tech Stack: {selectedProject.techStack.join(' · ')}
              </span>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="flex-1 sm:flex-none px-4 py-2.5 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
                >
                  Tutup
                </button>
                <button
                  onClick={() => {
                    const proj = selectedProject;
                    setSelectedProject(null);
                    onSelectProjectForBooking(proj);
                  }}
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-sm transition-all cursor-pointer whitespace-nowrap"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Pesan Proyek Serupa Ini</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
