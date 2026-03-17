// In development, requests go through the Vite proxy which injects the API key
// and Origin header server-side. In production, set VITE_STREAM_BASE_URL to your backend proxy.
const BASE_URL = import.meta.env.VITE_STREAM_BASE_URL || "/streampay-api";

const headers: Record<string, string> = {
  "Content-Type": "application/json",
};

export interface StreamPayCustomer {
  name: string;
  email?: string;
  phone_number?: string;
}

export interface StreamPayItem {
  product_id: string;
  quantity: number;
  coupons?: string[];
}

export interface CreatePaymentLinkPayload {
  name: string;
  description?: string;
  items: StreamPayItem[];
  currency: string;
  contact_information_type?: "PHONE" | "EMAIL";
  organization_consumer_id?: string;
  success_redirect_url?: string;
  failure_redirect_url?: string;
  custom_metadata?: Record<string, string>;
}

export interface PaymentLinkResponse {
  id: string;
  url: string;
  status: string;
  amount: string;
  currency: string;
  created_at: string;
}

export interface PaymentResponse {
  id: string;
  status: string;
  amount: number;
  currency: string;
  [key: string]: unknown;
}

export interface InvoiceResponse {
  id: string;
  status: string;
  amount: string;
  currency: string;
  [key: string]: unknown;
}

async function request<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    ...options,
    headers: { ...headers, ...options?.headers },
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`StreamPay error ${res.status}: ${body}`);
  }

  return res.json();
}

export function createPaymentLink(
  payload: CreatePaymentLinkPayload,
): Promise<PaymentLinkResponse> {
  return request<PaymentLinkResponse>("/v2/payment_links", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export function getPaymentLink(id: string): Promise<PaymentLinkResponse> {
  return request<PaymentLinkResponse>(`/v2/payment_links/${id}`);
}

export function getPayment(id: string): Promise<PaymentResponse> {
  return request<PaymentResponse>(`/v2/payments/${id}`);
}

export function getInvoice(id: string): Promise<InvoiceResponse> {
  return request<InvoiceResponse>(`/v2/invoices/${id}`);
}

export function listProducts(): Promise<unknown[]> {
  return request<unknown[]>("/v2/products");
}
