import React, { useState } from 'react';
import { ModuleInfo } from '../data/curriculumData';

interface LabSpecsModalProps {
  isOpen: boolean;
  module: ModuleInfo | null;
  onClose: () => void;
  onApplyClick: () => void;
}

export const LabSpecsModal: React.FC<LabSpecsModalProps> = ({
  isOpen,
  module,
  onClose,
  onApplyClick,
}) => {
  const [downloading, setDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!isOpen || !module) return null;

  const handleDownload = () => {
    setDownloading(true);
    // Simulate real file download
    setTimeout(() => {
      const markdownContent = `# CodeMyWay Production Lab Specification: ${module.title}
Version: 4.2.0 (Summer 2025 Cohort)
Faculty Oversight: IIT Delhi / IIT Bombay / NIT Trichy
Hours: ${module.hours}h Hands-on

## 1. Overview
${module.description}

## 2. Capstone Deliverable
${module.capstone}

## 3. Core Milestones
${module.bullets.map((b, i) => `${i + 1}. ${b}`).join('\n')}

## 4. Production Benchmarks
- Latency threshold: < 500ms on 100M rows
- Zero full table scans
- Strict typing with PyArrow & Pydantic
- Passing 100% of line-by-line alumni pull request checks

© 2025 CodeMyWay Institute of Technical Data Systems
`;
      const blob = new Blob([markdownContent], { type: 'text/markdown;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `${module.id}-production-lab-specs.md`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      setDownloading(false);
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 4000);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="w-full max-w-2xl bg-[#0b1229] border border-[#2d344c] rounded-xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-5 bg-[#141a32] border-b border-[#222941] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#181e36] flex items-center justify-center text-[#4cd7f6] border border-[#4cd7f6]/20">
              <span className="material-symbols-outlined">{module.icon}</span>
            </div>
            <div>
              <span className="font-['JetBrains_Mono'] text-[10px] text-[#4cd7f6] uppercase font-bold tracking-wider">
                {module.number} • {module.weeks}
              </span>
              <h3 className="font-['Plus_Jakarta_Sans'] text-lg font-bold text-[#dce1ff]">
                {module.title}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#869397] hover:text-[#dce1ff] hover:bg-[#222941] transition-colors"
          >
            <span className="material-symbols-outlined text-lg">close</span>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5 overflow-y-auto max-h-[60vh]">
          <div>
            <h4 className="font-['JetBrains_Mono'] text-xs uppercase tracking-wider text-[#869397] mb-2 font-semibold">
              Capstone Lab Deliverable
            </h4>
            <div className="p-4 rounded-lg bg-[#141a32] border border-[#222941] flex items-start gap-3">
              <span className="material-symbols-outlined text-[#4edea3] mt-0.5">verified_user</span>
              <div>
                <p className="font-['Plus_Jakarta_Sans'] text-sm font-bold text-[#dce1ff]">
                  {module.capstone}
                </p>
                <p className="font-['Inter'] text-xs text-[#bcc9cd] mt-1">
                  Students write and deploy full-stack production pipelines under 1-on-1 code review by IIT alumni before code is signed off.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-['JetBrains_Mono'] text-xs uppercase tracking-wider text-[#869397] mb-2 font-semibold">
              Lab Architecture Milestones ({module.hours} Lab Hours)
            </h4>
            <div className="space-y-2">
              {module.bullets.map((b, i) => (
                <div key={i} className="flex items-start gap-3 p-2.5 rounded bg-[#060d24] border border-[#181e36]">
                  <span className="material-symbols-outlined text-[#4edea3] text-sm mt-0.5">check_circle</span>
                  <span className="font-['Inter'] text-xs text-[#dce1ff]">{b}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-['JetBrains_Mono'] text-xs uppercase tracking-wider text-[#869397] mb-2 font-semibold">
              Production Tech Stack Tested
            </h4>
            <div className="flex flex-wrap gap-2">
              {module.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded bg-[#181e36] text-[#89ceff] font-['JetBrains_Mono'] text-xs border border-[#3d494c]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {downloadSuccess && (
            <div className="p-3 rounded bg-[#003824] border border-[#4edea3]/40 text-[#4edea3] text-xs font-['JetBrains_Mono'] flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">check</span>
              <span>Lab Specs (.md) successfully generated and downloaded to your device!</span>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-[#141a32] border-t border-[#222941] flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={handleDownload}
            disabled={downloading}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded bg-[#222941] hover:bg-[#2d344c] text-[#dce1ff] font-['JetBrains_Mono'] text-xs font-semibold border border-[#3d494c] transition-colors"
          >
            <span className="material-symbols-outlined text-sm">
              {downloading ? 'sync' : 'download'}
            </span>
            <span>{downloading ? 'Compiling Lab Specs...' : 'Download Full Lab Specs (.md)'}</span>
          </button>

          <button
            onClick={() => {
              onClose();
              onApplyClick();
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-[#4cd7f6] text-[#003640] font-['JetBrains_Mono'] text-xs font-bold shadow-[0_0_18px_rgba(76,215,246,0.35)] hover:shadow-[0_0_24px_rgba(76,215,246,0.55)] transition-all"
          >
            <span>Register for Diagnostic Screening</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  );
};
