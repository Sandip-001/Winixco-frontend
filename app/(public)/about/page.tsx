"use client";
import { Target, Lightbulb } from "lucide-react";
import Link from "next/link";

const leaders = [
  {
    name: "Amit Sharma",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?crop=faces&fit=crop&w=400&q=80",
    linkedin: "#",
  },
  {
    name: "Neha Verma",
    role: "Head of Product",
    image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?crop=faces&fit=crop&w=400&q=80",
    linkedin: "#",
  },
  {
    name: "Rahul Mehta",
    role: "CTO",
    image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?crop=faces&fit=crop&w=400&q=80",
    linkedin: "#",
  },
];


export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">

      {/* HERO */}
      <section className="py-28 bg-gradient-to-b from-white to-blue-50 text-center">
        <h1
          
          className="text-5xl font-bold mb-6"
        >
          Empowering Businesses with Smart CRM Innovation
        </h1>
        <p
          
          className="text-xl max-w-3xl mx-auto"
        >
          We help companies build stronger customer relationships through intelligent automation and seamless workflows.
        </p>
      </section>

      {/* OUR MISSION / VISION */}
      <section className="py-20 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        <div
          
          className="bg-white p-10 rounded-3xl shadow-xl border"
        >
          <Target className="w-12 h-12 text-blue-600 mb-4" />
          <h3 className="text-3xl font-semibold mb-3">Our Mission</h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            To simplify customer management through powerful yet user-friendly CRM tools,
            enabling businesses of every size to scale faster and smarter.
          </p>
        </div>

        <div
          
          className="bg-white p-10 rounded-3xl shadow-xl border"
        >
          <Lightbulb className="w-12 h-12 text-purple-600 mb-4" />
          <h3 className="text-3xl font-semibold mb-3">Our Vision</h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            To be a global leader in CRM innovation — transforming how teams connect,
            collaborate and grow with their customers.
          </p>
        </div>
      </section>

      
      {/* COMPANY STORY TIMELINE }
      <section className="py-24 bg-white">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            From a small team with a big dream to a growing global technology partner.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto px-6">
          <div className="absolute left-1/2 -ml-0.5 h-full border-l-2 border-blue-300"></div>

          {[
            { year: "2021", text: "Founded with a mission to reinvent CRM efficiency." },
            { year: "2022", text: "Launched our first CRM suite for SMEs." },
            { year: "2023", text: "Expanded to enterprise CRM solutions across industries." },
            { year: "2024", text: "Serving customers globally with AI-powered CRM intelligence." },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className={`mb-16 flex items-center gap-8 ${
                i % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center font-semibold text-xl shadow-2xl">
                {item.year}
              </div>
              <p className="bg-gray-100 rounded-2xl p-6 shadow-md text-lg text-gray-700 max-w-md">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </section> */}

      {/* LEADERSHIP SECTION }
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-3">Leadership Team</h2>
          <p className="text-gray-600 text-lg">
            Guiding our mission with innovation and excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {leaders.map((leader, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="text-center bg-white p-6 rounded-2xl shadow-lg"
            >
              <Image
                src={leader.image}
                width={200}
                height={200}
                alt={leader.name}
                className="rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">{leader.name}</h3>
              <p className="text-gray-500 mb-3">{leader.role}</p>
              <Link
                href={leader.linkedin}
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800"
              >
                <Linkedin size={18} /> Connect
              </Link>
            </motion.div>
          ))}
        </div>
      </section> */}

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-purple-600 to-blue-600 text-center text-white">
        <h2 className="text-4xl font-bold mb-4">We Grow Together</h2>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          Become part of a story that’s transforming the future of CRM.
        </p>
        <Link
          href="/careers"
          className="bg-white text-blue-700 px-8 py-3 rounded-full text-lg font-semibold hover:shadow-xl transition"
        >
          Explore Careers
        </Link>
      </section>

    </div>
  );
}
