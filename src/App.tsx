import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { CustomCursor } from './components/CustomCursor';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { WhyGurukulSection } from './components/WhyGurukulSection';
import { VirtualTour360Section } from './components/VirtualTour360Section';
import { AcademicsSection } from './components/AcademicsSection';
import { SportsEquestrianSection } from './components/SportsEquestrianSection';
import { BoardingLifeSection } from './components/BoardingLifeSection';
import { FeeCalculatorWizard } from './components/FeeCalculatorWizard';
import { TestimonialsSection } from './components/TestimonialsSection';
import { AwardsAndFaqSection } from './components/AwardsAndFaqSection';
import { AdmissionCTASection } from './components/AdmissionCTASection';
import { Footer } from './components/Footer';
import { EnquiryModal } from './components/EnquiryModal';
import { CampusTourModal } from './components/CampusTourModal';
import { CampusVideoModal } from './components/CampusVideoModal';
import { FloatingQuickActions } from './components/FloatingQuickActions';
import type { CampusHotspot } from './data/tisData';

export const App: React.FC = () => {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [isTourModalOpen, setIsTourModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [selectedHotspot, setSelectedHotspot] = useState<CampusHotspot | undefined>(undefined);

  const handleOpenTour = (hotspot?: CampusHotspot) => {
    setSelectedHotspot(hotspot);
    setIsTourModalOpen(true);
  };

  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300 selection:bg-tis-gold-500 selection:text-tis-navy-950">
        {/* Custom Magnetic Cursor */}
        <CustomCursor />

        {/* Scroll Progress Bar & Floating Indicator */}
        <ScrollProgressBar />

        {/* Sticky Glass Navbar */}
        <Navbar
          onOpenEnquiry={() => setIsEnquiryOpen(true)}
          onOpenTour={() => handleOpenTour()}
        />

        {/* Hero Section */}
        <main>
          <HeroSection
            onOpenEnquiry={() => setIsEnquiryOpen(true)}
            onOpenTour={() => handleOpenTour()}
            onOpenVideo={() => setIsVideoModalOpen(true)}
          />

          {/* Why Gurukul: 4 Pillars of Excellence */}
          <WhyGurukulSection onOpenEnquiry={() => setIsEnquiryOpen(true)} />

          {/* Interactive Campus 360 Explorer */}
          <VirtualTour360Section
            onOpenTourModal={(spot) => handleOpenTour(spot)}
            onOpenEnquiry={() => setIsEnquiryOpen(true)}
          />

          {/* Academic Pathways (Grades IV - XII) */}
          <AcademicsSection onOpenEnquiry={() => setIsEnquiryOpen(true)} />

          {/* 16+ Sports & Royal Equestrian Hub */}
          <SportsEquestrianSection onOpenEnquiry={() => setIsEnquiryOpen(true)} />

          {/* Boarding Life & 24h Daily Timeline */}
          <BoardingLifeSection onOpenEnquiry={() => setIsEnquiryOpen(true)} />

          {/* Interactive Fee & Scholarship Wizard */}
          <FeeCalculatorWizard onOpenEnquiry={() => setIsEnquiryOpen(true)} />

          {/* Testimonials & University Placements */}
          <TestimonialsSection />

          {/* Awards & Frequently Asked Questions */}
          <AwardsAndFaqSection />

          {/* Final High-Converting Admission CTA Banner */}
          <AdmissionCTASection onOpenEnquiry={() => setIsEnquiryOpen(true)} />
        </main>

        {/* Footer */}
        <Footer onOpenEnquiry={() => setIsEnquiryOpen(true)} />

        {/* Floating Quick Actions Drawer (WhatsApp & Call) */}
        <FloatingQuickActions
          onOpenEnquiry={() => setIsEnquiryOpen(true)}
          onOpenTour={() => handleOpenTour()}
        />

        {/* Modals */}
        <EnquiryModal
          isOpen={isEnquiryOpen}
          onClose={() => setIsEnquiryOpen(false)}
        />

        <CampusTourModal
          isOpen={isTourModalOpen}
          onClose={() => setIsTourModalOpen(false)}
          initialHotspot={selectedHotspot}
        />

        <CampusVideoModal
          isOpen={isVideoModalOpen}
          onClose={() => setIsVideoModalOpen(false)}
        />
      </div>
    </ThemeProvider>
  );
};

export default App;
