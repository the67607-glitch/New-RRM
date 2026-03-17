import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { XCircle } from 'lucide-react';

export const PaymentCancel: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-bg-subtle/30">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-card p-12 bg-white max-w-lg w-full text-center"
      >
        <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center text-red-500 mx-auto mb-8">
          <XCircle size={40} />
        </div>
        <h1 className="text-3xl font-bold text-brand-primary mb-4">تم إلغاء عملية الدفع</h1>
        <p className="text-ink-muted text-lg mb-8">
          لم يتم خصم أي مبلغ من حسابك. يمكنك المحاولة مرة أخرى في أي وقت.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate(-1)}
            className="btn-primary py-3 px-8"
          >
            إعادة المحاولة
          </button>
          <button
            onClick={() => navigate('/')}
            className="py-3 px-8 border border-line rounded-xl font-bold text-ink-muted hover:text-brand-primary hover:border-brand-secondary transition-all"
          >
            العودة للرئيسية
          </button>
        </div>
      </motion.div>
    </div>
  );
};
