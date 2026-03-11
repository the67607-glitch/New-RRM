/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Fingerprint } from 'lucide-react';
import { WORKFLOW_STEPS } from '../constants';

export const Workflow: React.FC = () => {
  return (
    <section id="workflow" className="grid-row">
      <div className="flex flex-col lg:flex-row gap-16">
        <div className="lg:w-1/2">
          <span className="label-caps">بروتوكول العمل</span>
          <h2 className="text-4xl font-bold text-brand-primary mb-8">مسار تشغيلي <br /> فائق الدقة</h2>
          <div className="space-y-12">
            {WORKFLOW_STEPS.map((item, i) => (
              <div key={i} className="flex gap-8 group">
                <span className="text-4xl font-bold text-brand-secondary/20 group-hover:text-brand-secondary transition-colors">{item.step}</span>
                <div>
                  <h4 className="text-xl font-bold text-brand-primary mb-2">{item.title}</h4>
                  <p className="text-ink/60 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:w-1/2 bg-bg-paper border border-line p-12 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-primary via-transparent to-transparent"></div>
          </div>
          <div className="text-center relative z-10">
            <div className="w-24 h-24 bg-brand-primary flex items-center justify-center mx-auto mb-8">
              <Fingerprint className="text-brand-secondary w-12 h-12" />
            </div>
            <h3 className="text-2xl font-bold text-brand-primary mb-4">نظام الحالة الموحد</h3>
            <p className="text-ink/60 max-w-sm mx-auto">
              كل طلب يُعامل كحالة (Case) مستقلة برقم مرجعي، مما يضمن تتبعاً دقيقاً لكل خطوة حتى الإغلاق النهائي.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
