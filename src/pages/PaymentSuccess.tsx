import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { CheckCircle2, Loader2 } from 'lucide-react';
import { getInvoice, type InvoiceResponse } from '../services/streamPayService';

export const PaymentSuccess: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  // StreamPay redirect params: id, payment_link_id, status, message, invoice_id, payment_id
  const invoiceId = searchParams.get('invoice_id');
  const paymentId = searchParams.get('payment_id');
  const status = searchParams.get('status');

  const [invoice, setInvoice] = useState<InvoiceResponse | null>(null);
  const [verifying, setVerifying] = useState(!!invoiceId);

  useEffect(() => {
    window.scrollTo(0, 0);

    if (invoiceId) {
      getInvoice(invoiceId)
        .then(setInvoice)
        .catch(() => {})
        .finally(() => setVerifying(false));
    }
  }, [invoiceId]);

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-bg-subtle/30">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-card p-12 bg-white max-w-lg w-full text-center"
      >
        {verifying ? (
          <div className="py-8">
            <Loader2 className="w-12 h-12 animate-spin text-brand-secondary mx-auto mb-6" />
            <p className="text-ink-muted">جاري التحقق من حالة الدفع...</p>
          </div>
        ) : (
          <>
            <div className="w-20 h-20 bg-brand-accent/10 rounded-full flex items-center justify-center text-brand-accent mx-auto mb-8">
              <CheckCircle2 size={40} />
            </div>
            <h1 className="text-3xl font-bold text-brand-primary mb-4">تمت عملية الدفع بنجاح</h1>
            <p className="text-ink-muted text-lg mb-4">
              شكراً لثقتكم. سيتم تزويدكم بتفاصيل الخدمة عبر البريد الإلكتروني فوراً.
            </p>

            {(invoice || paymentId) && (
              <div className="bg-bg-subtle rounded-xl p-4 mb-8 text-sm text-ink-muted space-y-1">
                {paymentId && (
                  <p>رقم العملية: <span className="font-mono font-bold text-brand-primary">{paymentId}</span></p>
                )}
                {invoice && (
                  <p>رقم الفاتورة: <span className="font-mono font-bold text-brand-primary">{invoice.id}</span></p>
                )}
              </div>
            )}

            <button
              onClick={() => navigate('/')}
              className="btn-primary py-3 px-10"
            >
              العودة للرئيسية
            </button>
          </>
        )}
      </motion.div>
    </div>
  );
};
