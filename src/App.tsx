import React, { useState } from 'react';
import { Header, ScreenType } from './components/Header';
import { Footer } from './components/Footer';
import { CurriculumView } from './views/CurriculumView';
import { MentorsView } from './views/MentorsView';
import { PedagogyView } from './views/PedagogyView';
import { OutcomesView } from './views/OutcomesView';
import { PricingView } from './views/PricingView';
import { StudentPortalView } from './views/StudentPortalView';
import { AstTreeModal } from './components/AstTreeModal';
import { LabSpecsModal } from './components/LabSpecsModal';
import { ApplyModal } from './components/ApplyModal';
import { AdvisorModal } from './components/AdvisorModal';
import { ModuleInfo, CURRICULUM_MODULES } from './data/curriculumData';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('curriculum');
  const [astModalOpen, setAstModalOpen] = useState(false);
  const [labSpecsModalOpen, setLabSpecsModalOpen] = useState(false);
  const [selectedLabModule, setSelectedLabModule] = useState<ModuleInfo | null>(CURRICULUM_MODULES[0]);
  const [applyModalOpen, setApplyModalOpen] = useState(false);
  const [advisorModalOpen, setAdvisorModalOpen] = useState(false);

  const handleOpenLabSpecs = (module: ModuleInfo) => {
    setSelectedLabModule(module);
    setLabSpecsModalOpen(true);
  };

  const handleNavigate = (screen: ScreenType) => {
    setCurrentScreen(screen);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0b1229] text-[#dce1ff] flex flex-col selection:bg-[#4cd7f6]/30 selection:text-[#acedff]">
      {/* Top Fixed Header */}
      <Header
        currentScreen={currentScreen}
        onNavigate={handleNavigate}
        onOpenApplyModal={() => setApplyModalOpen(true)}
        onOpenAdvisorModal={() => setAdvisorModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full pt-20">
        {currentScreen === 'curriculum' && (
          <CurriculumView
            onOpenAstModal={() => setAstModalOpen(true)}
            onOpenLabSpecsModal={handleOpenLabSpecs}
            onOpenApplyModal={() => setApplyModalOpen(true)}
            onNavigate={handleNavigate}
          />
        )}

        {currentScreen === 'mentors-iit-nit' && (
          <MentorsView onOpenApplyModal={() => setApplyModalOpen(true)} />
        )}

        {currentScreen === 'pedagogy-live-reviews' && (
          <PedagogyView onOpenApplyModal={() => setApplyModalOpen(true)} />
        )}

        {currentScreen === 'student-outcomes' && (
          <OutcomesView onOpenApplyModal={() => setApplyModalOpen(true)} />
        )}

        {currentScreen === 'pricing-scholarships' && (
          <PricingView onOpenApplyModal={() => setApplyModalOpen(true)} />
        )}

        {currentScreen === 'student-login' && (
          <StudentPortalView />
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Interactive Modals */}
      <AstTreeModal
        isOpen={astModalOpen}
        onClose={() => setAstModalOpen(false)}
      />

      <LabSpecsModal
        isOpen={labSpecsModalOpen}
        module={selectedLabModule}
        onClose={() => setLabSpecsModalOpen(false)}
        onApplyClick={() => setApplyModalOpen(true)}
      />

      <ApplyModal
        isOpen={applyModalOpen}
        onClose={() => setApplyModalOpen(false)}
      />

      <AdvisorModal
        isOpen={advisorModalOpen}
        onClose={() => setAdvisorModalOpen(false)}
        onApplyClick={() => setApplyModalOpen(true)}
      />
    </div>
  );
}
