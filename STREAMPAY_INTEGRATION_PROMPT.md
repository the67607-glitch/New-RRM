# StreamPay (streampay.sa) Payment Integration Prompt

## 🎯 Context

You are helping integrate **StreamPay** (streampay.sa) — a Saudi Arabian payment gateway — into a **React + Vite** application. The developer already has a StreamPay account and API key.

---

## 📦 Project Stack

- **Frontend:** React + Vite
- **Language:** JavaScript (or TypeScript if tsconfig.json exists)
- **Styling:** Use whatever CSS framework is already in the project (Tailwind, CSS Modules, etc.)
- **Routing:** React Router v6
- **Payment Gateway:** StreamPay (streampay.sa)

---

## 🔑 StreamPay API Reference

### Base URL
```
https://stream-app-service.streampay.sa
```

### Authentication
All requests must include the header:
```
x-api-key: <YOUR_API_KEY>
```

### Key Endpoints

| Action              | Method | Endpoint                    |
|---------------------|--------|-----------------------------|
| Create payment link | POST   | `/v2/payment_links`         |
| Get payment link    | GET    | `/v2/payment_links/:id`     |
| List payment links  | GET    | `/v2/payment_links`         |
| Get payment         | GET    | `/v2/payments/:id`          |
| List payments       | GET    | `/v2/payments`              |
| Create customer     | POST   | `/v2/customers`             |
| List products       | GET    | `/v2/products`              |
| Create product      | POST   | `/v2/products`              |
| List coupons        | GET    | `/v2/coupons`               |
| List invoices       | GET    | `/v2/invoices`              |

### Create Payment Link — Request Body Example
```json
{
  "name": "Order #123",
  "description": "Product description here",
  "items": [
    {
      "product_id": "PRODUCT_ID_FROM_DASHBOARD",
      "quantity": 1,
      "coupons": []
    }
  ],
  "customer": {
    "name": "Customer Name",
    "email": "customer@email.com",
    "phone": "+966500000000"
  },
  "success_url": "https://yourapp.com/payment/success",
  "cancel_url": "https://yourapp.com/payment/cancel"
}
```

### Create Payment Link — Response Example
```json
{
  "id": "pl_xxxx",
  "url": "https://checkout.streampay.sa/pay/xxxx",
  "status": "active",
  "created_at": "2025-01-01T00:00:00Z"
}
```

---

## ✅ What to Build

### 1. Environment Variables
Create or update `.env`:
```env
VITE_STREAM_API_KEY=sk_test_YOUR_KEY_HERE
VITE_STREAM_BASE_URL=https://stream-app-service.streampay.sa
```

> ⚠️ **Security Warning:** In production, NEVER expose the API key in the frontend. Build a backend proxy endpoint (Node/Express or Vite server middleware) that holds the key securely. For development/demo, using `VITE_` prefix is acceptable only with test keys.

---

### 2. Files to Create

#### `src/services/streamPayService.js`
A service module that wraps all StreamPay API calls:
- `createPaymentLink(payload)` — POST to `/v2/payment_links`
- `getPaymentLink(id)` — GET `/v2/payment_links/:id`
- `getPayment(id)` — GET `/v2/payments/:id`
- `listProducts()` — GET `/v2/products`
- Handle errors gracefully and throw descriptive messages.

#### `src/hooks/useStreamPay.js`
A custom React hook that:
- Exposes `createPaymentLink`, `loading`, `error` state
- Manages loading and error state internally
- Redirects user to `result.url` after successful link creation

#### `src/components/PaymentButton.jsx`
A reusable button component that:
- Accepts props: `productId`, `quantity`, `customerInfo`, `label`
- Shows loading spinner while processing
- Calls `useStreamPay` hook on click
- Displays error message if payment link creation fails

#### `src/pages/PaymentSuccess.jsx`
A success page that:
- Reads `payment_id` or `session_id` from URL query params
- Optionally verifies the payment via `getPayment(id)` call
- Shows a success message with order summary

#### `src/pages/PaymentCancel.jsx`
A cancel page that:
- Shows a friendly cancellation message
- Provides a button to go back and try again

---

### 3. React Router Setup
Add these routes in `src/App.jsx` or the router config:
```jsx
<Route path="/payment/success" element={<PaymentSuccess />} />
<Route path="/payment/cancel" element={<PaymentCancel />} />
```

---

### 4. Backend Proxy (Optional but Recommended for Production)
If a `server` or `api` folder exists, create `api/create-payment-link.js`:
- Accept POST requests with payment payload from frontend
- Forward request to StreamPay using the secret `STREAM_API_KEY` (not exposed to client)
- Return the response to the frontend
- Also add Vite proxy config in `vite.config.js` to forward `/api/*` to the backend

---

## 🧪 Testing Instructions

1. Use test API key (`sk_test_...`) from the StreamPay dashboard
2. Click Pay → you should be redirected to the StreamPay hosted checkout page
3. Complete a test payment using StreamPay's test card details (check their dashboard)
4. You should be redirected back to `/payment/success?payment_id=xxx`

---

## 📁 Existing Project Context

Before writing any code:
1. Read `package.json` to understand installed dependencies
2. Check if TypeScript is used (`tsconfig.json`) and use `.ts`/`.tsx` extensions if so
3. Look at existing component structure in `src/` to match the code style
4. Check if there's already a `services/` or `hooks/` folder to place files correctly
5. Check `vite.config.js` for any existing proxy or plugin setup

---

## 🛡️ Security Rules to Follow

- Never hardcode the API key in source code
- Always use environment variables
- In production: move API calls to a server-side function
- Validate payment status server-side before granting access to purchased content
- Add error boundaries around payment components

---

## 💬 Additional Notes

- StreamPay is a Saudi payment provider, so currency is **SAR (Saudi Riyal)**
- The checkout is **hosted by StreamPay** (redirect flow) — no need to build a custom card form
- Product IDs must be created in the StreamPay dashboard first, then referenced by ID in the API
- Recurring products (subscriptions) and one-time products **cannot be mixed** in the same payment link
- StreamPay supports smart reminders for failed/late payments automatically

---

## 🚀 Start Instructions for Claude CLI

When starting, say:
> "Read the existing project files first, then implement the StreamPay payment integration following the spec above. Create all necessary files and update existing ones as needed. Ask me for the API key and product ID before writing the `.env` file."
