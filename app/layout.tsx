import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'LocalWebVentures - Custom Websites, Dashboards & Web Solutions for Local Businesses',
  description: 'We build custom websites, event booking systems, admin dashboards, online stores, and web solutions for local businesses. From personal portfolios to school systems - if you can think it, we can build it. Get your custom web solution today.',
  keywords: 'custom websites, event booking systems, admin dashboards, online stores, personal portfolios, school systems, community hubs, web development, local business websites, custom dashboards, web solutions, website design, local SEO, performance optimization, responsive design, custom web applications',
  authors: [{ name: 'LocalWebVentures' }],
  creator: 'LocalWebVentures',
  publisher: 'LocalWebVentures',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://localwebventures.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'LocalWebVentures - Custom Websites, Dashboards & Web Solutions for Local Businesses',
    description: 'We build custom websites, event booking systems, admin dashboards, online stores, and web solutions for local businesses. From personal portfolios to school systems - if you can think it, we can build it.',
    url: 'https://localwebventures.com',
    siteName: 'LocalWebVentures',
    images: [
      {
        url: '/LocalWebVentures-logo.png',
        width: 444,
        height: 444,
        alt: 'LocalWebVentures Logo - Custom Web Solutions and Websites',
      },
    ],
    locale: 'en_US',
    type: 'website',
    countryName: 'Philippines',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LocalWebVentures - Custom Websites, Dashboards & Web Solutions for Local Businesses',
    description: 'We build custom websites, event booking systems, admin dashboards, online stores, and web solutions for local businesses. From personal portfolios to school systems - if you can think it, we can build it.',
    images: ['/LocalWebVentures-logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/LocalWebVentures-logo.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/LocalWebVentures-logo.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/LocalWebVentures-logo.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/LocalWebVentures-logo.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/LocalWebVentures-logo.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Additional Social Media Meta Tags */}
        <meta property="og:image:width" content="444" />
        <meta property="og:image:height" content="444" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:alt" content="LocalWebVentures Logo - Custom Web Solutions and Websites" />
        
        {/* Twitter Card Additional Meta */}
        <meta name="twitter:image:alt" content="LocalWebVentures Logo - Custom Web Solutions and Websites" />
        
        {/* Business Information */}
        <meta property="og:email" content="localwebteamandservices@gmail.com" />
        <meta property="og:phone_number" content="09059666509" />
        <meta property="og:street_address" content="Philippines" />
        <meta property="og:locality" content="Philippines" />
        <meta property="og:region" content="Philippines" />
        <meta property="og:country_name" content="Philippines" />
      </head>
      <body className={`${inter.className} antialiased bg-white`}>
        {children}
      </body>
    </html>
  )
}
