/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface ConsultationCTAProps {
  scrollToForm: (pkg?: string) => void;
}

export const ConsultationCTA: React.FC<ConsultationCTAProps> = ({ scrollToForm }) => {
  return (
    <section className="grid-row bg-brand-secondary/10">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="lg:w-2/3">
          <span className="label-caps text-brand-primary">دعم استراتيجي</span>
          <h2 className="text-4xl font-bold text-brand-primary mb-6">هل تحتاج إلى استشارة مهنية؟</h2>
          <p className="text-ink/70 text-lg leading-relaxed max-w-2xl">
            نقدم جلسة استشارية أولية <span className="font-bold text-brand-primary underline decoration-brand-secondary underline-offset-4">مجانية بالكامل</span> لتقييم وضعك العقاري، تحليل المخاطر في محفظتك، وتقديم خارطة طريق واضحة.
          </p>
        </div>
        <div className="lg:w-1/3 w-full">
          <button 
            onClick={() => scrollToForm('استشارة مجانية')}
            className="btn-premium w-full flex justify-center items-center gap-4"
          >
            <span>احجز استشارتك المجانية</span>
            <ArrowUpRight />
          </button>
        </div>
      </div>
    </section>
  );
};
