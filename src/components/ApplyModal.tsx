import React, { useState } from 'react';

interface ApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ApplyModal: React.FC<ApplyModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    experienceLevel: 'mid',
    preferredDate: '2025-07-20',
    preferredTime: '18:00',
    primaryGoal: 'Transition to Senior Data/Analytics Engineer',
    preferredMentor: 'Aarav Singhal (IIT Delhi / Ex-Google)'
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="w-full max-w-xl bg-[#0b1229] border border-[#2d344c] rounded-xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-5 bg-[#141a32] border-b border-[#222941] flex items-center justify-between">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-[#181e36] text-[#4edea3] font-['JetBrains_Mono'] text-[10px] font-semibold mb-1 border border-[#4edea3]/20">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4edea3] animate-pulse"></span>
              Summer 2025 Admissions • Strictly 30 Seats per Mentor
            </div>
            <h3 className="font-['Plus_Jakarta_Sans'] text-lg font-bold text-[#dce1ff]">
              IIT/NIT Technical Diagnostic Screening
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#869397] hover:text-[#dce1ff] hover:bg-[#222941] transition-colors"
          >
            <span className="material-symbols-outlined text-lg">close</span>
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-[#003824] border border-[#4edea3]/40 flex items-center justify-center text-[#4edea3]">
              <span className="material-symbols-outlined text-3xl">check</span>
            </div>
            <h4 className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-[#dce1ff]">
              Screening Slot Reserved!
            </h4>
            <p className="font-['Inter'] text-sm text-[#bcc9cd] max-w-md mx-auto">
              We have dispatched your diagnostic test link, sample SQL repo, and Google Meet invite with{' '}
              <span className="text-[#4cd7f6] font-semibold">{formData.preferredMentor}</span> to{' '}
              <span className="text-[#dce1ff] font-semibold">{formData.email}</span>.
            </p>
            <div className="p-4 rounded-lg bg-[#141a32] border border-[#222941] text-left font-['JetBrains_Mono'] text-xs text-[#bcc9cd] space-y-1">
              <div><span className="text-[#869397]">Applicant:</span> {formData.fullName}</div>
              <div><span className="text-[#869397]">Diagnostic Date:</span> {formData.preferredDate} at {formData.preferredTime} IST</div>
              <div><span className="text-[#869397]">Scholarship Evaluation:</span> Automatic upon test submission (up to 40% off)</div>
            </div>
            <button
              onClick={handleReset}
              className="px-6 py-2.5 rounded bg-[#4cd7f6] text-[#003640] font-['JetBrains_Mono'] text-xs font-bold shadow-[0_0_18px_rgba(76,215,246,0.35)] transition-all"
            >
              Done &amp; Return to Academy
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-['JetBrains_Mono'] text-[11px] uppercase tracking-wider text-[#869397] mb-1">
                  Full Name *
                </label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Aditi Sharma"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded bg-[#181e36] text-[#dce1ff] font-['Inter'] text-xs border border-[#3d494c] focus:outline-none focus:border-[#4cd7f6]"
                />
              </div>

              <div>
                <label className="block font-['JetBrains_Mono'] text-[11px] uppercase tracking-wider text-[#869397] mb-1">
                  Work / University Email *
                </label>
                <input
                  required
                  type="email"
                  placeholder="aditi@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded bg-[#181e36] text-[#dce1ff] font-['Inter'] text-xs border border-[#3d494c] focus:outline-none focus:border-[#4cd7f6]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-['JetBrains_Mono'] text-[11px] uppercase tracking-wider text-[#869397] mb-1">
                  Phone (for WhatsApp Test Link)
                </label>
                <input
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded bg-[#181e36] text-[#dce1ff] font-['Inter'] text-xs border border-[#3d494c] focus:outline-none focus:border-[#4cd7f6]"
                />
              </div>

              <div>
                <label className="block font-['JetBrains_Mono'] text-[11px] uppercase tracking-wider text-[#869397] mb-1">
                  Current Experience Level
                </label>
                <select
                  value={formData.experienceLevel}
                  onChange={(e) => setFormData({ ...formData, experienceLevel: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded bg-[#181e36] text-[#dce1ff] font-['Inter'] text-xs border border-[#3d494c] focus:outline-none focus:border-[#4cd7f6]"
                >
                  <option value="entry">Undergrad / Final Year Engineering</option>
                  <option value="mid">1-3 Years as Software Engineer or Analyst</option>
                  <option value="lead">3-6 Years Looking to Transition to Senior / Lead</option>
                  <option value="nontech">Non-Tech Transitioning to Analytics</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block font-['JetBrains_Mono'] text-[11px] uppercase tracking-wider text-[#869397] mb-1">
                Preferred Faculty Lead for Diagnostic Sync
              </label>
              <select
                value={formData.preferredMentor}
                onChange={(e) => setFormData({ ...formData, preferredMentor: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded bg-[#181e36] text-[#dce1ff] font-['Inter'] text-xs border border-[#3d494c] focus:outline-none focus:border-[#4cd7f6]"
              >
                <option value="Aarav Singhal (IIT Delhi / Ex-Google)">Aarav Singhal (IIT Delhi / Ex-Google)</option>
                <option value="Pooja Nambiar (IIT Bombay / Goldman Sachs)">Pooja Nambiar (IIT Bombay / Goldman Sachs)</option>
                <option value="Karthik Sundaram (NIT Trichy / Ex-Uber)">Karthik Sundaram (NIT Trichy / Ex-Uber)</option>
                <option value="Rohan Verma (IIT Roorkee / Stripe)">Rohan Verma (IIT Roorkee / Stripe)</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block font-['JetBrains_Mono'] text-[11px] uppercase tracking-wider text-[#869397] mb-1">
                  Diagnostic Date
                </label>
                <input
                  type="date"
                  value={formData.preferredDate}
                  onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded bg-[#181e36] text-[#dce1ff] font-['Inter'] text-xs border border-[#3d494c] focus:outline-none focus:border-[#4cd7f6]"
                />
              </div>

              <div>
                <label className="block font-['JetBrains_Mono'] text-[11px] uppercase tracking-wider text-[#869397] mb-1">
                  Preferred Time Slot (IST)
                </label>
                <select
                  value={formData.preferredTime}
                  onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded bg-[#181e36] text-[#dce1ff] font-['Inter'] text-xs border border-[#3d494c] focus:outline-none focus:border-[#4cd7f6]"
                >
                  <option value="11:00">11:00 AM IST</option>
                  <option value="14:00">02:00 PM IST</option>
                  <option value="18:00">06:00 PM IST</option>
                  <option value="20:00">08:00 PM IST</option>
                </select>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded bg-[#4cd7f6] text-[#003640] font-['JetBrains_Mono'] text-xs uppercase font-bold tracking-wider shadow-[0_0_24px_rgba(76,215,246,0.35)] hover:shadow-[0_0_32px_rgba(76,215,246,0.55)] transition-all flex items-center justify-center gap-2"
              >
                {loading ? (
                  <span>Reserving Screening Slot...</span>
                ) : (
                  <>
                    <span>Book 20-Min IIT Diagnostic Screening</span>
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </>
                )}
              </button>
              <p className="font-['Inter'] text-[11px] text-[#869397] text-center mt-2">
                Zero upfront payment required. Test scores determine merit scholarship eligibility.
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
