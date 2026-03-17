import { useState } from 'react';
import {
  createPaymentLink,
  type CreatePaymentLinkPayload,
  type StreamPayItem,
} from '../services/streamPayService';

interface UseStreamPayOptions {
  serviceName: string;
  serviceDescription: string;
  items: StreamPayItem[];
}

interface CustomerInfo {
  name: string;
  email: string;
  phone: string;
}

export function useStreamPay({ serviceName, serviceDescription, items }: UseStreamPayOptions) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const pay = async (customer: CustomerInfo) => {
    setLoading(true);
    setError(null);

    try {
      const origin = window.location.origin;

      const payload: CreatePaymentLinkPayload = {
        name: serviceName,
        description: serviceDescription,
        items,
        currency: "SAR",
        contact_information_type: "PHONE",
        success_redirect_url: `${origin}/payment/success`,
        failure_redirect_url: `${origin}/payment/cancel`,
        custom_metadata: {
          customer_name: customer.name,
          customer_email: customer.email,
          customer_phone: customer.phone.startsWith('+') ? customer.phone : `+966${customer.phone.replace(/^0/, '')}`,
        },
      };

      const result = await createPaymentLink(payload);

      // Redirect to StreamPay hosted checkout
      window.location.href = result.url;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'حدث خطأ أثناء إنشاء رابط الدفع');
      setLoading(false);
    }
  };

  return { pay, loading, error };
}
