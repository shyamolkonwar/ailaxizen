'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Loader2 } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message')
      }

      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      })

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
    } catch (error: any) {
      toast({
        title: "Something went wrong",
        description: error.message || "Failed to send your message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          type="text"
          placeholder="Your Name"
          className="bg-gray-800/30 border-gray-700/50 text-white"
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          required
        />
        <Input
          type="email"
          placeholder="Your Email"
          className="bg-gray-800/30 border-gray-700/50 text-white"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          required
        />
      </div>
      <Input
        type="text"
        placeholder="Subject"
        className="bg-gray-800/30 border-gray-700/50 text-white"
        value={formData.subject}
        onChange={(e) => setFormData({...formData, subject: e.target.value})}
        required
      />
      <Textarea
        placeholder="Your Message"
        className="bg-gray-800/30 border-gray-700/50 text-white min-h-[150px]"
        value={formData.message}
        onChange={(e) => setFormData({...formData, message: e.target.value})}
        required
      />
      <Button
        type="submit"
        className="w-full bg-white text-black hover:bg-gray-200"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </Button>
    </form>
  )
} 