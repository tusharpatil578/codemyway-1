import React, { useState } from 'react';

export type ScreenType = 
  | 'curriculum' 
  | 'mentors-iit-nit' 
  | 'pedagogy-live-reviews' 
  | 'student-outcomes' 
  | 'pricing-scholarships' 
  | 'student-login';

interface HeaderProps {
  currentScreen: ScreenType;
  onNavigate: (screen: ScreenType) => void;
  onOpenApplyModal: () => void;
  onOpenAdvisorModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentScreen,
  onNavigate,
  onOpenApplyModal,
  onOpenAdvisorModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: ScreenType; label: string }[] = [
    { id: 'curriculum', label: 'Curriculum' },
    { id: 'mentors-iit-nit', label: 'Mentors (IIT & NIT)' },
    { id: 'pedagogy-live-reviews', label: 'Pedagogy & Live Reviews' },
    { id: 'student-outcomes', label: 'Student Outcomes' },
    { id: 'pricing-scholarships', label: 'Pricing & Scholarships' },
  ];

  const handleNavClick = (screen: ScreenType) => {
    onNavigate(screen);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-[#0b1229]/90 backdrop-blur-xl border-b border-[#181e36] shadow-[0_1px_8px_rgba(0,0,0,0.35)]">
      <div className="h-20 max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between gap-4">
        {/* Brand Zone */}
        <div className="flex items-center gap-6">
          <button
            onClick={() => handleNavClick('curriculum')}
            className="flex items-center gap-3 text-left focus:outline-none group"
          >
            <img
              alt="CodeMyWay Brand Logo"
              className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida/AEtjO1UVnPye644MleWGeIw-bTWGN3My8z0SAlm7qko9NNH9FHZIiekwpYUIvRBOvRkfhCQJmOMsjwanwb8unWPHAu0rWMvPoE8CKdsd_kQeD_wl8MFaiQT87YFspmSeWExArQgLZeDYVZC1Guqms_XwqO3QtKmtt5VJm2gOLIQhMpgRzCGiW2JmC0gb0UlTjE1M78C3-GZmHA2bMVkFwtvAsT1COQsr_U_OqaV1tR5B7bbPgT0U1oPDbXU4pSQ"
            />
            <span className="font-['Plus_Jakarta_Sans'] text-xl text-[#dce1ff] tracking-tight font-bold group-hover:text-[#4cd7f6] transition-colors">
              CodeMyWay
            </span>
          </button>

          <div className="hidden xl:flex items-center gap-2 px-3 py-1 bg-[#181e36] rounded-full shadow-[0_0_12px_rgba(78,222,163,0.15)] border border-[#4edea3]/20">
            <span className="material-symbols-outlined text-[#4edea3] text-sm">verified</span>
            <span className="font-['JetBrains_Mono'] text-[10px] text-[#4edea3] uppercase font-semibold tracking-wider">
              100% Mentors from IITs &amp; NITs
            </span>
          </div>
        </div>

        {/* Desktop Nav Zone */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navItems.map((item) => {
            const isActive = currentScreen === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-2 rounded-lg font-['Inter'] text-[13px] font-medium transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-[#222941] text-[#4cd7f6] font-semibold shadow-inner border border-[#4cd7f6]/20'
                    : 'text-[#bcc9cd] hover:text-[#dce1ff] hover:bg-[#222941]/60'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right Action Zone */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleNavClick('student-login')}
            className={`hidden sm:inline-flex items-center px-4 py-2 rounded-lg font-['Inter'] text-[13px] transition-all whitespace-nowrap ${
              currentScreen === 'student-login'
                ? 'bg-[#222941] text-[#4cd7f6] font-semibold'
                : 'text-[#bcc9cd] hover:text-[#dce1ff] hover:bg-[#181e36]'
            }`}
          >
            Student Login
          </button>

          <button
            onClick={onOpenApplyModal}
            className="inline-flex items-center px-4 py-2 rounded bg-[#4cd7f6] text-[#003640] font-['JetBrains_Mono'] text-xs uppercase font-bold tracking-wider shadow-[0_0_20px_rgba(76,215,246,0.35)] hover:shadow-[0_0_28px_rgba(76,215,246,0.55)] hover:-translate-y-0.5 transition-all whitespace-nowrap active:translate-y-0"
          >
            Apply for Cohort
          </button>

          {/* Advisor Shortcut */}
          <button
            onClick={onOpenAdvisorModal}
            className="relative flex items-center justify-center p-0.5 rounded-full ring-2 ring-[#4cd7f6]/40 hover:ring-[#4cd7f6] transition-all hover:scale-105"
            title="Chat with Senior Admissions Advisor (IIT Alumnus)"
          >
            <img
              alt="Admissions Advisor Profile"
              className="w-8 h-8 rounded-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9pWw1xx4GOhbuPMtQK9JvueXWnadEg-R3iCYaa9FP4Q9KL10W5jr0yb8_jgi_sDYJ4cFKRyd4_rX5mJWjR0xkwBwsyt-myjxFtQOiWowsqyliAHCj2FsEy_Qp9M1bT3KaOB5IMJlaK8hhsvsZtJy_sMUcUILaqlzh0AR8FVbUpcNmQyogaGSBtBXNW6PDIQZnNd4xEVE-p2HBVNJaEPBL-0qYUy4HI6YyD2ixGaivw02cnqw4kvlN"
            />
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#4edea3] rounded-full ring-2 ring-[#0b1229]"></span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-[#181e36] text-[#bcc9cd] hover:text-[#dce1ff] focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            <span className="material-symbols-outlined text-xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#060d24] border-b border-[#222941] px-6 py-4 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full text-left px-4 py-2.5 rounded-lg text-sm transition-all flex items-center justify-between ${
                currentScreen === item.id
                  ? 'bg-[#222941] text-[#4cd7f6] font-semibold'
                  : 'text-[#bcc9cd] hover:bg-[#181e36]'
              }`}
            >
              <span>{item.label}</span>
              {currentScreen === item.id && (
                <span className="material-symbols-outlined text-sm">arrow_forward_ios</span>
              )}
            </button>
          ))}
          <div className="pt-2 border-t border-[#181e36] flex flex-col gap-2">
            <button
              onClick={() => handleNavClick('student-login')}
              className="w-full text-left px-4 py-2.5 rounded-lg text-sm text-[#bcc9cd] hover:bg-[#181e36]"
            >
              Student Portal Login
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenApplyModal();
              }}
              className="w-full py-2.5 rounded bg-[#4cd7f6] text-[#003640] font-['JetBrains_Mono'] text-xs uppercase font-bold tracking-wider text-center"
            >
              Apply for Summer 2025 Cohort
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
