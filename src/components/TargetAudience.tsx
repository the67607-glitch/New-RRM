/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { AUDIENCE_ITEMS } from '../constants';

export const TargetAudience: React.FC = () => {
  return (
    <section className="grid-row bg-white/50">
      <span className="label-caps text-center">لمن هذه الخدمة</span>
      <div className="grid md:grid-cols-3 gap-0 border border-line mt-12">
        {AUDIENCE_ITEMS.map((item, i) => (
          <div key={i} className="p-12 border-l border-line last:border-l-0 hover:bg-brand-primary group transition-all duration-500">
            <div className="w-12 h-12 text-brand-primary mb-8 group-hover:text-brand-secondary transition-colors">
              {item.icon}
            </div>
            <h3 className="text-2xl font-bold mb-4 text-brand-primary group-hover:text-white transition-colors">{item.title}</h3>
            <p className="text-ink/60 group-hover:text-white/70 transition-colors leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
