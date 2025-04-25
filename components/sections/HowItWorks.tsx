import { cn } from '@/lib/utils'

const steps = [
  {
    number: "01",
    title: "Sign Up for Beta",
    description: "Join the waitlist to get early access to our powerful cold calling platform."
  },
  {
    number: "02",
    title: "Set Up Campaign",
    description: "Upload contacts and configure your call settings to target the right prospects."
  },
  {
    number: "03",
    title: "Launch & Track",
    description: "Start calling and monitor results in real time with detailed analytics."
  },
  {
    number: "04",
    title: "Book Meetings",
    description: "Convert successful calls into scheduled meetings through our integrated calendar."
  }
]

export default function HowItWorks() {
  return (
    <section className="relative py-12 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
        <div className="flex flex-col items-center space-y-12 bg-gray-900/20 rounded-3xl p-8 md:p-12 border border-gray-700/30">
          <div className="space-y-3 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white">How It Works</h2>
            <p className="text-gray-400 max-w-[700px]">
              Follow these simple steps to revolutionize your cold calling strategy.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="group relative"
              >
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="absolute hidden lg:block h-[2px] bg-gray-700/50 top-8 left-[50%] w-full z-0"></div>
                )}
                
                <div className={cn(
                  "relative z-10 flex flex-col items-center text-center p-6",
                  "transition-all duration-300"
                )}>
                  <div className={cn(
                    "flex items-center justify-center w-16 h-16 rounded-full",
                    "bg-gray-800/30 border border-gray-700/50 text-white font-bold text-xl",
                    "mb-4 group-hover:border-white transition-all duration-300"
                  )}>
                    {step.number}
                  </div>
                  <h3 className="text-xl font-medium mb-2 text-white">{step.title}</h3>
                  <p className="text-gray-400 text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}