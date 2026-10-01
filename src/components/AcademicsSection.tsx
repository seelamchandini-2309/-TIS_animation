import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Cpu, Languages, CheckCircle2, ArrowRight, Award } from 'lucide-react';

interface AcademicLevel {
  id: string;
  grade: string;
  title: string;
  badge: string;
  tagline: string;
  overview: string;
  keyHighlights: string[];
  streams?: string[];
  facultyRatio: string;
  image: string;
}

const ACADEMIC_LEVELS: AcademicLevel[] = [
  {
    id: 'junior',
    grade: 'Grades IV - V',
    title: 'Junior Gurukul: Foundational Wonder',
    badge: 'Foundational Stage',
    tagline: 'Inquiry-based, joyful learning focused on literacy, numeracy, and nature exploration.',
    overview: 'Nurturing curiosity through hands-on learning, storytelling, phonetics mastery, and early scientific inquiry in small, attentive mentor cohorts.',
    keyHighlights: [
      'Oxford Reading Tree & Thematic Phonics Program',
      'Early STEM Discovery & Lego Robotics Kits',
      'Nature Walks & Organic Garden Observation',
      'Art, Music, Sanskrit & Hindi Folk Traditions'
    ],
    facultyRatio: '1:6 Mentorship Ratio',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'middle',
    grade: 'Grades VI - VIII',
    title: 'Middle Gurukul: Experiential Mastery',
    badge: 'Preparatory Stage',
    tagline: 'Deepening academic rigour with critical thinking, coding, foreign languages, and sports.',
    overview: 'Transitioning from concrete to abstract conceptual understanding. Students delve into experimental physics, chemistry, coding algorithms, and public speaking.',
    keyHighlights: [
      'Python & Arduino Coding Lab Workshops',
      'Foreign Languages: French & German Electives',
      'Inter-House Debates & Model United Nations',
      'Subject-Specific Workstation Rotations'
    ],
    facultyRatio: '1:8 Mentorship Ratio',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'senior',
    grade: 'Grades IX - X',
    title: 'Senior Gurukul: CBSE Board Foundation',
    badge: 'Secondary Stage',
    tagline: 'Rigorous CBSE board syllabus preparation with competitive aptitude and career profiling.',
    overview: 'Equipping students with deep academic foundations, analytical problem-solving skills, and comprehensive laboratory research to excel in CBSE board examinations.',
    keyHighlights: [
      'Full Experimental Science & Math Practical Labs',
      'Comprehensive Board Exam Mock Simulation Cycles',
      'Career Personality & Psychometric Mapping',
      'Leadership Portfolios & Social Service (SEWA)'
    ],
    facultyRatio: '1:8 Mentorship Ratio',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'senior-sec',
    grade: 'Grades XI - XII',
    title: 'Senior Secondary: University Pathways',
    badge: 'Collegiate Stage',
    tagline: 'Specialized Science, Commerce, and Humanities with integrated IIT-JEE, NEET, CLAT & SAT coaching.',
    overview: 'Pre-university excellence with dedicated career guidance, university application mentorship for Ivy League, Oxford, IITs, and top global colleges.',
    keyHighlights: [
      'Three Streams: Medical/Non-Medical, Commerce, Humanities',
      'Integrated Entrance Coaching (IIT-JEE / NEET / CLAT / SAT)',
      'Ivy League & Global University Portfolio Advisory',
      'Executive Student Council & Research Papers'
    ],
    streams: ['Science (PCM / PCB / Biotech)', 'Commerce (Accounts, Eco, Math, BST)', 'Humanities (Pol. Sci, History, Psych, Eco)'],
    facultyRatio: '1:7 Mentorship Ratio',
    image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1000&q=80'
  }
];

