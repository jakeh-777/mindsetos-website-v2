"use client"

import type React from "react"

import { useState } from "react"
import {
  ArrowRight,
  CheckCircle,
  Star,
  Circle,
  Mail,
  Linkedin,
  Menu,
  X,
  Brain,
  Target,
  Users,
  Compass,
  Eye,
  Lightbulb,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setEmail("")
  }

  const mindsets = [
    { name: "Surviving", color: "bg-pink-100 text-pink-800", description: "Resilient and enduring" },
    { name: "Striving", color: "bg-red-100 text-red-800", description: "Ambitious and achieving" },
    { name: "Driving", color: "bg-orange-100 text-orange-800", description: "Focused and determined" },
    { name: "Exploring", color: "bg-yellow-100 text-yellow-800", description: "Curious and discovering" },
    { name: "Thriving", color: "bg-green-100 text-green-800", description: "Flourishing and growing" },
    { name: "Inspiring", color: "bg-teal-100 text-teal-800", description: "Visionary and motivating" },
    { name: "Flowing", color: "bg-sky-100 text-sky-800", description: "Adaptable and present" },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-black font-serif">MindsetOS</h1>
            </div>

            {/* Desktop Navigation */}
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
              <Link href="/join" className="text-gray-900 hover:text-gray-600 transition-colors">
                Join Us
              </Link>
            </nav>

           {/* CTA Button */}
<div className="hidden md:block">
  <Button className="bg-black hover:bg-gray-800 text-white font-medium" asChild>
    <Link href="/join">Get Started</Link>
  </Button>
</div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4">
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
                <Link href="/join" className="text-gray-900 hover:text-gray-600 transition-colors">
                  Join Us
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl md:text-4xl font-bold text-black mb-6 font-serif leading-tight">
            Your operating system for 
            Healthy High Performance
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-12 leading-relaxed max-w-3xl mx-auto">
            MindsetOS helps you to develop your mental and emotional fitness so you can live, lead, and perform at your
            best. 
          </p>

          {/* CTA Buttons */}
          <div className="flex justify-center mb-12">
            <Button
              size="lg"
              className="bg-black:bg-grey-800 text-white font-medium px-8 py-4 text-lg rounded-full"
              asChild
            >
              <Link href="/how-it-works">
                Discover Your Mindset
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* Mindset Chips */}
          <div className="flex flex-wrap justify-center gap-3">
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

      {/* Who It's For Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-16 font-serif">Who It's For</h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Individuals Card */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-yellow-100 p-3 rounded-full mr-4">
                    <Star className="h-8 w-8 text-yellow-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-black font-serif">Individuals</h3>
                </div>
                <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                  For people ready to take ownership of their self-development. Whether your motivation is professional
                  or personal, MindsetOS meets you where you are and helps you build healthier ways to thrive.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    Personalised mindset mapping
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    On-Demand, adaptive AI coaching
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    Live Cohorts to grow with others
                  </li>
                </ul>
                <Button className="mt-6 bg-yellow-400 hover:bg-yellow-500 text-black font-medium" asChild>
                  <Link href="/join">Start Your Journey</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Businesses Card */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-yellow-100 p-3 rounded-full mr-4">
                    <Users className="h-8 w-8 text-yellow-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-black font-serif">Teams</h3>
                </div>
                <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                  For leaders committed to building a culture of high performance that lasts. MindsetOS equips your
                  team with the mindset tools to navigate challenge, lead with clarity, and perform without burnout.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    Invidividual & Team mindset mapping
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    On-Demand, adaptive AI coaching
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    2-Day transformative workshop
                  </li>
                </ul>
                <Button className="mt-6 bg-yellow-400 hover:bg-yellow-500 text-black font-medium" asChild>
                  <Link href="/for-teams">See How We Work With Teams</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What MindsetOS Offers */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-16 font-serif">
            What MindsetOS Offers
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Explore - Mindset Mapping */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8 text-center">
                <div className="bg-yellow-100 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <Compass className="h-8 w-8 text-black-600" />
                </div>
                <h3 className="text-xl font-bold text-black mb-4 font-serif">Discover</h3>
                <p className="text-gray-700 leading-relaxed">
                  Every mindset map tells a story. Explore your unique combination of the 7 mindsets and develop the clarity and awareness needed for lasting growth.
                </p>
              </CardContent>
            </Card>

            {/* Discover - AI Coaching */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8 text-center">
                <div className="bg-yellow-100 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <Brain className="h-8 w-8 text-black-600" />
                </div>
                <h3 className="text-xl font-bold text-black mb-4 font-serif">Explore</h3>
                <p className="text-gray-700 leading-relaxed">
                  Move from self-awareness to self-development. Guided by AI, trained extensively in expert coaching psychology and the MindsetOS framework, you'll receive tailored reflections that reveal what healthy high performance means for you.
                </p>
              </CardContent>
            </Card>

            {/* Live Cohorts */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8 text-center">
                <div className="bg-yellow-100 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <Target className="h-8 w-8 text-black-600" />
                </div>
                <h3 className="text-xl font-bold text-black mb-4 font-serif">Live Cohorts</h3>
                <p className="text-gray-700 leading-relaxed">
                  Growth is more powerful when it’s shared. Join guided experiences led by performance psychologist and expert coach Ed Cornfield to go deeper, apply your mindset in real life, and connect with others on the same journey.
                </p>
                <Link href="/how-it-works" className="inline-block mt-4 text-yellow-600 font-semibold">
                  Learn More →
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The 7 Mindsets Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-8 font-serif">The 7 Mindsets</h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Discover your unique mindset blend and learn how each contributes to your personal and professional growth.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {mindsets.map((mindset, index) => (
              <div key={index} className="text-center group cursor-pointer">
                <div
                  className={`${mindset.color} p-4 rounded-2xl mb-3 transition-all group-hover:scale-105 group-hover:shadow-lg`}
                >
                  <Circle className="h-8 w-8 mx-auto" />
                </div>
                <h4 className="font-semibold text-black mb-1">{mindset.name}</h4>
                <p className="text-sm text-gray-600">{mindset.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-black mb-8">How MindsetOS Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-3">Map Your Inner World</h3>
              <p className="text-gray-600">
                Answer 12 powerful questions per mindset to understand your current patterns and growth edges.
              </p>
            </div>
            <div className="p-6">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-3">Personalised Coaching</h3>
              <p className="text-gray-600">
                Receive human-trained, AI coaching, tailored to your mindset patterns, real-time context, and aspirations. Wherever you are, whenever you want.
              </p>
            </div>
            <div className="p-6">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-3">Build Mastery</h3>
              <p className="text-gray-600">
                Expand your mastery in every mindset and spend more time in the lighter, freer states where performance feels natural and effortless.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-yellow-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 font-serif">Ready to Shift Your Mindset?</h2>
          <p className="text-xl text-gray-700 mb-12">
            Join the individuals and teams already reshaping their approach to high performance.
          </p>

          {!isSubmitted ? (
            <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-grow"
              />
              <Button
                type="submit"
                size="lg"
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-8 py-4 text-lg rounded-full whitespace-nowrap"
                asChild
              >
                <Link href="/join">Register Your Interest</Link>
              </Button>
            </form>
          ) : (
            <p className="text-green-600 font-semibold">Thanks for registering your interest!</p>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} MindsetOS. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-yellow-400">
              <Mail className="h-5 w-5" />
            </a>
            <a href="#" className="hover:text-yellow-400">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
