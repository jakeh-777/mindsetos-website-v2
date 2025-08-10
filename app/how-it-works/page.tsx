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
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function HowItWorksPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)

  const mindsets = [
    { name: "Surviving", color: "bg-pink-100 text-pink-800" },
    { name: "Striving", color: "bg-red-100 text-red-800" },
    { name: "Driving", color: "bg-orange-100 text-orange-800" },
    { name: "Exploring", color: "bg-yellow-100 text-yellow-800" },
    { name: "Thriving", color: "bg-green-100 text-green-800" },
    { name: "Inspiring", color: "bg-teal-100 text-teal-800" },
    { name: "Flowing", color: "bg-sky-100 text-sky-800" },
  ]

  const carouselSteps = [
    {
      title: "Mapping Your Mind",
      icon: <Compass className="h-8 w-8 text-yellow-600" />,
      description: "Your journey starts by exploring the seven mindsets: Surviving. Striving. Driving. Exploring. Thriving. Inspiring. and Flowing. Through a series of powerful self-reflection questions, you'll create a personalised map of your mind, showing where you naturally operate, where you get stuck, and where your greatest growth opportunities lie. This map becomes your foundation for targeted, practical growth."
    },
    {
      title: "Your AI-Enabled Digital Coach",
      icon: <Brain className="h-8 w-8 text-yellow-600" />,
      description: "From there, you'll interact with your AI-enabled digital coach, trained extensively by Ed Cornfield and powered by the latest in performance psychology, emotional fitness, and growth science. This coach adapts to you, offering tailored insights, mindset experiments, and strategies so your training is always relevant to your current challenges and aspirations."
    },
    {
      title: "Live Cohort-Based Training",
      icon: <Target className="h-8 w-8 text-yellow-600" />,
      description: "To go deeper, you'll join live cohort-based sessions with Ed Cornfield. These highly interactive, experiential trainings allow you to apply MindsetOS in real time, explore new mindsets through guided practices, and learn alongside others on the same path. It's a place to sharpen skills, gain perspective, and build lasting changes together."
    }
  ]

  const nextStep = () => {
    setCurrentStep((prev) => (prev + 1) % carouselSteps.length)
  }

  const prevStep = () => {
    setCurrentStep((prev) => (prev - 1 + carouselSteps.length) % carouselSteps.length)
  }
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/">
                <h1 className="text-2xl font-bold text-black font-serif">MindsetOS</h1>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-900 hover:text-gray-600 transition-colors">
                Home
              </Link>
              <Link href="/how-it-works" className="text-gray-900 hover:text-gray-600 transition-colors font-medium">
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
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium" asChild>
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
                <Link href="/how-it-works" className="text-gray-900 hover:text-gray-600 transition-colors font-medium">
                  How It Works
                </Link>
                <Link href="/for-teams" className="text-gray-900 hover:text-gray-600 transition-colors">
                  For Businesses
                </Link>
                <Link href="/mindset-framework" className="text-gray-900 hover:text-gray-600 transition-colors">
                  The MindsetOS Platform
                </Link>
                <Link href="/join" className="text-gray-900 hover:text-gray-600 transition-colors">
                  Start your Journey
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6 font-serif leading-tight">
            Your Mind. Upgraded.
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-12 leading-relaxed max-w-3xl mx-auto">
            A journey designed to grow your mental and emotional fitness, blending personalised insights, AI coaching, and live group learning.
          </p>

          {/* Mindset Chips */}
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

      {/* Platform Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="bg-yellow-400 text-black rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
              1
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 font-serif">The MindsetOS Platform</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                MindsetOS is a complete training environment designed to strengthen your mental and emotional fitness so you can live, lead, and perform with more clarity, energy, and purpose without burning out.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                It's built around the principle of Healthy High Performance, and gives you the tools, practices, and support to upgrade how you think, feel, and respond in the moments that matter most.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Carousel Steps */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 font-serif">Your Journey</h2>
            <p className="text-lg text-gray-600">Discover how MindsetOS guides you through transformation</p>
          </div>

          {/* Carousel Container */}
          <div className="relative max-w-4xl mx-auto">
            <Card className="border-0 shadow-xl">
              <CardContent className="p-12 text-center">
                <div className="bg-yellow-100 p-4 rounded-full w-20 h-20 mx-auto mb-8 flex items-center justify-center">
                  {carouselSteps[currentStep].icon}
                </div>
                <div className="bg-yellow-400 text-black rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                  {currentStep + 2}
                </div>
                <h3 className="text-3xl font-bold text-black mb-6 font-serif">
                  {carouselSteps[currentStep].title}
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                  {carouselSteps[currentStep].description}
                </p>
              </CardContent>
            </Card>

            {/* Navigation Buttons */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 rounded-full bg-white shadow-lg hover:bg-gray-50"
              onClick={prevStep}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 rounded-full bg-white shadow-lg hover:bg-gray-50"
              onClick={nextStep}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          {/* Step Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {carouselSteps.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentStep === index ? 'bg-yellow-400' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                onClick={() => setCurrentStep(index)}
              />
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <Button
              size="lg"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-8 py-4 text-lg rounded-full"
              asChild
            >
              <Link href="/join">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* What Makes MindsetOS Different */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-16 font-serif">
            What Makes MindsetOS Different
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-black mb-6 font-serif">Human-Trained AI</h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our AI coaching is trained extensively in expert coaching psychology and the MindsetOS framework. It's not generic advice — it's personalized guidance based on your unique mindset patterns.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  Trained by performance psychologists
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  Personalized to your mindset profile
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  Available 24/7 wherever you are
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-black mb-6 font-serif">Comprehensive Framework</h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                The 7 mindsets provide a complete map of human performance states. Unlike single-focus approaches, MindsetOS helps you develop flexibility across all dimensions of high performance.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  Evidence-based framework
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  Covers all performance dimensions
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  Sustainable and healthy approach
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-yellow-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 font-serif">
            Ready to Discover Your Mindset?
          </h2>
          <p className="text-xl text-gray-700 mb-12">
            Join thousands already transforming their approach to high performance.
          </p>

          <Button
            size="lg"
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-8 py-4 text-lg rounded-full"
            asChild
          >
            <Link href="/join">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} MindsetOS. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/for-teams" className="hover:text-yellow-400">
              For Teams
            </Link>
            <Link href="/mindset-framework" className="hover:text-yellow-400">
              7 Mindset Framework
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}