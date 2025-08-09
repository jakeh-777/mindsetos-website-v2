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
  Building,
  TrendingUp,
  Shield,
  Award,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function ForTeamsPage() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setEmail("")
  }

  const benefits = [
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Improved Performance",
      description: "Teams report 40% improvement in performance metrics after implementing MindsetOS practices.",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Reduced Burnout",
      description: "Sustainable high performance practices that prevent burnout and maintain long-term wellbeing.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Enhanced Collaboration",
      description: "Better understanding of team dynamics and individual strengths leads to improved collaboration.",
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Increased Resilience",
      description: "Build team resilience and adaptability to navigate challenges and change effectively.",
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Aligned Goals",
      description: "Create alignment between individual mindsets and organizational objectives for better outcomes.",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Leadership Development",
      description: "Develop leaders who can guide teams through transformation with mindset awareness.",
    },
  ]

  const process = [
    {
      step: "1",
      title: "Team Assessment",
      description: "Every team member completes the comprehensive mindset assessment to create individual and team profiles.",
      duration: "Week 1"
    },
    {
      step: "2",
      title: "2-Day Workshop",
      description: "Intensive workshop covering the 7 mindsets, team dynamics, and practical application strategies.",
      duration: "Week 2"
    },
    {
      step: "3",
      title: "AI Coaching Access",
      description: "Team members get access to personalized AI coaching tailored to their individual mindset profiles.",
      duration: "Ongoing"
    },
    {
      step: "4",
      title: "Progress Tracking",
      description: "Regular check-ins and progress tracking to ensure sustainable implementation and growth.",
      duration: "Monthly"
    }
  ]

  const packages = [
    {
      name: "Starter",
      price: "$2,500",
      teamSize: "Up to 10 people",
      features: [
        "Team mindset assessments",
        "1-day workshop",
        "3 months AI coaching access",
        "Team dashboard",
        "Monthly progress reports"
      ]
    },
    {
      name: "Professional",
      price: "$5,000",
      teamSize: "Up to 25 people",
      features: [
        "Everything in Starter",
        "2-day transformative workshop",
        "6 months AI coaching access",
        "Leadership coaching sessions",
        "Quarterly team reviews"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      teamSize: "25+ people",
      features: [
        "Everything in Professional",
        "Custom workshop design",
        "12 months AI coaching access",
        "Executive coaching",
        "Ongoing support & consulting"
      ]
    }
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
              <Link href="/how-it-works" className="text-gray-900 hover:text-gray-600 transition-colors">
                How It Works
              </Link>
              <Link href="/for-teams" className="text-gray-900 hover:text-gray-600 transition-colors font-medium">
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
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium">
                Book a Demo
              </Button>
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
                Build a Culture of
                <br />
                Healthy High Performance
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Equip your team with the mindset tools to navigate challenge, lead with clarity, and perform without burnout. MindsetOS for Teams creates sustainable high performance at scale.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  size="lg"
                  className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-8 py-4 text-lg rounded-full"
                >
                  Book a Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 py-4 text-lg rounded-full border-gray-300 hover:bg-gray-50"
                >
                  Download Case Study
                </Button>
              </div>

              <div className="flex items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <Building className="h-4 w-4 mr-2" />
                  500+ Companies
                </div>
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-2" />
                  10,000+ Team Members
                </div>
                <div className="flex items-center">
                  <Star className="h-4 w-4 mr-2" />
                  4.9/5 Rating
                </div>
              </div>
            </div>

            <div className="relative">
              <Card className="border-0 shadow-2xl">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-black mb-6 font-serif">Team Mindset Dashboard</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Team Resilience</span>
                      <div className="flex items-center">
                        <div className="w-24 h-2 bg-gray-200 rounded-full mr-3">
                          <div className="w-20 h-2 bg-green-500 rounded-full"></div>
                        </div>
                        <span className="text-sm font-medium">85%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Collaboration Score</span>
                      <div className="flex items-center">
                        <div className="w-24 h-2 bg-gray-200 rounded-full mr-3">
                          <div className="w-18 h-2 bg-blue-500 rounded-full"></div>
                        </div>
                        <span className="text-sm font-medium">78%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Innovation Mindset</span>
                      <div className="flex items-center">
                        <div className="w-24 h-2 bg-gray-200 rounded-full mr-3">
                          <div className="w-22 h-2 bg-yellow-500 rounded-full"></div>
                        </div>
                        <span className="text-sm font-medium">92%</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
                    <p className="text-sm text-gray-700">
                      <strong>Insight:</strong> Your team shows strong innovation potential. Consider channeling this into strategic initiatives.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-16 font-serif">
            Why Teams Choose MindsetOS
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8 text-center">
                  <div className="bg-yellow-100 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-black mb-4 font-serif">{benefit.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-16 font-serif">
            Our Proven Process
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="bg-yellow-400 text-black rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-black mb-3 font-serif">{item.title}</h3>
                  <p className="text-gray-700 text-sm mb-4 leading-relaxed">{item.description}</p>
                  <span className="inline-block bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium">
                    {item.duration}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-16 font-serif">
            Choose Your Package
          </h2>

          <div className="grid lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className={`border-0 shadow-xl relative ${pkg.popular ? 'border-2 border-yellow-400' : ''}`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-black mb-2 font-serif">{pkg.name}</h3>
                  <p className="text-gray-600 mb-4">{pkg.teamSize}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-black">{pkg.price}</span>
                    {pkg.price !== "Custom" && <span className="text-gray-600 ml-2">one-time</span>}
                  </div>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full rounded-full ${pkg.popular ? 'bg-yellow-400 hover:bg-yellow-500 text-black' : 'bg-gray-900 hover:bg-gray-800 text-white'}`}
                  >
                    {pkg.price === "Custom" ? "Contact Sales" : "Get Started"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-yellow-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 font-serif">
            Ready to Transform Your Team?
          </h2>
          <p className="text-xl text-gray-700 mb-12">
            Join the organizations already building cultures of healthy high performance with MindsetOS.
          </p>

          {!isSubmitted ? (
            <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your work email"
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
                Book Demo
              </Button>
            </form>
          ) : (
            <div className="flex items-center justify-center gap-3 text-green-600 text-lg">
              <CheckCircle className="h-6 w-6" />
              <span>Thank you! We'll be in touch to schedule your demo.</span>
            </div>
          )}
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