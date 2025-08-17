"use client"

import type React from "react"
import { useState } from "react"
import {
  ArrowRight,
  CheckCircle,
  Star,
  Brain,
  Users,
  Building,
  Smartphone,
  Calendar,
  Video,
  MapPin,
  Crown,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly')

  const products = [
    {
      category: "MindsetOS App",
      plans: [
        {
          name: "Discover",
          price: "Free",
          period: "",
          description: "Perfect for getting started with mindset awareness",
          icon: <Smartphone className="h-8 w-8" />,
          color: "border-gray-200",
          buttonStyle: "outline",
          buttonText: "Get Started Free",
          features: [
            "Complete mindset evaluation",
            "Personalised mindset insights",
            "Limited MindsetOS AI coaching",
            "Basic progress tracking",
          ],
        },
        {
          name: "Explore",
          price: billingCycle === 'monthly' ? "£6.99" : "£59.99",
          period: billingCycle === 'monthly' ? "/month" : "/year",
          originalPrice: billingCycle === 'yearly' ? "£83.88" : null,
          description: "Full access to AI coaching and advanced features",
          icon: <Brain className="h-8 w-8" />,
          color: "border-yellow-400",
          buttonStyle: "default",
          buttonText: "Start Free Trial",
          popular: true,
          features: [
            "Everything in Discover",
            "Unlimited AI coaching",
            "Daily personalised insights",
            "Advanced progress analytics",
            "30% discount for Live Cohorts",
            "Access to member-only content",
          ],
        },
      ],
    },
    {
      category: "Expeditions",
      plans: [
        {
          name: "Live Cohorts",
          price: "£599",
          period: " per course",
          description: "9-week guided journey with expert coaching and peer learning",
          icon: <Users className="h-8 w-8" />,
          color: "border-teal-400",
          buttonStyle: "default",
          buttonText: "Reserve Your Spot",
          features: [
            "9 live group coaching sessions",
            "Expert guidance from Ed Cornfield",
            "Personalised mindset assessment",
            "Weekly practice assignments",
            "Private community access",
            "Session recordings",
            "Peer learning & accountability",
          ],
        },
        {
          name: "Business Workshop",
          price: "£3,500+",
          period: " + expenses",
          description: "2-day transformative face-to-face workshop for teams and organizations",
          icon: <Building className="h-8 w-8" />,
          color: "border-purple-400",
          buttonStyle: "default",
          buttonText: "Get Quote",
          premium: true,
          features: [
            "2-day intensive workshop",
            "Team mindset mapping",
            "Leadership development",
            "Custom curriculum design",
            "On-site delivery available",
            "Follow-up coaching sessions",
            "Organizational assessment",
            "Implementation support",
          ],
        },
      ],
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
              <Link href="/live-cohorts" className="text-gray-900 hover:text-gray-600 transition-colors">
                Live Cohorts
              </Link>
              <Link href="/pricing" className="text-gray-900 hover:text-gray-600 transition-colors font-medium">
                Pricing
              </Link>
            </nav>

            <div className="hidden md:block">
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium">Get Started</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6 font-serif leading-tight">
            Choose Your Path to
            <br />
            Healthy High Performance
          </h1>
          <p className="text-xl text-gray-700 mb-12 leading-relaxed">
            From individual coaching to team transformation, find the right solution for your mindset development journey.
          </p>
        </div>
      </section>

      {/* Billing Toggle for App Plans */}
      <section className="pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-full p-1 shadow-sm border border-gray-200">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  billingCycle === 'monthly'
                    ? 'bg-yellow-400 text-black shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('yearly')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  billingCycle === 'yearly'
                    ? 'bg-yellow-400 text-black shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Yearly
                <span className="ml-2 text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                  Save 28%
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {products.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-center text-black mb-12 font-serif">
                {category.category}
              </h2>
              
              <div className={`grid gap-8 ${category.plans.length === 2 ? 'md:grid-cols-2 max-w-5xl mx-auto' : 'md:grid-cols-2 lg:grid-cols-4'}`}>
                {category.plans.map((plan, planIndex) => (
                  <Card 
                    key={planIndex} 
                    className={`border-2 ${plan.color} shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 relative ${
                      plan.popular ? 'ring-2 ring-yellow-400 ring-offset-2' : ''
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-medium flex items-center">
                          <Star className="h-4 w-4 mr-1" />
                          Most Popular
                        </span>
                      </div>
                    )}
                    
                    {plan.premium && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center">
                          <Crown className="h-4 w-4 mr-1" />
                          Enterprise
                        </span>
                      </div>
                    )}

                    <CardContent className="p-8">
                      <div className="flex items-center mb-6">
                        <div className="bg-yellow-100 p-3 rounded-full mr-4">
                          {plan.icon}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-black font-serif">{plan.name}</h3>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 mb-6 leading-relaxed">{plan.description}</p>
                      
                      <div className="mb-8">
                        <div className="flex items-baseline">
                          <span className="text-4xl font-bold text-black">{plan.price}</span>
                          <span className="text-gray-600 ml-1">{plan.period}</span>
                        </div>
                        {plan.originalPrice && (
                          <div className="mt-1">
                            <span className="text-sm text-gray-500 line-through">{plan.originalPrice}</span>
                            <span className="text-sm text-green-600 ml-2 font-medium">Save 28%</span>
                          </div>
                        )}
                      </div>
                      
                      <ul className="space-y-3 mb-8">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start text-gray-700">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <Button 
                        variant={plan.buttonStyle as any}
                        className={`w-full rounded-full ${
                          plan.buttonStyle === 'default' 
                            ? 'bg-yellow-400 hover:bg-yellow-500 text-black font-medium' 
                            : ''
                        }`}
                      >
                        {plan.buttonText}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-8 font-serif">
            Which Option Is Right for You?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gray-100 p-6 rounded-2xl mb-4">
                <Smartphone className="h-12 w-12 mx-auto text-gray-600" />
              </div>
              <h3 className="text-lg font-bold text-black mb-2 font-serif">Individual Exploration</h3>
              <p className="text-gray-600 text-sm mb-4">
                Start with the free Discover plan, upgrade to Explore for full AI coaching
              </p>
              <span className="text-sm text-yellow-600 font-medium">Best for: Self-directed learners</span>
            </div>
            
            <div className="text-center">
              <div className="bg-teal-100 p-6 rounded-2xl mb-4">
                <Users className="h-12 w-12 mx-auto text-teal-600" />
              </div>
              <h3 className="text-lg font-bold text-black mb-2 font-serif">Guided Growth</h3>
              <p className="text-gray-600 text-sm mb-4">
                Join Live Cohorts for expert guidance and peer learning
              </p>
              <span className="text-sm text-teal-600 font-medium">Best for: Structured learning</span>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 p-6 rounded-2xl mb-4">
                <Building className="h-12 w-12 mx-auto text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-black mb-2 font-serif">Team Transformation</h3>
              <p className="text-gray-600 text-sm mb-4">
                Business workshops for organizational mindset development
              </p>
              <span className="text-sm text-purple-600 font-medium">Best for: Teams & leaders</span>
            </div>
            
            <div className="text-center">
              <div className="bg-yellow-100 p-6 rounded-2xl mb-4">
                <Star className="h-12 w-12 mx-auto text-yellow-600" />
              </div>
              <h3 className="text-lg font-bold text-black mb-2 font-serif">Complete Journey</h3>
              <p className="text-gray-600 text-sm mb-4">
                Combine app + cohorts for comprehensive mindset mastery
              </p>
              <span className="text-sm text-yellow-600 font-medium">Best for: Committed growth</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-16 font-serif">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-black mb-3">Can I switch between monthly and yearly billing?</h3>
              <p className="text-gray-700">
                Yes, you can change your billing cycle at any time. If you switch from monthly to yearly, you'll receive a prorated credit and start saving immediately.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-black mb-3">Do Explore subscribers get discounts on Live Cohorts?</h3>
              <p className="text-gray-700">
                Yes! Explore subscribers receive a 30% discount on all Live Cohorts, making the combined journey more affordable.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-black mb-3">What's included in the Business Workshop pricing?</h3>
              <p className="text-gray-700">
                The £3,500+ pricing includes 2 days of intensive workshop delivery, pre-workshop team assessment, custom curriculum design, and basic follow-up support. Travel expenses are additional for on-site delivery.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-black mb-3">Is there a free trial for the Explore plan?</h3>
              <p className="text-gray-700">
                Yes, we offer a 7-day free trial for the Explore plan so you can experience the full power of MindsetOS AI coaching before committing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-yellow-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 font-serif">
            Ready to Begin Your Mindset Journey?
          </h2>
          <p className="text-xl text-gray-700 mb-12">
            Start with our free Discover plan and upgrade as you grow. Your transformation begins today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-8 py-4 text-lg rounded-full"
            >
              Start Free Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-4 text-lg rounded-full border-gray-300 hover:bg-gray-50"
            >
              Talk to Our Team
            </Button>
          </div>
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
                <Link href="/pricing" className="block text-gray-300 hover:text-white transition-colors">
                  Pricing
                </Link>
              </div>
            </div>

            <div className="flex justify-center md:justify-end space-x-4">
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
                <Star className="h-6 w-6" />
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