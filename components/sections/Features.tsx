import { cn } from '@/lib/utils'
import { LucidePhone, LucideCalendar, LucideBarChart3, LucideCheck } from 'lucide-react'

const features = [
  {
    title: "Automated Calling",
    description: "AI-powered calls with smart follow-ups for better outreach.",
    icon: LucidePhone
  },
  {
    title: "Meeting Scheduler",
    description: "Seamless calendar integration for instant meeting booking.",
    icon: LucideCalendar
  },
  {
    title: "Analytics Dashboard",
    description: "Real-time insights and performance tracking metrics.",
    icon: LucideBarChart3
  },
  {
    title: "Easy Setup",
    description: "Quick onboarding with no complex configuration needed.",
    icon: LucideCheck
  }
]

export default function Features() {
  return (
    <section id="features" className="relative py-12 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
        <div className="flex flex-col items-center justify-center space-y-8 bg-gray-900/20 rounded-3xl p-8 md:p-12 border border-gray-700/30">
          <div className="text-center max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Why Choose Our Platform?</h2>
            <p className="text-gray-400">
              Our platform is designed to streamline your cold calling process and increase your conversion rates.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex flex-col items-center text-center p-6 rounded-xl bg-gray-800/30 border border-gray-700/50 backdrop-blur-sm hover:bg-gray-800/50 transition-colors duration-300"
              >
                <div className="p-3 rounded-full bg-gray-700/50 mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-medium mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}