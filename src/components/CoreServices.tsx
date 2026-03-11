/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { CORE_SERVICES } from '../constants';

export const CoreServices: React.FC = () => {
  return (
    <section id="service" className="grid-row">
      <div className="flex flex-col lg:flex-row gap-16">
        <div className="lg:w-1/3">
          <span className="label-caps">المنظومة التشغيلية</span>
          <h2 className="text-4xl font-bold text-brand-primary leading-tight mb-6">
            تغطية شاملة <br />
            لدورة الإيجار
          </h2>
          <p className="text-ink/60 leading-relaxed">
            نحن لا نقدم مجرد استشارات، بل ندير العملية التشغيلية بالكامل عبر مرخصين معتمدين لضمان أعلى مستويات الدقة والسرعة.
          </p>
        </div>
        <div className="lg:w-2/3 grid sm:grid-cols-2 gap-4">
          {CORE_SERVICES.map((item, i) => (
            <div key={i} className="p-6 bg-white border border-line flex items-center gap-6 hover:border-brand-secondary transition-colors">
              <div className="text-brand-secondary w-6 h-6 flex-shrink-0">{item.icon}</div>
              <span className="text-sm font-bold text-brand-primary">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
