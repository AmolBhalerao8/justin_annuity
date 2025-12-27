'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, CheckCircle, Send, Calendar, Shield } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    age: '',
    retirementTimeline: '',
    investmentAmount: '',
    message: '',
    preferredContact: 'phone',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  if (isSubmitted) {
    return (
      <>
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-navy-900 to-navy-800 min-h-screen flex items-center">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle className="h-10 w-10 text-white" />
              </div>
              <h1 className="heading-2 text-white mb-6">Thank You!</h1>
              <p className="body-large text-navy-200 mb-8">
                Your consultation request has been received. One of our advisors will 
                contact you within 24 hours to schedule your free consultation.
              </p>
              <div className="bg-navy-800/50 rounded-xl p-6 border border-navy-700">
                <p className="text-navy-300 text-sm">
                  In the meantime, feel free to explore our{' '}
                  <a href="/resources" className="text-gold-400 hover:underline">educational resources</a>{' '}
                  or chat with our AI assistant for quick answers.
                </p>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-navy-900 to-navy-800">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="heading-1 text-white mb-6">
              Schedule Your
              <span className="block text-gold-400">Free Consultation</span>
            </h1>
            <p className="body-large text-navy-200">
              Take the first step toward a secure retirement. Our experienced advisors 
              are ready to help you explore your options with no pressure and no obligation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="heading-3 text-navy-900 mb-6">Get in Touch</h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-navy-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="h-5 w-5 text-navy-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-navy-900">Phone</p>
                    <a href="tel:+18786730209" className="text-navy-600 hover:text-gold-600">
                      (878) 673-0209
                    </a>
                    <p className="text-sm text-navy-500">Toll-free, Mon-Fri 8am-6pm</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-navy-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="h-5 w-5 text-navy-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-navy-900">Email</p>
                    <a href="mailto:info@justinretirement.com" className="text-navy-600 hover:text-gold-600">
                      info@justinretirement.com
                    </a>
                    <p className="text-sm text-navy-500">We respond within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-navy-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="h-5 w-5 text-navy-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-navy-900">Office</p>
                    <p className="text-navy-600">
                      123 Financial District<br />
                      Suite 500<br />
                      New York, NY 10004
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-navy-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <Clock className="h-5 w-5 text-navy-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-navy-900">Hours</p>
                    <p className="text-navy-600">
                      Monday - Friday: 8am - 6pm<br />
                      Saturday: By appointment<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Trust Signals */}
              <div className="bg-navy-50 rounded-xl p-6">
                <h3 className="font-semibold text-navy-900 mb-4">What to Expect</h3>
                <ul className="space-y-3">
                  <li className="flex items-start text-sm">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-2 flex-shrink-0" />
                    <span className="text-navy-700">Free, no-obligation consultation</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-2 flex-shrink-0" />
                    <span className="text-navy-700">Personalized retirement analysis</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-2 flex-shrink-0" />
                    <span className="text-navy-700">Clear explanation of your options</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-2 flex-shrink-0" />
                    <span className="text-navy-700">No pressure, take your time</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-2 flex-shrink-0" />
                    <span className="text-navy-700">Licensed, experienced advisors</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-navy-50 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <Calendar className="h-6 w-6 text-gold-600 mr-3" />
                  <h2 className="heading-3 text-navy-900">Request Your Free Consultation</h2>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-navy-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-navy-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-navy-300"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-navy-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-navy-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-navy-300"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-navy-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-navy-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-navy-300"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-navy-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-navy-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-navy-300"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-navy-700 mb-2">
                        Your Age
                      </label>
                      <select
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-navy-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-navy-300 bg-white"
                      >
                        <option value="">Select...</option>
                        <option value="45-50">45-50</option>
                        <option value="51-55">51-55</option>
                        <option value="56-60">56-60</option>
                        <option value="61-65">61-65</option>
                        <option value="66-70">66-70</option>
                        <option value="71+">71+</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-navy-700 mb-2">
                        Retirement Timeline
                      </label>
                      <select
                        name="retirementTimeline"
                        value={formData.retirementTimeline}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-navy-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-navy-300 bg-white"
                      >
                        <option value="">Select...</option>
                        <option value="already">Already Retired</option>
                        <option value="1-2">1-2 Years</option>
                        <option value="3-5">3-5 Years</option>
                        <option value="6-10">6-10 Years</option>
                        <option value="10+">10+ Years</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-navy-700 mb-2">
                      Approximate Investment Amount
                    </label>
                    <select
                      name="investmentAmount"
                      value={formData.investmentAmount}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-navy-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-navy-300 bg-white"
                    >
                      <option value="">Select...</option>
                      <option value="100k-250k">$100,000 - $250,000</option>
                      <option value="250k-500k">$250,000 - $500,000</option>
                      <option value="500k-1m">$500,000 - $1,000,000</option>
                      <option value="1m+">$1,000,000+</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-navy-700 mb-2">
                      How can we help you? (Optional)
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your retirement goals, concerns, or questions..."
                      className="w-full px-4 py-3 border border-navy-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-navy-300 resize-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-navy-700 mb-2">
                      Preferred Contact Method
                    </label>
                    <div className="flex gap-4">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="preferredContact"
                          value="phone"
                          checked={formData.preferredContact === 'phone'}
                          onChange={handleChange}
                          className="mr-2"
                        />
                        <span className="text-navy-700">Phone</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="preferredContact"
                          value="email"
                          checked={formData.preferredContact === 'email'}
                          onChange={handleChange}
                          className="mr-2"
                        />
                        <span className="text-navy-700">Email</span>
                      </label>
                    </div>
                  </div>

                  <div className="flex items-start p-4 bg-navy-100 rounded-xl">
                    <Shield className="h-5 w-5 text-navy-600 mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-navy-600 text-sm">
                      Your information is secure and will never be shared. 
                      By submitting, you agree to our{' '}
                      <a href="/privacy" className="text-gold-600 hover:underline">Privacy Policy</a>.
                    </p>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-gold text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Submitting...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center">
                        <Send className="h-5 w-5 mr-2" />
                        Request Free Consultation
                      </span>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
