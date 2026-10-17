import React, { useState } from 'react';
import { CURRICULUM_MODULES, ModuleInfo } from '../data/curriculumData';
import { MENTORS } from '../data/mentorsData';
import { TESTIMONIALS } from '../data/outcomesData';
import { CodeTerminal } from '../components/CodeTerminal';
import { ScreenType } from '../components/Header';

interface CurriculumViewProps {
  onOpenAstModal: () => void;
  onOpenLabSpecsModal: (module: ModuleInfo) => void;
  onOpenApplyModal: () => void;
  onNavigate: (screen: ScreenType) => void;
}

export const CurriculumView: React.FC<CurriculumViewProps> = ({
  onOpenAstModal,
  onOpenLabSpecsModal,
  onOpenApplyModal,
  onNavigate,
}) => {
  const [activeModuleIndex, setActiveModuleIndex] = useState(0);
  const activeModule = CURRICULUM_MODULES[activeModuleIndex];

  // Application form in bottom section
  const [leadForm, setLeadForm] = useState({
    name: '',
    email: '',
    experience: 'entry',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setLeadForm({ name: '', email: '', experience: 'entry' });
    }, 6000);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col w-full relative overflow-hidden bg-[#0b1229]">
      {/* Ambient Bioluminescent Background Aura & Blueprint Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute -top-40 -right-32 w-[620px] h-[620px] rounded-full bg-[#4cd7f6]/10 blur-[140px]"></div>
        <div className="absolute top-[40%] -left-32 w-[520px] h-[520px] rounded-full bg-[#4edea3]/10 blur-[130px]"></div>
        <div className="absolute bottom-20 right-[15%] w-[480px] h-[480px] rounded-full bg-[#2bb0f5]/10 blur-[150px]"></div>
        <div
          className="w-full h-full"
          style={{
            backgroundImage: 'radial-gradient(rgba(134, 147, 151, 0.12) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        ></div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-10 pb-20">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-12">
          {/* Top admissions badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#222941] shadow-[0_0_18px_rgba(76,215,246,0.18)] mb-6 border border-[#4cd7f6]/20">
            <span className="w-2 h-2 rounded-full bg-[#4edea3] animate-pulse"></span>
            <span className="font-['JetBrains_Mono'] text-xs text-[#4cd7f6] font-semibold tracking-wide">
              Summer 2025 Cohort Admissions Open • Strictly 30 Seats per Mentor
            </span>
          </div>

          <h1 className="font-['Plus_Jakarta_Sans'] text-4xl sm:text-5xl lg:text-[56px] lg:leading-[64px] text-[#dce1ff] mb-6 tracking-tight font-extrabold text-balance">
            Master Data Analysis <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4cd7f6] via-[#89ceff] to-[#4edea3]">
              Directly From IIT &amp; NIT Leaders
            </span>
          </h1>

          <p className="font-['Inter'] text-base sm:text-lg text-[#bcc9cd] max-w-2xl mx-auto mb-9 leading-relaxed">
            A rigorous, production-grade analytics apprenticeship. Move past syntax memorization into high-throughput Python pipelines, complex SQL windowing, and predictive frameworks governed by line-by-line alumni code reviews.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
            <button
              onClick={onOpenApplyModal}
              className="inline-flex items-center gap-3 px-8 py-3.5 rounded bg-[#4cd7f6] text-[#003640] font-['Plus_Jakarta_Sans'] text-base font-bold shadow-[0_0_30px_rgba(76,215,246,0.45)] hover:shadow-[0_0_42px_rgba(76,215,246,0.7)] hover:-translate-y-0.5 transition-all duration-200"
            >
              <span>Apply for Next Cohort</span>
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </button>

            <button
              onClick={() => scrollToSection('curriculum-section')}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded bg-[#222941] text-[#dce1ff] font-['Plus_Jakarta_Sans'] text-base font-semibold hover:bg-[#2d344c] hover:text-[#4cd7f6] transition-all border border-[#3d494c]"
            >
              <span className="material-symbols-outlined text-[#4edea3]">terminal</span>
              <span>Explore Curriculum &amp; Labs</span>
            </button>
          </div>

          {/* Social Proof Bar */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 px-6 py-3 rounded-full bg-[#141a32] text-[#bcc9cd] font-['JetBrains_Mono'] text-xs border border-[#222941]">
            <div className="flex items-center gap-1.5 text-[#4edea3]">
              <span className="material-symbols-outlined text-base">star</span>
              <span className="font-bold text-[#dce1ff]">4.92 / 5.0</span>
              <span className="text-[#bcc9cd] font-normal">Rating across 1,800+ Graduates</span>
            </div>
            <span className="hidden sm:inline w-1 h-1 rounded-full bg-[#3d494c]"></span>
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-base text-[#4cd7f6]">verified</span>
              <span>Dual IIT-Roorkee / NIT-Trichy Faculty Oversight</span>
            </div>
          </div>
        </div>

        {/* Hero Interactive Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-2">
          {/* Left: Code Terminal */}
          <div className="lg:col-span-8 flex flex-col justify-between">
            <CodeTerminal onOpenAstModal={onOpenAstModal} />
          </div>

          {/* Right: Live Cohort Telemetry */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="p-6 rounded-xl bg-[#222941] shadow-lg border border-[#2d344c] flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-['JetBrains_Mono'] text-xs text-[#4cd7f6] uppercase font-bold tracking-wider">
                    Live Cohort Telemetry
                  </span>
                  <span className="px-2 py-0.5 rounded bg-[#181e36] font-['JetBrains_Mono'] text-[10px] text-[#4edea3] border border-[#4edea3]/20 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4edea3] animate-pulse"></span>
                    Active Lab
                  </span>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between font-['JetBrains_Mono'] text-xs mb-1 text-[#dce1ff]">
                      <span>SQL Optimization Benchmark</span>
                      <span className="text-[#4edea3] font-bold">96 / 100</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-[#181e36]">
                      <div className="h-1.5 rounded-full bg-[#4edea3]" style={{ width: '96%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between font-['JetBrains_Mono'] text-xs mb-1 text-[#dce1ff]">
                      <span>Statistical Rigor (p-val &amp; Power)</span>
                      <span className="text-[#4cd7f6] font-bold">92 / 100</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-[#181e36]">
                      <div className="h-1.5 rounded-full bg-[#4cd7f6]" style={{ width: '92%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between font-['JetBrains_Mono'] text-xs mb-1 text-[#dce1ff]">
                      <span>Production Pipeline Architecture</span>
                      <span className="text-[#89ceff] font-bold">89 / 100</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-[#181e36]">
                      <div className="h-1.5 rounded-full bg-[#89ceff]" style={{ width: '89%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#2d344c] flex items-center justify-between">
                <span className="font-['JetBrains_Mono'] text-xs text-[#bcc9cd]">
                  Avg. Student Time to 1st Offer
                </span>
                <span className="font-['Plus_Jakarta_Sans'] text-xl text-[#dce1ff] font-bold">
                  48 Days
                </span>
              </div>
            </div>

            {/* Strict Elite Standard Card */}
            <div className="p-6 rounded-xl bg-[#141a32] border border-[#222941] flex flex-col justify-between">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-[#181e36] flex items-center justify-center text-[#4cd7f6] border border-[#4cd7f6]/20">
                  <span className="material-symbols-outlined">badge</span>
                </div>
                <div>
                  <h4 className="font-['JetBrains_Mono'] text-sm text-[#dce1ff] font-bold">
                    Strict Elite Standard
                  </h4>
                  <p className="font-['Inter'] text-xs text-[#bcc9cd]">
                    Zero compromise faculty requirement
                  </p>
                </div>
              </div>
              <p className="font-['Inter'] text-xs text-[#869397] leading-relaxed">
                100% of lead instructors have cleared competitive JEE Advanced ranks and spearheaded enterprise data infrastructures across global unicorns.
              </p>
            </div>
          </div>
        </div>

        {/* Global Leaders Logo Strip */}
        <div className="mt-16 pt-10 border-t border-[#181e36]">
          <p className="font-['JetBrains_Mono'] text-[11px] text-center uppercase tracking-widest text-[#869397] mb-6">
            Our Alumni Build Analytics Engines At Global Leaders
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-14 font-['Plus_Jakarta_Sans'] text-xl font-extrabold text-[#323851] tracking-wider">
            <span className="hover:text-[#4cd7f6] transition-colors duration-200 cursor-default">GOOGLE</span>
            <span className="hover:text-[#4cd7f6] transition-colors duration-200 cursor-default">MICROSOFT</span>
            <span className="hover:text-[#4cd7f6] transition-colors duration-200 cursor-default">AMAZON</span>
            <span className="hover:text-[#4cd7f6] transition-colors duration-200 cursor-default">GOLDMAN SACHS</span>
            <span className="hover:text-[#4cd7f6] transition-colors duration-200 cursor-default">UBER</span>
            <span className="hover:text-[#4cd7f6] transition-colors duration-200 cursor-default">SWIGGY</span>
            <span className="hover:text-[#4cd7f6] transition-colors duration-200 cursor-default">STRIPE</span>
          </div>
        </div>
      </section>

      {/* Section 2: 100% IIT & NIT Faculty Guarantee */}
      <section className="py-20 bg-[#060d24]/60 relative border-y border-[#181e36]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#181e36] font-['JetBrains_Mono'] text-xs text-[#4edea3] font-bold mb-3 tracking-wider uppercase border border-[#4edea3]/20">
                <span className="material-symbols-outlined text-xs">school</span>
                Elite Pedigree Benchmark
              </div>
              <h2 className="font-['Plus_Jakarta_Sans'] text-3xl sm:text-4xl text-[#dce1ff] font-bold tracking-tight">
                The 100% IIT &amp; NIT Faculty Guarantee
              </h2>
              <p className="font-['Inter'] text-sm sm:text-base text-[#bcc9cd] max-w-2xl mt-2 leading-relaxed">
                No junior TAs. No outsourced recorded slides. Every single technical mentor holds an engineering degree from premier Indian Institutes and leads high-scale production systems today.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="px-4 py-3 rounded-lg bg-[#181e36] font-['JetBrains_Mono'] text-xs text-[#dce1ff] border border-[#222941]">
                <span className="text-[#4cd7f6] font-bold text-sm">1 : 30</span> Max Batch Ratio
              </div>
              <div className="px-4 py-3 rounded-lg bg-[#181e36] font-['JetBrains_Mono'] text-xs text-[#dce1ff] border border-[#222941]">
                <span className="text-[#4edea3] font-bold text-sm">1-on-1</span> Weekly Code Syncs
              </div>
            </div>
          </div>

          {/* 3 Faculty Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {MENTORS.slice(0, 3).map((mentor) => (
              <div
                key={mentor.id}
                className="p-6 rounded-xl bg-[#141a32] shadow-xl relative group hover:bg-[#181e36] transition-all duration-300 border border-[#222941]"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="relative">
                    <img
                      className="w-20 h-20 rounded-lg object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-300 ring-1 ring-[#3d494c]"
                      src={mentor.image}
                      alt={mentor.alt}
                    />
                    <div
                      className={`absolute -bottom-2 -right-2 px-1.5 py-0.5 rounded font-['JetBrains_Mono'] text-[10px] font-bold ${
                        mentor.companyTagColor === 'secondary'
                          ? 'bg-[#4edea3] text-[#003824]'
                          : mentor.companyTagColor === 'primary'
                          ? 'bg-[#4cd7f6] text-[#003640]'
                          : 'bg-[#2bb0f5] text-[#00344d]'
                      }`}
                    >
                      {mentor.companyTag}
                    </div>
                  </div>

                  <div className="px-2.5 py-1 rounded bg-[#222941] font-['JetBrains_Mono'] text-xs text-[#4edea3] font-bold border border-[#4edea3]/20">
                    {mentor.collegeTag}
                  </div>
                </div>

                <h3 className="font-['Plus_Jakarta_Sans'] text-xl text-[#dce1ff] font-bold mb-1">
                  {mentor.name}
                </h3>
                <p className="font-['JetBrains_Mono'] text-xs text-[#4cd7f6] mb-3 font-medium">
                  {mentor.role}
                </p>
                <p className="font-['Inter'] text-xs text-[#bcc9cd] mb-6 leading-relaxed">
                  {mentor.bio}
                </p>

                <div className="space-y-2 pt-4 border-t border-[#2d344c] font-['JetBrains_Mono'] text-xs">
                  <div className="flex items-center justify-between text-[#869397]">
                    <span>Track Specialization:</span>
                    <span className="text-[#dce1ff] font-semibold">{mentor.trackSpecialization}</span>
                  </div>
                  <div className="flex items-center justify-between text-[#869397]">
                    <span>Mentored Cohorts:</span>
                    <span className="text-[#4edea3] font-bold">
                      {mentor.mentoredCohorts} • {mentor.placementRate}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 3 Pillar feature triad below faculty */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-lg bg-[#181e36] flex items-start gap-4 border border-[#222941]">
              <span className="material-symbols-outlined text-[#4cd7f6] text-2xl mt-1">code_blocks</span>
              <div>
                <h4 className="font-['Plus_Jakarta_Sans'] text-base text-[#dce1ff] font-bold mb-1">
                  1-on-1 Code Debugging
                </h4>
                <p className="font-['Inter'] text-xs text-[#bcc9cd] leading-relaxed">
                  Live weekly 45-minute screen-shares. Your mentor refactors your SQL query plans and Pandas bottlenecks in real time.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-lg bg-[#181e36] flex items-start gap-4 border border-[#222941]">
              <span className="material-symbols-outlined text-[#4edea3] text-2xl mt-1">architecture</span>
              <div>
                <h4 className="font-['Plus_Jakarta_Sans'] text-base text-[#dce1ff] font-bold mb-1">
                  Production PR Reviews
                </h4>
                <p className="font-['Inter'] text-xs text-[#bcc9cd] leading-relaxed">
                  Submit pull requests on GitHub just like a Tier-1 tech team. No project is marked complete until your IIT mentor approves the merge.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-lg bg-[#181e36] flex items-start gap-4 border border-[#222941]">
              <span className="material-symbols-outlined text-[#89ceff] text-2xl mt-1">hub</span>
              <div>
                <h4 className="font-['Plus_Jakarta_Sans'] text-base text-[#dce1ff] font-bold mb-1">
                  Direct Alumni Network
                </h4>
                <p className="font-['Inter'] text-xs text-[#bcc9cd] leading-relaxed">
                  Gain closed-room internal referrals directly into engineering orgs across Bangalore, Hyderabad, Gurgaon, and Silicon Valley.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: The 16-Week Production Curriculum */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-12" id="curriculum-section">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#181e36] font-['JetBrains_Mono'] text-xs text-[#4cd7f6] font-bold uppercase mb-3 border border-[#4cd7f6]/20">
            <span className="material-symbols-outlined text-xs">dataset</span>
            Syllabus Architecture
          </div>
          <h2 className="font-['Plus_Jakarta_Sans'] text-3xl sm:text-4xl text-[#dce1ff] font-bold tracking-tight">
            The 16-Week Production Curriculum
          </h2>
          <p className="font-['Inter'] text-sm sm:text-base text-[#bcc9cd] mt-2 leading-relaxed">
            Designed from zero to enterprise scale. We discard toy datasets like Titanic or Iris to train you on gigabyte-scale transaction logs, streaming telemetry, and financial ledgers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Module Switcher Tabs (Left) */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {CURRICULUM_MODULES.map((mod, idx) => {
              const isSelected = idx === activeModuleIndex;
              return (
                <button
                  key={mod.id}
                  onClick={() => setActiveModuleIndex(idx)}
                  className={`text-left p-5 rounded-lg transition-all border ${
                    isSelected
                      ? 'bg-[#222941] border-[#4cd7f6] shadow-[0_0_20px_rgba(76,215,246,0.15)]'
                      : 'bg-[#141a32] border-[#222941] hover:bg-[#181e36]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span
                      className={`font-['JetBrains_Mono'] text-[10px] font-bold uppercase ${
                        isSelected ? 'text-[#4cd7f6]' : 'text-[#869397]'
                      }`}
                    >
                      {mod.number} • {mod.weeks}
                    </span>
                    <span
                      className={`material-symbols-outlined text-sm ${
                        isSelected ? 'text-[#4cd7f6]' : 'text-[#869397]'
                      }`}
                    >
                      {mod.icon}
                    </span>
                  </div>
                  <h4 className="font-['Plus_Jakarta_Sans'] text-base text-[#dce1ff] font-bold">
                    {mod.title}
                  </h4>
                  <p className="font-['Inter'] text-xs text-[#bcc9cd] mt-1">
                    {mod.subtitle}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Module Detail Card (Right) */}
          <div className="lg:col-span-7 bg-[#181e36] p-8 rounded-xl shadow-xl border border-[#2d344c] min-h-[460px] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded bg-[#222941] text-[#4cd7f6] font-['JetBrains_Mono'] text-xs font-bold uppercase border border-[#4cd7f6]/20">
                  Deep Dive Architecture
                </span>
                <span className="font-['JetBrains_Mono'] text-xs text-[#869397]">
                  Hands-on Lab Hours: {activeModule.hours}h
                </span>
              </div>

              <h3 className="font-['Plus_Jakarta_Sans'] text-2xl text-[#dce1ff] font-bold mb-3">
                {activeModule.number}: {activeModule.title}
              </h3>

              <p className="font-['Inter'] text-sm text-[#bcc9cd] mb-6 leading-relaxed">
                {activeModule.description}
              </p>

              <div className="space-y-3 mb-6">
                {activeModule.bullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#4edea3] text-sm mt-0.5">check</span>
                    <span className="font-['Inter'] text-xs text-[#dce1ff]">{bullet}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Capstone Box */}
            <div className="p-4 rounded-lg bg-[#141a32] border border-[#222941] flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#4cd7f6]">folder_open</span>
                <div>
                  <div className="font-['JetBrains_Mono'] text-[10px] text-[#869397]">Capstone Deliverable</div>
                  <div className="font-['JetBrains_Mono'] text-xs text-[#dce1ff] font-semibold">
                    {activeModule.capstone}
                  </div>
                </div>
              </div>

              <button
                onClick={() => onOpenLabSpecsModal(activeModule)}
                className="px-4 py-2 rounded bg-[#222941] text-[#4cd7f6] hover:bg-[#4cd7f6] hover:text-[#003640] font-['JetBrains_Mono'] text-xs font-semibold transition-all border border-[#4cd7f6]/20 whitespace-nowrap"
              >
                Download Lab Specs
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: The 3-Pillar Pedagogy Blueprint */}
      <section className="py-20 bg-[#141a32]/70 border-y border-[#181e36]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-['Plus_Jakarta_Sans'] text-3xl sm:text-4xl text-[#dce1ff] font-bold tracking-tight">
              The 3-Pillar Pedagogy Blueprint
            </h2>
            <p className="font-['Inter'] text-sm sm:text-base text-[#bcc9cd] mt-2 leading-relaxed">
              How our students achieve senior-level technical depth without wasting years on fragmented online videos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-xl bg-[#181e36] shadow-md border border-[#222941] flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#222941] flex items-center justify-center text-[#4cd7f6] mb-6 border border-[#4cd7f6]/20">
                  <span className="material-symbols-outlined text-2xl">school</span>
                </div>
                <span className="font-['JetBrains_Mono'] text-xs text-[#4cd7f6] uppercase font-bold tracking-wider">
                  PILLAR 01
                </span>
                <h3 className="font-['Plus_Jakarta_Sans'] text-xl text-[#dce1ff] font-bold mt-1 mb-3">
                  Academic Rigor from IIT/NIT
                </h3>
                <p className="font-['Inter'] text-xs text-[#bcc9cd] leading-relaxed">
                  Every theoretical concept is anchored to fundamental mathematical principles. Understand the algebraic calculus behind gradient descent and the probabilistic theory governing A/B testing thresholds.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-[#2d344c] font-['JetBrains_Mono'] text-xs text-[#4edea3]">
                Mathematical Intuition Labs Included
              </div>
            </div>

            <div className="p-8 rounded-xl bg-[#181e36] shadow-md border border-[#222941] flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#222941] flex items-center justify-center text-[#4edea3] mb-6 border border-[#4edea3]/20">
                  <span className="material-symbols-outlined text-2xl">commit</span>
                </div>
                <span className="font-['JetBrains_Mono'] text-xs text-[#4edea3] uppercase font-bold tracking-wider">
                  PILLAR 02
                </span>
                <h3 className="font-['Plus_Jakarta_Sans'] text-xl text-[#dce1ff] font-bold mt-1 mb-3">
                  Line-by-Line Code Reviews
                </h3>
                <p className="font-['Inter'] text-xs text-[#bcc9cd] leading-relaxed">
                  Submit your homework via Git branches. IIT alumni critique your cyclomatic complexity, memory profiling, and documentation standards. No code is approved until it matches production grade.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-[#2d344c] font-['JetBrains_Mono'] text-xs text-[#4edea3]">
                Average 18+ PRs Merged per Student
              </div>
            </div>

            <div className="p-8 rounded-xl bg-[#181e36] shadow-md border border-[#222941] flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#222941] flex items-center justify-center text-[#89ceff] mb-6 border border-[#89ceff]/20">
                  <span className="material-symbols-outlined text-2xl">rocket_launch</span>
                </div>
                <span className="font-['JetBrains_Mono'] text-xs text-[#89ceff] uppercase font-bold tracking-wider">
                  PILLAR 03
                </span>
                <h3 className="font-['Plus_Jakarta_Sans'] text-xl text-[#dce1ff] font-bold mt-1 mb-3">
                  Mock Defense &amp; Placement
                </h3>
                <p className="font-['Inter'] text-xs text-[#bcc9cd] leading-relaxed">
                  Live algorithmic whiteboarding and architectural system design interviews conducted directly with engineering managers from Uber, Amazon, and Goldman Sachs before you ever enter a real interview.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-[#2d344c] font-['JetBrains_Mono'] text-xs text-[#4edea3]">
                Direct Internal Referrals Guaranteed
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Measurable Impact On Real Engineering Careers */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#181e36] font-['JetBrains_Mono'] text-xs text-[#4edea3] font-bold uppercase mb-3 border border-[#4edea3]/20">
              <span className="material-symbols-outlined text-xs">trending_up</span>
              Audited Career Ledger
            </div>
            <h2 className="font-['Plus_Jakarta_Sans'] text-3xl sm:text-4xl text-[#dce1ff] font-bold tracking-tight">
              Measurable Impact On Real Engineering Careers
            </h2>
            <p className="font-['Inter'] text-sm sm:text-base text-[#bcc9cd] mt-3 mb-6 leading-relaxed">
              Our graduates don't just find jobs; they step into high-impact data analytics roles where they define core metrics, build pipelines, and drive multi-million-dollar decisions.
            </p>
            <div className="p-4 rounded-lg bg-[#141a32] border border-[#222941] font-['JetBrains_Mono'] text-xs text-[#869397] flex items-center gap-3">
              <span className="material-symbols-outlined text-[#4edea3]">verified_user</span>
              <span>Placement statistics audited by third-party accounting registry (FY24 Cohorts).</span>
            </div>
          </div>

          {/* 4 Metric Cards */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-4">
            <div className="p-6 rounded-xl bg-[#181e36] shadow-lg border border-[#222941] flex flex-col justify-between">
              <span className="font-['JetBrains_Mono'] text-xs text-[#869397]">Average Compensation Hike</span>
              <div className="font-['Plus_Jakarta_Sans'] text-3xl sm:text-4xl text-[#4edea3] font-extrabold my-2">
                142%
              </div>
              <span className="font-['Inter'] text-xs text-[#bcc9cd]">Across non-tech to analytics transitions</span>
            </div>

            <div className="p-6 rounded-xl bg-[#181e36] shadow-lg border border-[#222941] flex flex-col justify-between">
              <span className="font-['JetBrains_Mono'] text-xs text-[#869397]">Placement Rate</span>
              <div className="font-['Plus_Jakarta_Sans'] text-3xl sm:text-4xl text-[#4cd7f6] font-extrabold my-2">
                94.8%
              </div>
              <span className="font-['Inter'] text-xs text-[#bcc9cd]">Secured offers within 120 days</span>
            </div>

            <div className="p-6 rounded-xl bg-[#181e36] shadow-lg border border-[#222941] flex flex-col justify-between">
              <span className="font-['JetBrains_Mono'] text-xs text-[#869397]">Average Domestic Package</span>
              <div className="font-['Plus_Jakarta_Sans'] text-3xl sm:text-4xl text-[#89ceff] font-extrabold my-2">
                ₹18.5 LPA
              </div>
              <span className="font-['Inter'] text-xs text-[#bcc9cd]">Top cohort quartile achieved ₹34+ LPA</span>
            </div>

            <div className="p-6 rounded-xl bg-[#181e36] shadow-lg border border-[#222941] flex flex-col justify-between">
              <span className="font-['JetBrains_Mono'] text-xs text-[#869397]">Cohort Exclusivity</span>
              <div className="font-['Plus_Jakarta_Sans'] text-3xl sm:text-4xl text-[#dce1ff] font-extrabold my-2">
                30 : 1
              </div>
              <span className="font-['Inter'] text-xs text-[#bcc9cd]">Strict mentor-to-student ceiling</span>
            </div>
          </div>
        </div>

        {/* 2 Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.slice(0, 2).map((item) => (
            <div
              key={item.id}
              className="p-8 rounded-xl bg-[#141a32] shadow-xl relative flex flex-col justify-between border border-[#222941]"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <img
                      className="w-12 h-12 rounded-full object-cover ring-1 ring-[#3d494c]"
                      src={item.image}
                      alt={item.name}
                    />
                    <div>
                      <h4 className="font-['Plus_Jakarta_Sans'] text-base text-[#dce1ff] font-bold">
                        {item.name}
                      </h4>
                      <p className="font-['JetBrains_Mono'] text-[11px] text-[#869397]">
                        {item.cohort}
                      </p>
                    </div>
                  </div>

                  <div className="px-2.5 py-1 rounded bg-[#181e36] font-['JetBrains_Mono'] text-xs text-[#4edea3] font-semibold border border-[#4edea3]/20">
                    {item.salaryTransition}
                  </div>
                </div>

                <p className="font-['Inter'] text-sm text-[#bcc9cd] italic mb-6 leading-relaxed">
                  "{item.quote}"
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-[#2d344c] font-['JetBrains_Mono'] text-xs">
                <span className="text-[#dce1ff] font-semibold">
                  Now: {item.newRole} @ {item.company}
                </span>
                <span className="text-[#4cd7f6]">Verified Placement</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 6: Apply & Screening Section */}
      <section className="py-20 relative max-w-7xl mx-auto px-6 lg:px-12" id="apply-section">
        <div className="rounded-2xl p-8 sm:p-14 bg-gradient-to-br from-[#181e36] via-[#141a32] to-[#060d24] shadow-2xl relative overflow-hidden border border-[#2d344c]">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#4cd7f6]/10 blur-[100px] pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            {/* Left Info */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#222941] font-['JetBrains_Mono'] text-xs text-[#4edea3] mb-4 border border-[#4edea3]/20">
                <span className="w-2 h-2 rounded-full bg-[#4edea3] animate-pulse"></span>
                Strict Capacity Limit: 30 Engineers per Batch
              </div>

              <h2 className="font-['Plus_Jakarta_Sans'] text-3xl sm:text-4xl text-[#dce1ff] font-bold tracking-tight mb-4">
                Accelerate Your Data Engineering &amp; Analytics Trajectory
              </h2>

              <p className="font-['Inter'] text-sm sm:text-base text-[#bcc9cd] max-w-xl mb-8 leading-relaxed">
                Admissions require a technical aptitude screening and a 20-minute diagnostic session with an IIT/NIT mentor to confirm track suitability.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="p-3.5 rounded bg-[#181e36] border border-[#222941]">
                  <div className="font-['JetBrains_Mono'] text-[11px] text-[#869397]">Application Deadline</div>
                  <div className="font-['Plus_Jakarta_Sans'] text-lg text-[#dce1ff] font-bold mt-1">
                    July 15, 2025
                  </div>
                </div>

                <div className="p-3.5 rounded bg-[#181e36] border border-[#222941]">
                  <div className="font-['JetBrains_Mono'] text-[11px] text-[#869397]">Cohort Start Date</div>
                  <div className="font-['Plus_Jakarta_Sans'] text-lg text-[#4cd7f6] font-bold mt-1">
                    August 02, 2025
                  </div>
                </div>

                <div className="p-3.5 rounded bg-[#181e36] border border-[#222941]">
                  <div className="font-['JetBrains_Mono'] text-[11px] text-[#869397]">Merit Scholarships</div>
                  <div className="font-['Plus_Jakarta_Sans'] text-lg text-[#4edea3] font-bold mt-1">
                    Up to 40% Off
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 text-[#bcc9cd] font-['JetBrains_Mono'] text-xs">
                <span className="material-symbols-outlined text-[#4edea3] text-sm">shield</span>
                <span>No upfront payment required for aptitude evaluation test.</span>
              </div>
            </div>

            {/* Right: Lead Capture Box */}
            <div className="lg:col-span-5 bg-[#060d24]/80 p-6 sm:p-8 rounded-xl backdrop-blur-xl border border-[#222941]">
              <h3 className="font-['Plus_Jakarta_Sans'] text-xl text-[#dce1ff] font-bold mb-2">
                Request Screening &amp; Syllabus
              </h3>
              <p className="font-['Inter'] text-xs text-[#bcc9cd] mb-6 leading-relaxed">
                Receive full test prep syllabus and capstone code repository access.
              </p>

              <form className="space-y-4" onSubmit={handleFormSubmit}>
                <div>
                  <label className="block font-['JetBrains_Mono'] text-[10px] uppercase tracking-wider text-[#869397] mb-1.5">
                    Full Name
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Aditi Sharma"
                    value={leadForm.name}
                    onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded bg-[#181e36] text-[#dce1ff] font-['Inter'] text-xs border border-[#3d494c] focus:outline-none focus:border-[#4cd7f6] placeholder:text-[#869397]"
                  />
                </div>

                <div>
                  <label className="block font-['JetBrains_Mono'] text-[10px] uppercase tracking-wider text-[#869397] mb-1.5">
                    Official Work or University Email
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="aditi@company.com"
                    value={leadForm.email}
                    onChange={(e) => setLeadForm({ ...leadForm, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded bg-[#181e36] text-[#dce1ff] font-['Inter'] text-xs border border-[#3d494c] focus:outline-none focus:border-[#4cd7f6] placeholder:text-[#869397]"
                  />
                </div>

                <div>
                  <label className="block font-['JetBrains_Mono'] text-[10px] uppercase tracking-wider text-[#869397] mb-1.5">
                    Primary Experience Level
                  </label>
                  <select
                    value={leadForm.experience}
                    onChange={(e) => setLeadForm({ ...leadForm, experience: e.target.value })}
                    className="w-full px-4 py-2.5 rounded bg-[#181e36] text-[#dce1ff] font-['Inter'] text-xs border border-[#3d494c] focus:outline-none focus:border-[#4cd7f6]"
                  >
                    <option value="entry">Undergrad / Final Year (Engineering/Science)</option>
                    <option value="mid">1-3 Years as Software Engineer or Analyst</option>
                    <option value="lead">3+ Years Looking to Transition to Lead/Managerial</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded bg-[#4cd7f6] text-[#003640] font-['Plus_Jakarta_Sans'] text-sm font-bold shadow-[0_0_24px_rgba(76,215,246,0.35)] hover:shadow-[0_0_32px_rgba(76,215,246,0.55)] transition-all flex items-center justify-center gap-2 mt-2"
                >
                  <span>Book IIT Technical Screening</span>
                  <span className="material-symbols-outlined text-lg">arrow_forward</span>
                </button>
              </form>

              {formSubmitted && (
                <div className="mt-4 p-3 rounded bg-[#181e36] border border-[#4edea3]/40 font-['JetBrains_Mono'] text-xs text-[#4edea3] text-center flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-sm">check_circle</span>
                  <span>Registration received! Diagnostic link dispatched to your inbox.</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
