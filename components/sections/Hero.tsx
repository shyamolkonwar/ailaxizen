"use client"

import { useState, useRef } from 'react'
import { useToast } from '@/hooks/use-toast'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { submitEmail } from '@/lib/supabase-client'
import { ParticleBackground } from '@/components/ui/particle-background'
import ReCAPTCHA from 'react-google-recaptcha'
import { Loader2 } from 'lucide-react'

export default function Hero() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isRecaptchaVerified, setIsRecaptchaVerified] = useState(false)
  const [isRecaptchaLoading, setIsRecaptchaLoading] = useState(false)
  const recaptchaRef = useRef<ReCAPTCHA>(null)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      })
      return
    }

    if (process.env.NODE_ENV === 'production' && !isRecaptchaVerified) {
      toast({
        title: "Verification required",
        description: "Please complete the reCAPTCHA verification.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)
    
    try {
      const { error } = await submitEmail(email)
      
      if (error) {
        throw new Error(error.message)
      }
      
      toast({
        title: "Success!",
        description: "You've been added to our beta waitlist.",
      })
      
      setEmail('')
      if (recaptchaRef.current) {
        recaptchaRef.current.reset()
      }
      setIsRecaptchaVerified(false)
    } catch (error: any) {
      toast({
        title: "Something went wrong",
        description: error.message === "duplicate key value violates unique constraint" 
          ? "This email is already registered." 
          : "Failed to submit your email. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleRecaptchaChange = (token: string | null) => {
    setIsRecaptchaVerified(!!token)
  }

  const handleRecaptchaExpired = () => {
    setIsRecaptchaVerified(false)
  }

  const handleRecaptchaError = () => {
    setIsRecaptchaVerified(false)
    toast({
      title: "Verification failed",
      description: "Please try the reCAPTCHA again.",
      variant: "destructive",
    })
  }

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <ParticleBackground />
      <div className="container px-4 md:px-6 relative z-10 py-12 md:py-24 lg:py-32">
        <div className="flex flex-col items-center space-y-4 text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter animate-fade-up">
            Automate Cold Calling,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
              Book More Meetings
            </span>
          </h1>
          <p className="text-muted-foreground text-xl md:text-2xl max-w-[700px] animate-fade-up animation-delay-200">
            Join our beta to streamline your outreach and close deals faster.
          </p>
          <div className="w-full max-w-md space-y-2 mt-6 animate-fade-up animation-delay-300">
            <form onSubmit={handleSubmit} className="flex w-full max-w-md flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className={cn(
                  "bg-background/90 border-white/20 text-white h-12",
                  "focus:border-white focus:ring-1 focus:ring-white"
                )}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubmitting}
                required
              />
              <Button 
                type="submit"
                className={cn(
                  "bg-white text-black hover:bg-gray-200 h-12",
                  "transition-all duration-200",
                  isSubmitting && "opacity-70 cursor-not-allowed"
                )}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Joining...
                  </>
                ) : "Join Beta Waitlist"}
              </Button>
            </form>
            {process.env.NODE_ENV === 'production' && (
              <div className="flex justify-center">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey="6Lfz0CQrAAAAAG1sQkQDVp7EGIHHG4gdGE1C_8Rg"
                  onChange={handleRecaptchaChange}
                  onExpired={handleRecaptchaExpired}
                  onErrored={handleRecaptchaError}
                  asyncScriptOnLoad={() => setIsRecaptchaLoading(false)}
                />
              </div>
            )}
            <p className="text-xs text-muted-foreground text-center">
              No spam, just beta updates. We respect your privacy.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}