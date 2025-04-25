"use client"

import { useState, useRef } from 'react'
import { useToast } from '@/hooks/use-toast'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, MapPin, Phone, Check, X } from 'lucide-react'
import ReCAPTCHA from 'react-google-recaptcha'
import { Loader2 } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import ContactForm from '@/components/forms/ContactForm'

export default function ContactUs() {
  return (
    <section className="relative py-12 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
        <div className="flex flex-col space-y-8 bg-gray-900/20 rounded-3xl p-8 md:p-12 border border-gray-700/30">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Contact Us</h1>
            <p className="text-gray-400">Get in touch with our team for any questions or inquiries.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-white mt-1" />
                <div>
                  <h3 className="text-lg font-medium text-white">Email</h3>
                  <p className="text-gray-400">contact@laxizen.fun</p>
                </div>
              </div>
              
              {/* <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-white mt-1" />
                <div>
                  <h3 className="text-lg font-medium text-white">Phone</h3>
                  <p className="text-gray-400">+1 (555) 123-4567</p>
                </div>
              </div> */}
              
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-white mt-1" />
                <div>
                  <h3 className="text-lg font-medium text-white">Location</h3>
                  <p className="text-gray-400">Assam, India</p>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
} 