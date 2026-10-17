import React, { useState } from 'react';
import { MENTORS, Mentor } from '../data/mentorsData';

interface MentorsViewProps {
  onOpenApplyModal: () => void;
}

export const MentorsView: React.FC<MentorsViewProps> = ({ onOpenApplyModal }) => {
  const [filterInstitute, setFilterInstitute] = useState<string>('all');
  const [selectedMentor, setSelectedMentor] = useState<Mentor | null>(null);

  const filteredMentors = MENTORS.filter((m) => {
    if (filterInstitute === 'all') return true;
    return m.collegeTag.toLowerCase().includes(filterInstitute.toLowerCase());
  });

  return (
    <div className="min-h-screen bg-[#0b1229] py-12 px-6 lg:px-12 max-w-7xl mx-auto">
      {/* Header */}
      <div className="max-w-3xl mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#181e36] font-['JetBrains_Mono'] text-xs text-[#4edea3] font-bold uppercase mb-3 border border-[#4edea3]/20">
          <span className="material-symbols-outlined text-xs">verified</span>
          Verified Academic &amp; Industry Faculty
        </div>
        <h1 className="font-['Plus_Jakarta_Sans'] text-3xl sm:text-4xl text-[#dce1ff] font-bold tracking-tight mb-4">
          The 100% IIT &amp; NIT Faculty Directory
        </h1>
        <p className="font-['Inter'] text-sm sm:text-base text-[#bcc9cd] leading-relaxed">
          Zero outsourced teaching assistants. Every mentor has cleared competitive Indian Institute of Technology admissions and currently architects high-throughput data systems at Tier-1 tech organizations.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-[#181e36]">
        <button
          onClick={() => setFilterInstitute('all')}
          className={`px-4 py-2 rounded-lg font-['JetBrains_Mono'] text-xs font-semibold transition-all ${
            filterInstitute === 'all'
              ? 'bg-[#222941] text-[#4cd7f6] border border-[#4cd7f6]/40'
              : 'text-[#869397] hover:text-[#dce1ff] bg-[#141a32]'
          }`}
        >
          All Faculty ({MENTORS.length})
        </button>
        <button
          onClick={() => setFilterInstitute('iit delhi')}
          className={`px-4 py-2 rounded-lg font-['JetBrains_Mono'] text-xs font-semibold transition-all ${
            filterInstitute === 'iit delhi'
              ? 'bg-[#222941] text-[#4cd7f6] border border-[#4cd7f6]/40'
              : 'text-[#869397] hover:text-[#dce1ff] bg-[#141a32]'
          }`}
        >
          IIT Delhi
        </button>
        <button
          onClick={() => setFilterInstitute('iit bombay')}
          className={`px-4 py-2 rounded-lg font-['JetBrains_Mono'] text-xs font-semibold transition-all ${
            filterInstitute === 'iit bombay'
              ? 'bg-[#222941] text-[#4cd7f6] border border-[#4cd7f6]/40'
              : 'text-[#869397] hover:text-[#dce1ff] bg-[#141a32]'
          }`}
        >
          IIT Bombay
        </button>
        <button
          onClick={() => setFilterInstitute('nit trichy')}
          className={`px-4 py-2 rounded-lg font-['JetBrains_Mono'] text-xs font-semibold transition-all ${
            filterInstitute === 'nit trichy'
              ? 'bg-[#222941] text-[#4cd7f6] border border-[#4cd7f6]/40'
              : 'text-[#869397] hover:text-[#dce1ff] bg-[#141a32]'
          }`}
        >
          NIT Trichy
        </button>
        <button
          onClick={() => setFilterInstitute('iit roorkee')}
          className={`px-4 py-2 rounded-lg font-['JetBrains_Mono'] text-xs font-semibold transition-all ${
            filterInstitute === 'iit roorkee'
              ? 'bg-[#222941] text-[#4cd7f6] border border-[#4cd7f6]/40'
              : 'text-[#869397] hover:text-[#dce1ff] bg-[#141a32]'
          }`}
        >
          IIT Roorkee
        </button>
      </div>

      {/* Faculty Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
        {filteredMentors.map((mentor) => (
          <div
            key={mentor.id}
            className="p-7 rounded-xl bg-[#141a32] border border-[#222941] hover:border-[#4cd7f6]/40 shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img
                      src={mentor.image}
                      alt={mentor.alt}
                      className="w-20 h-20 rounded-xl object-cover ring-2 ring-[#3d494c]"
                    />
                    <div
                      className={`absolute -bottom-2 -right-2 px-2 py-0.5 rounded font-['JetBrains_Mono'] text-[10px] font-bold ${
                        mentor.companyTagColor === 'secondary'
                          ? 'bg-[#4edea3] text-[#003824]'
                          : mentor.companyTagColor === 'primary'
                          ? 'bg-[#4cd7f6] text-[#003640]'
                          : 'bg-[#2bb0f5] text-[#00344d]'
                      }`}
                    >
                      {mentor.companyTag}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-['Plus_Jakarta_Sans'] text-xl text-[#dce1ff] font-bold">
                      {mentor.name}
                    </h3>
                    <p className="font-['JetBrains_Mono'] text-xs text-[#4cd7f6] font-medium mt-0.5">
                      {mentor.role}
                    </p>
                    <div className="mt-1 font-['JetBrains_Mono'] text-[11px] text-[#869397]">
                      {mentor.jeeRank}
                    </div>
                  </div>
                </div>

                <span className="px-3 py-1 rounded bg-[#181e36] text-[#4edea3] font-['JetBrains_Mono'] text-xs font-bold border border-[#4edea3]/20">
                  {mentor.collegeTag}
                </span>
              </div>

              <p className="font-['Inter'] text-xs text-[#bcc9cd] mb-6 leading-relaxed">
                {mentor.bio}
              </p>

              <div className="p-3 rounded-lg bg-[#060d24] border border-[#181e36] space-y-2 font-['JetBrains_Mono'] text-xs mb-6">
                <div className="flex justify-between text-[#869397]">
                  <span>Track Focus:</span>
                  <span className="text-[#dce1ff] font-semibold">{mentor.trackSpecialization}</span>
                </div>
                <div className="flex justify-between text-[#869397]">
                  <span>Track Record:</span>
                  <span className="text-[#4edea3] font-bold">{mentor.mentoredCohorts} • {mentor.placementRate}</span>
                </div>
                {mentor.patentsOrPapers && (
                  <div className="flex justify-between text-[#869397]">
                    <span>Research/Pubs:</span>
                    <span className="text-[#89ceff] text-[11px] truncate max-w-[220px]">{mentor.patentsOrPapers}</span>
                  </div>
                )}
              </div>
            </div>

            <div className="pt-4 border-t border-[#222941] flex items-center justify-between">
              <span className="font-['JetBrains_Mono'] text-[11px] text-[#4edea3] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4edea3] animate-pulse"></span>
                {mentor.availability}
              </span>

              <button
                onClick={onOpenApplyModal}
                className="px-4 py-2 rounded bg-[#4cd7f6] text-[#003640] font-['JetBrains_Mono'] text-xs font-bold shadow-[0_0_15px_rgba(76,215,246,0.3)] hover:shadow-[0_0_22px_rgba(76,215,246,0.5)] transition-all"
              >
                Book 1-on-1 Diagnostic
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Mentorship Guarantee Box */}
      <div className="p-8 rounded-2xl bg-gradient-to-r from-[#181e36] to-[#141a32] border border-[#2d344c] flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="font-['Plus_Jakarta_Sans'] text-xl text-[#dce1ff] font-bold mb-1">
            Our 1 : 30 Ratio Contract
          </h3>
          <p className="font-['Inter'] text-xs sm:text-sm text-[#bcc9cd] max-w-xl leading-relaxed">
            Unlike mass-market EdTech platforms with 500-student webinars, we cap batches at 30 students per mentor. Every single pull request and Git branch is inspected by an IIT technologist.
          </p>
        </div>

        <button
          onClick={onOpenApplyModal}
          className="px-6 py-3 rounded bg-[#4edea3] text-[#003824] font-['Plus_Jakarta_Sans'] text-sm font-bold shadow-[0_0_20px_rgba(78,222,163,0.35)] hover:shadow-[0_0_28px_rgba(78,222,163,0.55)] transition-all whitespace-nowrap shrink-0"
        >
          Check Seat Availability for Summer 2025
        </button>
      </div>
    </div>
  );
};
