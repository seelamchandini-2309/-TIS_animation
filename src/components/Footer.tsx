import React, { useState } from 'react';
import { GraduationCap, MapPin, Phone, Mail, Award, Send } from 'lucide-react';

export const Footer: React.FC<{ onOpenEnquiry: () => void }> = ({ onOpenEnquiry }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <footer className="relative bg-[#020712] text-slate-400 pt-16 pb-10 border-t border-tis-gold-500/20 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Column 1: School Identity */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-tis-gold-400 via-amber-500 to-tis-gold-700 p-[2px]">
                <div className="w-full h-full bg-tis-navy-950 rounded-[10px] flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-tis-gold-400" />
                </div>
              </div>
              <div>
                <span className="font-serif font-black text-xl text-white tracking-tight">
                  TULA'S
                </span>
                <span className="text-[10px] tracking-widest text-tis-gold-400 font-bold uppercase block -mt-1">
                  International School
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 mt-4 leading-relaxed font-normal">
              <strong>The Modern Gurukul</strong> — Ranked #1 Co-Ed Residential Boarding School in Uttarakhand. Blending ancient Indian wisdom with 21st-century CBSE academics, 16+ sports, and world-class university placements across a 22-acre Himalayan foothill campus.
            </p>

            <div className="mt-4 flex items-center gap-2 text-xs text-tis-gold-400 font-mono">
              <Award className="w-4 h-4 text-tis-gold-400" />
              <span>CBSE Affiliated No. 3530364</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-white mb-4">
              Explore Campus
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#why-gurukul" className="hover:text-tis-gold-400 transition-colors">The Modern Gurukul</a></li>
              <li><a href="#academics" className="hover:text-tis-gold-400 transition-colors">Academic Streams</a></li>
              <li><a href="#sports" className="hover:text-tis-gold-400 transition-colors">16+ Sports Academy</a></li>
              <li><a href="#campus-tour" className="hover:text-tis-gold-400 transition-colors">360° Virtual Tour</a></li>
              <li><a href="#boarding" className="hover:text-tis-gold-400 transition-colors">Hostel & Dining Life</a></li>
              <li><a href="#fee-calculator" className="hover:text-tis-gold-400 transition-colors">Scholarship Wizard</a></li>
            </ul>
          </div>

          {/* Column 3: Contact & Campus Location */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-white mb-4">
              Campus Address
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-tis-gold-400 shrink-0 mt-0.5" />
                <span>Dhoolkot, PO-Selaqui, Chakrata Road, Dehradun, Uttarakhand - 248011, India</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-tis-gold-400 shrink-0" />
                <a href="tel:+919837983791" className="hover:text-tis-gold-400 transition-colors">+91 98379 83791 / 94103 01844</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-tis-gold-400 shrink-0" />
                <a href="mailto:info@tis.edu.in" className="hover:text-tis-gold-400 transition-colors">info@tis.edu.in</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter & Prospectus */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-white mb-4">
              Stay Connected
            </h4>
            <p className="text-xs text-slate-400 mb-3">
              Receive updates on 2026 admissions, scholarships, and campus events.
            </p>

            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  type="email"
                  required
                  placeholder="Enter parent's email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-tis-navy-950 border border-slate-700 text-white text-xs outline-none focus:border-tis-gold-400"
                />
                <button
                  type="submit"
                  className="w-full py-2 rounded-xl text-xs font-bold bg-tis-gold-500 text-tis-navy-950 hover:bg-tis-gold-400 transition-colors flex items-center justify-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Subscribe to Updates</span>
                </button>
              </form>
            ) : (
              <div className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-xs text-emerald-300">
                ✓ Subscribed! You will receive the latest TIS newsletter.
              </div>
            )}
          </div>

        </div>

        {/* Bottom Copyright & Accreditation */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="text-center sm:text-left">
            © {new Date().getFullYear()} Tula's International School, Dehradun. All Rights Reserved.
          </div>

          <div className="flex items-center gap-6">
            <button onClick={onOpenEnquiry} className="hover:text-tis-gold-400 transition-colors">
              Admissions Policy
            </button>
            <a href="https://tis.edu.in" target="_blank" rel="noreferrer" className="hover:text-tis-gold-400 transition-colors">
              Official Portal (tis.edu.in)
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
