'use client'

import { motion } from 'framer-motion'
import { Zap, Search, Smartphone, Award, Target, Users, Globe, Database } from 'lucide-react'

export default function CredibilitySection() {
  return (
    <section className="section-padding bg-gradient-primary">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why LocalWebVentures Exists
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            We believe every local business deserves a website that works as hard as they do. 
            From custom websites and event booking systems to admin dashboards and online stores - 
            we create web solutions that drive real business growth.
          </p>
        </motion.div>

        {/* Core Values Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          <div className="text-center">
            <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Custom Web Development</h3>
            <p className="text-gray-600">
              Tailored web solutions built specifically for your business needs, from simple websites to complex applications.
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-accent-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-accent-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Event Booking Systems</h3>
            <p className="text-gray-600">
              Custom event management platforms that streamline booking, scheduling, and customer management for your business.
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Smartphone className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Admin Dashboards</h3>
            <p className="text-gray-600">
              Powerful admin panels and dashboards that give you complete control over your website and business operations.
            </p>
          </div>
        </motion.div>

        {/* Our Approach */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 md:p-12 shadow-xl mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Our Approach to Building Your Success
            </h3>
            <p className="text-lg text-gray-600">
              We don't just build websites - we build digital foundations for your business growth, 
              whether you need a simple website or a complex web application.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Target className="w-6 h-6 text-primary-600 mr-3" />
                Strategic Planning
              </h4>
              <p className="text-gray-600 mb-4">
                We start by understanding your business goals, target audience, and competitive landscape. 
                This ensures every design decision drives toward your success.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Business goal analysis</li>
                <li>• Target audience research</li>
                <li>• Competitive analysis</li>
                <li>• Conversion strategy planning</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Award className="w-6 h-6 text-accent-600 mr-3" />
                Quality Assurance
              </h4>
              <p className="text-gray-600 mb-4">
                Every website and web application undergoes rigorous testing for performance, accessibility, and user experience. 
                We're committed to delivering excellence that exceeds expectations.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Performance optimization</li>
                <li>• Cross-browser testing</li>
                <li>• Mobile responsiveness</li>
                <li>• Accessibility compliance</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* What We Can Build */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8 md:p-12 mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              What We Can Build for You
            </h3>
            <p className="text-lg text-gray-600">
              From simple websites to complex web applications - our capabilities are as diverse as your imagination.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Globe className="w-8 h-8 text-primary-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Custom Websites</h4>
              <p className="text-gray-600 text-sm">
                Professional websites tailored to your brand and business goals
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Database className="w-8 h-8 text-accent-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Event Booking Systems</h4>
              <p className="text-gray-600 text-sm">
                Complete event management and booking platforms
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Users className="w-8 h-8 text-primary-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Admin Dashboards</h4>
              <p className="text-gray-600 text-sm">
                Powerful admin panels for business management
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Smartphone className="w-8 h-8 text-accent-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Online Stores</h4>
              <p className="text-gray-600 text-sm">
                E-commerce solutions for selling online
              </p>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-lg text-gray-600 mb-6">
            Ready to see what we can build for your business?
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary"
          >
            🚀 Start Your Custom Web Solution
          </button>
        </motion.div>
      </div>
    </section>
  )
}
