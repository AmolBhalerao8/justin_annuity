'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { 
    name: 'Services', 
    href: '#',
    children: [
      { name: 'Annuity Solutions', href: '/annuity-solutions' },
      { name: 'Retirement Planning', href: '/retirement-planning' },
    ]
  },
  { name: 'Why Choose Us', href: '/why-choose-us' },
  { name: 'Resources', href: '/resources' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      )}
    >
      <nav className="container-custom" aria-label="Main navigation">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-navy-800 to-navy-900 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-gold-400 font-serif font-bold text-xl">J</span>
            </div>
            <div className="hidden sm:block">
              <span className={cn(
                "font-serif text-xl font-bold transition-colors",
                scrolled ? "text-navy-900" : "text-white"
              )}>
                JUSTIN
              </span>
              <span className={cn(
                "block text-xs tracking-wider uppercase transition-colors",
                scrolled ? "text-navy-600" : "text-white/80"
              )}>
                Retirement Partners
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <div 
                key={item.name} 
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.children ? (
                  <>
                    <button
                      className={cn(
                        "flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-all",
                        scrolled 
                          ? "text-navy-700 hover:text-navy-900 hover:bg-navy-50" 
                          : "text-white/90 hover:text-white hover:bg-white/10"
                      )}
                    >
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                    {activeDropdown === item.name && (
                      <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-xl border border-navy-100 py-2 animate-slide-down">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block px-4 py-3 text-sm text-navy-700 hover:bg-navy-50 hover:text-navy-900 transition-colors"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      "px-4 py-2 text-sm font-medium rounded-lg transition-all",
                      scrolled 
                        ? "text-navy-700 hover:text-navy-900 hover:bg-navy-50" 
                        : "text-white/90 hover:text-white hover:bg-white/10"
                    )}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a 
              href="tel:+18786730209" 
              className={cn(
                "flex items-center text-sm font-medium transition-colors",
                scrolled ? "text-navy-700 hover:text-navy-900" : "text-white/90 hover:text-white"
              )}
            >
              <Phone className="h-4 w-4 mr-2" />
              (878) 673-0209
            </a>
            <Link
              href="/contact"
              className="btn-gold text-sm px-5 py-2.5"
            >
              Free Consultation
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className={cn(
              "lg:hidden p-2 rounded-lg transition-colors",
              scrolled ? "text-navy-900 hover:bg-navy-50" : "text-white hover:bg-white/10"
            )}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white rounded-2xl shadow-xl mt-2 p-4 animate-slide-down">
            <div className="space-y-1">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.children ? (
                    <div className="space-y-1">
                      <span className="block px-4 py-3 text-sm font-semibold text-navy-900">
                        {item.name}
                      </span>
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block px-6 py-2 text-sm text-navy-600 hover:text-navy-900 hover:bg-navy-50 rounded-lg transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="block px-4 py-3 text-sm font-medium text-navy-700 hover:text-navy-900 hover:bg-navy-50 rounded-lg transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-navy-100 space-y-3">
              <a 
                href="tel:+18786730209" 
                className="flex items-center justify-center px-4 py-3 text-sm font-medium text-navy-700 hover:bg-navy-50 rounded-lg transition-colors"
              >
                <Phone className="h-4 w-4 mr-2" />
                (878) 673-0209
              </a>
              <Link
                href="/contact"
                className="block w-full btn-gold text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Free Consultation
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
