import React, { useState } from 'react';

interface CodeTerminalProps {
  onOpenAstModal: () => void;
}

export const CodeTerminal: React.FC<CodeTerminalProps> = ({ onOpenAstModal }) => {
  const [isRunning, setIsRunning] = useState(false);
  const [metrics, setMetrics] = useState({
    rows: '38.4M',
    timeMs: 412,
    p95Gmv: '$142,890',
    cohortMoM: '+28.4%',
    chiSquare: '0.0012',
    cacheHit: '99.8%'
  });

  const handleRerun = () => {
    setIsRunning(true);
    setTimeout(() => {
      const randomMs = Math.floor(380 + Math.random() * 45);
      const randomGmv = Math.floor(140000 + Math.random() * 6000).toLocaleString();
      setMetrics({
        rows: '38.4M',
        timeMs: randomMs,
        p95Gmv: `$${randomGmv}`,
        cohortMoM: `+${(27 + Math.random() * 3).toFixed(1)}%`,
        chiSquare: (0.001 + Math.random() * 0.0005).toFixed(4),
        cacheHit: `${(99.7 + Math.random() * 0.2).toFixed(1)}%`
      });
      setIsRunning(false);
    }, 450);
  };

  return (
    <div className="bg-[#060d24]/90 backdrop-blur-2xl rounded-xl shadow-2xl p-6 sm:p-7 relative overflow-hidden border border-[#222941]">
      {/* Terminal Title Bar */}
      <div className="flex flex-wrap items-center justify-between pb-4 mb-5 border-b border-[#2d344c] gap-3">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#ffb4ab]"></span>
          <span className="w-3 h-3 rounded-full bg-[#2bb0f5]"></span>
          <span className="w-3 h-3 rounded-full bg-[#4edea3]"></span>
          <span className="font-['JetBrains_Mono'] text-[10px] text-[#869397] ml-3">
            codemyway_kernel_v4.2.py • Python 3.11
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleRerun}
            disabled={isRunning}
            className="px-2.5 py-1 rounded bg-[#181e36] hover:bg-[#222941] text-[#4cd7f6] font-['JetBrains_Mono'] text-[10px] font-semibold border border-[#4cd7f6]/20 transition-all flex items-center gap-1.5"
            title="Execute query in Polars SIMD sandbox"
          >
            <span className="material-symbols-outlined text-xs">
              {isRunning ? 'sync' : 'play_arrow'}
            </span>
            <span>{isRunning ? 'Computing...' : 'Re-run Kernel'}</span>
          </button>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181e36] font-['JetBrains_Mono'] text-[10px] text-[#4edea3] shadow-[0_0_12px_rgba(78,222,163,0.15)] border border-[#4edea3]/20">
            <span className="material-symbols-outlined text-xs">verified_user</span>
            <span>Reviewed by: Rohan V. (IIT Bombay)</span>
          </div>
        </div>
      </div>

      {/* Code Editor Area */}
      <div className="space-y-4 font-['JetBrains_Mono'] text-[12px] leading-relaxed text-[#bcc9cd]">
        <div className="p-3.5 rounded bg-[#141a32] border border-[#222941]">
          <div className="text-[#869397] font-['JetBrains_Mono'] text-[10px] mb-1">
            # Ingest multi-tier parquet partition &amp; compute 90-day retention curve
          </div>
          <div className="text-[#dce1ff] font-['JetBrains_Mono']">
            <span className="text-[#4edea3]">import</span> polars <span className="text-[#4edea3]">as</span> pl<br />
            <span className="text-[#4cd7f6]">df_transactions</span> = pl.scan_parquet(<span className="text-[#89ceff]">"s3://fintech-lake/ledger_2024_*.parquet"</span>)<br />
            <span className="text-[#4cd7f6]">cohort_analysis</span> = (df_transactions<br />
            &nbsp;&nbsp;.filter(pl.col(<span className="text-[#89ceff]">"status"</span>) == <span className="text-[#89ceff]">"SETTLED"</span>)<br />
            &nbsp;&nbsp;.group_by([<span className="text-[#89ceff]">"merchant_id"</span>, <span className="text-[#89ceff]">"cohort_month"</span>])<br />
            &nbsp;&nbsp;.agg(pl.col(<span className="text-[#89ceff]">"net_volume_usd"</span>).quantile(0.95).alias(<span className="text-[#89ceff]">"p95_gmv"</span>)))
          </div>
        </div>

        {/* Execution Output Panel */}
        <div className="p-4 rounded bg-[#181e36] border border-[#222941]">
          <div className="flex flex-wrap items-center justify-between mb-2 gap-2">
            <span className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-wider text-[#4cd7f6] font-bold">
              Execution Output • {metrics.rows} Rows Processed in {metrics.timeMs}ms
            </span>
            <span className="text-[#4edea3] font-['JetBrains_Mono'] text-[10px] flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4edea3] animate-pulse"></span>
              Vectorized SIMD Active
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center pt-2">
            <div className="p-2.5 rounded bg-[#141a32] border border-[#222941]">
              <div className="text-[#869397] font-['JetBrains_Mono'] text-[10px]">P95 GMV</div>
              <div className="font-bold text-[#dce1ff] font-['JetBrains_Mono'] text-sm mt-0.5">
                {metrics.p95Gmv}
              </div>
            </div>

            <div className="p-2.5 rounded bg-[#141a32] border border-[#222941]">
              <div className="text-[#869397] font-['JetBrains_Mono'] text-[10px]">Cohort MoM</div>
              <div className="font-bold text-[#4edea3] font-['JetBrains_Mono'] text-sm mt-0.5">
                {metrics.cohortMoM}
              </div>
            </div>

            <div className="p-2.5 rounded bg-[#141a32] border border-[#222941]">
              <div className="text-[#869397] font-['JetBrains_Mono'] text-[10px]">Chi-Square (p)</div>
              <div className="font-bold text-[#89ceff] font-['JetBrains_Mono'] text-sm mt-0.5">
                {metrics.chiSquare}
              </div>
            </div>

            <div className="p-2.5 rounded bg-[#141a32] border border-[#222941]">
              <div className="text-[#869397] font-['JetBrains_Mono'] text-[10px]">Cache Hit</div>
              <div className="font-bold text-[#4cd7f6] font-['JetBrains_Mono'] text-sm mt-0.5">
                {metrics.cacheHit}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Terminal Footer */}
      <div className="mt-5 pt-4 border-t border-[#2d344c] flex flex-wrap items-center justify-between font-['JetBrains_Mono'] text-[10px] text-[#869397] gap-3">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-sm text-[#4edea3]">check_circle</span>
          <span className="text-[#bcc9cd]">Production Query Plan Validated • 0 Full Table Scans</span>
        </div>

        <button
          onClick={onOpenAstModal}
          className="text-[#4cd7f6] hover:text-[#89ceff] hover:underline cursor-pointer flex items-center gap-1 font-semibold group transition-colors"
        >
          <span>View AST Tree</span>
          <span className="group-hover:translate-x-0.5 transition-transform">→</span>
        </button>
      </div>
    </div>
  );
};
