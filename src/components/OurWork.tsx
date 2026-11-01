import React, { useState } from 'react';
import { PORTFOLIO_PROJECTS, TESTIMONIALS } from '../data/content';
import { PortfolioProject } from '../types';
import { MapPin, Users, Calendar, Award, Star, CheckCircle2, Quote, ArrowRight, X } from 'lucide-react';

export const OurWork: React.FC = () => {
  const [activeProject, setActiveProject] = useState<PortfolioProject | null>(null);

  return (
    <section id="work" className="py-20 bg-[#0a0e14] border-t border-[#d4af37]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-semibold uppercase tracking-widest text-[#d4af37] mb-2">
            Proven Track Record · हमारा काम
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-white mb-4">
            Milestone Celebrations & <span className="text-gold-gradient">Case Studies</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Take a deep dive into prominent weddings, high-level corporate conclaves, and private parties executed across premier venues in Dhanbad and Jharkhand.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {PORTFOLIO_PROJECTS.map((project) => (
            <div
              key={project.id}
              className="bg-[#0f141d] rounded-xl border border-slate-800 overflow-hidden flex flex-col group hover:border-[#d4af37]/50 transition-all duration-300 shadow-xl"
            >
              {/* Project Image Banner */}
              <div className="relative h-60 overflow-hidden bg-slate-900">
                <img
                  src={project.coverImage}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f141d] via-[#0f141d]/40 to-transparent" />
                
                {/* Metric Badge */}
                <div className="absolute top-4 right-4 bg-[#0a0e14]/90 border border-[#d4af37]/40 px-3 py-1.5 rounded-lg backdrop-blur-md">
                  <div className="font-mono text-base font-bold text-[#d4af37] tabular-nums">
                    {project.highlightMetric}
                  </div>
                  <div className="text-[10px] text-slate-300">{project.metricLabel}</div>
                </div>

                <div className="absolute bottom-4 left-5 right-5">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#d4af37]">
                    {project.clientType}
                  </span>
                  <h3 className="font-cinzel text-xl font-bold text-white group-hover:text-[#f3e5ab] transition-colors">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                <div className="grid grid-cols-2 gap-3 p-3 bg-[#0a0e14] rounded-lg border border-slate-800 text-xs">
                  <div className="flex items-center gap-2 text-slate-300">
                    <MapPin className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                    <span className="truncate">{project.venue}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <Users className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                    <span>{project.guestsCount}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300 col-span-2">
                    <Calendar className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                    <span>{project.timeline}</span>
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {project.description}
                </p>

                {/* Scope of Work */}
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-[#d4af37] mb-2">
                    Scope Delivered:
                  </div>
                  <div className="space-y-1.5">
                    {project.scopeOfWork.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400">
                    Location: <strong className="text-white">{project.city}</strong>
                  </span>
                  <button
                    onClick={() => setActiveProject(project)}
                    className="cursor-pointer text-xs font-semibold text-[#d4af37] hover:text-[#f3e5ab] flex items-center gap-1.5 transition-colors"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Client Testimonials Section */}
        <div className="pt-12 border-t border-[#d4af37]/20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-xs font-semibold uppercase tracking-widest text-[#d4af37] mb-1">
              Real Client Voices · ग्राहकों के विचार
            </div>
            <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white">
              Words of Trust from Families & Leaders in Dhanbad
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="bg-[#0f141d] p-5 rounded-xl border border-slate-800 flex flex-col justify-between relative group hover:border-[#d4af37]/40 transition-colors shadow-lg"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex text-amber-400">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current text-[#d4af37]" />
                      ))}
                    </div>
                    <Quote className="w-5 h-5 text-slate-700" />
                  </div>
                  <p className="text-xs text-slate-300 italic leading-relaxed">
                    "{t.review}"
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80">
                  <div className="text-xs font-bold text-white">{t.clientName}</div>
                  <div className="text-[11px] text-[#d4af37] mt-0.5">{t.occasion}</div>
                  <div className="text-[10px] text-slate-400 flex items-center gap-1 mt-1">
                    <MapPin className="w-3 h-3 text-[#d4af37]" />
                    <span>{t.location}</span>
                    <span>·</span>
                    <span>{t.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Case Study Full Modal */}
      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-[#0f141d] border border-[#d4af37]/40 rounded-xl max-w-2xl w-full p-6 relative shadow-2xl space-y-4">
            <button
              onClick={() => setActiveProject(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#d4af37]">
              {activeProject.clientType} · {activeProject.city}
            </div>
            <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white">
              {activeProject.title}
            </h3>
            <div className="relative aspect-video rounded-lg overflow-hidden border border-slate-800">
              <img
                src={activeProject.coverImage}
                alt={activeProject.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {activeProject.description}
            </p>
            <div className="space-y-2 pt-2">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#d4af37]">
                Key Deliverables Executed:
              </div>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {activeProject.scopeOfWork.map((s, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-4 border-t border-slate-800 flex justify-end">
              <button
                onClick={() => setActiveProject(null)}
                className="cursor-pointer px-4 py-2 text-xs font-semibold text-[#0a0e14] bg-[#d4af37] hover:bg-[#c59b27] rounded-md"
              >
                Close Case Study
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
