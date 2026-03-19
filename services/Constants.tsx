import {
  BarChart3,
  Clock,
  Award,
  Headphones,
  LifeBuoy,
  Mail,
  MessageSquare,
  Phone,
  Workflow,
  UserCheck,
  Users,
  Briefcase,
  Calendar,
  FileText,
  TrendingUp,
  Target,
  Sparkles,
  Zap,
  Shield,
  DollarSign,
  Star,
  CreditCard,
  Rocket,
  CheckCircle,
  LineChart, PhoneCall,  Handshake, 
  LucideIcon,
} from "lucide-react";
import { ReactNode } from "react";
import { type ElementType } from "react";

// -------------------- TYPES -------------------- //

export interface NavItem {
  name: string;
  href: string;
}

export interface Company {
  name: string;
  logo: string;
}

export interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
  color: string;
}

export interface AboutStat {
  icon: ReactNode;
  value: string;
  label: string;
}

export interface AboutSection {
  badge: string;
  heading: string;
  subheading: string;
  description: string;
  description2: string;
  stats: { icon: typeof Users; value: string; label: string }[];
  highlights: string[];
  cta: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  image: string;
  rating: number;
  content: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Benefit {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Plan {
  name: string;
  price: string;
  period: string;
  features: string[];
  highlight: boolean;
}

// Type Definitions
export interface ModuleFeature {
  icon: LucideIcon;
  label: string;
}

export interface Module {
  id: string;
  title: string;
  description: string;
  subDescription: string;
  icon: LucideIcon;
  color: string;
  bgColor: string;
  hoverColor: string;
  accentColor: string;
  features: ModuleFeature[];
  route: string;
  imageUrl: string;
}

export interface ModulesData {
  badge: string;
  title: string;
  subtitle: string;
  modules: Module[];
}

export interface ModuleCardProps {
  module: Module;
  index: number;
}

export interface HomeContent {
  navigation: NavItem[];
  companies: Company[];
  features: Feature[];
  about: AboutSection;
  testimonials: Testimonial[];
  stats: Stat[];
  benefits: Benefit[];
  faq: FAQItem[];
  plans: Plan[];
  module: ModulesData;
}

// -------------------- CONSTANT DATA -------------------- //

export const home: HomeContent = {
  navigation: [
    { name: "About", href: "/about" },
    {name: "Services", href: "/services"},
    { name: "Features", href: "/features" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "/blogs" },
    { name: "Careers", href: "/careers" },
    
  ],

  companies: [
    { name: "TechCorp", logo: "🚀" },
    { name: "InnovateLab", logo: "💡" },
    { name: "DataDrive", logo: "📊" },
    { name: "CloudNine", logo: "☁️" },
    { name: "DevMasters", logo: "⚡" },
    { name: "StartupHub", logo: "🎯" },
    { name: "GrowthCo", logo: "📈" },
    { name: "FutureWorks", logo: "🌟" },
  ],

  features: [
    {
      //icon: <Sparkles className="w-6 h-6" />,
      icon: "🤖",
      title: "AI Resume Screening",
      description:
        "Automatically parse and rank resumes using advanced AI. Reduce screening time by 80% and find top candidates instantly.",
      color: "from-purple-500 to-pink-500",
    },
    {
      //icon: <Users className="w-6 h-6" />,
      icon: "🎯",
      title: "Smart Candidate Matching",
      description:
        "ML-powered matching algorithm identifies the best-fit candidates based on skills, experience, and cultural fit.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      //icon: <BarChart3 className="w-6 h-6" />,
      icon: "📅",
      title: "Interview Scheduling",
      description:
        "Automated scheduling with calendar sync, reminders, and video interview integration. No back-and-forth emails.",
      color: "from-green-500 to-emerald-500",
    },
    {
      //icon: <Clock className="w-6 h-6" />,
      icon: "🤝",
      title: "Recruitment ATS",
      description:
        "Build and nurture your talent community. Stay connected with passive candidates for future opportunities.",
      color: "from-indigo-500 to-purple-500",
    },
    {
      //icon: <Shield className="w-6 h-6" />,
      icon: "👥",
      title: "HRMS & Employee Management",
      description:
        "Seamless transition from recruitment to onboarding. Manage employee data, documents, and lifecycle in one place.",
      color: "from-teal-500 to-blue-500",
    },
    {
      //icon: <Zap className="w-6 h-6" />,
      icon: "📊",
      title: "Advanced Analytics",
      description:
        "Real-time insights into hiring metrics, time-to-hire, cost-per-hire, and team productivity dashboards.",
      color: "from-orange-500 to-red-500",
    },
  ],

  about: {
    badge: "About Winixco",
    heading: "A Unified Platform for Smarter Hiring & Workforce Excellence",
    subheading: "ATS + HRMS + CRM — Built for Modern Growing Teams",
    description: `Winixco is a next-generation talent and workforce management platform designed for scaling companies. 
  We bring Applicant Tracking System (ATS), Human Resource Management System (HRMS), 
  and Client Relationship Management (CRM) together in a single seamless experience.

  Built for speed, automation, and transparency — Winixco eliminates spreadsheets, scattered tools, 
  and complex workflows with a powerful unified platform that helps you hire faster, manage teams smarter, 
  and deliver exceptional employee and client experiences.`,
    description2: `Our mission is simple — empower organizations to focus on growth while we handle the 
  people operations. From recruitment to onboarding, payroll to client management — Winixco automates 
  the busywork so your team can do their best work.`,
    stats: [
      { icon: Users, value: "15K+", label: "Global Users" },
      { icon: Target, value: "500K+", label: "Hires Managed" },
      { icon: Award, value: "92%", label: "Faster Processes" },
    ],
    highlights: [
      "Unified ATS + HRMS + CRM in one platform",
      "AI-powered automation at every workflow",
      "Secure & scalable for growing companies",
      "Exceptional onboarding & customer support",
    ],
    cta: "Discover Our Journey",
  },

  testimonials: [
    {
      name: "Sarah Johnson",
      role: "Head of Talent Acquisition",
      company: "TechVision Inc.",
      image: "👩‍💼",
      rating: 5,
      content:
        "This ATS transformed our hiring process completely. We reduced time-to-hire by 65% and improved candidate quality significantly. The AI screening feature is a game-changer!",
    },
    {
      name: "Michael Chen",
      role: "Recruitment Manager",
      company: "InnovateLabs",
      image: "👨‍💻",
      rating: 5,
      content:
        "The best investment we made this year. The collaborative features allow our distributed team to work seamlessly. Interview scheduling is now fully automated!",
    },
    {
      name: "Emily Rodriguez",
      role: "VP of People Operations",
      company: "GrowthScale",
      image: "👩‍🔬",
      rating: 5,
      content:
        "From posting jobs to making offers, everything is streamlined. The analytics dashboard gives us insights we never had before. Highly recommended!",
    },
    {
      name: "David Kim",
      role: "Talent Director",
      company: "StartupHub",
      image: "👨‍🎓",
      rating: 5,
      content:
        "We interviewed 500+ candidates in just two weeks using the AI recruiter. The quality of hires has improved dramatically. Support team is exceptional!",
    },
  ],

  stats: [
    { value: "10,000+", label: "Companies Trust Us" },
    { value: "2M+", label: "Candidates Hired" },
    { value: "65%", label: "Faster Hiring" },
    { value: "99.9%", label: "Uptime SLA" },
  ],

  benefits: [
    {
      icon: <Workflow className="w-8 h-8" />,
      title: "Unified HRMS + ATS + CRM Platform",
      description:
        "Manage hiring, employees, clients, and vendors in one integrated system — reducing clutter and boosting productivity.",
    },
    {
      icon: <UserCheck className="w-8 h-8" />,
      title: "Automation Across Departments",
      description:
        "From onboarding to performance and sales follow-ups — automate workflows and eliminate manual errors.",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Real-Time Insights & Dashboards",
      description:
        "Get live visibility across HR, recruitment, sales, and operations so leaders can make fast, informed decisions.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Designed for Team Collaboration",
      description:
        "Every department stays synchronized with shared data, smart notifications & centralized communication.",
    },
  ],

  module : {
    badge: "OUR SOLUTIONS",
    title: "Services We Offer",
    subtitle:
      "Powerful tools designed to streamline your recruitment and HR operations",
    modules: [
      {
        id: "ats",
        title: "Applicant Tracking System (ATS)",
        description:
          "A complete recruitment engine that helps you post jobs, track candidates, parse resumes, manage interviews, and hire the right people faster.",
        subDescription:
          "From sourcing to onboarding, every step of hiring becomes automated, organised and error-free.",
        icon: Users,
        color: "from-blue-500 to-cyan-500",
        bgColor: "from-blue-50 to-cyan-50",
        hoverColor: "hover:from-blue-100 hover:to-cyan-100",
        accentColor: "text-blue-600",
        features: [
          { icon: FileText, label: "Resume Parsing" },
          { icon: Calendar, label: "Interview Scheduling" },
          { icon: Target, label: "Candidate Tracking" },
          { icon: Zap, label: "Quick Hiring" },
        ],
        route: "/ats",
        imageUrl:
          "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
      },
      {
        id: "hrms",
        title: "Human Resource Management System (HRMS)",
        description:
          "A modern HRMS that centralises employee data, attendance, payroll, leave management, performance tracking and compliance.",
        subDescription:
          "Empower your HR team and employees with self-service tools and smooth workflows.",
        icon: Briefcase,
        color: "from-purple-500 to-pink-500",
        bgColor: "from-purple-50 to-pink-50",
        hoverColor: "hover:from-purple-100 hover:to-pink-100",
        accentColor: "text-purple-600",
        features: [
          { icon: Users, label: "Employee Management" },
          { icon: Calendar, label: "Attendance & Leave" },
          { icon: TrendingUp, label: "Performance Tracking" },
          { icon: Shield, label: "Compliance" },
        ],
        route: "/hrms",
        imageUrl:
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
      },
      {
        id: "crm",
        title: "Client & Candidate CRM",
        description:
          "A smart CRM designed for recruitment teams, staffing companies and growing businesses.",
        subDescription:
          "Track clients, manage candidate pipelines, schedule follow-ups, and maintain long-term relationships — all in one place.",
        icon: UserCheck,
        color: "from-orange-500 to-red-500",
        bgColor: "from-orange-50 to-red-50",
        hoverColor: "hover:from-orange-100 hover:to-red-100",
        accentColor: "text-orange-600",
        features: [
          { icon: Users, label: "Client Management" },
          { icon: Target, label: "Pipeline Tracking" },
          { icon: Calendar, label: "Follow-up Scheduling" },
          { icon: TrendingUp, label: "Relationship Building" },
        ],
        route: "/crm",
        imageUrl:
          "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop",
      },
    ],
  },

  faq: [
    {
      question: "What businesses can use Winixco?",
      answer:
        "Winixco is designed for recruitment agencies, SMBs, corporates, hospitals, IT companies, retail chains — and any organisation that wants to digitise HR, hiring, and sales operations.",
    },
    {
      question: "Can I use only one module like ATS or HRMS?",
      answer:
        "Yes! Each module — HRMS, ATS, and CRM — works independently. You can start with one and add others whenever your business grows.",
    },
    {
      question: "How secure is my data on Winixco?",
      answer:
        "We follow enterprise-grade security, data encryption, role-based access, backup protection, and international compliance policies to safeguard your information.",
    },
    {
      question: "Does Winixco support remote teams and multiple locations?",
      answer:
        "Absolutely. Winixco is cloud-based and works smoothly across locations on mobile, tablet, and desktop — keeping teams connected in real-time.",
    },
    {
      question: "Can Winixco integrate with our existing systems?",
      answer:
        "Yes! We support integration with payroll, ERPs, job boards, and communication tools. Custom API access is available for advanced setups.",
    },
    {
      question: "How fast can we get started with Winixco?",
      answer:
        "Most companies go live within 48 hours with guided onboarding, data migration, and training support from our team.",
    },
  ],

  plans: [
    {
      name: "Starter",
      price: "₹49",
      period: "per month",
      features: [
        "Up to 5 active job postings",
        "Basic AI screening",
        "Email support",
      ],
      highlight: false,
    },
    {
      name: "Pro",
      price: "₹99",
      period: "per month",
      features: [
        "Unlimited job postings",
        "Advanced AI + Automation",
        "Collaborative hiring tools",
        "Analytics dashboard",
        "Priority support",
      ],
      highlight: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      features: [
        "All Pro features",
        "Dedicated Account Manager",
        "Custom Integrations",
        "Security & SLA add-ons",
      ],
      highlight: false,
    },
  ],
};

//Contact page

// ==== TYPES ==== //
export interface ContactHero {
  badge: string;
  title: string;
  description: string;
  subtitle: string;
}

export interface QuickAction {
  icon: ElementType;
  title: string;
  description: string;
  cta: string;
  color: string;
}

export interface ContactMethod {
  icon: ElementType;
  title: string;
  description: string;
  contact: string;
  color: string;
}

export interface OfficeLocation {
  city: string;
  icon: string;
  address: string;
  address2: string;
}

export interface CustomerLogo {
  name: string;
  color: string;
}

export interface ContactData {
  hero: ContactHero;
  quickActions: QuickAction[];
  getInTouch: {
    title: string;
    description: string;
    methods: ContactMethod[];
  };
  offices: {
    title: string;
    description: string;
    locations: OfficeLocation[];
  };
  customers: {
    badge: string;
    title: string;
    highlight: string;
    count: string;
    label: string;
    logos: CustomerLogo[];
  };
}

// ==== CONSTANT DATA (Fully Typed) ==== //
export const CONTACT_DATA: ContactData = {
  hero: {
    badge: "#1 CUSTOMER SUPPORT",
    title: "Contact",
    description:
      "Connect with us for personalized demos, support questions, or pricing discussions.",
    subtitle: "We're here to help you every step of the way.",
  },

  quickActions: [
    {
      icon: Headphones,
      title: "Book a demo",
      description:
        "We offer customized demos to address your organization's unique needs. Click below to schedule a convenient time for a conversation.",
      cta: "Get a demo",
      color: "from-blue-50 to-purple-50",
    },
    {
      icon: LifeBuoy,
      title: "Get help",
      description:
        "Having trouble? We're here to help. Visit our comprehensive help section by clicking the button below for guidance and support.",
      cta: "Visit help center",
      color: "from-purple-50 to-pink-50",
    },
  ],

  getInTouch: {
    title: "Get in touch",
    description:
      "If you'd like to discuss Winixco and prefer a personal touch, don't hesitate to reach out to us.",
    methods: [
      {
        icon: Mail,
        title: "General inquires",
        description: "Email us at",
        contact: "info@winixco.com",
        color: "text-blue-600",
      },
      {
        icon: MessageSquare,
        title: "Quick support",
        description: "Get instant help.",
        contact: "Chat with us",
        color: "text-purple-600",
      },
      {
        icon: Phone,
        title: "Phone",
        description: "India: +91 8639341304",
        contact: "Call us now",
        color: "text-green-600",
      },
    ],
  },

  offices: {
    title: "Our global offices",
    description: "We have offices in India and the US.",
    locations: [
      {
        city: "Bengaluru, India",
        icon: "🏛️",
        address: "Koramangala 8th Block, Bengaluru,",
        address2: "Karnataka 560095",
      },
      {
        city: "California, USA",
        icon: "🌉",
        address: "2710 Alpine Blvd, Alpine,",
        address2: "California, 91901",
      },
    ],
  },

  customers: {
    badge: "DON'T MISS OUT",
    title: "Source, track, evaluate, and hire candidates ",
    highlight: "10x faster!",
    count: "4700+",
    label: "happy users",
    logos: [
      { name: "Swiggy", color: "text-orange-600" },
      { name: "Dunzo", color: "text-blue-600" },
      { name: "Meesho", color: "text-purple-600" },
      { name: "Cred", color: "text-gray-800" },
      { name: "Mosaic", color: "text-indigo-600" },
      { name: "Livspace", color: "text-teal-600" },
      { name: "Scaler", color: "text-red-600" },
      { name: "Vedantu", color: "text-blue-500" },
    ],
  },
};



//Ats page

// Type Definitions
export interface ATSOverview {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface ATSBenefit {
  text: string;
}

export interface ATSFeature {
  icon: string;
  title: string;
  description: string;
}

export interface ATSWorkflowStep {
  step: number;
  emoji: string;
  title: string;
  description: string;
}

export interface ATSFaq {
  question: string;
  answer: string;
}

export interface ATSPageData {
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
  };
  overview: {
    title: string;
    description: string;
    items: ATSOverview[];
  };
  benefits: {
    title: string;
    leftColumn: ATSBenefit[];
    rightColumn: ATSBenefit[];
  };
  features: {
    title: string;
    items: ATSFeature[];
  };
  workflow: {
    title: string;
    steps: ATSWorkflowStep[];
  };
  faqs: {
    title: string;
    items: ATSFaq[];
  };
  cta: {
    title: string;
    description: string;
    primaryButton: string;
    secondaryButton: string;
  };
}

export const atsPageData: ATSPageData = {
  hero: {
    badge: "APPLICANT TRACKING SYSTEM",
    title: "Modern Applicant Tracking System",
    subtitle:
      "Streamline hiring, automate workflows, and find qualified candidates faster with our AI-powered ATS.",
    primaryCta: "Book a Free Demo",
    secondaryCta: "Watch Video",
  },

  overview: {
    title: "What This ATS Gives You",
    description:
      "Winixco ATS helps recruiters and HR teams manage job openings, track applicants, collaborate with hiring managers, and automate end-to-end hiring workflows.",
    items: [
      {
        icon: Sparkles,
        title: "AI-Powered Hiring",
        description:
          "Save time with automated resume parsing and smart matching.",
      },
      {
        icon: Users,
        title: "Centralized Database",
        description: "Store, manage, and search candidates effortlessly.",
      },
      {
        icon: MessageSquare,
        title: "Real-time Collaboration",
        description: "Share feedback and updates across your recruitment team.",
      },
    ],
  },

  benefits: {
    title: "Why Companies Choose Winixco ATS",
    leftColumn: [
      {
        text: "Reduce manual hiring work by up to 70% with automation.",
      },
      {
        text: "Get highly accurate candidate matches using AI.",
      },
      {
        text: "Collaborate effectively using notes, stages, and scoring.",
      },
    ],
    rightColumn: [
      {
        text: "Built for teams, agencies, and growing companies.",
      },
      {
        text: "Fast, clean, secure, and mobile-friendly UI.",
      },
      {
        text: "Powerful reporting & analytics dashboards.",
      },
    ],
  },

  features: {
    title: "Core Features & Benefits",
    items: [
      {
        icon: "🤖",
        title: "AI Resume Parsing",
        description:
          "Extract skills, experience, job titles & contact details automatically.",
      },
      {
        icon: "📂",
        title: "Pipeline Stages",
        description:
          "Move candidates across New → Shortlisted → Interview → Selected.",
      },
      {
        icon: "👥",
        title: "Team Collaboration",
        description:
          "Share candidate updates, feedback, notes, and evaluations.",
      },
      {
        icon: "⚙️",
        title: "Workflow Automation",
        description: "Automate follow-ups, reminders, and status updates.",
      },
      {
        icon: "📩",
        title: "Email + WhatsApp",
        description:
          "Send messages directly to candidates from one dashboard.",
      },
      {
        icon: "📊",
        title: "Analytics & Reports",
        description:
          "Track hiring performance, job efficiency, and recruiter KPIs.",
      },
    ],
  },

  workflow: {
    title: "How It Works",
    steps: [
      {
        step: 1,
        emoji: "1️⃣",
        title: "Create Job",
        description: "Post job with required skills & description.",
      },
      {
        step: 2,
        emoji: "2️⃣",
        title: "Collect Candidates",
        description: "Upload CVs or get direct applications.",
      },
      {
        step: 3,
        emoji: "3️⃣",
        title: "Shortlist & Interview",
        description: "Move through stages and collect feedback.",
      },
      {
        step: 4,
        emoji: "4️⃣",
        title: "Hire & Close",
        description: "Select the best candidate and close the job.",
      },
    ],
  },

  faqs: {
    title: "Frequently Asked Questions",
    items: [
      {
        question: "What is an ATS?",
        answer:
          "An Applicant Tracking System helps organizations manage hiring end-to-end, from job posting to candidate selection. It streamlines the recruitment process by automating tasks like resume screening, candidate tracking, and interview scheduling.",
      },
      {
        question: "Can I use this ATS for multiple companies?",
        answer:
          "Yes, if you enable multi-company access for agencies or franchises. Our enterprise plan supports unlimited companies and users, making it perfect for staffing agencies and recruitment firms.",
      },
      {
        question: "Does it support email and WhatsApp?",
        answer:
          "Yes, you can communicate directly with candidates from the dashboard using integrated email and WhatsApp. All communications are tracked and stored in the candidate profile for easy reference.",
      },
      {
        question: "Is resume parsing automatic?",
        answer:
          "Yes, uploaded CVs are auto-scanned and structured into candidate profiles. Our AI extracts key information like skills, experience, education, and contact details with 95% accuracy.",
      },
      {
        question: "Can I customize the hiring pipeline stages?",
        answer:
          "Absolutely! You can create custom pipeline stages that match your hiring process. Add, remove, or rename stages to fit your workflow perfectly.",
      },
      {
        question: "What kind of analytics does the ATS provide?",
        answer:
          "Our ATS provides comprehensive analytics including time-to-hire, source effectiveness, recruiter performance, hiring funnel metrics, and more. All data is presented in easy-to-understand dashboards.",
      },
      {
        question: "Is there a mobile app available?",
        answer:
          "Yes, our ATS is fully responsive and works perfectly on mobile devices. You can review candidates, provide feedback, and manage your hiring pipeline on the go.",
      },
      {
        question: "How secure is candidate data?",
        answer:
          "We take security seriously. All data is encrypted, we're SOC2 and ISO27001 certified, and we comply with GDPR and other data protection regulations. Your candidate data is safe with us.",
      },
    ],
  },

  cta: {
    title: "Ready to Transform Your Hiring Process?",
    description:
      "Join thousands of companies who have streamlined their recruitment with Winixco ATS. Start your free trial today and experience the difference.",
    primaryButton: "Start Free Trial",
    secondaryButton: "Schedule a Demo",
  },
};



//hrms page 

// Type Interfaces
export interface HRMSModule {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

export interface HRMSAdvantage {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface WorkflowStep {
  step: number;
  title: string;
  description: string;
}

export interface AnalyticsStat {
  value: string;
  label: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface HRMSPageData {
  hero: {
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    heroImage: string;
  };

  VALUE_PROPOSITION: {
    title: string;
    description: string;
  };

  HRMS_MODULES: HRMSModule[]; // <-- array fixed

  HRMS_ADVANTAGES: HRMSAdvantage[]; // <-- array fixed

  WORKFLOW_STEPS: WorkflowStep[];

  ANALYTICS_STATS : AnalyticsStat[]; // <-- combined with analytics section

  HRMS_FAQ: FAQItem[],

  FINAL_CTA: {
    title: string;
    subtitle: string;
    ctaText: string;
  };
}

export const hrms: HRMSPageData = {
  hero: {
    title: "Modern HRMS Designed for the Workplace of Tomorrow",
    subtitle:
      "Manage your entire workforce — hiring, onboarding, attendance, payroll, performance & HR automation — all in one unified platform.",
    ctaPrimary: "Book a Demo",
    ctaSecondary: "Download Brochure",
    heroImage:
      "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?w=800&h=600&fit=crop",
  },
  VALUE_PROPOSITION: {
    title: "A Central HR Hub for Your Entire Organization",
    description:
      "Streamline HR operations, automate repetitive tasks, enhance employee experience and stay compliant — with a secure, scalable HRMS built for fast-growing companies.",
  },

  HRMS_MODULES: [
    {
      title: "Employee Database",
      description:
        "Centralized staff records, documents, job history & reporting structure.",
      icon: <Users className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Attendance & Leaves",
      description:
        "Biometric/Geo attendance, leave requests, shift scheduling & approvals.",
      icon: <Calendar className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Payroll Management",
      description:
        "Auto salary generation, ESI/PF/Professional Tax, payslips & compliance.",
      icon: <DollarSign className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Performance Reviews",
      description:
        "Goal setting, KRAs, feedback cycles, review workflows & appraisals.",
      icon: <Star className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Recruitment & Onboarding",
      description:
        "Track applicants, generate offer letters, digital onboarding & document verification.",
      icon: <Target className="w-8 h-8" />,
      color: "from-indigo-500 to-blue-500",
    },
    {
      title: "Expense Claims",
      description: "Employee reimbursements, approvals, workflows & tracking.",
      icon: <CreditCard className="w-8 h-8" />,
      color: "from-green-500 to-blue-500",
    },
  ],

  HRMS_ADVANTAGES: [
    {
      title: "Reduce Manual Work",
      description:
        "Automate payroll, attendance, appraisal cycles + reminders.",
      icon: <Zap className="w-6 h-6" />,
    },
    {
      title: "Improve Employee Engagement",
      description:
        "Self-service portal for attendance, leaves, announcements & payslips.",
      icon: <Rocket className="w-6 h-6" />,
    },
    {
      title: "Transparent HR Policies",
      description: "Define leave policies, approvals & workflows with clarity.",
      icon: <FileText className="w-6 h-6" />,
    },
    {
      title: "Accurate Payroll Every Month",
      description: "No errors, no delays. 100% compliant payroll.",
      icon: <CheckCircle className="w-6 h-6" />,
    },
    {
      title: "Better Decision Making",
      description:
        "HR dashboards for attrition, performance, productivity & attendance.",
      icon: <TrendingUp className="w-6 h-6" />,
    },
    {
      title: "Secure, Scalable & Cloud-Based",
      description: "Encrypted data, role-based access, audit logs & backups.",
      icon: <Shield className="w-6 h-6" />,
    },
  ],

  WORKFLOW_STEPS: [
    {
      step: 1,
      title: "Hire",
      description: "Recruit talent, screen resumes & generate offer letters.",
    },
    {
      step: 2,
      title: "Onboard",
      description: "Paperless joining, document upload & role assignment.",
    },
    {
      step: 3,
      title: "Manage",
      description: "Attendance, leaves, payroll, shifts & employee lifecycle.",
    },
    {
      step: 4,
      title: "Evaluate",
      description: "Review performance, track goals & run appraisal cycles.",
    },
  ],

  ANALYTICS_STATS: [
    {
      value: "98%",
      label: "Payroll Accuracy",
    },
    {
      value: "45%",
      label: "Less Manual HR Work",
    },
    {
      value: "80%",
      label: "Faster Hiring",
    },
    {
      value: "60%",
      label: "Improved Productivity",
    },
  ],

  HRMS_FAQ: [
    {
      question: "Is this HRMS suitable for small companies?",
      answer:
        "Yes. It supports startups, SMEs, agencies and large enterprises. Our flexible pricing and scalable features make it perfect for companies of any size.",
    },
    {
      question: "Can employees access their own portal?",
      answer:
        "Yes, via web and mobile — for attendance, leaves, payslips & updates. Employees get a self-service portal with 24/7 access to their information.",
    },
    {
      question: "Does it integrate with biometric devices?",
      answer:
        "Yes. Fingerprint, RFID, QR and geo-attendance are supported. We integrate with all major biometric systems and also offer mobile-based attendance tracking.",
    },
    {
      question: "How secure is employee data?",
      answer:
        "We use bank-level encryption (AES-256), role-based access controls, regular backups, and are compliant with GDPR and other data protection regulations.",
    },
    {
      question: "Can we customize the HRMS to our needs?",
      answer:
        "Absolutely! We offer custom workflows, fields, reports, and integrations. Our team works with you to tailor the system to your specific HR processes.",
    },
    {
      question: "What kind of support do you provide?",
      answer:
        "24/7 customer support via chat, email, and phone. We also provide onboarding assistance, training sessions, and a comprehensive knowledge base.",
    },
  ],

  FINAL_CTA: {
    title: "Ready to Upgrade Your HR Operations?",
    subtitle:
      "Automate, simplify and scale your HR with a powerful, cloud-based HRMS.",
    ctaText: "Book a Demo",
  },
};



//crm page

export interface CRMModule {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

export interface CRMAdvantage {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface CRMWorkflowStep {
  step: number;
  title: string;
  description: string;
}

export interface CRMAnalytics {
  value: string;
  label: string;
}

export interface CRMFAQ {
  question: string;
  answer: string;
}

export interface CRMPageData {
  hero: {
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    heroImage: string;
  };

  VALUE_PROPOSITION: {
    title: string;
    description: string;
  };

  CRM_MODULES: CRMModule[];

  CRM_ADVANTAGES: CRMAdvantage[];

  WORKFLOW_STEPS: CRMWorkflowStep[];

  ANALYTICS_STATS: CRMAnalytics[];

  CRM_FAQ: CRMFAQ[];

  FINAL_CTA: {
    title: string;
    subtitle: string;
    ctaText: string;
  };
}

export const crm: CRMPageData = {
  hero: {
    title: "A Powerful CRM to Manage Leads, Customers & Sales Growth",
    subtitle:
      "Track leads, automate sales, follow-ups, communication and close deals faster — all from one smart CRM system.",
    ctaPrimary: "Book a Demo",
    ctaSecondary: "View Pricing",
    heroImage:
      "https://images.unsplash.com/photo-1560264280-88b68371db39",
  },

  VALUE_PROPOSITION: {
    title: "Your Entire Customer Journey in One Dashboard",
    description:
      "Automate lead capturing, sales pipeline, collaboration and reporting with a CRM that grows with your business.",
  },

  CRM_MODULES: [
    {
      title: "Lead Management",
      description: "Capture, tag, assign and track leads from multiple sources.",
      icon: <Users className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Sales Pipeline",
      description:
        "Move leads through deal stages: New, Follow-up, Meeting, Closed.",
      icon: <Target className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Customer Database",
      description: "All customer profiles, files, history & communication logs.",
      icon: <FileText className="w-8 h-8" />,
      color: "from-indigo-500 to-blue-500",
    },
    {
      title: "Task & Follow-ups",
      description: "Automated reminders for calls, meetings & activities.",
      icon: <PhoneCall className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500",
    },
    {
      title: "Quotation & Invoicing",
      description: "Generate quotations, proposals & invoices instantly.",
      icon: <Briefcase className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Reports & Analytics",
      description:
        "Sales performance, funnel metrics, revenue forecasting & KPIs.",
      icon: <LineChart className="w-8 h-8" />,
      color: "from-red-500 to-rose-500",
    },
  ],

  CRM_ADVANTAGES: [
    {
      title: "Close Deals Faster",
      description: "Structured pipelines ensure every lead gets attention.",
      icon: <Rocket className="w-6 h-6" />,
    },
    {
      title: "Better Customer Engagement",
      description: "Track every call, meeting, email & WhatsApp message.",
      icon: <Phone className="w-6 h-6" />,
    },
    {
      title: "Improve Team Productivity",
      description: "Assign tasks & monitor team performance in real-time.",
      icon: <UserCheck className="w-6 h-6" />,
    },
    {
      title: "360° Customer View",
      description: "Deals, notes, communication & docs — all in one place.",
      icon: <Handshake className="w-6 h-6" />,
    },
    {
      title: "Reduce Manual Work",
      description: "Automations, reminders & smart workflows save time.",
      icon: <CheckCircle className="w-6 h-6" />,
    },
    {
      title: "Data-Driven Decisions",
      description: "KPIs, forecasts & revenue analytics for smart decisions.",
      icon: <BarChart3 className="w-6 h-6" />,
    },
  ],

  WORKFLOW_STEPS: [
    {
      step: 1,
      title: "Capture",
      description: "Collect leads from website, calls, WhatsApp & social media.",
    },
    {
      step: 2,
      title: "Qualify",
      description: "Assign leads, add tags, score & prioritize opportunities.",
    },
    {
      step: 3,
      title: "Engage",
      description: "Schedule demos, send proposals & track follow-ups.",
    },
    {
      step: 4,
      title: "Close",
      description: "Close deals, generate invoices & upsell customers.",
    },
  ],

  ANALYTICS_STATS: [
    { value: "70%", label: "Faster Lead Response" },
    { value: "50%", label: "Higher Productivity" },
    { value: "2x", label: "More Deal Closures" },
    { value: "90%", label: "Better Retention" },
  ],

  CRM_FAQ: [
    {
      question: "Who is this CRM built for?",
      answer:
        "Agencies, real estate, education, medical, retail, SaaS & service companies.",
    },
    {
      question: "Can I integrate WhatsApp & Email?",
      answer:
        "Yes, automated WhatsApp, SMS, email & template-based messaging are supported.",
    },
    {
      question: "Can I track sales team performance?",
      answer:
        "Yes, with real-time dashboards, activity tracking & funnel reports.",
    },
  ],

  FINAL_CTA: {
    title: "Ready to Grow Your Business with CRM?",
    subtitle: "Start managing customers and scaling sales like a pro.",
    ctaText: "Book a Demo",
  },
};
