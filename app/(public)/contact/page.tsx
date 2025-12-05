"use client"
import React from 'react';
import HeroSection from './_components/HeroSection';
import QuickActions from './_components/QuickActions';
import GetInTouch from './_components/GetInTouch';
import GlobalOffices from './_components/GlobalOffices';
import ContactForm from './_components/ContactForm';
import HappyCustomers from './_components/HappyCustomers';
import BookDemoSection from './_components/BookDemo';
import PartnerWithUsSection from './_components/PartnerWithUs';
import TechnicalSupportSection from './_components/TechnicalSupport';
import { ChooseWinixco, WeLoveToHearFromYou } from './_components/ChooseWinixco';

// Main Contact Page Component
export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="px-4 sm:px-4 lg:px-10 py-16 md:py-24">
        <HeroSection />
        <GetInTouch />
        <BookDemoSection />
        <PartnerWithUsSection />
        <TechnicalSupportSection />
        <ContactForm />
        <ChooseWinixco />
        <WeLoveToHearFromYou />
        <HappyCustomers />
      </div>
    </div>
  );
}