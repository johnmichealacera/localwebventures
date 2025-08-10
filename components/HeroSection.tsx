'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Zap, Globe, Smartphone } from 'lucide-react'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-primary">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-accent-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Speed Lines Animation */}
      <div className="absolute inset-0 speed-lines opacity-20"></div>

      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6 md:mb-8"
          >
            <Image
              src="/LocalWebVentures-logo.png"
              alt="LocalWebVentures Logo"
              width={120}
              height={120}
              className="mx-auto w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32"
              priority
            />
          </motion.div>
          
          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            We Don't Just Build{' '}
            <span className="text-gradient">Websites</span>
            <br className="hidden sm:block" />
            We Create{' '}
            <span className="text-gradient">Web Solutions</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-6 md:mb-8 max-w-4xl mx-auto leading-relaxed px-4">
            From custom websites and event booking systems to admin dashboards and online stores. 
            <br className="hidden md:block" />
            <span className="font-semibold">If you can think it, we can build it.</span>
          </p>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary text-base sm:text-lg md:text-xl mb-6 md:mb-8 px-6 md:px-8"
          >
            🚀 Start Your Custom Web Solution
            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 ml-2 sm:ml-3 inline" />
          </motion.button>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-6 text-xs sm:text-sm text-gray-600 px-4">
            <div className="flex items-center gap-1 sm:gap-2">
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-primary-600" />
              <span className="hidden sm:inline">Custom Development</span>
              <span className="sm:hidden">Custom Dev</span>
            </div>
            <div className="flex items-center gap-1 sm:gap-2">
              <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-accent-600" />
              <span className="hidden sm:inline">Event Booking Systems</span>
              <span className="sm:hidden">Event Systems</span>
            </div>
            <div className="flex items-center gap-1 sm:gap-2">
              <Smartphone className="w-4 h-4 sm:w-5 sm:h-5 text-primary-600" />
              <span className="hidden sm:inline">Admin Dashboards</span>
              <span className="sm:hidden">Dashboards</span>
            </div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-gray-400 rounded-full mt-2"
            ></motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
