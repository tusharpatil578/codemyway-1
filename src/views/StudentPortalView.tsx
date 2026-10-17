import React, { useState } from 'react';

export const StudentPortalView: React.FC = () => {
  const [activeCodeTab, setActiveCodeTab] = useState<'sql' | 'python'>('sql');
  const [userQuery, setUserQuery] = useState<string>(
    `SELECT \n  date_trunc('month', transaction_timestamp) AS cohort_month,\n  merchant_id,\n  COUNT(DISTINCT user_id) AS active_users,\n  PERCENTILE_CONT(0.95) WITHIN GROUP (ORDER BY net_amount_usd) AS p95_gmv\nFROM production_ledger\nWHERE status = 'SETTLED'\nGROUP BY 1, 2\nHAVING COUNT(*) > 100\nORDER BY cohort_month DESC;`
  );
  const [queryRunning, setQueryRunning] = useState(false);
  const [queryOutput, setQueryOutput] = useState<{ rows: number; timeMs: number; status: string } | null>({
    rows: 4820,
    timeMs: 184,
    status: 'EXPLAIN ANALYZE: 0 Seq Scans • Index Scan on idx_ledger_status_date utilized'
  });

  const handleRunQuery = () => {
    setQueryRunning(true);
    setTimeout(() => {
      setQueryOutput({
        rows: Math.floor(4000 + Math.random() * 2000),
        timeMs: Math.floor(120 + Math.random() * 90),
        status: 'Vectorized SIMD Engine Plan Executed • 0 Full Table Scans • Memory Delta 14MB'
      });
      setQueryRunning(false);
    }, 400);
  };

  return (
    <div className="min-h-screen bg-[#0b1229] py-12 px-6 lg:px-12 max-w-7xl mx-auto">
      {/* Header Profile Bar */}
      <div className="p-6 rounded-2xl bg-[#141a32] border border-[#222941] mb-8 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xl">
        <div className="flex items-center gap-4">
          <div className="relative">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuANAPDlFreib8lHOJz6_22zDgaPWMP3hTFpPbzPmnhKddU2cqe6lwFfRpEwMIuB4JK-X91KXeJ5eDqAvRXdhEexCUbiVZcAkRZJY-aGITy7-7oAkS6Mm5oAM70KdZM-7PsWJfbGqBhmNliRWnpPJoHJ8TfPRsMqKXPgPZ2mbZXZwEd8sSXodip3g2Y2CyD-IkqNq1i93kXGOee1YrjRQGnty8rtVYsj5szNSfA-XiDNdFLG4UT48T05"
              alt="Student Avatar"
              className="w-16 h-16 rounded-xl object-cover ring-2 ring-[#4cd7f6]"
            />
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-[#4edea3] rounded-full ring-2 ring-[#0b1229]"></span>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <h2 className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-[#dce1ff]">
                Aditya Sen
              </h2>
              <span className="px-2 py-0.5 rounded bg-[#181e36] text-[#4edea3] font-['JetBrains_Mono'] text-[10px] font-bold border border-[#4edea3]/20">
                Active Cohort #14
              </span>
            </div>
            <p className="font-['Inter'] text-xs text-[#bcc9cd] mt-0.5">
              Track: Advanced Analytics &amp; MLOps • Week 06 / 16
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <div className="p-3 rounded-lg bg-[#060d24] border border-[#222941] font-['JetBrains_Mono'] text-xs">
            <span className="text-[#869397] block text-[10px]">Assigned Mentor</span>
            <span className="text-[#4cd7f6] font-bold">Aarav Singhal (IIT Delhi)</span>
          </div>

          <div className="p-3 rounded-lg bg-[#060d24] border border-[#222941] font-['JetBrains_Mono'] text-xs">
            <span className="text-[#869397] block text-[10px]">Next 1-on-1 Code Sync</span>
            <span className="text-[#4edea3] font-bold">Thursday @ 7:30 PM IST</span>
          </div>

          <button
            onClick={() => alert("Connecting to Google Meet room with mentor Aarav Singhal (IIT Delhi)...")}
            className="px-4 py-2.5 rounded bg-[#4edea3] text-[#003824] font-['JetBrains_Mono'] text-xs font-bold shadow-[0_0_15px_rgba(78,222,163,0.3)] hover:shadow-[0_0_22px_rgba(78,222,163,0.5)] transition-all flex items-center gap-1.5"
          >
            <span className="material-symbols-outlined text-sm">video_call</span>
            <span>Join 1-on-1 Sync</span>
          </button>
        </div>
      </div>

      {/* Cohort Progress & Git Review Queue Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
        {/* Left Column: Progress & Milestones */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 rounded-xl bg-[#141a32] border border-[#222941]">
            <div className="flex items-center justify-between mb-3">
              <span className="font-['JetBrains_Mono'] text-xs text-[#4cd7f6] uppercase font-bold tracking-wider">
                Cohort Progression
              </span>
              <span className="font-['JetBrains_Mono'] text-xs text-[#dce1ff] font-bold">38% Completed</span>
            </div>

            <div className="w-full h-2 rounded-full bg-[#060d24] mb-4">
              <div className="h-2 rounded-full bg-gradient-to-r from-[#4cd7f6] to-[#4edea3]" style={{ width: '38%' }}></div>
            </div>

            <div className="space-y-3 font-['Inter'] text-xs text-[#bcc9cd]">
              <div className="flex items-center justify-between p-2 rounded bg-[#181e36]">
                <span className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm text-[#4edea3]">check_circle</span>
                  <span>Mod 01: SQL &amp; Data Warehousing</span>
                </span>
                <span className="text-[#4edea3] font-['JetBrains_Mono'] font-bold">Completed</span>
              </div>

              <div className="flex items-center justify-between p-2 rounded bg-[#181e36] border border-[#4cd7f6]/30">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#4cd7f6] animate-pulse"></span>
                  <span className="text-[#dce1ff] font-semibold">Mod 02: Production Python Analytics</span>
                </span>
                <span className="text-[#4cd7f6] font-['JetBrains_Mono'] font-bold">In Progress</span>
              </div>

              <div className="flex items-center justify-between p-2 rounded bg-[#181e36] opacity-60">
                <span className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm text-[#869397]">lock</span>
                  <span>Mod 03: Statistical Modeling &amp; A/B</span>
                </span>
                <span className="font-['JetBrains_Mono']">Upcoming</span>
              </div>

              <div className="flex items-center justify-between p-2 rounded bg-[#181e36] opacity-60">
                <span className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm text-[#869397]">lock</span>
                  <span>Mod 04: Executive BI &amp; Capstone Defense</span>
                </span>
                <span className="font-['JetBrains_Mono']">Upcoming</span>
              </div>
            </div>
          </div>

          {/* GitHub PR Review Status */}
          <div className="p-6 rounded-xl bg-[#141a32] border border-[#222941]">
            <span className="font-['JetBrains_Mono'] text-xs text-[#4edea3] uppercase font-bold tracking-wider block mb-3">
              Your GitHub PR Submissions
            </span>
            <div className="space-y-3 font-['JetBrains_Mono'] text-xs">
              <div className="p-3 rounded bg-[#060d24] border border-[#222941]">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[#dce1ff] font-bold">PR #12: polars-chunked-etl</span>
                  <span className="text-[#4cd7f6]">In Review</span>
                </div>
                <p className="text-[11px] text-[#869397] font-['Inter']">
                  Reviewer: Aarav Singhal (IIT Delhi) • 1 comment requested
                </p>
              </div>

              <div className="p-3 rounded bg-[#060d24] border border-[#222941]">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[#dce1ff] font-bold">PR #11: recursive-cte-hierarchy</span>
                  <span className="text-[#4edea3]">Merged ✓</span>
                </div>
                <p className="text-[11px] text-[#869397] font-['Inter']">
                  Reviewer: Pooja Nambiar (IIT Bombay) • Score: 98/100
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Query Sandbox */}
        <div className="lg:col-span-7 flex flex-col justify-between p-6 rounded-xl bg-[#141a32] border border-[#222941]">
          <div>
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#222941]">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    setActiveCodeTab('sql');
                    setUserQuery(`SELECT \n  date_trunc('month', transaction_timestamp) AS cohort_month,\n  merchant_id,\n  COUNT(DISTINCT user_id) AS active_users,\n  PERCENTILE_CONT(0.95) WITHIN GROUP (ORDER BY net_amount_usd) AS p95_gmv\nFROM production_ledger\nWHERE status = 'SETTLED'\nGROUP BY 1, 2\nHAVING COUNT(*) > 100\nORDER BY cohort_month DESC;`);
                  }}
                  className={`px-3 py-1 rounded font-['JetBrains_Mono'] text-xs font-semibold ${
                    activeCodeTab === 'sql'
                      ? 'bg-[#222941] text-[#4cd7f6]'
                      : 'text-[#869397] hover:text-[#dce1ff]'
                  }`}
                >
                  PostgreSQL Terminal
                </button>
                <button
                  onClick={() => {
                    setActiveCodeTab('python');
                    setUserQuery(`import polars as pl\n\n# LazyFrame partition scanner\nq = (\n    pl.scan_parquet("s3://fintech-lake/ledger_2024_*.parquet")\n    .filter(pl.col("status") == "SETTLED")\n    .group_by(["merchant_id"])\n    .agg(pl.col("net_volume_usd").quantile(0.95))\n)\ndf = q.collect(streaming=True)`);
                  }}
                  className={`px-3 py-1 rounded font-['JetBrains_Mono'] text-xs font-semibold ${
                    activeCodeTab === 'python'
                      ? 'bg-[#222941] text-[#4cd7f6]'
                      : 'text-[#869397] hover:text-[#dce1ff]'
                  }`}
                >
                  Polars 3.11 Sandbox
                </button>
              </div>

              <button
                onClick={handleRunQuery}
                disabled={queryRunning}
                className="px-3.5 py-1.5 rounded bg-[#4cd7f6] text-[#003640] font-['JetBrains_Mono'] text-xs font-bold flex items-center gap-1.5 hover:bg-[#89ceff] transition-colors"
              >
                <span className="material-symbols-outlined text-sm">
                  {queryRunning ? 'sync' : 'play_arrow'}
                </span>
                <span>{queryRunning ? 'Executing...' : 'Run Query'}</span>
              </button>
            </div>

            <textarea
              rows={9}
              value={userQuery}
              onChange={(e) => setUserQuery(e.target.value)}
              className="w-full p-4 rounded-lg bg-[#060d24] text-[#dce1ff] font-['JetBrains_Mono'] text-xs border border-[#222941] focus:outline-none focus:border-[#4cd7f6] leading-relaxed resize-none"
            />
          </div>

          {/* Query Output Telemetry */}
          {queryOutput && (
            <div className="mt-4 p-4 rounded-lg bg-[#060d24] border border-[#222941] font-['JetBrains_Mono'] text-xs">
              <div className="flex items-center justify-between text-[#869397] mb-2">
                <span className="text-[#4edea3]">Execution Succeeded</span>
                <span>{queryOutput.rows} rows in {queryOutput.timeMs}ms</span>
              </div>
              <div className="text-[#89ceff] text-[11px]">
                {queryOutput.status}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
