/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Lock } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="grid-row border-b-0 bg-brand-primary text-white">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 bg-brand-secondary flex items-center justify-center">
              <Lock className="text-brand-primary w-4 h-4" />
            </div>
            <span className="text-xl font-bold tracking-tight">إدارة المخاطر الإيجارية</span>
          </div>
          <p className="text-white/40 max-w-sm leading-relaxed text-sm">
            منظومة رائدة في المملكة العربية السعودية متخصصة في حماية الاستثمارات العقارية عبر إدارة احترافية للمخاطر والتعثر.
          </p>
        </div>
        
        <div>
          <span className="label-caps text-brand-secondary">روابط</span>
          <ul className="space-y-4 text-sm font-bold">
            <li><a href="#" className="hover:text-brand-secondary transition-colors">سياسة الخصوصية</a></li>
            <li><a href="#" className="hover:text-brand-secondary transition-colors">الشروط والأحكام</a></li>
            <li><a href="#" className="hover:text-brand-secondary transition-colors">الأسئلة الشائعة</a></li>
          </ul>
        </div>

        <div>
          <span className="label-caps text-brand-secondary">تواصل</span>
          <ul className="space-y-4 text-sm font-bold">
            <li className="text-white/40">الرياض، المملكة العربية السعودية</li>
            <li>contact@secure-rent.sa</li>
            <li>9200 XXXXX</li>
          </ul>
        </div>
      </div>
      
      <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold uppercase tracking-widest text-white/20">
        <p>© {new Date().getFullYear()} إدارة المخاطر الإيجارية. جميع الحقوق محفوظة.</p>
        <div className="flex gap-8">
          <span>نظامي ومعتمد</span>
          <span>حوكمة كاملة</span>
        </div>
      </div>
    </footer>
  );
};
