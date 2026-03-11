/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import { SERVICE_OPTIONS } from '../constants';

interface ContactFormProps {
  formRef: React.RefObject<HTMLDivElement | null>;
  selectedPackage: string;
  setSelectedPackage: (pkg: string) => void;
  formSubmitted: boolean;
  handleSubmit: (e: React.FormEvent) => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({ 
  formRef, 
  selectedPackage, 
  setSelectedPackage, 
  formSubmitted, 
  handleSubmit 
}) => {
  return (
    <section id="form" ref={formRef} className="grid-row bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="label-caps">تواصل معنا</span>
          <h2 className="text-4xl font-bold text-brand-primary">طلب تقييم أولي</h2>
        </div>

        <AnimatePresence mode="wait">
          {formSubmitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-20 bg-bg-paper border border-line"
            >
              <CheckCircle2 className="w-16 h-16 text-brand-secondary mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-brand-primary mb-2">تم استلام طلبك</h3>
              <p className="text-ink/60">سيقوم مستشارنا بالتواصل معك خلال 24 ساعة عمل.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-ink/40">الاسم الكامل</label>
                <input required type="text" className="w-full bg-bg-paper border-b border-line p-4 focus:border-brand-primary outline-none transition-colors font-medium" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-ink/40">رقم الجوال</label>
                <input required type="tel" className="w-full bg-bg-paper border-b border-line p-4 focus:border-brand-primary outline-none transition-colors font-medium" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-ink/40">البريد الإلكتروني</label>
                <input required type="email" className="w-full bg-bg-paper border-b border-line p-4 focus:border-brand-primary outline-none transition-colors font-medium" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-ink/40">الخدمة المطلوبة</label>
                <select 
                  required 
                  value={selectedPackage}
                  onChange={(e) => setSelectedPackage(e.target.value)}
                  className="w-full bg-bg-paper border-b border-line p-4 focus:border-brand-primary outline-none transition-colors font-medium appearance-none"
                >
                  <option value="">اختر الخدمة</option>
                  {SERVICE_OPTIONS.main.map(opt => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                  <optgroup label="الباقات">
                    {SERVICE_OPTIONS.packages.map(opt => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </optgroup>
                  <optgroup label="خدمات منفصلة">
                    {SERVICE_OPTIONS.separate.map(opt => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </optgroup>
                </select>
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-ink/40">وصف المحفظة / الحالة</label>
                <textarea required rows={4} className="w-full bg-bg-paper border-b border-line p-4 focus:border-brand-primary outline-none transition-colors font-medium resize-none" />
              </div>
              <div className="md:col-span-2 pt-8">
                <button type="submit" className="btn-premium w-full text-lg">إرسال الطلب</button>
              </div>
            </form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
