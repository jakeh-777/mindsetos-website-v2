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
  Smartphone,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function JoinMindsetOSPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    role: "",
    interest: "app"
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

  const pricingOptions = [
    {
      title: "App Subscription",
      price: "£6.99",
      period: "/month",
      icon: <Smartphone className="h-8 w-8" />,
      description: "Discover, Explore and virtual 'Expeditions' to help you go deeper into understanding the 7 Mindsets.",
      features: [
        "Complete mindset assessment",
        "AI-powered coaching insights",
        "Virtual Expeditions for deeper learning",
        "Progress tracking and analytics",
        "30% discount on Live Cohorts"
      ],
      popular: false
    },
    {
      title: "Live Cohorts",
      price: "£599",
      period: "per cohort",
      icon: <Users className="h-8 w-8" />,
      description: "Led by Ed Cornfield. Max one cohort per month with limited spaces.",
      features: [
        "Direct coaching from Ed Cornfield",
        "Small group sessions (limited spaces)",
        "Interactive, experiential training",
        "Peer learning and support",
        "Maximum one cohort per month"
      ],
      popular: true
    },
    {
      title: "2 Day Business Workshop",
      price: "£4,500",
      period: "for teams",
      icon: <Building className="h-8 w-8" />,
      description: "Comprehensive team transformation workshop designed for businesses.",
      features: [
        "2-day intensive workshop",
        "Team mindset assessments",
        "Leadership development focus",
        "Customised for your organisation",
        "Follow-up support included"
      ],
      popular: false
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
                  Access your chosen MindsetOS option
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                  Begin your mindset development journey
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                  Start building healthy high performance
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                  Connect with the MindsetOS community
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
                Join MindsetOS
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6 font-serif leading-tight">
            Join MindsetOS
            <br />
            Choose Your Path
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-12 leading-relaxed">
            Select the option that best fits your journey to healthy high performance.
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

      {/* Pricing Options */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {pricingOptions.map((option, index) => (
              <Card 
                key={index} 
                className={`border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 relative ${
                  option.popular ? 'ring-2 ring-yellow-400' : ''
                }`}
              >
                {option.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardContent className="p-8 text-center">
                  <div className="bg-yellow-100 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                    {option.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-2 font-serif">{option.title}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-black">{option.price}</span>
                    <span className="text-gray-600 ml-1">{option.period}</span>
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed">{option.description}</p>
                  
                  <ul className="space-y-3 mb-8 text-left">
                    {option.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full rounded-full ${
                      option.popular 
                        ? 'bg-yellow-400 hover:bg-yellow-500 text-black' 
                        : 'bg-gray-900 hover:bg-gray-800 text-white'
                    }`}
                  >
                    {option.title === "2 Day Business Workshop" ? "Contact Sales" : "Get Started"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-black mb-8 font-serif">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-700 mb-12">
            Contact us to begin your MindsetOS journey or ask any questions.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <Input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleInputChange}
                required
                className="px-4 py-3 rounded-lg"
              />
              <Input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleInputChange}
                required
                className="px-4 py-3 rounded-lg"
              />
            </div>
            <Input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="px-4 py-3 rounded-lg"
            />
            <select
              name="interest"
              value={formData.interest}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-yellow-400 focus:ring-yellow-400 bg-white"
            >
              <option value="app">App Subscription</option>
              <option value="cohort">Live Cohorts</option>
              <option value="workshop">Business Workshop</option>
            </select>
            <Button
              type="submit"
              size="lg"
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-4 text-lg rounded-full"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </form>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-black mb-12 font-serif">
            Join the MindsetOS Community
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-600 mb-2">5,000+</div>
              <p className="text-gray-600">Active Members</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-600 mb-2">200+</div>
              <p className="text-gray-600">Companies</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-600 mb-2">4.8/5</div>
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