export const AcademicsSection: React.FC<{ onOpenEnquiry: () => void }> = ({ onOpenEnquiry }) => {
  const [activeLevelId, setActiveLevelId] = useState('senior-sec');

  const activeLevel = ACADEMIC_LEVELS.find((l) => l.id === activeLevelId) || ACADEMIC_LEVELS[0];

  return (
    <section id="academics" className="relative py-20 lg:py-28 bg-tis-navy-900/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tis-gold-500/10 border border-tis-gold-500/30 text-tis-gold-400 text-xs font-bold uppercase tracking-widest">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Rigour & Pedagogy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-white mt-3 tracking-tight">
            Academic Excellence from <br />
            <span className="text-gold-gradient">Foundations to Global Ivy Leagues</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed font-normal">
            Affiliated with CBSE, New Delhi, enriched with international standards. We prepare students not just to pass exams, but to thrive in the world's most selective universities.
          </p>
        </div>

        {/* Grade Level Interactive Selector Buttons */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-2.5 max-w-3xl mx-auto">
          {ACADEMIC_LEVELS.map((level) => {
            const isSelected = activeLevelId === level.id;
            return (
              <button
                key={level.id}
                onClick={() => setActiveLevelId(level.id)}
                className={`relative px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-300 flex items-center gap-2 border ${
                  isSelected
                    ? 'bg-gradient-to-r from-tis-gold-500 to-amber-500 text-tis-navy-950 border-tis-gold-400 shadow-lg shadow-tis-gold-500/25 scale-105'
                    : 'bg-tis-navy-950/80 text-slate-300 border-slate-800 hover:border-slate-700 hover:text-white'
                }`}
              >
                <span>{level.grade}</span>
              </button>
            );
          })}
        </div>

        {/* Active Grade Deep Dive Panel */}
        <div className="mt-10 max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeLevel.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
              className="glass-panel rounded-3xl p-6 sm:p-10 border border-tis-gold-500/30 shadow-2xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left Details */}
                <div className="lg:col-span-7 flex flex-col items-start text-left">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-tis-gold-500/20 text-tis-gold-300 border border-tis-gold-500/40">
                      {activeLevel.badge}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      {activeLevel.facultyRatio}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-white font-serif mt-3">
                    {activeLevel.title}
                  </h3>

                  <p className="text-tis-gold-300/90 text-sm font-medium mt-2">
                    {activeLevel.tagline}
                  </p>

                  <p className="text-slate-300 text-sm mt-3 leading-relaxed font-normal">
                    {activeLevel.overview}
                  </p>

                  {/* Streams if present */}
                  {activeLevel.streams && (
                    <div className="mt-4 p-3.5 rounded-xl bg-tis-navy-950/70 border border-tis-gold-500/20 w-full">
                      <span className="text-[11px] font-mono font-bold text-tis-gold-400 uppercase tracking-widest block mb-1.5">
                        Specialized Career Streams
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {activeLevel.streams.map((stream, idx) => (
                          <span key={idx} className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-slate-800 text-slate-200 border border-slate-700">
                            {stream}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Key Highlights */}
                  <div className="mt-5 space-y-2.5 w-full">
                    {activeLevel.keyHighlights.map((h, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-tis-gold-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 flex items-center gap-4">
                    <button
                      onClick={onOpenEnquiry}
                      className="px-6 py-3 rounded-xl text-xs sm:text-sm font-bold bg-tis-gold-500 text-tis-navy-950 hover:bg-tis-gold-400 transition-colors shadow-lg flex items-center gap-2"
                    >
                      <span>Inquire for {activeLevel.grade}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Right Image */}
                <div className="lg:col-span-5 relative h-72 sm:h-96 rounded-2xl overflow-hidden shadow-2xl border border-tis-gold-500/30 group">
                  <img
                    src={activeLevel.image}
                    alt={activeLevel.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-tis-navy-950/90 via-tis-navy-950/30 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-xs font-mono font-bold text-tis-gold-400 uppercase">
                      Curriculum Standard
                    </div>
                    <div className="text-sm font-bold text-white font-serif mt-0.5">
                      CBSE Affiliated & Global Competency
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Academic Differentiators Row */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="p-5 rounded-2xl glass-panel border border-tis-gold-500/20 text-left">
            <div className="w-10 h-10 rounded-xl bg-tis-gold-500/20 flex items-center justify-center text-tis-gold-400 mb-3">
              <Cpu className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-white font-serif">Robotics & AI Lab</h4>
            <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
              Hands-on coding in Python, Arduino, IoT automation, and 3D printing from Middle School onwards.
            </p>
          </div>

          <div className="p-5 rounded-2xl glass-panel border border-tis-gold-500/20 text-left">
            <div className="w-10 h-10 rounded-xl bg-tis-gold-500/20 flex items-center justify-center text-tis-gold-400 mb-3">
              <Languages className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-white font-serif">Foreign Language Lab</h4>
            <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
              French, German, and advanced linguistic phonetics with certified native-language mentors.
            </p>
          </div>

          <div className="p-5 rounded-2xl glass-panel border border-tis-gold-500/20 text-left">
            <div className="w-10 h-10 rounded-xl bg-tis-gold-500/20 flex items-center justify-center text-tis-gold-400 mb-3">
              <Award className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-white font-serif">Career & Ivy League Cell</h4>
            <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
              One-on-one SAT, AP courses, common app essays, and portfolio crafting for top tier global admissions.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
