'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ArrowRight, CheckCircle, Globe, Calendar, Database, ShoppingCart } from 'lucide-react'

export default function CallToAction() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessType: '',
    projectType: '',
    message: '',
    referralSource: '',
    website: '' // honeypot field
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Check honeypot field - if filled, it's likely a bot
    if (formData.website) {
      console.log('Bot detected via honeypot field')
      return
    }
    
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.projectType || !formData.referralSource) {
      alert('Please fill in all required fields.')
      return
    }
    
    // Check if name looks suspicious (very short or very long)
    if (formData.name.trim().length < 2 || formData.name.trim().length > 50) {
      alert('Please enter a valid name.')
      return
    }
    
    // Check if email looks valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address.')
      return
    }
    
    setIsSubmitting(true)
    
    try {
      const formDataToSend = new FormData()
      formDataToSend.append('name', formData.name.trim())
      formDataToSend.append('email', formData.email.trim())
      formDataToSend.append('phone', formData.phone.trim())
      formDataToSend.append('businessType', formData.businessType.trim())
      formDataToSend.append('projectType', formData.projectType)
      formDataToSend.append('message', formData.message.trim())
      formDataToSend.append('referralSource', formData.referralSource)
      
      const response = await fetch('https://formspree.io/f/myzpljne', {
        method: 'POST',
        body: formDataToSend,
        headers: {
          'Accept': 'application/json'
        }
      })
      
      if (response.ok) {
        setIsSubmitted(true)
        // Reset form after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false)
          setFormData({ 
            name: '', 
            email: '', 
            phone: '', 
            businessType: '', 
            projectType: '', 
            message: '', 
            referralSource: '', 
            website: '' 
          })
        }, 5000)
      } else {
        throw new Error('Form submission failed')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('There was an error submitting your form. Please try again or contact us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const projectTypes = [
    'Custom Website',
    'Event Booking System',
    'Admin Dashboard',
    'E-commerce Store',
    'Personal Portfolio',
    'School Management System',
    'Community Platform',
    'Other Custom Solution'
  ]

  return (
    <section id="contact" className="section-padding bg-gradient-primary">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Stop Chasing Customers.{' '}
              <span className="text-gradient">Start Converting Them.</span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-8">
              Ready to take your business online with a custom web solution? 
              Whether you need a simple website or a complex application, 
              we're here to build exactly what you need.
            </p>

            {/* What We Can Build */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                What We Can Build for You
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-primary-600" />
                  <span className="text-gray-700">Custom Websites</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-accent-600" />
                  <span className="text-gray-700">Event Booking Systems</span>
                </div>
                <div className="flex items-center gap-3">
                  <Database className="w-5 h-5 text-primary-600" />
                  <span className="text-gray-700">Admin Dashboards</span>
                </div>
                <div className="flex items-center gap-3">
                  <ShoppingCart className="w-5 h-5 text-accent-600" />
                  <span className="text-gray-700">E-commerce Stores</span>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-500" />
                <span className="text-gray-700">Custom solutions built for your specific needs</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-500" />
                <span className="text-gray-700">Fast, responsive, and SEO-optimized</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-500" />
                <span className="text-gray-700">Ongoing support and maintenance</span>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-white/50 backdrop-blur-sm rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-3">Ready to get started?</h4>
              <p className="text-gray-600 mb-4">
                Let's discuss your project and see how we can help bring your vision to life.
              </p>
              <div className="text-sm text-gray-600">
                <p>📧 localwebteamandservices@gmail.com</p>
                <p>📱 09059666509</p>
                <p>⏰ Available for consultations Monday-Sunday</p>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-xl"
          >
            {!isSubmitted ? (
              <>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Let's Build Something Amazing Together
                </h3>
                
                <form 
                  onSubmit={handleSubmit} 
                  action="https://formspree.io/f/myzpljne"
                  method="POST"
                  className="space-y-6"
                >
                  {/* Hidden honeypot field for spam protection */}
                  <div style={{ display: 'none' }}>
                    <input
                      type="text"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      tabIndex={-1}
                      autoComplete="off"
                      aria-hidden="true"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="09123456789"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="businessType" className="block text-sm font-medium text-gray-700 mb-2">
                        Business Type
                      </label>
                      <input
                        type="text"
                        id="businessType"
                        name="businessType"
                        value={formData.businessType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Restaurant, Retail, Service, etc."
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                      What are you looking to build? *
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      required
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Select a project type</option>
                      {projectTypes.map((type, index) => (
                        <option key={index} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="referralSource" className="block text-sm font-medium text-gray-700 mb-2">
                      How did you hear about us? *
                    </label>
                    <select
                      id="referralSource"
                      name="referralSource"
                      required
                      value={formData.referralSource}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Select an option</option>
                      <option value="Google Search">Google Search</option>
                      <option value="Social Media">Social Media</option>
                      <option value="Referral">Referral from friend/client</option>
                      <option value="Portfolio">Saw our portfolio</option>
                      <option value="Advertisement">Advertisement</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Tell us about your project
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Describe your vision, goals, and any specific requirements..."
                    />
                  </div>

                  {/* Anti-spam notice */}
                  <div className="text-xs text-gray-500 text-center">
                    <p>💡 <strong>Pro tip:</strong> To enable reCAPTCHA protection, go to your Formspree dashboard and enable it in the form settings.</p>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        📩 Let's Build Your Custom Web Solution
                        <ArrowRight className="w-5 h-5 ml-2 inline" />
                      </>
                    )}
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                <p className="text-gray-600 mb-4">
                  Your message has been sent successfully! We'll get back to you within 24 hours.
                </p>
                <p className="text-sm text-gray-500">
                  You should also receive a confirmation email from Formspree. In the meantime, feel free to check out our portfolio or reach out directly.
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
