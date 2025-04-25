"use client"

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Hero from '@/components/sections/Hero'
import Features from '@/components/sections/Features'
import Navbar from '@/components/sections/Navbar'
import { Toaster } from '@/components/ui/toaster'
import HowItWorks from '@/components/sections/HowItWorks'
import Footer from '@/components/sections/Footer'
import VisionMission from '@/components/sections/VisionMission'
import WhyWeBuild from '@/components/sections/WhyWeBuild'
import About from '@/components/sections/About'
import ContactUs from '@/components/sections/ContactUs'
import PrivacyPolicy from '@/components/sections/PrivacyPolicy'
import TermsOfService from '@/components/sections/TermsOfService'

export default function Home() {
  const searchParams = useSearchParams()
  const [currentPage, setCurrentPage] = useState<string | null>(null)

  useEffect(() => {
    const page = searchParams.get('page')
    setCurrentPage(page)
  }, [searchParams])

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <About />
      case 'contact':
        return <ContactUs />
      case 'privacy':
        return <PrivacyPolicy />
      case 'terms':
        return <TermsOfService />
      default:
        return (
          <>
            <Navbar />
            <Hero />
            <Features />
            <HowItWorks />
            <VisionMission />
            <WhyWeBuild />
            <Toaster />
          </>
        )
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {renderPage()}
      <Footer />
    </main>
  )
}