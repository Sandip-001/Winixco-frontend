import {
  Sparkles,
  Users,
  Zap,
  BarChart3,
  Clock,
  Shield,
  Target,
  Award,
  TrendingUp,
  MessageCircle,
  Headphones, LifeBuoy, Mail, MessageSquare, Phone 
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
}

// -------------------- CONSTANT DATA -------------------- //

export const home: HomeContent = {
  navigation: [
    { name: "Features", href: "/features" },
    { name: "Blog", href: "/blogs" },
    { name: "Careers", href: "/careers" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
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
      icon: <Sparkles className="w-6 h-6" />,
      title: "AI-Powered Screening",
      description:
        "Advanced AI algorithms automatically screen and rank candidates based on job requirements, saving hours of manual work.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Collaborative Hiring",
      description:
        "Enable seamless collaboration between hiring managers, recruiters, and team members with real-time feedback.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Automated Workflows",
      description:
        "Set up custom workflows to automate repetitive tasks like interview scheduling, email notifications, and status updates.",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Advanced Analytics",
      description:
        "Get deep insights into your hiring funnel with comprehensive reports and real-time dashboards.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Time-to-Hire Reduction",
      description:
        "Reduce your hiring timeline by 60% with streamlined processes and intelligent automation.",
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enterprise Security",
      description:
        "SOC2 and ISO27001 certified platform ensuring your candidate data is always protected.",
      color: "from-teal-500 to-blue-500",
    },
  ],

  about: {
    badge: "About Us",
    heading: "Transforming Recruitment with Innovation & Intelligence",
    subheading: "Your Partner in Building Exceptional Teams",
    description:
      "We're on a mission to revolutionize the way companies hire talent. With cutting-edge AI technology and intuitive design, we've helped over 15,000 organizations streamline their recruitment process and find the perfect candidates faster than ever before.",
    stats: [
      { icon: Users, value: "15K+", label: "Happy Clients" },
      { icon: Target, value: "500K+", label: "Successful Hires" },
      { icon: Award, value: "92%", label: "Time Saved" },
    ],
    highlights: [
      "AI-powered candidate matching",
      "Seamless integrations with 2500+ job boards",
      "Enterprise-grade security & compliance",
      "24/7 dedicated customer support",
    ],
    cta: "Learn More About Us",
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
      icon: <Target className="w-8 h-8" />,
      title: "Smart Candidate Matching",
      description:
        "AI-powered matching ensures you see the best candidates first",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Improve Quality of Hire",
      description: "Data-driven insights help you make better hiring decisions",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Enhanced Candidate Experience",
      description: "Modern career pages and seamless application process",
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "24/7 Support",
      description: "Our team is always ready to help you succeed",
    },
  ],

  faq: [
    {
      question: "What is an Applicant Tracking System (ATS)?",
      answer:
        "An ATS helps streamline recruitment by organizing candidate data, automating workflows, and improving collaboration between hiring teams.",
    },
    {
      question: "How does the AI screening feature work?",
      answer:
        "AI analyzes resumes against job requirements and ranks candidates based on fit while automating first-level screening.",
    },
    {
      question: "Can I integrate with my existing tools?",
      answer:
        "Yes! We integrate with 50+ tools including LinkedIn, Slack, Gmail & Google Calendar. Custom API available.",
    },
    {
      question: "Is my candidate data secure?",
      answer:
        "We are SOC2 & ISO certified with full encryption and global compliance (GDPR & CCPA).",
    },
    {
      question: "How long does implementation take?",
      answer:
        "Most companies go live in under 48 hours with complete onboarding & migration support.",
    },
    {
      question: "What kind of support do you offer?",
      answer:
        "24/7 chat & email support. Enterprise plans include dedicated account managers.",
    },
  ],

  plans: [
    {
      name: "Starter",
      price: "$49",
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
      price: "$99",
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
        contact: "support@winixco.com",
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
        description: "India: +91 7022651144",
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
