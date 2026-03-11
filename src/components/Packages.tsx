/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { PACKAGES } from '../constants';

interface PackagesProps {
  scrollToForm: (pkg?: string) => void;
}

export const Packages: React.FC<PackagesProps> = ({ scrollToForm }) => {
  return (
    <section id="packages" className="grid-row bg-brand-primary text-white">
      <div className="text-center mb-20">
        <span className="label-caps text-brand-secondary">هيكلة الباقات</span>
        <h2 className="text-4xl md:text-5xl font-bold">اختر حجم التغطية المناسب</h2>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {PACKAGES.map((pkg, i) => (
          <div key={i} className="border border-white/10 p-10 flex flex-col hover:bg-white/5 transition-colors">
            <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
            <p className="text-white/40 text-sm mb-10">{pkg.desc}</p>
            <ul className="space-y-4 mb-12 flex-grow">
              {pkg.features.map((f, j) => (
                <li key={j} className="flex items-center gap-3 text-sm text-white/70">
                  <CheckCircle2 className="w-4 h-4 text-brand-secondary" />
                  {f}
                </li>
              ))}
            </ul>
            <button 
              onClick={() => scrollToForm(pkg.name)}
              className="w-full py-4 border border-brand-secondary text-brand-secondary font-bold hover:bg-brand-secondary hover:text-brand-primary transition-all"
            >
              اختيار الباقة
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};
