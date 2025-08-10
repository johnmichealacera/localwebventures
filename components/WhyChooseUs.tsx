'use client'

import { motion } from 'framer-motion'
import { CheckCircle, ArrowRight, TrendingUp, Shield, Zap, Users } from 'lucide-react'

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-white">
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
            Here's Where We're Headed
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're proud to have launched our first projects in 2025 — and we're on track to help 
            dozens of local businesses this year. Want to be one of them? Let's talk.
          </p>
        </motion.div>

        {/* Our Commitment */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8 md:p-12 mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Our Commitment to Your Success
            </h3>
            <p className="text-lg text-gray-600">
              When you choose LocalWebVentures, you're not just getting a website — 
              you're getting a partner committed to your digital growth.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Zap className="w-8 h-8 text-primary-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Performance Promise</h4>
              <p className="text-gray-600">
                We commit to building websites that load fast, rank well, and convert visitors. 
                Your success is our success.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Shield className="w-8 h-8 text-accent-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Ongoing Support</h4>
              <p className="text-gray-600">
                Launch is just the beginning. We provide ongoing support to ensure your website 
                continues to perform and grow with your business.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Users className="w-8 h-8 text-primary-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Partnership Approach</h4>
              <p className="text-gray-600">
                We work closely with you throughout the process, ensuring every decision 
                aligns with your business goals and vision.
              </p>
            </div>
          </div>
        </motion.div>

        {/* What Sets Us Apart */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            What Sets Us Apart
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary-100 p-2 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Modern Technology Stack</h4>
                  <p className="text-gray-600">
                    We use the latest web technologies and best practices to ensure your website 
                    is fast, secure, and future-proof.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-accent-100 p-2 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-accent-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Mobile-First Design</h4>
                  <p className="text-gray-600">
                    Every website is designed mobile-first, ensuring your customers have a 
                    great experience on any device.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary-100 p-2 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">SEO Built-In</h4>
                  <p className="text-gray-600">
                    Search engine optimization is built into every website from the ground up, 
                    helping you get found by the right customers.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-accent-100 p-2 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-accent-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Fast Loading Times</h4>
                  <p className="text-gray-600">
                    We optimize every element for speed, ensuring your website loads quickly 
                    and keeps visitors engaged.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary-100 p-2 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Conversion Focused</h4>
                  <p className="text-gray-600">
                    Every design decision is made with conversion in mind, helping you turn 
                    visitors into customers.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-accent-100 p-2 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-accent-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Ongoing Optimization</h4>
                  <p className="text-gray-600">
                    We continuously monitor and optimize your website to ensure it performs 
                    at its best and drives results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Join Our Growing Portfolio?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Let's build something amazing together. Your success story could be next.
            </p>
            <a 
              href="https://zcal.co/i/evo4SAWN"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-primary-600 hover:bg-gray-50 font-semibold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              📅 Book a Consultation
              <ArrowRight className="w-5 h-5 ml-2 inline" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
