/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowUpRight, Fingerprint } from 'lucide-react';
import { HERO_STATS } from '../constants';

interface HeroProps {
  scrollToForm: (pkg?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ scrollToForm }) => {
  return (
    <section className="grid-row lg:py-32 flex flex-col lg:flex-row items-center gap-16">
      <div className="lg:w-2/3 animate-slide-up">
        <span className="label-caps">إدارة الأصول العقارية</span>
        <h1 className="text-5xl md:text-8xl font-bold text-brand-primary leading-[0.95] tracking-tighter mb-8">
          تحويل المخاطر <br />
          <span className="text-brand-secondary">إلى استقرار</span>
        </h1>
        <p className="text-lg md:text-xl text-ink/70 leading-relaxed max-w-2xl mb-12">
          منظومة مؤسسية متكاملة لإدارة المخاطر الإيجارية. نجمع بين الفحص الائتماني الدقيق، التوثيق القانوني المحكم، وإدارة التعثر الاحترافية لضمان تدفقاتك النقدية وحماية أصولك.
        </p>
        
        <div className="flex flex-wrap gap-6">
          <button 
            onClick={() => scrollToForm('طلب تقييم أولي')}
            className="btn-premium flex items-center gap-4 group"
          >
            <span>ابدأ التقييم الأولي</span>
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
          <a 
            href="#packages"
            className="px-10 py-5 border border-brand-primary text-brand-primary font-bold hover:bg-brand-primary hover:text-white transition-all"
          >
            استعراض الباقات
          </a>
        </div>
      </div>
      
      <div className="lg:w-1/3 w-full animate-slide-up [animation-delay:200ms]">
        <div className="bg-brand-primary p-8 relative overflow-hidden">
          <Fingerprint className="absolute -right-8 -bottom-8 w-48 h-48 text-white/5" />
          <div className="relative z-10">
            <span className="text-brand-secondary text-[10px] font-bold uppercase tracking-widest mb-4 block">إحصائيات الأداء</span>
            <div className="space-y-6">
              {HERO_STATS.map((stat, i) => (
                <div key={i} className="border-b border-white/10 pb-4 last:border-0">
                  <div className="text-white/60 text-xs mb-1">{stat.label}</div>
                  <div className="text-white text-3xl font-bold">{stat.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
