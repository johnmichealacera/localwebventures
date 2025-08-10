'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Facebook, ArrowUp, Youtube } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 md:gap-3 mb-4">
              <Image
                src="/LocalWebVentures-logo.png"
                alt="LocalWebVentures Logo"
                width={48}
                height={48}
                className="w-10 h-10 md:w-12 md:h-12"
              />
              <h3 className="text-xl md:text-2xl font-bold text-gradient">
                LocalWebVentures
              </h3>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              We build high-performance, conversion-focused websites that help local businesses dominate their markets online. 90+ Lighthouse scores guaranteed.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/localwebprojectsandservices" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors duration-200">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.youtube.com/@localwebventures" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors duration-200">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#services" className="hover:text-white transition-colors duration-200">Custom Websites</a></li>
              <li><a href="#services" className="hover:text-white transition-colors duration-200">Performance Optimization</a></li>
              <li><a href="#services" className="hover:text-white transition-colors duration-200">Local SEO</a></li>
              <li><a href="#services" className="hover:text-white transition-colors duration-200">Website Maintenance</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary-400" />
                <span>09059666509</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary-400" />
                <span>localwebteamandservices@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-primary-400" />
                <span>Serving nationwide</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} LocalWebVentures. All rights reserved.
            </div>
            {/* TODO: Add privacy policy, terms of service, and sitemap */}
            {/* <div className="flex items-center space-x-6 text-sm text-gray-400">
              <a href="/privacy" className="hover:text-white transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-white transition-colors duration-200">
                Terms of Service
              </a>
              <a href="/sitemap" className="hover:text-white transition-colors duration-200">
                Sitemap
              </a>
            </div> */}
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-40"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <ArrowUp className="w-6 h-6 mx-auto" />
      </motion.button>
    </footer>
  )
}
