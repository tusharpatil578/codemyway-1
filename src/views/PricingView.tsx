import React, { useState } from 'react';

interface PricingViewProps {
  onOpenApplyModal: () => void;
}

export const PricingView: React.FC<PricingViewProps> = ({ onOpenApplyModal }) => {
  // Mini quiz state for instant scholarship calculation
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [selectedEmiMonth, setSelectedEmiMonth] = useState<number>(12);

  const quizQuestions = [
    {
      id: 1,
      question: "Which SQL clause calculates a running total without collapsing individual rows?",
      options: [
        "GROUP BY with SUM()",
        "SUM() OVER (ORDER BY date ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW)",
        "HAVING SUM() > 0",
        "DISTINCT ON (date)"
      ],
      correctIndex: 1
    },
    {
      id: 2,
      question: "Why does Polars scan Parquet partitions significantly faster than naive Pandas pd.read_csv?",
      options: [
        "It uses pure Python bytecode caching",
        "Predicate and projection pushdown with zero-copy Arrow memory and SIMD execution",
        "It disables all data types and reads raw strings",
        "It uploads files to Google Drive before reading"
      ],
      correctIndex: 1
    },
    {
      id: 3,
      question: "In an A/B test with 50,000 visitors per variant, what does a p-value of 0.0012 indicate?",
      options: [
        "There is a 99.88% probability that the null hypothesis is true",
        "The probability of observing this metric delta by pure random chance under the null hypothesis is 0.12%",
        "The conversion rate has increased by exactly 0.12%",
        "The sample size is too small to reach statistical significance"
      ],
      correctIndex: 1
    }
  ];

  const handleSelectAnswer = (qId: number, optIdx: number) => {
    setQuizAnswers({ ...quizAnswers, [qId]: optIdx });
  };

  const handleEvaluateQuiz = () => {
    setQuizSubmitted(true);
  };

  // Calculate score
  let correctCount = 0;
  quizQuestions.forEach((q) => {
    if (quizAnswers[q.id] === q.correctIndex) {
      correctCount += 1;
    }
  });

  const scholarshipPct = correctCount === 3 ? 40 : correctCount === 2 ? 25 : 15;
  const baseTuition = 125000;
  const scholarshipAmount = Math.round((baseTuition * scholarshipPct) / 100);
  const effectiveTuition = baseTuition - scholarshipAmount;
  const emiPerMonth = Math.round(effectiveTuition / selectedEmiMonth);

  return (
    <div className="min-h-screen bg-[#0b1229] py-12 px-6 lg:px-12 max-w-7xl mx-auto">
      {/* Header */}
      <div className="max-w-3xl mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#181e36] font-['JetBrains_Mono'] text-xs text-[#4edea3] font-bold uppercase mb-3 border border-[#4edea3]/20">
          <span className="material-symbols-outlined text-xs">savings</span>
          Transparent Tuition &amp; Merit Scholarships
        </div>
        <h1 className="font-['Plus_Jakarta_Sans'] text-3xl sm:text-4xl text-[#dce1ff] font-bold tracking-tight mb-4">
          Invest in IIT/NIT Apprenticeship Rigor
        </h1>
        <p className="font-['Inter'] text-sm sm:text-base text-[#bcc9cd] leading-relaxed">
          Up to 40% merit fellowships available through our technical diagnostic evaluation. 0% interest monthly installments backed by our 120-day placement guarantee.
        </p>
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {/* Full-Stack Apprenticeship */}
        <div className="p-8 rounded-2xl bg-[#141a32] border border-[#4cd7f6]/40 shadow-2xl relative flex flex-col justify-between">
          <div className="absolute -top-3 right-8 px-3 py-1 rounded-full bg-[#4cd7f6] text-[#003640] font-['JetBrains_Mono'] text-[10px] font-bold uppercase tracking-wider shadow-lg">
            Most Popular • Summer 2025
          </div>

          <div>
            <div className="font-['JetBrains_Mono'] text-xs text-[#4cd7f6] uppercase font-bold tracking-wider mb-1">
              Full-Time Apprenticeship Track
            </div>
            <h3 className="font-['Plus_Jakarta_Sans'] text-2xl text-[#dce1ff] font-bold mb-3">
              16-Week Production Immersion
            </h3>
            <p className="font-['Inter'] text-xs text-[#bcc9cd] mb-6 leading-relaxed">
              Complete curriculum with all 4 modules, 1-on-1 code reviews by IIT faculty, and guaranteed alumni placement referrals.
            </p>

            <div className="flex items-baseline gap-2 mb-6">
              <span className="font-['Plus_Jakarta_Sans'] text-4xl text-[#dce1ff] font-extrabold">
                ₹{quizSubmitted ? effectiveTuition.toLocaleString() : '1,25,000'}
              </span>
              {quizSubmitted && (
                <span className="text-[#869397] line-through font-['JetBrains_Mono'] text-sm">
                  ₹1,25,000
                </span>
              )}
              <span className="text-[#869397] font-['JetBrains_Mono'] text-xs">one-time / all-inclusive</span>
            </div>

            {quizSubmitted && (
              <div className="p-3 mb-6 rounded bg-[#003824] border border-[#4edea3]/40 text-[#4edea3] font-['JetBrains_Mono'] text-xs flex items-center justify-between">
                <span>{scholarshipPct}% Merit Scholarship Applied!</span>
                <span className="font-bold">-₹{scholarshipAmount.toLocaleString()}</span>
              </div>
            )}

            <div className="space-y-3 font-['Inter'] text-xs text-[#bcc9cd] mb-8">
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-[#4edea3] text-sm">check_circle</span>
                <span>1-on-1 weekly code reviews directly with IIT/NIT mentor</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-[#4edea3] text-sm">check_circle</span>
                <span>All 4 Production Capstones &amp; 150+ hours hands-on lab access</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-[#4edea3] text-sm">check_circle</span>
                <span>Live oral architectural defense before FAANG engineering directors</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-[#4edea3] text-sm">check_circle</span>
                <span>100% Tuition Refund Guarantee if not placed within 120 days</span>
              </div>
            </div>
          </div>

          <button
            onClick={onOpenApplyModal}
            className="w-full py-3.5 rounded bg-[#4cd7f6] text-[#003640] font-['Plus_Jakarta_Sans'] text-sm font-bold shadow-[0_0_24px_rgba(76,215,246,0.35)] hover:shadow-[0_0_32px_rgba(76,215,246,0.55)] transition-all flex items-center justify-center gap-2"
          >
            <span>Apply for Full-Time Cohort</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>

        {/* 0% EMI Breakdown */}
        <div className="p-8 rounded-2xl bg-[#141a32] border border-[#222941] shadow-xl flex flex-col justify-between">
          <div>
            <div className="font-['JetBrains_Mono'] text-xs text-[#4edea3] uppercase font-bold tracking-wider mb-1">
              Zero-Cost Monthly Installments
            </div>
            <h3 className="font-['Plus_Jakarta_Sans'] text-2xl text-[#dce1ff] font-bold mb-3">
              0% Interest Flexible EMI
            </h3>
            <p className="font-['Inter'] text-xs text-[#bcc9cd] mb-6 leading-relaxed">
              Partnered with major Indian banks and NBFCs for instant paperless approvals with zero hidden processing charges.
            </p>

            {/* Month selector */}
            <div className="flex items-center gap-2 mb-6">
              {[3, 6, 9, 12].map((m) => (
                <button
                  key={m}
                  onClick={() => setSelectedEmiMonth(m)}
                  className={`flex-1 py-2 rounded text-xs font-['JetBrains_Mono'] font-bold border transition-all ${
                    selectedEmiMonth === m
                      ? 'bg-[#222941] border-[#4cd7f6] text-[#4cd7f6]'
                      : 'bg-[#060d24] border-[#222941] text-[#869397] hover:text-[#dce1ff]'
                  }`}
                >
                  {m} Months
                </button>
              ))}
            </div>

            <div className="p-5 rounded-xl bg-[#060d24] border border-[#222941] mb-6">
              <span className="font-['JetBrains_Mono'] text-xs text-[#869397]">Monthly Installment:</span>
              <div className="font-['Plus_Jakarta_Sans'] text-3xl font-extrabold text-[#4edea3] mt-1">
                ₹{emiPerMonth.toLocaleString()} <span className="text-xs font-normal text-[#bcc9cd]">/ month</span>
              </div>
              <div className="font-['JetBrains_Mono'] text-[11px] text-[#869397] mt-1">
                Zero down payment • 0% Interest • No collateral
              </div>
            </div>

            <div className="space-y-3 font-['Inter'] text-xs text-[#bcc9cd] mb-8">
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-[#4edea3] text-sm">credit_card</span>
                <span>Instant paperless approval in under 10 minutes</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-[#4edea3] text-sm">domain</span>
                <span>Corporate reimbursement invoice support for employer L&amp;D</span>
              </div>
            </div>
          </div>

          <button
            onClick={onOpenApplyModal}
            className="w-full py-3.5 rounded bg-[#222941] hover:bg-[#2d344c] text-[#dce1ff] font-['Plus_Jakarta_Sans'] text-sm font-semibold border border-[#3d494c] transition-all flex items-center justify-center gap-2"
          >
            <span>Pre-Approve 0% EMI Plan</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>
      </div>

      {/* Instant Merit Scholarship Diagnostic Quiz */}
      <div className="p-8 rounded-2xl bg-[#141a32] border border-[#2d344c] shadow-2xl mb-16">
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#181e36] font-['JetBrains_Mono'] text-xs text-[#4edea3] font-bold uppercase mb-2 border border-[#4edea3]/20">
            <span className="material-symbols-outlined text-xs">quiz</span>
            Live Merit Evaluation
          </div>
          <h3 className="font-['Plus_Jakarta_Sans'] text-2xl text-[#dce1ff] font-bold">
            Take the 3-Question Diagnostic Mini-Test for Instant Scholarship
          </h3>
          <p className="font-['Inter'] text-xs sm:text-sm text-[#bcc9cd] mt-1">
            Answer the 3 technical questions below to calculate your instant merit fellowship grant (up to 40% discount).
          </p>
        </div>

        <div className="space-y-6">
          {quizQuestions.map((q, idx) => (
            <div key={q.id} className="p-5 rounded-xl bg-[#060d24] border border-[#222941]">
              <div className="flex items-start gap-3 mb-3">
                <span className="w-6 h-6 rounded bg-[#181e36] text-[#4cd7f6] font-['JetBrains_Mono'] text-xs font-bold flex items-center justify-center shrink-0">
                  0{idx + 1}
                </span>
                <h4 className="font-['Plus_Jakarta_Sans'] text-sm font-semibold text-[#dce1ff]">
                  {q.question}
                </h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 ml-9">
                {q.options.map((opt, optIdx) => {
                  const isSelected = quizAnswers[q.id] === optIdx;
                  return (
                    <button
                      key={optIdx}
                      type="button"
                      onClick={() => handleSelectAnswer(q.id, optIdx)}
                      className={`text-left p-3 rounded-lg text-xs font-['Inter'] transition-all border ${
                        isSelected
                          ? 'bg-[#181e36] border-[#4cd7f6] text-[#dce1ff] font-medium'
                          : 'bg-[#141a32] border-[#222941] text-[#869397] hover:text-[#dce1ff]'
                      }`}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}

          <div className="flex items-center justify-between pt-4 border-t border-[#222941]">
            <span className="font-['JetBrains_Mono'] text-xs text-[#869397]">
              {Object.keys(quizAnswers).length} of 3 questions answered
            </span>

            <button
              onClick={handleEvaluateQuiz}
              disabled={Object.keys(quizAnswers).length < 3}
              className="px-6 py-2.5 rounded bg-[#4edea3] text-[#003824] font-['JetBrains_Mono'] text-xs font-bold disabled:opacity-50 transition-all shadow-[0_0_15px_rgba(78,222,163,0.3)]"
            >
              Calculate Scholarship Score
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
