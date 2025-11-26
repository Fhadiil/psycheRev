import React, { useState } from "react";
import {
  Menu,
  X,
  Brain,
  Heart,
  Activity,
  Shield,
  Users,
  TrendingUp,
  CheckCircle,
  Mail,
  Linkedin,
  Twitter,
  Github,
  ChevronDown,
  Zap,
  Clock,
  BarChart,
  Bell,
  Lock,
  Globe,
} from "lucide-react";

const PsycheRevLanding = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your interest! We will contact you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-500 rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                PsycheRev
              </span>
            </div>

            <div className="hidden md:flex space-x-8">
              <a
                href="#features"
                className="text-gray-700 hover:text-purple-600 transition"
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="text-gray-700 hover:text-purple-600 transition"
              >
                How It Works
              </a>
              <a
                href="#impact"
                className="text-gray-700 hover:text-purple-600 transition"
              >
                Impact
              </a>
              <a
                href="#pilot"
                className="text-gray-700 hover:text-purple-600 transition"
              >
                Pilot
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-purple-600 transition"
              >
                Contact
              </a>
            </div>

            <div className="hidden md:block">
              <button className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 py-2 rounded-full hover:shadow-lg transition">
                Join Pilot
              </button>
            </div>

            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-3">
              <a
                href="#features"
                className="block text-gray-700 hover:text-purple-600"
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="block text-gray-700 hover:text-purple-600"
              >
                How It Works
              </a>
              <a
                href="#impact"
                className="block text-gray-700 hover:text-purple-600"
              >
                Impact
              </a>
              <a
                href="#pilot"
                className="block text-gray-700 hover:text-purple-600"
              >
                Pilot
              </a>
              <a
                href="#contact"
                className="block text-gray-700 hover:text-purple-600"
              >
                Contact
              </a>
              <button className="w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 py-2 rounded-full">
                Join Pilot
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-purple-50 via-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-purple-100 rounded-full text-purple-600 text-sm font-semibold mb-6">
                Intelligent Mental Wellness Companion
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Mental Health Care,
                <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                  {" "}
                  Before It's Too Late
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                PsycheRev combines wearable biosensors, AI analytics, and
                personalized guidance to detect early signs of stress, anxiety,
                and burnout before they escalate.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition">
                  Join Our Pilot Program
                </button>
                <button className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-50 transition">
                  Request Demo
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-200 to-blue-200 rounded-3xl h-96 flex items-center justify-center">
                <Activity className="w-32 h-32 text-purple-600 opacity-50" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <Heart className="w-8 h-8 text-red-500" />
                  <div>
                    <p className="text-sm text-gray-500">Heart Rate</p>
                    <p className="text-xl font-bold">72 BPM</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <TrendingUp className="w-8 h-8 text-green-500" />
                  <div>
                    <p className="text-sm text-gray-500">Stress Level</p>
                    <p className="text-xl font-bold">Low</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why PsycheRev?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transforming mental healthcare from reactive to preventive with
              cutting-edge technology
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Bell className="w-8 h-8" />,
                title: "Early Detection",
                desc: "AI flags stress and burnout before they escalate into serious conditions",
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Continuous Monitoring",
                desc: "Wearable sensors run 24/7 to track your physiological signals",
              },
              {
                icon: <CheckCircle className="w-8 h-8" />,
                title: "Evidence-Based",
                desc: "Breathing exercises, mood tracking, and CBT-based prompts backed by science",
              },
              {
                icon: <Brain className="w-8 h-8" />,
                title: "Personalized Insights",
                desc: "Based on real physiological signals, not guesswork or assumptions",
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Timely Support",
                desc: "Get help before reaching crisis or breakdown point",
              },
              {
                icon: <BarChart className="w-8 h-8" />,
                title: "Research-Grade",
                desc: "Valuable data for mental health professionals and researchers",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl hover:shadow-xl transition"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-500 rounded-xl flex items-center justify-center text-white mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section
        id="how-it-works"
        className="py-20 bg-gradient-to-br from-gray-50 to-purple-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              A seamless flow from data collection to actionable insights
            </p>
          </div>
          <div className="grid md:grid-cols-5 gap-6">
            {[
              {
                num: "1",
                title: "Wearable Device",
                desc: "Collects HR, HRV, EDA, temperature, and motion data",
                icon: <Activity />,
              },
              {
                num: "2",
                title: "Mobile App",
                desc: "Receives sensor data via BLE, displays vitals in real-time",
                icon: <Heart />,
              },
              {
                num: "3",
                title: "Cloud AI Engine",
                desc: "Processes patterns and computes Stress Risk Score",
                icon: <Brain />,
              },
              {
                num: "4",
                title: "Personalized Guidance",
                desc: "Shows alerts, breathing exercises, and self-care tips",
                icon: <Bell />,
              },
              {
                num: "5",
                title: "Clinician Dashboard",
                desc: "Monitors trends and high-risk cases with consent",
                icon: <Users />,
              },
            ].map((step, idx) => (
              <div key={idx} className="relative">
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full flex items-center justify-center text-white text-xl font-bold mb-4">
                    {step.num}
                  </div>
                  <div className="text-purple-600 mb-3">{step.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600">{step.desc}</p>
                </div>
                {idx < 4 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ChevronDown className="w-6 h-6 text-purple-400 rotate-[-90deg]" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Key Features
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive tools for individuals and professionals
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Heart className="w-8 h-8 text-purple-600 mr-3" />
                For Individuals
              </h3>
              <div className="space-y-4">
                {[
                  "Real-time stress monitoring",
                  "Guided breathing + self-care sessions",
                  "Daily mood check-ins",
                  "Personalized wellness dashboard",
                  "AI-generated risk score",
                  "Sleep & activity insights",
                  "Push-based alerts when stress is rising",
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 text-lg">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Users className="w-8 h-8 text-blue-600 mr-3" />
                For Clinicians & Researchers
              </h3>
              <div className="space-y-4">
                {[
                  "Participant monitoring dashboard",
                  "Time-series analytics",
                  "Downloadable reports",
                  "Risk-level alerts",
                  "Consent-controlled data sharing",
                  "Population-level mental health insights",
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 text-lg">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UI Mockups */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Experience PsycheRev
            </h2>
            <p className="text-xl text-gray-600">
              Beautiful interfaces designed for seamless wellness tracking
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="bg-gradient-to-br from-purple-100 to-blue-100 h-64 rounded-xl flex items-center justify-center mb-4">
                <Activity className="w-20 h-20 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Mobile App
              </h3>
              <p className="text-gray-600">
                Track your vitals, mood, and receive personalized guidance
                on-the-go
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 h-64 rounded-xl flex items-center justify-center mb-4">
                <Heart className="w-20 h-20 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Wearable Device
              </h3>
              <p className="text-gray-600">
                Comfortable biosensor that tracks your physiological signals
                24/7
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="bg-gradient-to-br from-purple-100 to-blue-100 h-64 rounded-xl flex items-center justify-center mb-4">
                <BarChart className="w-20 h-20 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Clinician Dashboard
              </h3>
              <p className="text-gray-600">
                Comprehensive analytics for monitoring patient wellness trends
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why It Matters
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Addressing the global mental health crisis with innovative
              technology
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                stat: "1 in 4",
                label: "People affected by mental health conditions globally",
              },
              {
                stat: "85%",
                label: "Of burnout cases go undetected until severe",
              },
              {
                stat: "60%",
                label: "Shortage of mental health professionals in Africa",
              },
              { stat: "70%", label: "Don't seek help due to stigma" },
              {
                stat: "50%",
                label: "Increase in workplace stress post-pandemic",
              },
              {
                stat: "90%",
                label: "Of cases preventable with early intervention",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl text-center hover:shadow-xl transition"
              >
                <div className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent mb-3">
                  {item.stat}
                </div>
                <p className="text-gray-700 text-lg">{item.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 bg-gradient-to-r from-purple-600 to-blue-500 rounded-3xl p-12 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">
              PsycheRev Can Make a Difference
            </h3>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              By detecting early signs of mental health challenges, providing
              timely support, and reducing stigma, we can save lives, improve
              productivity, and support emotional resilience worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Who Benefits from PsycheRev?
            </h2>
            <p className="text-xl text-gray-600">
              Supporting diverse groups facing mental health challenges
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Students",
                desc: "Combat academic stress, exam anxiety, and adjustment challenges",
                emoji: "🎓",
              },
              {
                title: "Healthcare Workers",
                desc: "Monitor burnout and compassion fatigue in high-pressure environments",
                emoji: "⚕️",
              },
              {
                title: "Corporate Staff",
                desc: "Track workplace stress and maintain work-life balance",
                emoji: "💼",
              },
              {
                title: "Remote Workers",
                desc: "Address isolation, overwork, and blurred boundaries",
                emoji: "🏠",
              },
              {
                title: "High-Stress Professionals",
                desc: "Support lawyers, traders, and first responders",
                emoji: "⚡",
              },
              {
                title: "At-Risk Individuals",
                desc: "Early intervention for those with history of mental health issues",
                emoji: "🛡️",
              },
            ].map((use, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition"
              >
                <div className="text-5xl mb-4">{use.emoji}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {use.title}
                </h3>
                <p className="text-gray-600">{use.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pilot Section */}
      <section id="pilot" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Pilot & Clinical Validation
            </h2>
            <p className="text-xl text-gray-600">
              Rigorously tested, ethically designed, scientifically validated
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Our Approach
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">
                      Pilot Studies
                    </h4>
                    <p className="text-gray-600">
                      Conducting trials with students and healthcare workers to
                      validate effectiveness
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BarChart className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">
                      Data Collection
                    </h4>
                    <p className="text-gray-600">
                      Gathering HRV, EDA, sleep patterns, and mood data for
                      comprehensive analysis
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">
                      AI Accuracy Goals
                    </h4>
                    <p className="text-gray-600">
                      Optimizing detection sensitivity and risk prediction
                      algorithms
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">
                      Ethical & Safe
                    </h4>
                    <p className="text-gray-600">
                      Privacy-first approach with rigorous ethical guidelines
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-3xl p-12 flex items-center justify-center">
              <Activity className="w-48 h-48 text-purple-600 opacity-50" />
            </div>
          </div>
        </div>
      </section>

      {/* Privacy & Security */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Privacy & Security First
            </h2>
            <p className="text-xl opacity-90">
              Your data is protected with industry-leading security measures
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: <Lock />,
                title: "End-to-End Encryption",
                desc: "All data encrypted in transit and at rest",
              },
              {
                icon: <Shield />,
                title: "User-Controlled Sharing",
                desc: "You decide who can access your data",
              },
              {
                icon: <CheckCircle />,
                title: "Ethical AI",
                desc: "Transparent, bias-free algorithms",
              },
              {
                icon: <Globe />,
                title: "Compliance",
                desc: "GDPR, HIPAA, and local data protection laws",
              },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <div className="text-purple-300">{item.icon}</div>
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="opacity-80">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Model */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Business Model & Partnerships
            </h2>
            <p className="text-xl text-gray-600">
              Creating sustainable impact through diverse revenue streams
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "B2B Partnerships",
                desc: "Universities, hospitals, and HR departments integrating PsycheRev for employee/student wellness programs",
                icon: "🏢",
              },
              {
                title: "B2C Subscriptions",
                desc: "Individual users accessing premium features, personalized coaching, and advanced analytics",
                icon: "👤",
              },
              {
                title: "NGO Collaborations",
                desc: "Partnering with mental health organizations to provide subsidized access to underserved communities",
                icon: "🤝",
              },
              {
                title: "Research Partnerships",
                desc: "Collaborating with academic institutions and clinical researchers for data insights and validation",
                icon: "🔬",
              },
            ].map((model, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl hover:shadow-xl transition"
              >
                <div className="text-5xl mb-4">{model.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {model.title}
                </h3>
                <p className="text-gray-600 text-lg">{model.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-br from-purple-50 to-blue-50"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-600">
              Have questions or want to collaborate? We'd love to hear from you.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white p-10 rounded-2xl shadow-xl space-y-6"
          >
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                required
                className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                required
                className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Message
              </label>
              <textarea
                rows="4"
                required
                className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white py-4 rounded-xl text-lg font-semibold hover:shadow-xl transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12">
            {/* Brand */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-500 rounded-lg flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                  PsycheRev
                </span>
              </div>
              <p className="text-gray-600 text-sm">
                Advanced AI-powered wearable system for preventive mental
                healthcare.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-gray-900 mb-3">Quick Links</h4>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <a href="#features" className="hover:text-purple-600">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#how-it-works" className="hover:text-purple-600">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#impact" className="hover:text-purple-600">
                    Impact
                  </a>
                </li>
                <li>
                  <a href="#pilot" className="hover:text-purple-600">
                    Pilot Program
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-gray-900 mb-3">Contact</h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center space-x-2">
                  <Mail className="w-5 h-5 text-purple-600" />
                  <span>contact@psycherev.com</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Globe className="w-5 h-5 text-purple-600" />
                  <span>www.psycherev.com</span>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="font-bold text-gray-900 mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                <Linkedin className="w-6 h-6 text-gray-700 hover:text-purple-600 cursor-pointer" />
                <Twitter className="w-6 h-6 text-gray-700 hover:text-purple-600 cursor-pointer" />
                <Github className="w-6 h-6 text-gray-700 hover:text-purple-600 cursor-pointer" />
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="mt-12 border-t pt-6 text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} PsycheRev. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PsycheRevLanding;
