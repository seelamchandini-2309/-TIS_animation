import React, { useState } from 'react';
import { Calculator, CheckCircle2, Send, Gift, Download } from 'lucide-react';
import confetti from 'canvas-confetti';

interface FeeWizardProps {
  onOpenEnquiry: () => void;
}

export const FeeCalculatorWizard: React.FC<FeeWizardProps> = ({ onOpenEnquiry }) => {
  const [grade, setGrade] = useState<'junior' | 'middle' | 'senior' | 'senior-sec'>('senior');
  const [boardingType, setBoardingType] = useState<'full' | 'weekly' | 'day'>('full');
  const [residency, setResidency] = useState<'indian' | 'nri'>('indian');
  const [merit, setMerit] = useState<string[]>(['sports']);

  const toggleMerit = (item: string) => {
    setMerit(prev =>
      prev.includes(item) ? prev.filter(m => m !== item) : [...prev, item]
    );
  };

  // Compute calculated estimate
  const baseFees = {
    junior: { full: 480000, weekly: 420000, day: 260000 },
    middle: { full: 540000, weekly: 470000, day: 290000 },
    senior: { full: 610000, weekly: 530000, day: 330000 },
    'senior-sec': { full: 680000, weekly: 590000, day: 370000 },
  };

  const multiplier = residency === 'nri' ? 1.35 : 1.0;
  const rawBase = baseFees[grade][boardingType] * multiplier;

  // Scholarship calculations
  let scholarshipAmount = 0;
  if (merit.includes('marks90')) scholarshipAmount += 45000;
  if (merit.includes('sports')) scholarshipAmount += 35000;
  if (merit.includes('sibling')) scholarshipAmount += 25000;
  if (merit.includes('defense')) scholarshipAmount += 30000;

  scholarshipAmount = Math.min(scholarshipAmount, rawBase * 0.25);
  const finalFee = rawBase - scholarshipAmount;

  const handleDownloadProspectus = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 }
    });
    alert('Thank you! Tula\'s International School Prospectus 2026-27 is downloading now.');
  };

  return (
    <section id="fee-calculator" className="relative py-20 lg:py-28 bg-[#030c1b] overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/4 w-[35rem] h-[35rem] bg-tis-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tis-gold-500/10 border border-tis-gold-500/30 text-tis-gold-400 text-xs font-bold uppercase tracking-widest">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Admissions & Scholarship Estimator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-white mt-3 tracking-tight">
            Plan Your Child's Future <br />
            <span className="text-gold-gradient">Transparent Fee & Scholarship Wizard</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed font-normal">
            Calculate customized all-inclusive residential fees and discover your child's eligibility for merit scholarships, defense concessions, and sports awards.
          </p>
        </div>

        {/* Wizard Container */}
        <div className="mt-12 max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Form Selectors */}
          <div className="lg:col-span-7 glass-panel rounded-3xl p-6 sm:p-8 border border-tis-gold-500/30 shadow-2xl flex flex-col justify-between text-left">
            <div className="space-y-6">
              
              {/* Step 1: Grade Selection */}
              <div>
                <label className="text-xs font-mono font-bold text-tis-gold-400 uppercase tracking-widest block mb-2">
                  1. Select Grade Level (2026-27 Session)
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'junior', label: 'Grades IV-V', sub: 'Junior' },
                    { id: 'middle', label: 'Grades VI-VIII', sub: 'Middle' },
                    { id: 'senior', label: 'Grades IX-X', sub: 'Secondary' },
                    { id: 'senior-sec', label: 'Grades XI-XII', sub: 'Senior Sec' },
                  ].map((g) => (
                    <button
                      key={g.id}
                      onClick={() => setGrade(g.id as any)}
                      className={`p-2.5 rounded-xl text-left border transition-all ${
                        grade === g.id
                          ? 'bg-tis-gold-500 text-tis-navy-950 border-tis-gold-400 font-bold shadow-md'
                          : 'bg-tis-navy-900/60 text-slate-300 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      <div className="text-xs font-bold">{g.label}</div>
                      <div className={`text-[10px] ${grade === g.id ? 'text-tis-navy-900' : 'text-slate-400'}`}>{g.sub}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Boarding Type */}
              <div>
                <label className="text-xs font-mono font-bold text-tis-gold-400 uppercase tracking-widest block mb-2">
                  2. Residential & Boarding Preference
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {[
                    { id: 'full', title: 'Full Residential', desc: '7 Days + Weekend Activities' },
                    { id: 'weekly', title: 'Weekly Boarding', desc: 'Mon - Fri on Campus' },
                    { id: 'day', title: 'Day Boarding', desc: 'Morning till Evening Prep' },
                  ].map((b) => (
                    <button
                      key={b.id}
                      onClick={() => setBoardingType(b.id as any)}
                      className={`p-3 rounded-xl text-left border transition-all ${
                        boardingType === b.id
                          ? 'bg-tis-gold-500/20 border-tis-gold-400 text-white font-bold ring-1 ring-tis-gold-400'
                          : 'bg-tis-navy-900/60 text-slate-300 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      <div className="text-xs font-bold text-tis-gold-300">{b.title}</div>
                      <div className="text-[10px] text-slate-400 mt-0.5">{b.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Residency Origin */}
              <div>
                <label className="text-xs font-mono font-bold text-tis-gold-400 uppercase tracking-widest block mb-2">
                  3. Student Origin Category
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setResidency('indian')}
                    className={`p-3 rounded-xl text-left border transition-all ${
                      residency === 'indian'
                        ? 'bg-tis-gold-500/20 border-tis-gold-400 text-white font-bold'
                        : 'bg-tis-navy-900/60 text-slate-300 border-slate-800'
                    }`}
                  >
                    <div className="text-xs font-bold text-tis-gold-300">Indian Resident Student</div>
                    <div className="text-[10px] text-slate-400">All Indian States & UTs</div>
                  </button>
                  <button
                    onClick={() => setResidency('nri')}
                    className={`p-3 rounded-xl text-left border transition-all ${
                      residency === 'nri'
                        ? 'bg-tis-gold-500/20 border-tis-gold-400 text-white font-bold'
                        : 'bg-tis-navy-900/60 text-slate-300 border-slate-800'
                    }`}
                  >
                    <div className="text-xs font-bold text-tis-gold-300">NRI / International</div>
                    <div className="text-[10px] text-slate-400">Global & Expat Admissions</div>
                  </button>
                </div>
              </div>

              {/* Step 4: Merit & Concession Toggles */}
              <div>
                <label className="text-xs font-mono font-bold text-tis-gold-400 uppercase tracking-widest block mb-2">
                  4. Merit & Special Concession Check (Select all that apply)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    { id: 'marks90', label: '90%+ in Previous Academic Year', grant: 'Up to ₹45,000' },
                    { id: 'sports', label: 'State / National Level Sports Medal', grant: 'Up to ₹35,000' },
                    { id: 'sibling', label: 'Sibling in TIS / Alumni Kin', grant: 'Up to ₹25,000' },
                    { id: 'defense', label: 'Armed Forces & Defense Personnel', grant: 'Up to ₹30,000' },
                  ].map((item) => {
                    const isChecked = merit.includes(item.id);
                    return (
                      <button
                        key={item.id}
                        onClick={() => toggleMerit(item.id)}
                        className={`p-2.5 rounded-xl text-left border flex items-center justify-between transition-all ${
                          isChecked
                            ? 'bg-emerald-950/40 border-emerald-500/60 text-emerald-200'
                            : 'bg-tis-navy-900/60 border-slate-800 text-slate-300'
                        }`}
                      >
                        <div>
                          <div className="text-xs font-semibold">{item.label}</div>
                          <div className="text-[10px] text-emerald-400">{item.grant}</div>
                        </div>
                        <div className={`w-4 h-4 rounded flex items-center justify-center border ${
                          isChecked ? 'bg-emerald-500 border-emerald-400 text-slate-950' : 'border-slate-600'
                        }`}>
                          {isChecked && <CheckCircle2 className="w-3.5 h-3.5 fill-current" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>
          </div>

          {/* Right Real-time Calculation Summary Card */}
          <div className="lg:col-span-5 glass-panel rounded-3xl p-6 sm:p-8 border border-tis-gold-500/40 shadow-2xl flex flex-col justify-between text-left relative overflow-hidden bg-gradient-to-b from-tis-navy-900/90 to-tis-navy-950/95">
            <div className="absolute top-0 right-0 w-32 h-32 bg-tis-gold-500/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between pb-3 border-b border-tis-gold-500/20">
                <span className="text-xs font-mono font-bold text-tis-gold-400 uppercase tracking-widest">
                  Estimated Summary
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Annual 2026-27
                </span>
              </div>

              {/* Fee Breakdown List */}
              <div className="mt-5 space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-300">
                  <span>Academic Tuition & Smart Workstations</span>
                  <span className="font-mono font-semibold text-white">₹{(rawBase * 0.45).toLocaleString('en-IN')}</span>
                </div>
                <div className="flex items-center justify-between text-xs text-slate-300">
                  <span>Boarding, AC Residence & 4 Organic Meals</span>
                  <span className="font-mono font-semibold text-white">₹{(rawBase * 0.40).toLocaleString('en-IN')}</span>
                </div>
                <div className="flex items-center justify-between text-xs text-slate-300">
                  <span>16+ Sports, Equestrian & Infirmary Care</span>
                  <span className="font-mono font-semibold text-white">₹{(rawBase * 0.15).toLocaleString('en-IN')}</span>
                </div>

                <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <span>Standard Gross Annual Fee</span>
                  <span className="font-mono line-through">₹{rawBase.toLocaleString('en-IN')}</span>
                </div>

                {/* Scholarship Waiver Line */}
                {scholarshipAmount > 0 && (
                  <div className="p-2.5 rounded-xl bg-emerald-950/60 border border-emerald-500/40 flex items-center justify-between text-xs text-emerald-300 font-semibold">
                    <span className="flex items-center gap-1.5">
                      <Gift className="w-4 h-4 text-emerald-400" />
                      <span>Applied Scholarship Concession:</span>
                    </span>
                    <span className="font-mono text-emerald-400">- ₹{scholarshipAmount.toLocaleString('en-IN')}</span>
                  </div>
                )}
              </div>

              {/* Net Estimated Annual Fee */}
              <div className="mt-6 p-4 rounded-2xl bg-tis-gold-500/15 border border-tis-gold-500/40 text-center">
                <span className="text-[11px] font-mono uppercase tracking-widest text-tis-gold-300 font-bold block">
                  Net Estimated Annual Fee
                </span>
                <div className="text-3xl sm:text-4xl font-serif font-black text-white mt-1">
                  ₹{finalFee.toLocaleString('en-IN')}
                  <span className="text-xs font-sans text-slate-400 font-normal"> / annum</span>
                </div>
                <p className="text-[10px] text-slate-300 mt-1">
                  *Payable in 2 easy installments. Includes boarding, meals & sports.
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-6 space-y-3">
              <button
                onClick={onOpenEnquiry}
                className="w-full py-3.5 rounded-xl text-xs sm:text-sm font-bold bg-gradient-to-r from-tis-gold-500 to-amber-500 text-tis-navy-950 hover:brightness-110 transition-all shadow-lg shadow-tis-gold-500/25 flex items-center justify-center gap-2"
              >
                <span>Lock In Scholarship & Apply</span>
                <Send className="w-4 h-4" />
              </button>

              <button
                onClick={handleDownloadProspectus}
                className="w-full py-2.5 rounded-xl text-xs font-semibold bg-tis-navy-900 hover:bg-tis-navy-800 text-tis-gold-300 border border-tis-gold-500/30 flex items-center justify-center gap-2 transition-colors"
              >
                <Download className="w-3.5 h-3.5 text-tis-gold-400" />
                <span>Download Prospectus 2026-27 (PDF)</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
