import { cn } from '@/lib/utils'
import { Target, Lightbulb, Users } from 'lucide-react'

const visionMission = [
  {
    icon: Target,
    title: "Our Vision",
    description: "Revolutionizing business communication through AI-powered meaningful interactions."
  },
  {
    icon: Lightbulb,
    title: "Our Mission",
    description: "Empowering sales teams with intelligent tools for better customer relationships."
  },
  {
    icon: Users,
    title: "Our Values",
    description: "Innovation, transparency, and customer success drive our platform's development."
  }
]

export default function VisionMission() {
  return (
    <section className="relative py-12 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
        <div className="flex flex-col items-center space-y-12 bg-gray-900/20 rounded-3xl p-8 md:p-12 border border-gray-700/30">
          <div className="text-center max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Vision & Mission</h2>
            <p className="text-gray-400">
              Our vision is to revolutionize the way businesses connect with their customers. We believe that AI shouldn&apos;t replace human connection but enhance it, making meaningful conversations scalable and accessible to businesses of all sizes.
            </p>
            <p className="text-gray-400">
              We&apos;re committed to building technology that&apos;s not just powerful but also ethical and responsible. Our AI is designed to respect privacy, maintain transparency, and create genuine value for both businesses and their customers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {visionMission.map((item, index) => (
              <div 
                key={index}
                className="flex flex-col items-center text-center p-6 rounded-xl bg-gray-800/30 border border-gray-700/50 backdrop-blur-sm hover:bg-gray-800/50 transition-colors duration-300"
              >
                <div className="p-3 rounded-full bg-gray-700/50 mb-4">
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-medium mb-2 text-white">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 