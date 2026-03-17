import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { CreditCard, ArrowRight, ShieldCheck, Lock, Loader2, AlertCircle } from 'lucide-react';
import { SEPARATE_SERVICES, PACKAGES, STREAMPAY_PRODUCT_IDS } from '../constants';
import { useStreamPay } from '../hooks/useStreamPay';

export const Payment: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const serviceTitle = searchParams.get('service');

  const service = (SEPARATE_SERVICES.find(s => s.title === serviceTitle) ||
    PACKAGES.find(p => p.name === serviceTitle)) as any;

  const isPackage = PACKAGES.some(p => p.name === serviceTitle);

  const productId = serviceTitle ? STREAMPAY_PRODUCT_IDS[serviceTitle] || '' : '';

  const { pay, loading, error } = useStreamPay({
    serviceName: isPackage ? `باقة ${service?.name}` : (service?.title || ''),
    serviceDescription: service?.desc || '',
    items: productId ? [{ product_id: productId, quantity: 1, coupons: [] }] : [],
  });

  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    pay({
      name: customerName,
      email: customerEmail,
      phone: customerPhone,
    });
  };

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-brand-primary mb-4">عذراً، الخدمة غير موجودة</h2>
          <button onClick={() => navigate('/')} className="btn-primary py-3 px-8">العودة للرئيسية</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg-subtle/30 pt-32 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-ink-muted hover:text-brand-primary transition-colors mb-8 group"
        >
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          <span>العودة للرئيسية</span>
        </button>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Service Summary */}
          <div className="lg:col-span-5 space-y-8">
            <div className="glass-card p-8 border-brand-secondary/20 bg-white">
              <span className="label-caps">ملخص الطلب</span>
              <h1 className="text-3xl font-bold text-brand-primary mt-4 mb-6">
                {isPackage ? `باقة ${service?.name}` : service?.title}
              </h1>
              <p className="text-ink-muted leading-relaxed mb-8">{service?.desc}</p>

              <div className="pt-8 border-t border-line">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-ink-muted">{isPackage ? "سعر الباقة السنوي" : "سعر الخدمة"}</span>
                  <span className="font-bold text-brand-primary">{service?.price} ر.س</span>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-ink-muted">ضريبة القيمة المضافة (15%)</span>
                  <span className="font-bold text-brand-primary">شاملة</span>
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-line">
                  <span className="text-xl font-bold text-brand-primary">الإجمالي</span>
                  <span className="text-3xl font-bold text-brand-secondary">{service?.price} ر.س</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 p-6 bg-brand-accent/5 border border-brand-accent/10 rounded-2xl">
              <ShieldCheck className="text-brand-accent shrink-0" size={24} />
              <p className="text-sm text-brand-primary font-medium">
                جميع المعاملات المالية مشفرة وآمنة بنسبة 100% عبر بوابة StreamPay المعتمدة.
              </p>
            </div>
          </div>

          {/* Customer Info Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-8 md:p-12 bg-white shadow-xl shadow-brand-primary/5">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-brand-primary flex items-center gap-3">
                    <CreditCard className="text-brand-secondary" />
                    <span>بيانات العميل</span>
                  </h2>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-ink-muted">الاسم الكامل</label>
                      <input
                        required
                        type="text"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        placeholder="أدخل اسمك الكامل"
                        className="w-full bg-bg-subtle mt-3 border border-line rounded-xl p-4 focus:border-brand-secondary outline-none transition-all font-medium"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-ink-muted">البريد الإلكتروني</label>
                      <input
                        required
                        type="email"
                        value={customerEmail}
                        onChange={(e) => setCustomerEmail(e.target.value)}
                        placeholder="example@domain.com"
                        className="w-full bg-bg-subtle mt-3 border border-line rounded-xl p-4 focus:border-brand-secondary outline-none transition-all font-medium"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-ink-muted">رقم الجوال</label>
                      <input
                        required
                        type="tel"
                        value={customerPhone}
                        onChange={(e) => setCustomerPhone(e.target.value)}
                        placeholder="05XXXXXXXX"
                        className="w-full bg-bg-subtle mt-3 border border-line rounded-xl p-4 focus:border-brand-secondary outline-none transition-all font-medium"
                      />
                    </div>
                  </div>
                </div>

                <AnimatePresence>
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm"
                    >
                      <AlertCircle size={18} className="shrink-0" />
                      <span>{error}</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full py-5 text-xl group disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>جاري التحويل لبوابة الدفع...</span>
                    </>
                  ) : (
                    <>
                      <span>متابعة الدفع</span>
                      <Lock className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-ink-muted">
                  سيتم تحويلك إلى بوابة StreamPay الآمنة لإتمام عملية الدفع
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
