import React, { useState } from 'react';
import { ScreenType } from './Header';

interface FooterProps {
  onNavigate: (screen: ScreenType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
      setSubscribed(false);
    }, 4000);
  };

  return (
    <footer className="w-full bg-[#060d24] text-[#bcc9cd] border-t border-[#181e36]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16">
          {/* Brand info */}
          <div className="lg:col-span-2 space-y-4">
            <button
              onClick={() => onNavigate('curriculum')}
              className="flex items-center gap-3 text-left group"
            >
              <img
                alt="CodeMyWay Brand Logo"
                className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida/AEtjO1UVnPye644MleWGeIw-bTWGN3My8z0SAlm7qko9NNH9FHZIiekwpYUIvRBOvRkfhCQJmOMsjwanwb8unWPHAu0rWMvPoE8CKdsd_kQeD_wl8MFaiQT87YFspmSeWExArQgLZeDYVZC1Guqms_XwqO3QtKmtt5VJm2gOLIQhMpgRzCGiW2JmC0gb0UlTjE1M78C3-GZmHA2bMVkFwtvAsT1COQsr_U_OqaV1tR5B7bbPgT0U1oPDbXU4pSQ"
              />
              <span className="font-['Plus_Jakarta_Sans'] text-xl text-[#dce1ff] font-bold tracking-tight">
                CodeMyWay Academy
              </span>
            </button>

            <p className="font-['Inter'] text-[13px] leading-relaxed max-w-sm text-[#bcc9cd]">
              Premier institute for data analytics, machine learning engineering, and algorithmic systems. Mentorship exclusively delivered by senior technologists from premier Indian Institutes of Technology.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded bg-[#181e36] font-['JetBrains_Mono'] text-[10px] text-[#4edea3] border border-[#4edea3]/20">
                <span className="material-symbols-outlined text-xs">verified_user</span>
                ISO 9001:2015 Accredited
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded bg-[#181e36] font-['JetBrains_Mono'] text-[10px] text-[#4cd7f6] border border-[#4cd7f6]/20">
                <span className="material-symbols-outlined text-xs">military_tech</span>
                Govt Recognized EduTech
              </div>
            </div>
          </div>

          {/* Tracks */}
          <div>
            <h4 className="font-['JetBrains_Mono'] text-xs text-[#dce1ff] uppercase mb-4 tracking-wider font-semibold">
              Curriculum Tracks
            </h4>
            <ul className="space-y-2.5 font-['Inter'] text-[13px]">
              <li>
                <button
                  onClick={() => onNavigate('curriculum')}
                  className="hover:text-[#4cd7f6] transition-colors text-left"
                >
                  Advanced Data Analytics
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('curriculum')}
                  className="hover:text-[#4cd7f6] transition-colors text-left"
                >
                  Machine Learning &amp; MLOps
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('curriculum')}
                  className="hover:text-[#4cd7f6] transition-colors text-left"
                >
                  Quantitative Algorithmic Systems
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('curriculum')}
                  className="hover:text-[#4cd7f6] transition-colors text-left"
                >
                  Enterprise Big Data Pipelines
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('curriculum')}
                  className="hover:text-[#4cd7f6] transition-colors text-left"
                >
                  Full-Stack GenAI Applications
                </button>
              </li>
            </ul>
          </div>

          {/* Institutional Rigor */}
          <div>
            <h4 className="font-['JetBrains_Mono'] text-xs text-[#dce1ff] uppercase mb-4 tracking-wider font-semibold">
              Institutional Rigor
            </h4>
            <ul className="space-y-2.5 font-['Inter'] text-[13px]">
              <li>
                <button
                  onClick={() => onNavigate('mentors-iit-nit')}
                  className="hover:text-[#4cd7f6] transition-colors text-left"
                >
                  IIT &amp; NIT Faculty Directory
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('pedagogy-live-reviews')}
                  className="hover:text-[#4cd7f6] transition-colors text-left"
                >
                  1-on-1 Code Review System
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('student-outcomes')}
                  className="hover:text-[#4cd7f6] transition-colors text-left"
                >
                  Audited Placement Ledger
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('pricing-scholarships')}
                  className="hover:text-[#4cd7f6] transition-colors text-left"
                >
                  Merit-Based Fellowships
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('pedagogy-live-reviews')}
                  className="hover:text-[#4cd7f6] transition-colors text-left"
                >
                  Capstone Lab Architecture
                </button>
              </li>
            </ul>
          </div>

          {/* Cohort Intelligence newsletter */}
          <div>
            <h4 className="font-['JetBrains_Mono'] text-xs text-[#dce1ff] uppercase mb-4 tracking-wider font-semibold">
              Cohort Intelligence
            </h4>
            <p className="font-['Inter'] text-[13px] text-[#bcc9cd] mb-3 leading-relaxed">
              Receive bi-weekly algorithmic papers, tech salary surveys, and test prep modules.
            </p>
            <form onSubmit={handleSubscribe} className="flex items-center gap-2 bg-[#181e36] p-1 rounded border border-[#222941]">
              <input
                required
                type="email"
                placeholder="engineer@domain.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent px-3 py-1.5 font-['JetBrains_Mono'] text-xs text-[#dce1ff] placeholder:text-[#869397] focus:outline-none"
              />
              <button
                type="submit"
                className="px-3 py-1.5 bg-[#4cd7f6] text-[#003640] rounded font-['JetBrains_Mono'] text-xs hover:bg-[#89ceff] transition-colors flex items-center justify-center shrink-0"
              >
                <span className="material-symbols-outlined text-sm leading-none">arrow_forward</span>
              </button>
            </form>
            {subscribed && (
              <p className="font-['JetBrains_Mono'] text-[10px] text-[#4edea3] mt-2">
                ✓ Subscribed to Cohort Intelligence Dispatch!
              </p>
            )}
          </div>
        </div>

        {/* Alumni Network Strip */}
        <div className="py-8 bg-[#141a32] rounded-xl px-8 border border-[#222941]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#4edea3]">workspace_premium</span>
              <span className="font-['JetBrains_Mono'] text-xs text-[#dce1ff] uppercase tracking-wider font-semibold">
                Alumni Deployment Network
              </span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-8 font-['JetBrains_Mono'] text-xs font-bold tracking-wider text-[#869397]">
              <span className="hover:text-[#dce1ff] transition-colors">GOOGLE</span>
              <span className="hover:text-[#dce1ff] transition-colors">MICROSOFT</span>
              <span className="hover:text-[#dce1ff] transition-colors">GOLDMAN SACHS</span>
              <span className="hover:text-[#dce1ff] transition-colors">UBER</span>
              <span className="hover:text-[#dce1ff] transition-colors">AMAZON</span>
              <span className="hover:text-[#dce1ff] transition-colors">MORGAN STANLEY</span>
            </div>
          </div>
        </div>

        {/* Sub-footer */}
        <div className="pt-8 mt-8 flex flex-col md:flex-row items-center justify-between gap-4 font-['JetBrains_Mono'] text-[10px] text-[#869397]">
          <p>© 2025 CodeMyWay Institute of Technical Data Systems. All credentials verified by Academic Registry.</p>
          <div className="flex flex-wrap items-center gap-6">
            <button onClick={() => onNavigate('student-outcomes')} className="hover:text-[#dce1ff] transition-colors">
              Audit Reports
            </button>
            <button onClick={() => onNavigate('pedagogy-live-reviews')} className="hover:text-[#dce1ff] transition-colors">
              Pedagogic Charter
            </button>
            <button onClick={() => onNavigate('pricing-scholarships')} className="hover:text-[#dce1ff] transition-colors">
              Security &amp; FERPA Compliance
            </button>
            <button onClick={() => onNavigate('pricing-scholarships')} className="hover:text-[#dce1ff] transition-colors">
              Terms of Enrollment
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
