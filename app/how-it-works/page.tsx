import { Brain, Compass, Target, Users, Lightbulb } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HowItWorksPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-black font-serif mb-6">
            How MindsetOS Works
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-12">
            A journey designed to grow your mental and emotional fitness —
            blending personalised insights, AI coaching, and live group learning.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          <div className="bg-yellow-50 rounded-xl p-8 shadow-md">
            <Compass className="h-10 w-10 text-yellow-600 mb-4" />
            <h3 className="text-xl font-bold mb-3">1. Map Your Mindset</h3>
            <p className="text-gray-700">
              Complete our deep-dive diagnostic to reveal your unique blend of the
              7 mindsets — your starting point for growth.
            </p>
          </div>
          <div className="bg-yellow-50 rounded-xl p-8 shadow-md">
            <Brain className="h-10 w-10 text-yellow-600 mb-4" />
            <h3 className="text-xl font-bold mb-3">2. AI Coaching</h3>
            <p className="text-gray-700">
              Get tailored guidance from an AI trained in expert coaching
              psychology, available anytime.
            </p>
          </div>
          <div className="bg-yellow-50 rounded-xl p-8 shadow-md">
            <Target className="h-10 w-10 text-yellow-600 mb-4" />
            <h3 className="text-xl font-bold mb-3">3. Live Cohorts</h3>
            <p className="text-gray-700">
              Learn alongside others in guided group sessions led by
              performance psychologists and expert coaches.
            </p>
          </div>
        </div>

        <div className="text-center mt-16">
          <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium" asChild>
            <Link href="/join">Start Your Journey</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}