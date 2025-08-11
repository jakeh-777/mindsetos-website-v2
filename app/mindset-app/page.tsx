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
  Smartphone,
  MessageCircle,
  BarChart3,
  Calendar,
  Play,
  Download,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function MindsetAppPage() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setEmail("")
  }

  const features = [
    {
      icon: <Compass className="h-8 w-8" />,
      title: "Mindset Mapping",
      description: "Discover your unique blend of the 7 mindsets through our comprehensive assessment.",
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "AI Coaching",
      description: "Get personalised coaching powered by human-trained AI, available 24/7 wherever you are.",
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Progress Tracking",
      description: "Monitor your growth across all 7 mindsets with detailed insights and analytics.",
    },
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: "Daily Check-ins",
      description: "Build consistency with guided daily reflections tailored to your current mindset state.",
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Goal Setting",
      description: "Set and track meaningful goals aligned with your mindset development journey.",
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Habit Building",
      description: "Develop sustainable practices that support your mental and emotional fitness.",
    },
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
              <Link href="/mindset-app" className="text-gray-900 hover:text-gray-600 transition-colors font-medium">
                MindsetOS App
              </Link>
              <Link href="/live-cohorts" className="text-gray-900 hover:text-gray-600 transition-colors">
                Live Cohorts
              </Link>
            </nav>

            <div className="hidden md:block">
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium">Download the App</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-black mb-6 font-serif leading-tight">
                Your Personal
                <br />
                Mindset Coach
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                The MindsetOS app puts the power of human-trained AI coaching in your pocket. Discover your mindset patterns, receive personalised guidance, and build sustainable practices for healthy high performance.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  size="lg"
                  className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-8 py-4 text-lg rounded-full"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download for iOS
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 py-4 text-lg rounded-full border-gray-300 hover:bg-gray-50"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download for Android
                </Button>
              </div>

              <div className="flex flex-wrap gap-2">
                {mindsets.map((mindset, index) => (
                  <span
                    key={index}
                    className={`px-3 py-1 rounded-full text-sm font-medium ${mindset.color} transition-all hover:scale-105`}
                  >
                    {mindset.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-sm mx-auto">
                <div className="bg-green-200 rounded-2xl p-6 mb-6">
                  <Brain className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-center mb-2">Today's Insight</h3>
                  <p className="text-gray-600 text-center text-sm">
                    "Your Thriving mindset is strongest today. Consider how you can channel this energy into meaningful growth."
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Daily Check-in</span>
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Mindset Reflection</span>
                    <div className="w-4 h-4 rounded-full bg-yellow-400"></div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Thriving Progress</span>
                    <span className="text-sm font-medium text-green-600">75%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-16 font-serif">
            Everything You Need for Mindset Mastery
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8 text-center">
                  <div className="bg-yellow-100 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-black mb-4 font-serif">{feature.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-16 font-serif">
            Your Journey to Healthy High Performance
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-yellow-400 text-black rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-black mb-4 font-serif">Discover Your Mindset</h3>
              <p className="text-gray-700 leading-relaxed">
                Complete our comprehensive mindset assessment to understand your unique patterns across all 7 mindsets.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-400 text-black rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-black mb-4 font-serif">Receive Personalized Coaching</h3>
              <p className="text-gray-700 leading-relaxed">
                Get tailored insights and guidance from our human-trained AI coach, available whenever you need support.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-400 text-black rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-black mb-4 font-serif">Build Lasting Habits</h3>
              <p className="text-gray-700 leading-relaxed">
                Develop sustainable practices and track your progress as you grow your mental and emotional fitness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-16 font-serif">
            Choose Your Plan
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Free Plan */}
            <Card className="border-2 border-gray-200 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-black mb-2 font-serif">Discover</h3>
                <p className="text-gray-600 mb-6">Perfect for getting started with mindset awareness</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-black">Free</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    Complete mindset evaluation
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    Personalised mindset insights
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    Limited MindsetOS AI coaching
                  </li>
                </ul>
                <Button variant="outline" className="w-full rounded-full">
                  Get Started Free
                </Button>
              </CardContent>
            </Card>

            {/* Premium Plan */}
            <Card className="border-2 border-yellow-400 shadow-xl relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-black mb-2 font-serif">Explore</h3>
                <p className="text-gray-600 mb-6">Full access to AI coaching and advanced features</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-black">￡6.99</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    Everything in Discover
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    Unlimited AI coaching
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    Daily personalised insights
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    30% Discount for Live Cohorts
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    Access to member-only MindsetOS content
                  </li>
                </ul>
                <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-medium rounded-full">
                  Start Free Trial
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-yellow-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 font-serif">
            Ready to Transform Your Mindset?
          </h2>
          <p className="text-xl text-gray-700 mb-12">
            Join thousands of individuals already building their mental and emotional fitness with MindsetOS.
          </p>

          {!isSubmitted ? (
            <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-6 py-4 text-lg rounded-full border-gray-300 focus:border-yellow-400 focus:ring-yellow-400"
              />
              <Button
                type="submit"
                size="lg"
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-8 py-4 text-lg rounded-full whitespace-nowrap"
              >
                Get Early Access
              </Button>
            </form>
          ) : (
            <div className="flex items-center justify-center gap-3 text-green-600 text-lg">
              <CheckCircle className="h-6 w-6" />
              <span>Thank you! We'll notify you when the app launches.</span>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 font-serif">MindsetOS</h3>
              <p className="text-gray-300 leading-relaxed">
                A human-trained, AI coaching app, designed for healthy high performance.
              </p>
            </div>

            <div className="flex justify-center">
              <div className="space-y-3">
                <Link href="/" className="block text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
                <Link href="/mindset-app" className="block text-gray-300 hover:text-white transition-colors">
                  MindsetOS App
                </Link>
                <Link href="/live-cohorts" className="block text-gray-300 hover:text-white transition-colors">
                  Live Cohorts
                </Link>
              </div>
            </div>

            <div className="flex justify-center md:justify-end space-x-4">
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
                <Smartphone className="h-6 w-6" />
              </Button>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 MindsetOS. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}