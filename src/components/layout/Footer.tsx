import Link from 'next/link'
import { Phone, Mail, MapPin, Shield, Lock, Award } from 'lucide-react'

const footerLinks = {
  services: [
    { name: 'Fixed Annuities', href: '/annuity-solutions#fixed' },
    { name: 'Indexed Annuities', href: '/annuity-solutions#indexed' },
    { name: 'Retirement Planning', href: '/retirement-planning' },
    { name: 'Income Strategies', href: '/retirement-planning#income' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Why Choose Us', href: '/why-choose-us' },
    { name: 'Our Team', href: '/about#team' },
    { name: 'Contact', href: '/contact' },
  ],
  resources: [
    { name: 'FAQs', href: '/resources#faq' },
    { name: 'Glossary', href: '/resources#glossary' },
    { name: 'Educational Guides', href: '/resources#guides' },
    { name: 'Retirement Calculator', href: '/resources#calculator' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Disclosures', href: '/disclosures' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      {/* Trust Bar */}
      <div className="border-b border-navy-800">
        <div className="container-custom py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex items-center justify-center space-x-3">
              <Shield className="h-8 w-8 text-gold-400" />
              <div className="text-left">
                <p className="font-semibold">Client-First Approach</p>
                <p className="text-sm text-navy-300">Your interests always come first</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Lock className="h-8 w-8 text-gold-400" />
              <div className="text-left">
                <p className="font-semibold">Secure & Confidential</p>
                <p className="text-sm text-navy-300">Your data is protected</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Award className="h-8 w-8 text-gold-400" />
              <div className="text-left">
                <p className="font-semibold">Licensed Professionals</p>
                <p className="text-sm text-navy-300">Experienced advisors</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-navy-700 to-navy-800 rounded-xl flex items-center justify-center border border-navy-600">
                <span className="text-gold-400 font-serif font-bold text-xl">J</span>
              </div>
              <div>
                <span className="font-serif text-xl font-bold text-white">JUSTIN</span>
                <span className="block text-xs tracking-wider uppercase text-navy-400">
                  Retirement Partners
                </span>
              </div>
            </Link>
            <p className="text-navy-300 mb-6 leading-relaxed">
              Helping you secure guaranteed income for a confident retirement. 
              Our experienced team is dedicated to your financial peace of mind.
            </p>
            <div className="space-y-3">
              <a href="tel:+18786730209" className="flex items-center text-navy-300 hover:text-white transition-colors">
                <Phone className="h-5 w-5 mr-3 text-gold-400" />
                (878) 673-0209
              </a>
              <a href="mailto:info@justinretirement.com" className="flex items-center text-navy-300 hover:text-white transition-colors">
                <Mail className="h-5 w-5 mr-3 text-gold-400" />
                info@justinretirement.com
              </a>
              <div className="flex items-start text-navy-300">
                <MapPin className="h-5 w-5 mr-3 text-gold-400 flex-shrink-0 mt-0.5" />
                <span>123 Financial District<br />Suite 500, New York, NY 10004</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-navy-300 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-navy-300 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-navy-300 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-navy-300 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="border-t border-navy-800">
        <div className="container-custom py-8">
          <div className="bg-navy-900/50 rounded-xl p-6 mb-8">
            <h4 className="font-semibold text-gold-400 mb-2">Important Disclosures</h4>
            <p className="text-navy-400 text-sm leading-relaxed">
              The information provided on this website is for educational purposes only and should not be 
              considered financial, tax, or legal advice. Annuities are long-term financial products designed 
              for retirement purposes. Withdrawals made before age 59½ may be subject to a 10% IRS penalty. 
              Guarantees are backed by the financial strength and claims-paying ability of the issuing insurance 
              company. Past performance is not indicative of future results. Please consult with a qualified 
              financial professional before making any investment decisions. No obligation consultations are 
              available to discuss your specific situation.
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center text-navy-400 text-sm">
            <p>© {new Date().getFullYear()} JUSTIN Retirement Partners. All rights reserved.</p>
            <p className="mt-2 md:mt-0">
              Designed with care for your retirement journey.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
