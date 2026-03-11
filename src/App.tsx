/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TargetAudience } from './components/TargetAudience';
import { CoreServices } from './components/CoreServices';
import { Packages } from './components/Packages';
import { SeparateServices } from './components/SeparateServices';
import { Workflow } from './components/Workflow';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { ConsultationCTA } from './components/ConsultationCTA';

export default function App() {
  const [selectedPackage, setSelectedPackage] = useState<string>('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = (pkg?: string) => {
    if (pkg) setSelectedPackage(pkg);
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-bg-paper font-sans overflow-x-hidden">
      {/* Grid Background Overlay */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03]">
        <div className="grid-container h-full w-full grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-0">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border-l border-ink h-full" />
          ))}
        </div>
      </div>

      <Navbar 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen} 
        scrollToForm={scrollToForm} 
      />

      <main className="grid-container pt-20">
        <Hero scrollToForm={scrollToForm} />
        <TargetAudience />
        <CoreServices />
        <Packages scrollToForm={scrollToForm} />
        <SeparateServices scrollToForm={scrollToForm} />
        <ConsultationCTA scrollToForm={scrollToForm} />
        <Workflow />
        
        <ContactForm 
          formRef={formRef}
          selectedPackage={selectedPackage}
          setSelectedPackage={setSelectedPackage}
          formSubmitted={formSubmitted}
          handleSubmit={handleSubmit}
        />

        <Footer />
      </main>
    </div>
  );
}
