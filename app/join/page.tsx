"use client"

import type React from "react"
import { useState } from "react"
import {
  ArrowRight,
  CheckCircle,
  Star,
  Brain,
  Target,
  Users,
  Compass,
  Eye,
  Lightbulb,
  MessageSquare,
  BarChart3,
  Calendar,
  Mail,
  User,
  Building,
  Phone,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function JoinPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    role: "",
    interest: "individual"
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  const benefits = [
    {
      icon: <Eye className="h-6 w-6" />,
      title: "Comprehensive Assessment",
      description: "84 questions across 7 mindsets to map your unique patterns"
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Personalized Insights",
      description: "Detailed analysis of your mindset strengths and growth areas"
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "AI Coaching Access",
      description: "Human-trained AI coach available 24/7 for personalized guidance"
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Progress Tracking",
      description: "Monitor your development across all mindsets over time"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Community Access",
      description: "Connect with others on similar journeys to healthy high performance"
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Goal Integration",
      description: "Align your mindset development with your personal and professional goals"
    }
  ]

  const mindsets = [
    { name: "Surviving", color: "bg-pink-100 text-pink-800" },
    { name: "Striving", color: "bg-red-100 text-red-800" },
    { name: "Driving", color: "bg-orange-100 text-orange-800" },
    { name: "Exploring", color: "bg-yellow-100 text-yellow-800" },
    { name: "Thriving", color: "bg-green-100 text-green-800" },
    { name: "Inspiring", color: "bg-teal-100 text-teal-800" },
    { name: "Flowing", color: "bg-sky-100 text-sky-800" },
  ]

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white rounded-3xl shadow-xl p-12">
            <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-black mb-6 font-serif">Welcome to MindsetOS!</h1>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Thank you for joining us, {formData.firstName}! We're excited to help you discover your unique mindset patterns and unlock your potential for healthy high performance.
            </p>
            <div className="bg-yellow-50 rounded-2xl p-6 mb-8">
              <h3 className="text-lg font-semibold text-black mb-3">What happens next?</h3>
              <ul className="text-left space-y-2 text-gray-700">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                  Check your email for your assessment link
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                  Complete your mindset assessment (15-20 minutes)
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                  Receive your personalized mindset map
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                  Start your journey with AI coaching
                </li>
              </ul>
            </div>
            <Button
              size="lg"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-8 py-4 text-lg rounded-full"
              asChild
            >
              <Link href="/">Return to Home</Link>
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-black font-serif">MindsetOS</h1>
            </Link>

            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-900 hover:text-gray-600 transition-colors">
                Home
              </Link>
              <Link href="/how-it-works" className="text-gray-900 hover:text-gray-600 transition-colors">
                How It Works
              </Link>
              <Link href="/for-teams" className="text-gray-900 hover:text-gray-600 transition-colors">
                For Teams
              </Link>
              <Link href="/mindset-framework" className="text-gray-900 hover:text-gray-600 transition-colors">
                7 Mindset Framework
              </Link>
              <Link href="/join" className="text-gray-900 hover:text-gray-600 transition-colors font-medium">
                Join Us
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6 font-serif leading-tight">
            Start Your Journey to
            <br />
            Healthy High Performance
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-12 leading-relaxed">
            Join thousands of individuals and teams already transforming their approach to performance and wellbeing.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {mindsets.map((mindset, index) => (
              <span
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium ${mindset.color} transition-all hover:scale-105`}
              >
                {mindset.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-bold text-black mb-8 font-serif">Get Started Today</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <Input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border-gray-300 focus:border-yellow-400 focus:ring-yellow-400"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <Input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border-gray-300 focus:border-yellow-400 focus:ring-yellow-400"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border-gray-300 focus:border-yellow-400 focus:ring-yellow-400"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company/Organization
                    </label>
                    <Input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border-gray-300 focus:border-yellow-400 focus:ring-yellow-400"
                    />
                  </div>
                  <div>
                    <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
                      Role/Title
                    </label>
                    <Input
                      type="text"
                      id="role"
                      name="role"
                      value={formData.role}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border-gray-300 focus:border-yellow-400 focus:ring-yellow-400"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-2">
                    I'm interested in *
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-yellow-400 focus:ring-yellow-400 bg-white"
                  >
                    <option value="individual">Individual Development</option>
                    <option value="team">Team/Organization Solutions</option>
                    <option value="coaching">Coaching Certification</option>
                    <option value="partnership">Partnership Opportunities</option>
                  </select>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-4 text-lg rounded-full"
                >
                  Start My Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>

                <p className="text-sm text-gray-600 text-center">
                  By joining, you agree to our Terms of Service and Privacy Policy. 
                  Your assessment takes 15-20 minutes to complete.
                </p>
              </form>
            </div>

            {/* Benefits */}
            <div>
              <h2 className="text-3xl font-bold text-black mb-8 font-serif">What You'll Get</h2>
              
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-yellow-100 p-2 rounded-lg mr-4 flex-shrink-0">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-black mb-2">{benefit.title}</h3>
                      <p className="text-gray-700 leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Card className="mt-8 border-0 shadow-lg bg-yellow-50">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-black mb-3 font-serif">Free to Start</h3>
                  <p className="text-gray-700 mb-4">
                    Begin with our comprehensive assessment and basic insights at no cost. 
                    Upgrade to premium features when you're ready for deeper development.
                  </p>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    No credit card required
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-black mb-12 font-serif">
            Join Thousands Already Transforming Their Performance
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-600 mb-2">10,000+</div>
              <p className="text-gray-600">Assessments Completed</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-600 mb-2">500+</div>
              <p className="text-gray-600">Organizations</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-600 mb-2">4.9/5</div>
              <p className="text-gray-600">User Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} MindsetOS. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/how-it-works" className="hover:text-yellow-400">
              How It Works
            </Link>
            <Link href="/for-teams" className="hover:text-yellow-400">
              For Teams
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}