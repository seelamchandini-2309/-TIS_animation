import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Send, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    phone: '',
    city: '',
    grade: 'Grade IX',
    boardingType: 'Full Residential',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [appId, setAppId] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomId = 'TIS-2026-' + Math.floor(100000 + Math.random() * 900000);
    setAppId(randomId);
    setSubmitted(true);

    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 }
    });
  };

  const resetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={resetAndClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-xl glass-panel rounded-3xl p-6 sm:p-8 border border-tis-gold-500/50 shadow-2xl z-10 text-left bg-gradient-to-b from-tis-navy-950 via-[#07162c] to-tis-navy-950 my-8"
        >
          {/* Close button */}
          <button
            onClick={resetAndClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-tis-navy-900 border border-tis-gold-500/30 text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>

          {!submitted ? (
            <div>
              <div className="flex items-center gap-2">
                <span className="px-3 py-0.5 rounded-full text-[10px] font-mono font-bold bg-tis-gold-500 text-tis-navy-950 uppercase">
                  Session 2026-27
                </span>
                <span className="text-xs text-slate-400">Limited Boarding Intake</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-black text-white mt-2">
                Admission Enquiry & <br />
                <span className="text-gold-gradient">Campus Visit Registration</span>
              </h3>

              <p className="text-xs text-slate-300 mt-1">
                Our Senior Admissions Dean will reach out within 2 hours with the prospectus and fee structure.
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-mono font-semibold text-tis-gold-300 uppercase block mb-1">
                      Parent / Guardian Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.parentName}
                      onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                      placeholder="e.g. Dr. Rajesh Sharma"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-tis-navy-900/90 border border-slate-700 focus:border-tis-gold-400 text-white text-xs placeholder:text-slate-500 outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-mono font-semibold text-tis-gold-300 uppercase block mb-1">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-tis-navy-900/90 border border-slate-700 focus:border-tis-gold-400 text-white text-xs placeholder:text-slate-500 outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-mono font-semibold text-tis-gold-300 uppercase block mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@domain.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-tis-navy-900/90 border border-slate-700 focus:border-tis-gold-400 text-white text-xs placeholder:text-slate-500 outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-mono font-semibold text-tis-gold-300 uppercase block mb-1">
                      City / State / Country *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder="e.g. Delhi, Dubai, Mumbai"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-tis-navy-900/90 border border-slate-700 focus:border-tis-gold-400 text-white text-xs placeholder:text-slate-500 outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-mono font-semibold text-tis-gold-300 uppercase block mb-1">
                      Applying for Grade *
                    </label>
                    <select
                      value={formData.grade}
                      onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-tis-navy-900/90 border border-slate-700 focus:border-tis-gold-400 text-white text-xs outline-none"
                    >
                      <option value="Grade IV">Grade IV (Junior Gurukul)</option>
                      <option value="Grade V">Grade V (Junior Gurukul)</option>
                      <option value="Grade VI">Grade VI (Middle Gurukul)</option>
                      <option value="Grade VII">Grade VII (Middle Gurukul)</option>
                      <option value="Grade VIII">Grade VIII (Middle Gurukul)</option>
                      <option value="Grade IX">Grade IX (Secondary)</option>
                      <option value="Grade X">Grade X (Secondary)</option>
                      <option value="Grade XI">Grade XI (Senior Secondary - Science/Comm/Hum)</option>
                      <option value="Grade XII">Grade XII (Senior Secondary)</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[11px] font-mono font-semibold text-tis-gold-300 uppercase block mb-1">
                      Boarding Option *
                    </label>
                    <select
                      value={formData.boardingType}
                      onChange={(e) => setFormData({ ...formData, boardingType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-tis-navy-900/90 border border-slate-700 focus:border-tis-gold-400 text-white text-xs outline-none"
                    >
                      <option value="Full Residential">Full Residential Boarding</option>
                      <option value="Weekly Boarding">Weekly Boarding</option>
                      <option value="Day Boarding">Day Boarding</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-mono font-semibold text-tis-gold-300 uppercase block mb-1">
                    Specific Queries / Student Interests
                  </label>
                  <textarea
                    rows={2}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="e.g. Interested in Equestrian Academy, Science Stream, or Campus Visit date..."
                    className="w-full px-3.5 py-2 rounded-xl bg-tis-navy-900/90 border border-slate-700 focus:border-tis-gold-400 text-white text-xs placeholder:text-slate-500 outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl font-bold text-xs sm:text-sm bg-gradient-to-r from-tis-gold-500 via-amber-400 to-yellow-500 text-tis-navy-950 hover:brightness-110 transition-all shadow-lg shadow-tis-gold-500/30 flex items-center justify-center gap-2 mt-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Admission Enquiry</span>
                </button>

                <p className="text-[10px] text-center text-slate-400 flex items-center justify-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Your information is 100% confidential and secure.</span>
                </p>
              </form>
            </div>
          ) : (
            <div className="text-center py-6">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/50 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                Application Ref: {appId}
              </span>

              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mt-3">
                Thank You, {formData.parentName || 'Parent'}!
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-md mx-auto leading-relaxed">
                Your admission enquiry for <strong>{formData.grade}</strong> ({formData.boardingType}) has been logged with priority. Our Senior Admissions Dean will connect with you via WhatsApp and phone shortly.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={`https://wa.me/919837983791?text=Hi%20Tula's%20International%20School,%20I%20have%20submitted%20an%20enquiry%20with%20ID:%20${appId}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-3 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center gap-2 transition-colors"
                >
                  <span>Chat with Admissions on WhatsApp</span>
                </a>

                <button
                  onClick={resetAndClose}
                  className="px-5 py-3 rounded-xl text-xs font-bold bg-slate-800 hover:bg-slate-700 text-white transition-colors"
                >
                  Return to Homepage
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
