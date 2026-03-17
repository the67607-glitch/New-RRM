/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import {
  ShieldCheck,
  Users,
  Building2,
  TrendingUp,
  FileCheck,
  AlertCircle,
  Gavel,
  LogOut,
  ClipboardCheck,
  Fingerprint
} from 'lucide-react';
import { NavLink, Stat, AudienceItem, ServiceItem, Package, SeparateService, WorkflowStep } from './types';

export const NAV_LINKS: NavLink[] = [
  { name: 'الخدمة', href: '#service' },
  { name: 'الباقات', href: '#packages' },
  { name: 'خدمات منفصلة', href: '#separate-services' },
  { name: 'العمليات', href: '#workflow' },
  { name: 'تواصل', href: '/contact' },
];

export const HERO_STATS: Stat[] = [
  { label: "دقة التقييم الائتماني", value: "98%" },
  { label: "سرعة إجراءات التنفيذ", value: "x2.5" },
  { label: "نسبة استرداد المتأخرات", value: "92%" }
];

export const AUDIENCE_ITEMS: AudienceItem[] = [
  {
    title: "الملاك الأفراد",
    desc: "حماية المحفظة الشخصية من المستأجرين المتعثرين وضمان حقوقك القانونية.",
    icon: <Building2 />
  },
  {
    title: "شركات الإدارة",
    desc: "مسار تشغيلي قانوني موحد لإدارة الإنذارات والتنفيذ عبر آلاف الوحدات.",
    icon: <Users />
  },
  {
    title: "صناديق الريت",
    desc: "أقصى درجات الالتزام والحوكمة في إدارة المخاطر الإيجارية للمحافظ الكبيرة.",
    icon: <TrendingUp />
  }
];

export const CORE_SERVICES: ServiceItem[] = [
  { text: "الفحص الائتماني للمستأجر قبل التعاقد", icon: <ShieldCheck /> },
  { text: "الفحص الأمني للمستأجر قبل التعاقد", icon: <ShieldCheck /> },
  { text: "صياغة عقود إيجار محكمة وقابلة للتنفيذ", icon: <FileCheck /> },
  { text: "التوثيق النظامي عبر منصة إيجار", icon: <ClipboardCheck /> },
  { text: "إصدار الإنذارات النظامية والمطالبات (قبل وبعد التعثر)", icon: <AlertCircle /> },
  { text: "إدارة إجراءات التنفيذ والإخلاء عند الحاجة", icon: <Gavel /> }
];

export const PACKAGES: Package[] = [
  { name: "Shield", price: "3,500", desc: "حماية حتى 50 وحدة سكنية/تجارية", features: ["فحص ائتماني شامل", "توثيق العقود", "إدارة الإنذارات", "تقارير شهرية"] },
  { name: "Fortify", price: "7,500", desc: "حماية حتى 100 وحدة سكنية/تجارية", features: ["كل مميزات الباقة السابقة", "أولوية في التنفيذ", "تحليل مخاطر متقدم", "دعم قانوني مباشر"] },
  { name: "Citadel", price: "15,000", desc: "حماية غير محدودة للوحدات", features: ["تغطية غير محدودة", "مدير حساب مخصص", "ربط تقني (API)", "حوكمة كاملة للعمليات"] }
];

export const SEPARATE_SERVICES: SeparateService[] = [
  { title: "التنفيذ المالي", desc: "إدارة إجراءات المطالبة المالية وتحصيل المتأخرات عبر القنوات النظامية.", price: "2,500", icon: <Gavel /> },
  { title: "إخلاء مستأجر", desc: "متابعة وتنفيذ إجراءات إخلاء العقار نظامياً في حالات الإخلال بالعقد.", price: "4,500", icon: <LogOut /> },
  { title: "الفحص الائتماني", desc: "تقييم الملاءة المالية للمستأجر وسجله الائتماني لضمان القدرة على السداد.", price: "250", icon: <ShieldCheck /> },
  { title: "الفحص الأمني", desc: "التحقق من السجل الأمني للمستأجر لضمان سلامة العقار والمجتمع.", price: "350", icon: <Fingerprint /> },
  { title: "صياغة عقد تنفيذي", desc: "إعداد عقود إيجار قانونية محكمة تتضمن الصيغة التنفيذية لسرعة التنفيذ.", price: "850", icon: <FileCheck /> },
  { title: "توثيق عقد إيجار", desc: "إتمام إجراءات توثيق العقود عبر منصة إيجار لضمان الحقوق نظامياً.", price: "200", icon: <ClipboardCheck /> }
];

export const WORKFLOW_STEPS: WorkflowStep[] = [
  { step: "01", title: "التقييم الأولي", desc: "تحليل شامل للمحفظة وتحديد نقاط الضعف القانونية والائتمانية." },
  { step: "02", title: "التوثيق والربط", desc: "إعادة هيكلة العقود وربطها بمنصة إيجار بالصيغ التنفيذية." },
  { step: "03", title: "المراقبة النشطة", desc: "متابعة السداد وإصدار الإنذارات التلقائية عند أول بوادر التعثر." },
  { step: "04", title: "التنفيذ القانوني", desc: "إدارة إجراءات المحاكم والتنفيذ والإخلاء عبر فريقنا المختص." }
];

export const SERVICE_OPTIONS = {
  main: [
    { value: "استشارة مهنية مجانية", label: "استشارة مهنية مجانية" },
    { value: "طلب تقييم أولي", label: "طلب تقييم أولي" },
  ],
};

// Map each service/package name to its StreamPay product ID.
// Replace the placeholder values with real product IDs from your StreamPay dashboard.
export const STREAMPAY_PRODUCT_IDS: Record<string, string> = {
  // Packages
  "Shield": "0fc669f6-4302-434f-81e3-255c4d65a102",
  "Fortify": "bcb6d324-93c2-48cb-80c0-d77b0df12abf",
  "Citadel": "ae997c4e-dcc3-4a95-8535-0cb9b42034f9",
  // Separate Services
  "التنفيذ المالي": "33707c93-1953-48d7-ad2f-84a0a2329562",
  "إخلاء مستأجر": "39cb0051-a11a-4662-bba9-60f48a82e689",
  "الفحص الائتماني": "344fb7b6-0d19-44d4-94da-05ab3419efe3",
  "الفحص الأمني": "4d04aef1-703f-4edf-bcc4-415bd83bc786",
  "صياغة عقد تنفيذي": "12e0ef49-8cee-488b-bd33-960e759c10c8",
  "توثيق عقد إيجار": "f9ae2fa0-620d-4456-8b41-0908bcb0514d",
};
