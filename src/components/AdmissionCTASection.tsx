import { Sparkles, ArrowRight, Phone, ShieldCheck } from 'lucide-react';

export const AdmissionCTASection: React.FC<{ onOpenEnquiry: () => void }> = ({ onOpenEnquiry }) => {
  return (
    <section className="relative py-16 lg:py-24 bg-gradient-to-b from-[#030c1b] to-tis-navy-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative rounded-3xl p-8 sm:p-12 lg:p-16 glass-panel border border-tis-gold-500/50 shadow-2xl overflow-hidden text-center bg-gradient-to-r from-tis-navy-950 via-[#0a1f3d] to-tis-navy-950">
          
          {/* Decorative Glows */}
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-tis-gold-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-tis-gold-500 text-tis-navy-950 font-black text-xs uppercase tracking-widest mb-4 shadow-md">
              <Sparkles className="w-4 h-4" />
              <span>Admissions Open for 2026-27</span>
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-white tracking-tight">
              Give Your Child the <br />
              <span className="text-gold-gradient">Modern Gurukul Advantage</span>
            </h2>

            <p className="text-slate-200 text-sm sm:text-base mt-4 leading-relaxed max-w-2xl mx-auto font-normal">
              Limited boarding seats available for Grades IV to XII. Experience personalized mentorship, 16+ Olympic sports, and an inspiring 22-acre Himalayan foothill campus in Dehradun.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={onOpenEnquiry}
                className="px-8 py-4 rounded-xl text-sm font-bold bg-gradient-to-r from-tis-gold-500 via-amber-400 to-yellow-500 text-tis-navy-950 shadow-xl shadow-tis-gold-500/30 hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
              >
                <span>Submit Online Admission Form</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="tel:+919837983791"
                className="px-6 py-4 rounded-xl text-sm font-semibold bg-tis-navy-900/90 text-tis-gold-300 border border-tis-gold-500/40 hover:bg-tis-navy-800 transition-all flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-tis-gold-400" />
                <span>Call Helpline: +91 98379 83791</span>
              </a>
            </div>

            {/* Trust Points */}
            <div className="mt-8 pt-6 border-t border-tis-gold-500/20 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>CBSE Affiliated (No. 3530364)</span>
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Scholarships Available for Merit & Sports</span>
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Campus Visits Available Monday to Saturday</span>
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
