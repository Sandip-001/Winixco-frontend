"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Headphones, 
  LifeBuoy, 
  Mail, 
  MessageSquare, 
  Phone, 
  MapPin,
  Send,
  CheckCircle,
  Users,
  Star
} from 'lucide-react';
import HeroSection from './_components/HeroSection';
import QuickActions from './_components/QuickActions';
import GetInTouch from './_components/GetInTouch';
import GlobalOffices from './_components/GlobalOffices';
import ContactForm from './_components/ContactForm';
import HappyCustomers from './_components/HappyCustomers';

// Main Contact Page Component
export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="px-4 sm:px-4 lg:px-10 py-16 md:py-24">
        <HeroSection />
        <QuickActions />
        <GetInTouch />
        <GlobalOffices />
        <ContactForm />
        <HappyCustomers />
      </div>
    </div>
  );
}