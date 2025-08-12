"use client"

import type React from "react"
import { useState } from "react"
import {
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Calendar,
  Clock,
  Video,
  MessageSquare,
  BookOpen,
  Award,
  User,
  Globe,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function LiveCohortsPage() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  // 9-week journey data
  const weeks = [
    {
      title: "Introduction",
      week: "Week 1",
      blurb: "Welcome to MindsetOS. Understanding the framework, setting intentions, and building connections with your cohort members.",
      kickerLabel: "Foundation:",
      kickerText: "Creating psychological safety and shared commitment",
      bg: "bg-stone-100",
    },
    {
      title: "Surviving",
      week: "Week 2",
      blurb: "Learning to move through challenge and stress with grounded presence rather than being overwhelmed by difficult emotions.",
      kickerLabel: "Key insight:",
      kickerText: "Recognizing survival signals without letting them run the show",
      bg: "bg-rose-200",
    },
    {
      title: "Striving",
      week: "Week 3",
      blurb: "Transforming the hustle mindset — harnessing drive without burnout, performing from enough-ness rather than chasing validation.",
      kickerLabel: "Key insight:",
      kickerText: "Setting goals with intention, not from fear of falling behind",
      bg: "bg-pink-200",
    },
    {
      title: "Driving",
      week: "Week 4",
      blurb: "Leading with clarity and focus while staying connected to others — channeling inner power without needing to prove outer power.",
      kickerLabel: "Key insight:",
      kickerText: "Taking action with empowerment, guided by purpose",
      bg: "bg-amber-200",
    },
    {
      title: "Exploring",
      week: "Week 5",
      blurb: "Embracing curiosity and not‑knowing — dropping the need to be right and asking better questions to open new possibilities.",
      kickerLabel: "Key insight:",
      kickerText: "Experimenting as the path to who you could become",
      bg: "bg-yellow-200",
    },
    {
      title: "Thriving",
      week: "Week 6",
      blurb: "Living with energy, alignment, and sustainable performance — being fully yourself while creating supportive habits and relationships.",
      kickerLabel: "Key insight:",
      kickerText: "Authentic expression of your talents with ongoing care",
      bg: "bg-green-200",
    },
    {
      title: "Inspiring",
      week: "Week 7",
      blurb: "Uplifting others through your presence — leading by example and connecting people to something bigger than themselves.",
      kickerLabel: "Key insight:",
      kickerText: "Becoming a catalyst for change, grounded in integrity",
      bg: "bg-teal-200",
    },
    {
      title: "Flowing",
      week: "Week 8",
      blurb: "The art of letting go — trusting the process and moving with life's natural rhythm while staying present and engaged.",
      kickerLabel: "Key insight:",
      kickerText: "Embracing what is, dancing with uncertainty",
      bg: "bg-sky-200",
    },
    {
      title: "Integration",
      week: "Week 9",
      blurb: "Weaving it all together. Creating your personal MindsetOS practice, building ongoing accountability partnerships, and celebrating your growth.",
      kickerLabel: "Commitment:",
      kickerText: "Sustaining transformation beyond the cohort",
      bg: "bg-yellow-100",
    },
  ]

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setEmail("")
  }

  const cohorts = [
    {
      title: "Foundations of Healthy High Performance",
      duration: "6 weeks",
      sessions: "8 sessions",
      time: "Tuesdays & Thursdays, 7:00 PM GMT",
      startDate: "March 15, 2025",
      price: "£499",
      spots: "12 spots remaining",
      description: "Master the fundamentals of the 7 mindsets and build sustainable practices for peak performance without burnout.",
      includes: [
        "Live group coaching sessions",
        "Personalised mindset assessment",
        "Weekly practice assignments",
        "Private community access",
        "Session recordings",
      ],
    },
    {
      title: "Leadership Through Mindset Mastery",
      duration: "9 weeks",
      sessions: "9 sessions",
      time: "Wednesdays, 6:00 PM GMT",
      startDate: "April 5, 2025",
      price: "£599",
      spots: "8 spots remaining",
      description: "Develop advanced leadership skills by mastering your mindset patterns and learning to guide others through transformation.",
      includes: [
        "Advanced leadership frameworks",
        "Personalised mindset assessment",
        "Weekly practice assignments",
        "Peer coaching practice",
        "Cohort commuinity access",
      ],
    },
  ]

  const benefits = [
    {
      icon: <User className="h-8 w-8" />,
      title: "Expert Guidance",
      description: "Learn directly from Ed Cornfield, performance psychologist and expert coach with 15+ years of experience.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Peer Learning",
      description: "Connect with like-minded individuals on similar journeys and learn from diverse perspectives and experiences.",
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Interactive Sessions",
      description: "Engage in live discussions, Q&A sessions, and practical exercises that deepen your understanding.",
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Structured Learning",
      description: "Follow a proven curriculum designed to build your mindset mastery step by step over time.",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Accountability",
      description: "Stay committed to your growth with regular check-ins, assignments, and peer support.",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Global Community",
      description: "Join a worldwide network of individuals committed to healthy high performance and mindset development.",
    },
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
              <Link href="/mindset-app" className="text-gray-900 hover:text-gray-600 transition-colors">
                MindsetOS App
              </Link>
              <Link href="/live-cohorts" className="text-gray-900 hover:text-gray-600 transition-colors font-medium">
                Live Cohorts
              </Link>
            </nav>

            <div className="hidden md:block">
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium">Join a Cohort</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6 font-serif leading-tight">
            Live Cohorts
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-12 leading-relaxed max-w-4xl mx-auto">
            Growth is more powerful when it's shared. Join guided experiences led by performance psychologist Ed Cornfield to go deeper, apply your mindset in real life, and connect with others on the same journey.
          </p>

          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-yellow-100 p-3 rounded-full mr-4">
                <Video className="h-8 w-8 text-yellow-600" />
              </div>
              <div className="text-left">
                <h3 className="text-lg font-semibold text-black">Next Cohort Starting Soon</h3>
                <p className="text-gray-600">Foundations of Healthy High Performance</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                March 15, 2025
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                4 weeks
              </div>
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-2" />
                12 spots left
              </div>
              <div className="flex items-center">
                <Star className="h-4 w-4 mr-2" />
                £499
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Live Cohorts */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-16 font-serif">
            Why Choose Live Cohorts?
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

      {/* Available Cohorts */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-16 font-serif">
            Available Cohorts
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">
            {cohorts.map((cohort, index) => (
              <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-black mb-3 font-serif">{cohort.title}</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">{cohort.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-4">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2" />
                        {cohort.duration}
                      </div>
                      <div className="flex items-center">
                        <Video className="h-4 w-4 mr-2" />
                        {cohort.sessions}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        {cohort.startDate}
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-2" />
                        {cohort.spots}
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4 mb-6">
                      <p className="text-sm text-gray-600 mb-2 font-medium">Session Times:</p>
                      <p className="text-gray-700">{cohort.time}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-black mb-3">What's Included:</h4>
                    <ul className="space-y-2">
                      {cohort.includes.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center text-gray-700">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-3xl font-bold text-black">{cohort.price}</span>
                      <span className="text-gray-600 ml-2">total</span>
                    </div>
                    <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-6 py-3 rounded-full">
                      Reserve Your Spot
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Your Guide */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 font-serif">
                Meet Your Guide
              </h2>
              <h3 className="text-2xl font-semibold text-black mb-4">Ed Cornfield</h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Performance psychologist and expert coach with over 15 years of experience helping individuals and teams achieve healthy high performance. Ed has worked with Fortune 500 companies, elite athletes, and thousands of professionals seeking to unlock their potential.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  Masters in Psychology
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  15+ years coaching experience & ex-pro athlete
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  Co-Founder of MindsetOS
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  Worked with over a thousand high performers
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="bg-yellow-100 rounded-3xl p-8 text-center">
              <div className="relative w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden ring-2 ring-white shadow">
                <img
                  src="/ed-cornfield.jpeg"
                  alt="Ed Cornfield headshot"
                  width="160"
                  height="160"
                  className="object-cover"
                />
              </div>
                <blockquote className="text-lg text-gray-700 italic mb-4">
                  "True high performance isn't about pushing harder. It's about understanding your mindset patterns and learning to work with them, not against them."
                </blockquote>
                <cite className="text-black font-semibold">— Ed Cornfield</cite>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-16 font-serif">
            How Live Cohorts Work
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-yellow-400 text-black rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-bold text-black mb-3 font-serif">Reserve Your Spot</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Choose your cohort and secure your place in the next group starting soon.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-400 text-black rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-bold text-black mb-3 font-serif">Complete Assessment</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Take your mindset assessment to understand your starting point and growth areas.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-400 text-black rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-bold text-black mb-3 font-serif">Join Live Sessions</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Attend interactive sessions with Ed and your cohort peers for deep learning.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-400 text-black rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-bold text-black mb-3 font-serif">Apply & Grow</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Practice new skills, get feedback, and build lasting mindset mastery.
              </p>
            </div>
          </div>
        </div>

        {/* 9-Week Foundation Journey */}
        <div className="mt-20">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-black mb-8 font-serif">
            Your 9-Week Foundation Journey
          </h3>
          <p className="text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto">
            Each week, we explore one mindset together, understanding both its wisdom and its shadows. 
            This isn't about reaching the "best" mindset, but building awareness and choice in how you respond to life.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {weeks.map((week) => (
              <div key={week.title} className={`rounded-xl ${week.bg} p-5 shadow-sm border border-black/5`}>
                <div className="flex items-start justify-between">
                  <h4 className="text-lg font-semibold text-black">{week.title}</h4>
                  <span className="text-xs font-medium rounded-full bg-white/70 px-2 py-1 border border-black/10">
                    {week.week}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-6 text-gray-800">{week.blurb}</p>
                <p className="mt-3 text-xs font-medium text-gray-900">
                  <span className="mr-1">{week.kickerLabel}</span>
                  <span className="font-normal text-gray-800">{week.kickerText}</span>
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl bg-amber-50 p-6 sm:p-8 border border-amber-100 text-center">
            <h4 className="text-lg sm:text-xl font-semibold text-black mb-3">
              A Journey of Awareness, Not Perfection
            </h4>
            <p className="text-sm sm:text-base text-gray-700 max-w-3xl mx-auto mb-6">
              Each mindset has both wisdom and shadows. We all move between healthy and unhealthy versions of these mindsets. 
              The power lies in building awareness so you can respond more consciously and choose more intentionally.
            </p>
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-6 py-3 rounded-full">
              Begin Your 9-Week Journey
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-yellow-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 font-serif">
            Ready to Join a Community of Growth?
          </h2>
          <p className="text-xl text-gray-700 mb-12">
            Don't miss your chance to learn directly from Ed and connect with others committed to healthy high performance.
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
                Get Notified
              </Button>
            </form>
          ) : (
            <div className="flex items-center justify-center gap-3 text-green-600 text-lg">
              <CheckCircle className="h-6 w-6" />
              <span>Thank you! We'll notify you about upcoming cohorts.</span>
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
                <Users className="h-6 w-6" />
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