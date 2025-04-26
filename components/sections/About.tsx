"use client"

import { Users, Target, Lightbulb } from 'lucide-react'

export default function About() {
  return (
    <section className="relative py-12 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
        <div className="flex flex-col space-y-8 bg-gray-900/20 rounded-3xl p-8 md:p-12 border border-gray-700/30">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">About LaxiZen</h1>
            <p className="text-gray-400">Transforming the way businesses handle phone calls with AI</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-gray-800/30 rounded-xl border border-gray-700/30">
              <Lightbulb className="h-12 w-12 text-white mb-4" />
              <h2 className="text-xl font-semibold text-white mb-2">Our Vision</h2>
              <p className="text-gray-400">To revolutionize business communication by making every phone call more efficient, productive, and valuable through the power of AI.</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-gray-800/30 rounded-xl border border-gray-700/30">
              <Target className="h-12 w-12 text-white mb-4" />
              <h2 className="text-xl font-semibold text-white mb-2">Our Mission</h2>
              <p className="text-gray-400">To empower businesses with AI-powered call management solutions that save time, reduce costs, and improve customer experiences.</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-gray-800/30 rounded-xl border border-gray-700/30">
              <Users className="h-12 w-12 text-white mb-4" />
              <h2 className="text-xl font-semibold text-white mb-2">Our Team</h2>
              <p className="text-gray-400">A passionate group of AI experts, engineers, and business professionals dedicated to building the future of business communication.</p>
            </div>
          </div>

          <div className="space-y-6 text-gray-300">
            <div>
              <h2 className="text-xl font-semibold text-white mb-2">Our Story</h2>
              <p className="text-gray-400">
                Laxizen was born from a simple observation: businesses waste countless hours on phone calls that could be automated or streamlined. 
                Our founders, with backgrounds in AI and business operations, saw an opportunity to transform this essential but often inefficient 
                aspect of business communication.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-2">What We Do</h2>
              <p className="text-gray-400">
                We develop cutting-edge AI solutions that help businesses manage their phone calls more effectively. Our technology can:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-400">
                <li>Automatically transcribe and analyze calls</li>
                <li>Provide real-time assistance during calls</li>
                <li>Generate summaries and action items</li>
                <li>Integrate with existing business tools</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-2">Our Values</h2>
              <ul className="list-disc pl-6 space-y-1 text-gray-400">
                <li><span className="font-medium text-white">Innovation:</span> Constantly pushing the boundaries of what&apos;s possible with AI</li>
                <li><span className="font-medium text-white">Customer Focus:</span> Building solutions that solve real business problems</li>
                <li><span className="font-medium text-white">Transparency:</span> Being open and honest in all our interactions</li>
                <li><span className="font-medium text-white">Excellence:</span> Committed to delivering the highest quality products and services</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-2">Our Story</h2>
              <p className="text-gray-400">
                At Laxizen, we&apos;re revolutionizing the way businesses connect with their potential customers. Our AI-powered cold calling platform combines cutting-edge technology with human-like conversation capabilities to create meaningful connections at scale.
              </p>
              <p className="text-gray-400">
                We understand that every business&apos;s needs are unique. That&apos;s why we&apos;ve built a platform that&apos;s not just powerful, but also flexible and customizable to your specific requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 