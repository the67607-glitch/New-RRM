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
  { name: 'تواصل', href: '#form' },
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
  { name: "باقة حتى 50 وحدة", desc: "للملاك والمحافظ الصغيرة", features: ["فحص ائتماني شامل", "توثيق العقود", "إدارة الإنذارات", "تقارير شهرية"] },
  { name: "باقة حتى 100 وحدة", desc: "للمحافظ المتوسطة", features: ["كل مميزات الباقة السابقة", "أولوية في التنفيذ", "تحليل مخاطر متقدم", "دعم قانوني مباشر"] },
  { name: "باقة Enterprise", desc: "لشركات الريت والمحافظ الكبرى", features: ["تغطية غير محدودة", "مدير حساب مخصص", "ربط تقني (API)", "حوكمة كاملة للعمليات"] }
];

export const SEPARATE_SERVICES: SeparateService[] = [
  { title: "التنفيذ المالي", desc: "إدارة إجراءات المطالبة المالية وتحصيل المتأخرات عبر القنوات النظامية.", price: "1,000", icon: <Gavel /> },
  { title: "إخلاء مستأجر", desc: "متابعة وتنفيذ إجراءات إخلاء العقار نظامياً في حالات الإخلال بالعقد.", price: "1,000", icon: <LogOut /> },
  { title: "الفحص الائتماني", desc: "تقييم الملاءة المالية للمستأجر وسجله الائتماني لضمان القدرة على السداد.", price: "1,000", icon: <ShieldCheck /> },
  { title: "الفحص الأمني", desc: "التحقق من السجل الأمني للمستأجر لضمان سلامة العقار والمجتمع.", price: "1,000", icon: <Fingerprint /> },
  { title: "صياغة عقد تنفيذي", desc: "إعداد عقود إيجار قانونية محكمة تتضمن الصيغة التنفيذية لسرعة التنفيذ.", price: "1,000", icon: <FileCheck /> },
  { title: "توثيق عقد إيجار", desc: "إتمام إجراءات توثيق العقود عبر منصة إيجار لضمان الحقوق نظامياً.", price: "1,000", icon: <ClipboardCheck /> }
];

export const WORKFLOW_STEPS: WorkflowStep[] = [
  { step: "01", title: "التقييم الأولي", desc: "تحليل شامل للمحفظة وتحديد نقاط الضعف القانونية والائتمانية." },
  { step: "02", title: "التوثيق والربط", desc: "إعادة هيكلة العقود وربطها بمنصة إيجار بالصيغ التنفيذية." },
  { step: "03", title: "المراقبة النشطة", desc: "متابعة السداد وإصدار الإنذارات التلقائية عند أول بوادر التعثر." },
  { step: "04", title: "التنفيذ القانوني", desc: "إدارة إجراءات المحاكم والتنفيذ والإخلاء عبر فريقنا المختص." }
];

export const SERVICE_OPTIONS = {
  main: [
    { value: "استشارة مجانية", label: "استشارة مجانية" },
    { value: "طلب تقييم أولي", label: "طلب تقييم أولي" },
  ],
  packages: PACKAGES.map(p => ({ value: p.name, label: p.name })),
  separate: SEPARATE_SERVICES.map(s => ({ value: s.title, label: s.title })),
};
