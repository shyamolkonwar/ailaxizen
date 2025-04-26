import { cn } from '@/lib/utils'
import { Card, CardContent } from '@/components/ui/card'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote: "This platform made cold calling effortless and doubled our meeting bookings!",
    name: "John D.",
    role: "Sales Manager"
  },
  {
    quote: "The automation saved us hours every week. A game-changer for our sales team.",
    name: "Sarah K.",
    role: "Founder"
  },
  {
    quote: "We built this to solve our own outreach struggles, and we're excited to share it with you.",
    name: "Alex Morgan",
    role: "CEO & Founder"
  }
]

export default function Testimonials() {
  return (
    <section className="bg-gray-900 py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-12">
          <div className="space-y-3 text-center">
            <h2 className="text-3xl md:text-4xl font-bold">What People Are Saying</h2>
            <p className="text-muted-foreground max-w-[700px]">
              Don&apos;t just take our word for it - hear from our early users.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className={cn(
                  "bg-gray-950/50 border-gray-800 text-white overflow-hidden",
                  "transition-all duration-300 hover:border-gray-700",
                  "hover:shadow-lg hover:shadow-black/30"
                )}
              >
                <CardContent className="p-6">
                  <Quote className="h-8 w-8 text-gray-600 mb-4" />
                  <p className="text-lg mb-6 italic">{testimonial.quote}</p>
                  <div className="flex items-center">
                    <div>
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-sm text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}