/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Payment } from './pages/Payment';
import { PaymentSuccess } from './pages/PaymentSuccess';
import { PaymentCancel } from './pages/PaymentCancel';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsAndConditions } from './pages/TermsAndConditions';
import { About } from './pages/About';
import { FAQ } from './pages/FAQ';
import { Contact } from './pages/Contact';
import { Footer } from './components/Footer';
import { useContactForm } from './hooks/useContactForm';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { selectedPackage, setSelectedPackage, formSubmitted, formRef, handleSubmit } = useContactForm();

  const scrollToForm = (pkg?: string) => {
    if (pkg) setSelectedPackage(pkg);
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <Router>
      <div className="min-h-screen bg-white font-sans overflow-x-hidden selection:bg-brand-secondary/20">
        <Navbar 
          isMenuOpen={isMenuOpen} 
          setIsMenuOpen={setIsMenuOpen} 
          scrollToForm={scrollToForm} 
        />

        <Routes>
          <Route path="/" element={
            <Home 
              selectedPackage={selectedPackage}
              setSelectedPackage={setSelectedPackage}
              formSubmitted={formSubmitted}
              handleSubmit={handleSubmit}
              formRef={formRef}
              scrollToForm={scrollToForm}
            />
          } />
          <Route path="/payment" element={<Payment />} />
          <Route path="/payment/success" element={<PaymentSuccess />} />
          <Route path="/payment/cancel" element={<PaymentCancel />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}
