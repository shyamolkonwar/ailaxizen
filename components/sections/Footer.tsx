"use client"

import { useState } from 'react'
import { useToast } from '@/hooks/use-toast'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { submitEmail } from '@/lib/supabase-client'
import { Twitter, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()
  const year = new Date().getFullYear()
  const router = useRouter()

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

  const handleLinkClick = (e: React.MouseEvent, path: string) => {
    e.preventDefault()
    router.push(`/?page=${path}`)
  }

  return (
    <footer className="relative py-12 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 bg-gray-900/20 rounded-3xl p-8 md:p-12 border border-gray-700/30">
          {/* Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-white">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link 
                href="/" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                Home
              </Link>
              <Link 
                href="/?page=about" 
                onClick={(e) => handleLinkClick(e, 'about')}
                className="text-gray-400 hover:text-white transition-colors"
              >
                About
              </Link>
              <Link 
                href="/?page=contact" 
                onClick={(e) => handleLinkClick(e, 'contact')}
                className="text-gray-400 hover:text-white transition-colors"
              >
                Contact
              </Link>
              <Link 
                href="/?page=privacy" 
                onClick={(e) => handleLinkClick(e, 'privacy')}
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/?page=terms" 
                onClick={(e) => handleLinkClick(e, 'terms')}
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
            </nav>
          </div>
          
          {/* Social */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-white">Connect With Us</h3>
            <div className="flex space-x-4">
              {/* <a 
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-800/30 border border-gray-700/50 hover:bg-gray-800/50 transition-colors"
              >
                <Twitter className="h-5 w-5 text-white" />
                <span className="sr-only">Twitter</span>
              </a> */}
              <a 
                href="https://www.linkedin.com/company/laxizen/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-800/30 border border-gray-700/50 hover:bg-gray-800/50 transition-colors"
              >
                <Linkedin className="h-5 w-5 text-white" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a 
                href="mailto:contact@laxizen.fun"
                className="p-2 rounded-full bg-gray-800/30 border border-gray-700/50 hover:bg-gray-800/50 transition-colors"
              >
                <Mail className="h-5 w-5 text-white" />
                <span className="sr-only">Email</span>
              </a>
            </div>
            <p className="text-gray-400 text-sm pt-4">
              © {year} Fusion Focus. All rights reserved.
            </p>
          </div>
          
          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-white">Stay Updated</h3>
            <p className="text-gray-400 text-sm">
              Join our beta and get early access to our platform.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-gray-800/30 border-gray-700/50 text-white placeholder-gray-400"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubmitting}
              />
              <Button 
                type="submit"
                variant="outline"
                className="border-gray-700/50 hover:bg-gray-800/50 hover:text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Joining..." : "Join Beta"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  )
}