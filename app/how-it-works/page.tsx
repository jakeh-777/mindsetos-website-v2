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
  Play,
  Circle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function HowItWorksPage() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setEmail("")
  }

  const steps = [
    {
      number: "1",
      title: "Map Your Inner World",
      description: "Complete our comprehensive mindset assessment to understand your unique patterns across all 7 mindsets.",
      icon: <Eye className="h-8 w-8" />,
      details: [
        "84 carefully crafted questions (12 per mindset)",
        "Takes 15-20 minutes to complete",
        "Reveals your current mindset strengths and growth edges",
        "Creates your personalized mindset map"
      ]
    },
    {
      number: "2",
      title: "Receive Personalized Insights",
      description: "Get detailed analysis of your mindset patterns and understand what they mean for your performance.",
      icon: <Brain className="h-8 w-8" />,
      details: [
        "Detailed breakdown of each mindset score",
        "Understanding of your dominant patterns",
        "Identification of growth opportunities",
        "Personalized recommendations for development"
      ]
    },
    {
      number: "3",
      title: "Access AI Coaching",
      description: "Engage with our human-trained AI coach for personalized guidance tailored to your mindset profile.",
      icon: <MessageSquare className="h-8 w-8" />,
      details: [
        "24/7 access to personalized coaching",
        "Context-aware responses based on your mindset",
        "Practical strategies for real-world application",
        "Continuous learning and adaptation"
      ]
    },
    {
      number: "4",
      title: "Build Mastery",
      description: "Develop sustainable practices and track your progress as you expand your mastery within each mindset.",
      icon: <Target className="h-8 w-8" />,
      details: [
        "Daily check-ins and reflections",
        "Progress tracking across all mindsets",
        "Habit building and goal setting",
        "Regular reassessments to track growth"
      ]
    }
  ]

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

            <div className="hidden md:block">
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium" asChild>
                <Link href="/join">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6 font-serif leading-tight">
            How MindsetOS Works
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-12 leading-relaxed">
            A simple, science-backed approach to understanding and developing your mindset for healthy high performance.
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

      {/* Steps Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-16 font-serif">
            Your Journey in 4 Simple Steps
          </h2>

          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-6">
                    <div className="bg-yellow-400 text-black rounded-full w-12 h-12 flex items-center justify-center mr-4 text-xl font-bold">
                      {step.number}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-black font-serif">{step.title}</h3>
                  </div>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">{step.description}</p>
                  <ul className="space-y-3">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center text-gray-700">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <Card className="border-0 shadow-xl">
                    <CardContent className="p-8 text-center">
                      <div className="bg-yellow-100 p-6 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                        {step.icon}
                      </div>
                      <div className="text-6xl font-bold text-yellow-400 mb-4">{step.number}</div>
                      <h4 className="text-xl font-semibold text-black">{step.title}</h4>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes It Different */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-16 font-serif">
            What Makes MindsetOS Different
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8 text-center">
                <div className="bg-yellow-100 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <Brain className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-black mb-4 font-serif">Human-Trained AI</h3>
                <p className="text-gray-700 leading-relaxed">
                  Our AI coach is trained by expert performance psychologists, ensuring you receive high-quality, evidence-based guidance.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8 text-center">
                <div className="bg-yellow-100 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <BarChart3 className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-black mb-4 font-serif">Science-Based Framework</h3>
                <p className="text-gray-700 leading-relaxed">
                  Built on years of research in performance psychology and validated through work with thousands of high performers.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8 text-center">
                <div className="bg-yellow-100 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <Target className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-black mb-4 font-serif">Personalized Approach</h3>
                <p className="text-gray-700 leading-relaxed">
                  Every insight and recommendation is tailored to your unique mindset profile and current life context.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-yellow-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 font-serif">
            Ready to Discover Your Mindset?
          </h2>
          <p className="text-xl text-gray-700 mb-12">
            Take the first step towards healthy high performance with our comprehensive mindset assessment.
          </p>

          <Button
            size="lg"
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-8 py-4 text-lg rounded-full"
            asChild
          >
            <Link href="/join">
              Start Your Assessment
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