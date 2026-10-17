import React, { useState } from 'react';

interface PedagogyViewProps {
  onOpenApplyModal: () => void;
}

export const PedagogyView: React.FC<PedagogyViewProps> = ({ onOpenApplyModal }) => {
  const [prStatus, setPrStatus] = useState<'changes_requested' | 'approved'>('changes_requested');
  const [activeTab, setActiveTab] = useState<'diff' | 'benchmarks' | 'jury'>('diff');

  return (
    <div className="min-h-screen bg-[#0b1229] py-12 px-6 lg:px-12 max-w-7xl mx-auto">
      {/* Header */}
      <div className="max-w-3xl mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#181e36] font-['JetBrains_Mono'] text-xs text-[#4edea3] font-bold uppercase mb-3 border border-[#4edea3]/20">
          <span className="material-symbols-outlined text-xs">code</span>
          Production Code Review Standard
        </div>
        <h1 className="font-['Plus_Jakarta_Sans'] text-3xl sm:text-4xl text-[#dce1ff] font-bold tracking-tight mb-4">
          The 3-Pillar Pedagogy &amp; Live PR Review System
        </h1>
        <p className="font-['Inter'] text-sm sm:text-base text-[#bcc9cd] leading-relaxed">
          How our students achieve senior-level technical depth without wasting years on fragmented online videos. We simulate a Tier-1 tech engineering team: you write production code, and IIT alumni review every single commit.
        </p>
      </div>

      {/* 3 Pillars Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <div className="p-6 rounded-xl bg-[#141a32] border border-[#222941] flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-lg bg-[#181e36] text-[#4cd7f6] flex items-center justify-center mb-4 border border-[#4cd7f6]/20">
              <span className="material-symbols-outlined">calculate</span>
            </div>
            <span className="font-['JetBrains_Mono'] text-[10px] text-[#4cd7f6] uppercase font-bold tracking-wider">
              PILLAR 01
            </span>
            <h3 className="font-['Plus_Jakarta_Sans'] text-lg text-[#dce1ff] font-bold mt-1 mb-2">
              Academic Rigor from IIT/NIT
            </h3>
            <p className="font-['Inter'] text-xs text-[#bcc9cd] leading-relaxed">
              We anchor every library to foundational math. Learn algebraic matrix decomposition, Bayesian probability distributions, and the physics of cache lines.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-[#222941] font-['JetBrains_Mono'] text-xs text-[#4edea3]">
            ✓ Mathematical Intuition Labs
          </div>
        </div>

        <div className="p-6 rounded-xl bg-[#181e36] border border-[#4cd7f6]/40 shadow-[0_0_20px_rgba(76,215,246,0.1)] flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-lg bg-[#222941] text-[#4edea3] flex items-center justify-center mb-4 border border-[#4edea3]/20">
              <span className="material-symbols-outlined">commit</span>
            </div>
            <span className="font-['JetBrains_Mono'] text-[10px] text-[#4edea3] uppercase font-bold tracking-wider">
              PILLAR 02 (FLAGSHIP)
            </span>
            <h3 className="font-['Plus_Jakarta_Sans'] text-lg text-[#dce1ff] font-bold mt-1 mb-2">
              Line-by-Line Code Reviews
            </h3>
            <p className="font-['Inter'] text-xs text-[#bcc9cd] leading-relaxed">
              Submit assignments through GitHub pull requests. Your IIT mentor inspects your queries for full-table scans, memory leaks, and cyclomatic complexity.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-[#222941] font-['JetBrains_Mono'] text-xs text-[#4edea3]">
            ✓ 18+ Merged PRs required to graduate
          </div>
        </div>

        <div className="p-6 rounded-xl bg-[#141a32] border border-[#222941] flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-lg bg-[#181e36] text-[#89ceff] flex items-center justify-center mb-4 border border-[#89ceff]/20">
              <span className="material-symbols-outlined">record_voice_over</span>
            </div>
            <span className="font-['JetBrains_Mono'] text-[10px] text-[#89ceff] uppercase font-bold tracking-wider">
              PILLAR 03
            </span>
            <h3 className="font-['Plus_Jakarta_Sans'] text-lg text-[#dce1ff] font-bold mt-1 mb-2">
              Mock Defense &amp; Referral
            </h3>
            <p className="font-['Inter'] text-xs text-[#bcc9cd] leading-relaxed">
              Defend your production pipeline architecture before a mock interview panel of engineering directors from Uber, Amazon, and Goldman Sachs.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-[#222941] font-['JetBrains_Mono'] text-xs text-[#4edea3]">
            ✓ Closed-Room Alumni Referrals
          </div>
        </div>
      </div>

      {/* Interactive Live PR Review Simulator */}
      <div className="rounded-xl bg-[#060d24] border border-[#2d344c] shadow-2xl overflow-hidden mb-16">
        {/* PR Simulator Top Bar */}
        <div className="px-6 py-4 bg-[#141a32] border-b border-[#222941] flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[#4cd7f6]">alt_route</span>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-['JetBrains_Mono'] text-xs text-[#869397]">Pull Request #418</span>
                <span className={`px-2 py-0.5 rounded text-[10px] font-['JetBrains_Mono'] font-bold ${
                  prStatus === 'approved' 
                    ? 'bg-[#003824] text-[#4edea3] border border-[#4edea3]/40' 
                    : 'bg-[#93000a]/40 text-[#ffb4ab] border border-[#ffb4ab]/30'
                }`}>
                  {prStatus === 'approved' ? '✓ Changes Approved (Ready to Merge)' : '⚠ 2 Review Comments Pending'}
                </span>
              </div>
              <h3 className="font-['Plus_Jakarta_Sans'] text-base text-[#dce1ff] font-bold">
                refactor(polars): vectorize 100M-row ledger aggregation &amp; eliminate OOM
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setPrStatus(prStatus === 'approved' ? 'changes_requested' : 'approved')}
              className={`px-3 py-1.5 rounded font-['JetBrains_Mono'] text-xs font-semibold transition-all flex items-center gap-1.5 ${
                prStatus === 'approved'
                  ? 'bg-[#181e36] text-[#bcc9cd] hover:text-[#dce1ff]'
                  : 'bg-[#4edea3] text-[#003824] shadow-[0_0_15px_rgba(78,222,163,0.3)]'
              }`}
            >
              <span className="material-symbols-outlined text-sm">
                {prStatus === 'approved' ? 'undo' : 'check_circle'}
              </span>
              <span>{prStatus === 'approved' ? 'Reset to Initial Review' : 'Simulate Mentor Approval'}</span>
            </button>
          </div>
        </div>

        {/* PR Tabs */}
        <div className="flex items-center gap-4 px-6 bg-[#0e1630] border-b border-[#222941] font-['JetBrains_Mono'] text-xs">
          <button
            onClick={() => setActiveTab('diff')}
            className={`py-3 border-b-2 font-medium transition-colors ${
              activeTab === 'diff' ? 'border-[#4cd7f6] text-[#4cd7f6]' : 'border-transparent text-[#869397] hover:text-[#dce1ff]'
            }`}
          >
            Files Changed (2) • Diff Inspector
          </button>
          <button
            onClick={() => setActiveTab('benchmarks')}
            className={`py-3 border-b-2 font-medium transition-colors ${
              activeTab === 'benchmarks' ? 'border-[#4cd7f6] text-[#4cd7f6]' : 'border-transparent text-[#869397] hover:text-[#dce1ff]'
            }`}
          >
            Memory &amp; Execution Benchmarks
          </button>
        </div>

        {/* PR Content Area */}
        <div className="p-6">
          {activeTab === 'diff' && (
            <div className="space-y-6">
              {/* Diff block 1 */}
              <div className="rounded-lg bg-[#0b1229] border border-[#222941] overflow-hidden font-['JetBrains_Mono'] text-xs">
                <div className="px-4 py-2 bg-[#141a32] border-b border-[#222941] flex items-center justify-between text-[#869397]">
                  <span>src/pipelines/reconciliation_kernel.py</span>
                  <span className="text-[#4edea3]">+14 lines / -22 lines</span>
                </div>

                <div className="p-4 space-y-1 overflow-x-auto text-[11px] leading-relaxed">
                  <div className="text-[#ffb4ab] bg-[#93000a]/10 px-2 py-0.5 rounded">
                    - df = pd.read_csv("s3://fintech-lake/transactions_all.csv") # Naive in-memory read
                  </div>
                  <div className="text-[#ffb4ab] bg-[#93000a]/10 px-2 py-0.5 rounded">
                    - settled = df[df['status'] == 'SETTLED'].groupby('merchant_id').mean()
                  </div>
                  <div className="text-[#4edea3] bg-[#003824]/20 px-2 py-0.5 rounded">
                    + df = pl.scan_parquet("s3://fintech-lake/ledger_2024_*.parquet") # Lazy evaluation
                  </div>
                  <div className="text-[#4edea3] bg-[#003824]/20 px-2 py-0.5 rounded">
                    + settled = df.filter(pl.col("status") == "SETTLED").group_by(["merchant_id"]).agg(pl.col("net_volume_usd").quantile(0.95))
                  </div>
                </div>

                {/* Inline Mentor Comment 1 */}
                <div className="mx-4 mb-4 p-4 rounded-lg bg-[#181e36] border border-[#4cd7f6]/40 text-xs">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <img
                        className="w-6 h-6 rounded-full object-cover ring-1 ring-[#4cd7f6]"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBedgactBRueCK3aTGsvd51JZ8HOIci0B6MJJu4JtlctbxuPtzXKS37kJDCT3CXOtfvciddcD-U785keRuwEHVkrl5iJ0BIdbb7Axc_oZdg59PNOBc47PB_3rDNGRc9qZRPPehQWP9zLMceNyUkHz5EPOhLPdtXEFHKk9YbdcHRkl3ZZLp5RajK2Ks64Gvj_Hgl7Ih0yH5jIkM9hk4mPthnaHVGQlIpE53vUyzTodzU_uExMpQFQbxw"
                        alt="Pooja Nambiar"
                      />
                      <span className="font-bold text-[#dce1ff]">Pooja Nambiar</span>
                      <span className="px-1.5 py-0.2 rounded bg-[#222941] text-[#4cd7f6] text-[9px] font-bold">
                        IIT BOMBAY • GOLDMAN SACHS
                      </span>
                    </div>
                    <span className="text-[10px] text-[#869397]">2 hours ago</span>
                  </div>

                  <p className="font-['Inter'] text-xs text-[#bcc9cd] leading-relaxed">
                    Great transition from Pandas into Polars LazyFrame! Notice how you pruned 34 non-required columns before grouping. However, make sure you use <code className="text-[#4cd7f6] font-['JetBrains_Mono']">.collect(streaming=True)</code> so our memory footprint stays under 1.5 GB on the worker nodes during peak volume.
                  </p>
                </div>

                {/* Inline Mentor Comment 2 */}
                <div className="mx-4 mb-4 p-4 rounded-lg bg-[#181e36] border border-[#4edea3]/40 text-xs">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <img
                        className="w-6 h-6 rounded-full object-cover ring-1 ring-[#4edea3]"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOtVLuWt15Zndr8vWEwE1ONLpEOcuvuomPzssy4rq4JNKqZddoxShkjcPrJjKnSIeMGdRWyIcbhLL0oTGVhYEF4fCKZE6SqEIYKmUvwbE3tA6pylxcz0786rBzOEELMWJEmB5mx1MsqxwnuWclxtNlCxH_BQTT--6oAJL8Ke1mksBl25xj4XcoxUjegy53_qKsTqZdmCvMpBu_SZDEh1y1FRrBGH-nbmxkZI8HwV8fp9DR_30xcAMO"
                        alt="Aarav Singhal"
                      />
                      <span className="font-bold text-[#dce1ff]">Aarav Singhal</span>
                      <span className="px-1.5 py-0.2 rounded bg-[#222941] text-[#4edea3] text-[9px] font-bold">
                        IIT DELHI • EX-GOOGLE
                      </span>
                    </div>
                    <span className="text-[10px] text-[#869397]">1 hour ago</span>
                  </div>

                  <p className="font-['Inter'] text-xs text-[#bcc9cd] leading-relaxed">
                    Also checked the execution AST: 0 full-table scans validated. Once streaming execution is enabled, I will sign off on the branch merge into main.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'benchmarks' && (
            <div className="space-y-4 font-['JetBrains_Mono'] text-xs">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-lg bg-[#141a32] border border-[#222941]">
                  <span className="text-[#869397] block mb-1">RAM Peak Consumption</span>
                  <div className="text-xl font-bold text-[#4edea3]">1.1 GB</div>
                  <span className="text-[10px] text-[#869397]">Reduced from 14.2 GB (92% drop)</span>
                </div>

                <div className="p-4 rounded-lg bg-[#141a32] border border-[#222941]">
                  <span className="text-[#869397] block mb-1">Execution Clock Time</span>
                  <div className="text-xl font-bold text-[#4cd7f6]">412 ms</div>
                  <span className="text-[10px] text-[#869397]">Down from 12.8s (31x speedup)</span>
                </div>

                <div className="p-4 rounded-lg bg-[#141a32] border border-[#222941]">
                  <span className="text-[#869397] block mb-1">Cyclomatic Complexity</span>
                  <div className="text-xl font-bold text-[#89ceff]">Grade A (3.2)</div>
                  <span className="text-[10px] text-[#869397]">0 Nested branching anti-patterns</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* CTA Box */}
      <div className="text-center p-8 rounded-xl bg-[#141a32] border border-[#222941]">
        <h3 className="font-['Plus_Jakarta_Sans'] text-xl text-[#dce1ff] font-bold mb-2">
          Ready to have your code reviewed like a senior FAANG engineer?
        </h3>
        <p className="font-['Inter'] text-xs sm:text-sm text-[#bcc9cd] mb-6 max-w-lg mx-auto">
          Sign up for the diagnostic aptitude screening to qualify for the Summer 2025 cohort with 1-on-1 code reviews.
        </p>
        <button
          onClick={onOpenApplyModal}
          className="px-6 py-3 rounded bg-[#4cd7f6] text-[#003640] font-['JetBrains_Mono'] text-xs uppercase font-bold tracking-wider shadow-[0_0_20px_rgba(76,215,246,0.35)] hover:shadow-[0_0_28px_rgba(76,215,246,0.55)] transition-all"
        >
          Book IIT Technical Screening
        </button>
      </div>
    </div>
  );
};
