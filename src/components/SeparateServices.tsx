/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SEPARATE_SERVICES } from '../constants';

interface SeparateServicesProps {
  scrollToForm: (pkg?: string) => void;
}

export const SeparateServices: React.FC<SeparateServicesProps> = ({ scrollToForm }) => {
  return (
    <section id="separate-services" className="grid-row bg-white/30">
      <div className="text-center mb-20">
        <span className="label-caps">حلول متخصصة</span>
        <h2 className="text-4xl md:text-5xl font-bold text-brand-primary">الخدمات المنفصلة</h2>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line">
        {SEPARATE_SERVICES.map((service, i) => (
          <div key={i} className="bg-bg-paper p-10 hover:bg-white transition-colors group">
            <div className="w-12 h-12 text-brand-primary mb-6 group-hover:text-brand-secondary transition-colors">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold text-brand-primary mb-4">{service.title}</h3>
            <p className="text-ink/60 text-sm leading-relaxed mb-8 h-12">{service.desc}</p>
            <div className="flex items-center justify-between pt-6 border-t border-line">
              <div className="text-brand-primary font-bold">
                {service.price} <span className="text-[10px] uppercase tracking-widest opacity-40">ر.س</span>
              </div>
              <button 
                onClick={() => scrollToForm(service.title)}
                className="text-[10px] font-bold uppercase tracking-widest text-brand-secondary hover:text-brand-primary transition-colors flex items-center gap-2"
              >
                طلب الخدمة <ArrowUpRight size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
