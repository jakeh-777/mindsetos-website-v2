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
  Circle,
  Heart,
  Shield,
  Zap,
  Leaf,
  Sparkles,
  Waves,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function MindsetFrameworkPage() {
  const [selectedMindset, setSelectedMindset] = useState(0)

  const mindsets = [
    {
      name: "Surviving",
      color: "bg-pink-100 text-pink-800 border-pink-200",
      icon: <Shield className="h-8 w-8" />,
      description: "Life's hard sometimes. That doesn't make you weak — it makes you human. What matters is how you meet those moments.",
      fullDescription: "The Surviving mindset is about resilience, endurance, and getting through difficult times. When in this mindset, you focus on basic needs, safety, and stability. It's essential for navigating crises but shouldn't be your permanent state.",
      characteristics: [
        "Focus on immediate needs and safety",
        "Heightened awareness of threats",
        "Conservation of energy and resources",
        "Strong survival instincts",
        "Ability to endure hardship"
      ],
      whenUseful: [
        "During genuine crises or emergencies",
        "When facing significant life changes",
        "In high-stress, high-stakes situations",
        "When resources are genuinely scarce"
      ],
      growthEdge: "Learning when it's safe to move beyond survival mode and embrace growth opportunities."
    },
    {
      name: "Striving",
      color: "bg-red-100 text-red-800 border-red-200",
      icon: <Target className="h-8 w-8" />,
      description: "You're progressing and that matters. You're enough and growing. Success is not your worth. You're invested in the process.",
      fullDescription: "The Striving mindset is characterized by ambition, goal-setting, and a strong drive to achieve. You're focused on improvement, competition, and reaching the next level. This mindset fuels progress but can lead to burnout if overused.",
      characteristics: [
        "Strong goal orientation",
        "Competitive drive",
        "Focus on improvement and progress",
        "High standards and expectations",
        "Results-oriented thinking"
      ],
      whenUseful: [
        "When pursuing important goals",
        "In competitive environments",
        "During skill development phases",
        "When motivation is needed"
      ],
      growthEdge: "Balancing achievement with wellbeing and learning to find satisfaction in the journey, not just outcomes."
    },
    {
      name: "Driving",
      color: "bg-orange-100 text-orange-800 border-orange-200",
      icon: <Zap className="h-8 w-8" />,
      description: "You're in momentum. Celebrate that. But don't hold too tight. Let it go a bit and make sure it's sustainable.",
      fullDescription: "The Driving mindset is about focused execution, determination, and pushing through obstacles. You're in action mode, making things happen with intensity and purpose. It's powerful for getting things done but requires balance.",
      characteristics: [
        "Intense focus and concentration",
        "Strong determination and willpower",
        "Action-oriented approach",
        "Ability to push through obstacles",
        "High energy and momentum"
      ],
      whenUseful: [
        "When deadlines are approaching",
        "During implementation phases",
        "When obstacles need to be overcome",
        "In high-pressure situations"
      ],
      growthEdge: "Learning when to ease off the accelerator and incorporate rest, reflection, and strategic thinking."
    },
    {
      name: "Exploring",
      color: "bg-yellow-100 text-yellow-800 border-yellow-200",
      icon: <Compass className="h-8 w-8" />,
      description: "Growth lives in uncertainty. Bring curiosity and courage. Experiment. You don't need all the answers to begin.",
      fullDescription: "The Exploring mindset is driven by curiosity, learning, and discovery. You're open to new experiences, asking questions, and seeking to understand. This mindset fuels innovation and growth through experimentation.",
      characteristics: [
        "High curiosity and openness",
        "Love of learning and discovery",
        "Willingness to experiment",
        "Comfort with uncertainty",
        "Broad perspective and thinking"
      ],
      whenUseful: [
        "When learning new skills or subjects",
        "During innovation and creativity phases",
        "When facing unknown situations",
        "In research and development work"
      ],
      growthEdge: "Balancing exploration with focused action and learning to commit to directions once sufficient exploration is complete."
    },
    {
      name: "Thriving",
      color: "bg-green-100 text-green-800 border-green-200",
      icon: <Leaf className="h-8 w-8" />,
      description: "You're in your groove. Energised. Aligned. There's joy in the doing — not just the outcome.",
      fullDescription: "The Thriving mindset represents sustainable growth, wellbeing, and flourishing. You're operating from a place of abundance, focusing on long-term development and holistic success. This is often considered the optimal state for sustained high performance.",
      characteristics: [
        "Sustainable growth orientation",
        "Balance between challenge and support",
        "Focus on long-term development",
        "Integration of multiple life areas",
        "Sense of abundance and possibility"
      ],
      whenUseful: [
        "When building long-term capabilities",
        "During periods of stability and growth",
        "When integrating multiple priorities",
        "In leadership and mentoring roles"
      ],
      growthEdge: "Maintaining this state consistently and helping others access their own thriving mindset."
    },
    {
      name: "Inspiring",
      color: "bg-teal-100 text-teal-800 border-teal-200",
      icon: <Sparkles className="h-8 w-8" />,
      description: "You lead with clarity. You inspire with purpose. You create with others. You're moved — and moving others.",
      fullDescription: "The Inspiring mindset is about vision, purpose, and motivating others toward a greater cause. You're focused on meaning, impact, and bringing out the best in people. This mindset creates positive change and builds movements.",
      characteristics: [
        "Clear vision and purpose",
        "Ability to motivate and influence",
        "Focus on meaning and impact",
        "Natural leadership qualities",
        "Optimism and positive energy"
      ],
      whenUseful: [
        "When leading teams or organizations",
        "During change and transformation",
        "When building movements or causes",
        "In mentoring and coaching roles"
      ],
      growthEdge: "Ensuring your inspiration is grounded in practical action and sustainable for both yourself and others."
    },
    {
      name: "Flowing",
      color: "bg-sky-100 text-sky-800 border-sky-200",
      icon: <Waves className="h-8 w-8" />,
      description: "There's no forcing. Just being. You're fully here, guided by quiet wisdom. You flow — and life flows with you.",
      fullDescription: "The Flowing mindset is characterized by adaptability, presence, and effortless performance. You're in sync with the moment, responding naturally to what's needed. This state often represents peak performance and deep satisfaction.",
      characteristics: [
        "High adaptability and flexibility",
        "Present-moment awareness",
        "Effortless performance",
        "Natural responsiveness",
        "Sense of ease and flow"
      ],
      whenUseful: [
        "During peak performance moments",
        "When navigating complex, changing situations",
        "In creative and artistic endeavors",
        "When deep presence is required"
      ],
      growthEdge: "Learning to access this state more consistently and in a wider range of situations."
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
              <Link href="/for-teams" className="text-gray-900 hover:text-gray-600 transition-colors">
                For Teams
              </Link>
              <Link href="/mindset-framework" className="text-gray-900 hover:text-gray-600 transition-colors font-medium">
                7 Mindset Framework
              </Link>
              <Link href="/join" className="text-gray-900 hover:text-gray-600 transition-colors">
                Join Us
              </Link>
            </nav>

            <div className="hidden md:block">
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium" asChild>
                <Link href="/join">Discover Your Mindset</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6 font-serif leading-tight">
            The 7 Mindset Framework
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-12 leading-relaxed">
            A comprehensive model for understanding and developing your mental and emotional patterns for healthy high performance.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {mindsets.map((mindset, index) => (
              <div 
                key={index} 
                className={`text-center group cursor-pointer transition-all duration-300 ${selectedMindset === index ? 'scale-110' : 'hover:scale-105'}`}
                onClick={() => setSelectedMindset(index)}
              >
                <div className={`${mindset.color} p-4 rounded-2xl mb-3 transition-all group-hover:shadow-lg border-2 ${selectedMindset === index ? 'ring-2 ring-yellow-400' : ''}`}>
                  {mindset.icon}
                </div>
                <h4 className="font-semibold text-black mb-1 text-sm">{mindset.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Mindset Detail */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center mb-6">
                <div className={`${mindsets[selectedMindset].color} p-4 rounded-2xl mr-4 border-2`}>
                  {mindsets[selectedMindset].icon}
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-black font-serif">{mindsets[selectedMindset].name}</h2>
                  <p className="text-lg text-gray-600">{mindsets[selectedMindset].description}</p>
                </div>
              </div>

              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                {mindsets[selectedMindset].fullDescription}
              </p>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-black mb-4 font-serif">Key Characteristics</h3>
                <ul className="space-y-3">
                  {mindsets[selectedMindset].characteristics.map((characteristic, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      {characteristic}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-8">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-black mb-4 font-serif">When This Mindset Is Useful</h3>
                  <ul className="space-y-3">
                    {mindsets[selectedMindset].whenUseful.map((situation, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <Star className="h-4 w-4 text-yellow-500 mr-3 flex-shrink-0" />
                        {situation}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-black mb-4 font-serif">Growth Edge</h3>
                  <p className="text-gray-700 leading-relaxed">
                    {mindsets[selectedMindset].growthEdge}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Framework Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-16 font-serif">
            Understanding the Framework
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8 text-center">
                <div className="bg-yellow-100 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <Brain className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-black mb-4 font-serif">Dynamic States</h3>
                <p className="text-gray-700 leading-relaxed">
                  These aren't fixed personality types but dynamic states you can move between based on context and development.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8 text-center">
                <div className="bg-yellow-100 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <BarChart3 className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-black mb-4 font-serif">Unique Blend</h3>
                <p className="text-gray-700 leading-relaxed">
                  Everyone has a unique combination of these mindsets, with different strengths and patterns of activation.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8 text-center">
                <div className="bg-yellow-100 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <Target className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-black mb-4 font-serif">Contextual Fitness</h3>
                <p className="text-gray-700 leading-relaxed">
                  The goal is to access the right mindset for the right situation, developing flexibility and awareness.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* All Mindsets Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-16 font-serif">
            Explore All 7 Mindsets
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {mindsets.map((mindset, index) => (
              <Card 
                key={index} 
                className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer ${selectedMindset === index ? 'ring-2 ring-yellow-400' : ''}`}
                onClick={() => setSelectedMindset(index)}
              >
                <CardContent className="p-6 text-center">
                  <div className={`${mindset.color} p-3 rounded-2xl w-14 h-14 mx-auto mb-4 flex items-center justify-center border-2`}>
                    {mindset.icon}
                  </div>
                  <h3 className="text-lg font-bold text-black mb-2 font-serif">{mindset.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{mindset.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Coach Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 font-serif">
                Meet the Coach
              </h2>
              <h3 className="text-2xl font-semibold text-black mb-4">Ed Cornfield</h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Performance psychologist and creator of the MindsetOS framework. With over 15 years of experience, 
                Ed has helped thousands of individuals and teams develop healthy high performance practices.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Ed's approach combines performance psychology research with modern, human coaching techniques, 
                creating a framework that's both scientifically grounded and immediately applicable to real-world challenges.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  Masters in Psychology
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  15+ years coaching experience
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  Ex-Pro Athelete & Business Executive
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  Works with Fortune 500 companies
                </li>
              </ul>
            </div>

            <div className="relative">
              <div className="bg-yellow-50 rounded-3xl p-8 text-center">
                <div className="bg-white rounded-full w-48 h-48 mx-auto mb-6 flex items-center justify-center shadow-lg">
                  <img 
                    src="/Ed .jpeg" 
                    alt="Ed Cornfield - Performance Psychologist and MindsetOS Creator"
                    className="w-44 h-44 rounded-full object-cover"
                  />
                </div>
                <blockquote className="text-lg text-gray-700 italic mb-4">
                  "The 7 mindsets aren't just theory—they're a practical roadmap for anyone seeking to perform at their best while maintaining their wellbeing."
                </blockquote>
                <cite className="text-black font-semibold">— Ed Cornfield, Co-Founder of MindsetOS</cite>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-yellow-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 font-serif">
            Discover Your Unique Mindset Blend
          </h2>
          <p className="text-xl text-gray-700 mb-12">
            Take our comprehensive assessment to understand your mindset patterns and unlock your potential for healthy high performance.
          </p>

          <Button
            size="lg"
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-8 py-4 text-lg rounded-full"
            asChild
          >
            <Link href="/join">
              Take the Assessment
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