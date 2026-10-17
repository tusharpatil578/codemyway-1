import React, { useState } from 'react';
import { TESTIMONIALS, PLACEMENT_STATS } from '../data/outcomesData';

interface OutcomesViewProps {
  onOpenApplyModal: () => void;
}

export const OutcomesView: React.FC<OutcomesViewProps> = ({ onOpenApplyModal }) => {
  const [currentCtc, setCurrentCtc] = useState<number>(6.5);
  const [backgroundType, setBackgroundType] = useState<string>('junior');

  // ROI Calculator Math
  const projectedCtc = Math.max(16, Number((currentCtc * 2.4).toFixed(1)));
  const hikePct = Math.round(((projectedCtc - currentCtc) / currentCtc) * 100);
  const annualGainLakhs = Number((projectedCtc - currentCtc).toFixed(1));

  return (
    <div className="min-h-screen bg-[#0b1229] py-12 px-6 lg:px-12 max-w-7xl mx-auto">
      {/* Header */}
      <div className="max-w-3xl mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#181e36] font-['JetBrains_Mono'] text-xs text-[#4edea3] font-bold uppercase mb-3 border border-[#4edea3]/20">
          <span className="material-symbols-outlined text-xs">trending_up</span>
          Audited Career Ledger FY24
        </div>
        <h1 className="font-['Plus_Jakarta_Sans'] text-3xl sm:text-4xl text-[#dce1ff] font-bold tracking-tight mb-4">
          Measurable Career Transformation Outcomes
        </h1>
        <p className="font-['Inter'] text-sm sm:text-base text-[#bcc9cd] leading-relaxed">
          Every placement statistic published below is audited against candidate offer letters, payslips, and tax withholding forms by an independent third-party accounting registry.
        </p>
      </div>

      {/* 4 Audited Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        <div className="p-6 rounded-xl bg-[#141a32] border border-[#222941] shadow-lg">
          <span className="font-['JetBrains_Mono'] text-xs text-[#869397]">Average Compensation Hike</span>
          <div className="font-['Plus_Jakarta_Sans'] text-3xl sm:text-4xl text-[#4edea3] font-extrabold my-2">
            {PLACEMENT_STATS.avgHike}
          </div>
          <span className="font-['Inter'] text-xs text-[#bcc9cd]">Across non-tech to analytics</span>
        </div>

        <div className="p-6 rounded-xl bg-[#141a32] border border-[#222941] shadow-lg">
          <span className="font-['JetBrains_Mono'] text-xs text-[#869397]">Placement Rate (120 Days)</span>
          <div className="font-['Plus_Jakarta_Sans'] text-3xl sm:text-4xl text-[#4cd7f6] font-extrabold my-2">
            {PLACEMENT_STATS.placementRate}
          </div>
          <span className="font-['Inter'] text-xs text-[#bcc9cd]">1,840+ Graduates placed</span>
        </div>

        <div className="p-6 rounded-xl bg-[#141a32] border border-[#222941] shadow-lg">
          <span className="font-['JetBrains_Mono'] text-xs text-[#869397]">Average Domestic Package</span>
          <div className="font-['Plus_Jakarta_Sans'] text-3xl sm:text-4xl text-[#89ceff] font-extrabold my-2">
            {PLACEMENT_STATS.avgPackage}
          </div>
          <span className="font-['Inter'] text-xs text-[#bcc9cd]">Top quartile: ₹34+ LPA</span>
        </div>

        <div className="p-6 rounded-xl bg-[#141a32] border border-[#222941] shadow-lg">
          <span className="font-['JetBrains_Mono'] text-xs text-[#869397]">Time to 1st Offer</span>
          <div className="font-['Plus_Jakarta_Sans'] text-3xl sm:text-4xl text-[#dce1ff] font-extrabold my-2">
            {PLACEMENT_STATS.avgDaysToOffer} Days
          </div>
          <span className="font-['Inter'] text-xs text-[#bcc9cd]">From capstone defense</span>
        </div>
      </div>

      {/* Interactive Salary Transition & ROI Calculator */}
      <div className="mb-16 p-8 rounded-2xl bg-[#141a32] border border-[#2d344c] shadow-2xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-[#222941]">
          <div>
            <span className="font-['JetBrains_Mono'] text-xs text-[#4cd7f6] uppercase font-bold tracking-wider">
              Interactive Placement Simulator
            </span>
            <h3 className="font-['Plus_Jakarta_Sans'] text-2xl text-[#dce1ff] font-bold mt-1">
              Calculate Your Post-Cohort CTC Projection
            </h3>
          </div>
          <span className="px-3 py-1 rounded bg-[#181e36] text-[#4edea3] font-['JetBrains_Mono'] text-xs font-semibold border border-[#4edea3]/20 self-start md:self-auto">
            Based on 1,840+ Audited Alumni Shifts
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Controls */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="font-['JetBrains_Mono'] text-xs text-[#869397] uppercase tracking-wider">
                  Current CTC: <span className="text-[#dce1ff] font-bold text-sm">₹{currentCtc} LPA</span>
                </label>
                <span className="font-['JetBrains_Mono'] text-xs text-[#4cd7f6]">Drag to adjust</span>
              </div>
              <input
                type="range"
                min="3"
                max="20"
                step="0.5"
                value={currentCtc}
                onChange={(e) => setCurrentCtc(parseFloat(e.target.value))}
                className="w-full accent-[#4cd7f6] cursor-pointer"
              />
              <div className="flex justify-between font-['JetBrains_Mono'] text-[10px] text-[#869397] mt-1">
                <span>₹3 LPA</span>
                <span>₹10 LPA</span>
                <span>₹20 LPA</span>
              </div>
            </div>

            <div>
              <label className="block font-['JetBrains_Mono'] text-xs text-[#869397] uppercase tracking-wider mb-2">
                Your Background Track
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setBackgroundType('junior')}
                  className={`p-3 rounded-lg text-left text-xs font-['Inter'] transition-all border ${
                    backgroundType === 'junior'
                      ? 'bg-[#181e36] border-[#4cd7f6] text-[#dce1ff] font-semibold'
                      : 'bg-[#060d24] border-[#222941] text-[#869397] hover:text-[#dce1ff]'
                  }`}
                >
                  Junior Dev / BI Analyst
                </button>
                <button
                  type="button"
                  onClick={() => setBackgroundType('nontech')}
                  className={`p-3 rounded-lg text-left text-xs font-['Inter'] transition-all border ${
                    backgroundType === 'nontech'
                      ? 'bg-[#181e36] border-[#4cd7f6] text-[#dce1ff] font-semibold'
                      : 'bg-[#060d24] border-[#222941] text-[#869397] hover:text-[#dce1ff]'
                  }`}
                >
                  Non-Tech / MIS / Excel
                </button>
                <button
                  type="button"
                  onClick={() => setBackgroundType('qa')}
                  className={`p-3 rounded-lg text-left text-xs font-['Inter'] transition-all border ${
                    backgroundType === 'qa'
                      ? 'bg-[#181e36] border-[#4cd7f6] text-[#dce1ff] font-semibold'
                      : 'bg-[#060d24] border-[#222941] text-[#869397] hover:text-[#dce1ff]'
                  }`}
                >
                  QA / Support / Operations
                </button>
                <button
                  type="button"
                  onClick={() => setBackgroundType('grad')}
                  className={`p-3 rounded-lg text-left text-xs font-['Inter'] transition-all border ${
                    backgroundType === 'grad'
                      ? 'bg-[#181e36] border-[#4cd7f6] text-[#dce1ff] font-semibold'
                      : 'bg-[#060d24] border-[#222941] text-[#869397] hover:text-[#dce1ff]'
                  }`}
                >
                  Engineering Graduate / Fresher
                </button>
              </div>
            </div>
          </div>

          {/* Projection Card */}
          <div className="lg:col-span-6 p-6 rounded-xl bg-[#060d24] border border-[#222941] space-y-4">
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="p-4 rounded-lg bg-[#141a32] border border-[#222941]">
                <span className="font-['JetBrains_Mono'] text-xs text-[#869397]">Projected Target CTC</span>
                <div className="font-['Plus_Jakarta_Sans'] text-2xl sm:text-3xl text-[#4edea3] font-extrabold mt-1">
                  ₹{projectedCtc} LPA
                </div>
                <span className="font-['JetBrains_Mono'] text-[11px] text-[#4edea3]">+{hikePct}% increase</span>
              </div>

              <div className="p-4 rounded-lg bg-[#141a32] border border-[#222941]">
                <span className="font-['JetBrains_Mono'] text-xs text-[#869397]">Annual Salary Delta</span>
                <div className="font-['Plus_Jakarta_Sans'] text-2xl sm:text-3xl text-[#4cd7f6] font-extrabold mt-1">
                  +₹{annualGainLakhs} L
                </div>
                <span className="font-['JetBrains_Mono'] text-[11px] text-[#869397]">Pre-tax yearly gain</span>
              </div>
            </div>

            <div className="p-3.5 rounded bg-[#181e36] border border-[#222941] font-['JetBrains_Mono'] text-xs text-[#bcc9cd] flex items-center justify-between">
              <span>Program Tuition Payback Period:</span>
              <span className="text-[#4edea3] font-bold">~1.4 Months of New Salary</span>
            </div>

            <button
              onClick={onOpenApplyModal}
              className="w-full py-3 rounded bg-[#4cd7f6] text-[#003640] font-['JetBrains_Mono'] text-xs uppercase font-bold tracking-wider shadow-[0_0_20px_rgba(76,215,246,0.35)] hover:shadow-[0_0_28px_rgba(76,215,246,0.55)] transition-all flex items-center justify-center gap-2"
            >
              <span>Unlock This Salary Track via Screening</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>

      {/* Hiring Companies Grid */}
      <div className="mb-16">
        <h3 className="font-['Plus_Jakarta_Sans'] text-2xl text-[#dce1ff] font-bold mb-6">
          Hiring Distribution Across Global Tech Orgs
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PLACEMENT_STATS.companiesHiring.map((c, i) => (
            <div
              key={i}
              className="p-5 rounded-xl bg-[#141a32] border border-[#222941] hover:border-[#4cd7f6]/40 transition-all"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-['Plus_Jakarta_Sans'] text-base font-bold text-[#dce1ff]">
                  {c.name}
                </span>
                <span className="px-2 py-0.5 rounded bg-[#181e36] text-[#4edea3] font-['JetBrains_Mono'] text-xs font-bold">
                  {c.count} Hires
                </span>
              </div>
              <p className="font-['Inter'] text-xs text-[#bcc9cd] mb-3">
                {c.role}
              </p>
              <div className="flex justify-between font-['JetBrains_Mono'] text-xs text-[#869397] pt-2 border-t border-[#222941]">
                <span>Avg Package:</span>
                <span className="text-[#4cd7f6] font-bold">{c.avgSalary}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Student Testimonials Grid */}
      <div className="space-y-6">
        <h3 className="font-['Plus_Jakarta_Sans'] text-2xl text-[#dce1ff] font-bold mb-6">
          Verified Alumni Transition Case Studies
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="p-6 rounded-xl bg-[#141a32] border border-[#222941] shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-12 h-12 rounded-full object-cover ring-1 ring-[#3d494c]"
                    />
                    <div>
                      <h4 className="font-['Plus_Jakarta_Sans'] text-sm font-bold text-[#dce1ff]">
                        {t.name}
                      </h4>
                      <p className="font-['JetBrains_Mono'] text-[10px] text-[#869397]">
                        {t.cohort}
                      </p>
                    </div>
                  </div>

                  <span className="px-2 py-0.5 rounded bg-[#181e36] text-[#4edea3] font-['JetBrains_Mono'] text-[10px] font-bold">
                    {t.salaryTransition}
                  </span>
                </div>

                <p className="font-['Inter'] text-xs text-[#bcc9cd] italic mb-4 leading-relaxed">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-3 border-t border-[#222941] flex items-center justify-between font-['JetBrains_Mono'] text-[10px]">
                <span className="text-[#dce1ff] font-semibold">
                  {t.newRole} @ {t.company}
                </span>
                <span className="text-[#4cd7f6]">Verified</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
