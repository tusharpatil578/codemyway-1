import React, { useState } from 'react';

interface AstTreeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AstTreeModal: React.FC<AstTreeModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'logical' | 'physical' | 'simd'>('logical');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="w-full max-w-4xl max-h-[90vh] flex flex-col bg-[#0b1229] border border-[#2d344c] rounded-xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 py-4 bg-[#141a32] border-b border-[#222941] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-[#4cd7f6] animate-pulse"></span>
            <div>
              <h3 className="font-['Plus_Jakarta_Sans'] text-base font-bold text-[#dce1ff]">
                Polars LazyFrame AST &amp; Physical Query Plan
              </h3>
              <p className="font-['JetBrains_Mono'] text-xs text-[#869397]">
                codemyway_kernel_v4.2.py • Engine SIMD Vectorizer
              </p>
            </div>
          </div>
          
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#869397] hover:text-[#dce1ff] hover:bg-[#222941] transition-colors"
            aria-label="Close AST modal"
          >
            <span className="material-symbols-outlined text-lg">close</span>
          </button>
        </div>

        {/* Tab switcher */}
        <div className="flex items-center gap-2 px-6 pt-3 bg-[#0e1630] border-b border-[#222941] font-['JetBrains_Mono'] text-xs">
          <button
            onClick={() => setActiveTab('logical')}
            className={`px-4 py-2 border-b-2 font-medium transition-colors ${
              activeTab === 'logical'
                ? 'border-[#4cd7f6] text-[#4cd7f6]'
                : 'border-transparent text-[#869397] hover:text-[#dce1ff]'
            }`}
          >
            01. Logical Plan (IR)
          </button>
          <button
            onClick={() => setActiveTab('physical')}
            className={`px-4 py-2 border-b-2 font-medium transition-colors ${
              activeTab === 'physical'
                ? 'border-[#4cd7f6] text-[#4cd7f6]'
                : 'border-transparent text-[#869397] hover:text-[#dce1ff]'
            }`}
          >
            02. Physical Pushdown Engine
          </button>
          <button
            onClick={() => setActiveTab('simd')}
            className={`px-4 py-2 border-b-2 font-medium transition-colors ${
              activeTab === 'simd'
                ? 'border-[#4edea3] text-[#4edea3]'
                : 'border-transparent text-[#869397] hover:text-[#dce1ff]'
            }`}
          >
            03. SIMD Memory Cache Specs
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-4 font-['JetBrains_Mono'] text-xs">
          {activeTab === 'logical' && (
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-[#060d24] border border-[#222941] text-[#bcc9cd] leading-relaxed">
                <div className="text-[#4cd7f6] font-bold mb-2">--- OPTIMIZED LOGICAL PLAN (UNPARSED AST) ---</div>
                <pre className="text-[11px] text-[#89ceff] whitespace-pre-wrap">
{`AGGREGATE[
    keys: ["merchant_id", "cohort_month"],
    aggs: [
        col("net_volume_usd").quantile(0.95, InterpolationMethod::Nearest).alias("p95_gmv")
    ]
]
└── FILTER col("status") == "SETTLED"
    └── SCAN PARQUET [s3://fintech-lake/ledger_2024_*.parquet]
        PROJECT 4/38 COLUMNS: ["merchant_id", "cohort_month", "status", "net_volume_usd"]
        PREDICATE PUSHDOWN: [status == 'SETTLED']
        PARTITION PRUNING: 84 / 96 partitions eliminated at scan phase`}
                </pre>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="p-3 bg-[#181e36] rounded border border-[#222941]">
                  <div className="text-[#869397]">Projection Pushdown</div>
                  <div className="text-[#4edea3] font-bold text-sm">89.4% Memory Saved</div>
                  <div className="text-[10px] text-[#869397] mt-1">Read 4 cols instead of 38</div>
                </div>
                <div className="p-3 bg-[#181e36] rounded border border-[#222941]">
                  <div className="text-[#869397]">Predicate Pushdown</div>
                  <div className="text-[#4cd7f6] font-bold text-sm">Pre-Filtered in Parquet</div>
                  <div className="text-[10px] text-[#869397] mt-1">No row unpickling overhead</div>
                </div>
                <div className="p-3 bg-[#181e36] rounded border border-[#222941]">
                  <div className="text-[#869397]">Execution Model</div>
                  <div className="text-[#89ceff] font-bold text-sm">Morsel-Driven Parallel</div>
                  <div className="text-[10px] text-[#869397] mt-1">16 threads on AMD EPYC</div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'physical' && (
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-[#060d24] border border-[#222941] text-[#bcc9cd] leading-relaxed">
                <div className="text-[#4cd7f6] font-bold mb-2">--- PHYSICAL PIPELINE TOPOLOGY ---</div>
                <div className="space-y-2 text-[11px]">
                  <div className="p-2 rounded bg-[#181e36] flex items-center justify-between">
                    <span className="text-[#4edea3]">Stage 01: S3 Parquet Decoder</span>
                    <span className="text-[#869397]">SIMD Snappy decompression • 820 MB/s</span>
                  </div>
                  <div className="flex justify-center text-[#869397]">↓ Zero-Copy Arrow RecordBatches</div>
                  <div className="p-2 rounded bg-[#181e36] flex items-center justify-between">
                    <span className="text-[#4cd7f6]">Stage 02: Radix Hash Grouper</span>
                    <span className="text-[#869397]">Cache-conscious 256-bucket partitioned table</span>
                  </div>
                  <div className="flex justify-center text-[#869397]">↓ Vectorized Quantile Estimation</div>
                  <div className="p-2 rounded bg-[#181e36] flex items-center justify-between">
                    <span className="text-[#89ceff]">Stage 03: T-Digest / HyperLogLog</span>
                    <span className="text-[#869397]">P95 accuracy ±0.01% error bound</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'simd' && (
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-[#060d24] border border-[#222941] text-[#bcc9cd]">
                <div className="text-[#4edea3] font-bold mb-3">AVX-512 &amp; ARM NEON HARDWARE ACCELERATION</div>
                <p className="text-xs text-[#869397] mb-3">
                  In CodeMyWay Module 02, you will learn why traditional Pandas Python loops run 50x slower than vectorized SIMD registers. Here is the instruction profiling benchmark:
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 bg-[#141a32] rounded">
                    <span className="text-[#ffb4ab] font-bold block mb-1">Standard Python Loop</span>
                    <span className="text-base text-[#dce1ff] font-bold">18,420 ms</span>
                    <span className="text-[10px] text-[#869397] block">High cache misses, GIL bottleneck</span>
                  </div>
                  <div className="p-3 bg-[#141a32] rounded border border-[#4edea3]/30">
                    <span className="text-[#4edea3] font-bold block mb-1">CodeMyWay Polars Engine</span>
                    <span className="text-base text-[#4edea3] font-bold">412 ms</span>
                    <span className="text-[10px] text-[#4edea3] block">44.7x speedup • 0 copy</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-[#141a32] border-t border-[#222941] flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-[#869397]">
            <span className="material-symbols-outlined text-sm text-[#4edea3]">verified</span>
            <span>Reviewed &amp; Benchmarked by Rohan Verma (IIT Roorkee / Stripe)</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded bg-[#222941] text-[#dce1ff] hover:bg-[#2d344c] font-['JetBrains_Mono'] text-xs transition-colors"
          >
            Close AST Inspector
          </button>
        </div>
      </div>
    </div>
  );
};
