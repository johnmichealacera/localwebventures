'use client'

import { motion } from 'framer-motion'
import { Globe, Zap, Search, ArrowRight, CheckCircle, Calendar, ShoppingCart, Users, Database, Palette } from 'lucide-react'

export default function ServiceHighlights() {
  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Custom Website Development',
      description: 'Professional websites tailored to your brand and business goals',
      features: [
        'Responsive design that works on all devices',
        'Custom branding and visual identity',
        'Fast loading times with optimized assets',
        'Easy-to-use content management system',
        'Professional, conversion-focused layouts',
        'SEO-optimized structure and content'
      ]
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: 'Event Booking Systems',
      description: 'Complete event management and booking platforms',
      features: [
        'Custom event registration and booking',
        'Calendar integration and scheduling',
        'Payment processing and invoicing',
        'Attendee management and communication',
        'Event analytics and reporting',
        'Mobile-friendly booking experience'
      ]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Admin Dashboards',
      description: 'Powerful admin panels for business management',
      features: [
        'Custom admin interfaces and controls',
        'User management and permissions',
        'Data analytics and reporting tools',
        'Content management systems',
        'Business process automation',
        'Real-time monitoring and alerts'
      ]
    }
  ]

  const additionalServices = [
    {
      icon: <ShoppingCart className="w-6 h-6" />,
      title: 'E-commerce Solutions',
      description: 'Online stores and shopping platforms'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Community Platforms',
      description: 'Social networks and community hubs'
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: 'Personal Portfolios',
      description: 'Professional portfolio websites'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'School Management Systems',
      description: 'Educational platforms and LMS'
    }
  ]

  const additionalBenefits = [
    'Mobile-first responsive design',
    'Fast loading times (under 3 seconds)',
    'SEO-optimized structure and content',
    'Easy content updates and management',
    'Ongoing support and maintenance',
    'Analytics and performance tracking',
    'Security and data protection',
    'Scalable architecture for growth'
  ]

  return (
    <section className="section-padding bg-gray-50">
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
            Custom Web Solutions for Every Business Need
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            We specialize in creating custom web solutions that are fast, beautiful, and designed to help 
            local businesses grow their online presence. From simple websites to complex applications - 
            we build exactly what you need.
          </p>
        </motion.div>

        {/* Main Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              viewport={{ once: true }}
              className="card p-8"
            >
              <div className="text-primary-600 mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-3 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 md:p-12 shadow-xl mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              And So Much More
            </h3>
            <p className="text-lg text-gray-600">
              Our capabilities extend far beyond traditional websites. We can build any web solution your business needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-primary-600">{service.icon}</div>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h4>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Every Website Includes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8 md:p-12 shadow-xl mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Every Web Solution Includes
            </h3>
            <p className="text-lg text-gray-600">
              We believe in delivering value from day one. Here's what you get with every project.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalBenefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{benefit}</span>
              </div>
            ))}
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
            <ArrowRight className="w-5 h-5 ml-2 inline" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}
