import Link from 'next/link'
import { ArrowRight, Shield, TrendingUp, Users, CheckCircle, Star, Phone, Calendar, ChevronRight } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Principal Protection',
    description: 'Your retirement savings are protected from market downturns with guaranteed minimum returns.',
  },
  {
    icon: TrendingUp,
    title: 'Growth Potential',
    description: 'Participate in market gains while maintaining downside protection for peace of mind.',
  },
  {
    icon: Users,
    title: 'Personalized Planning',
    description: 'Work one-on-one with experienced advisors who understand your unique retirement goals.',
  },
]

const benefits = [
  'Guaranteed lifetime income options',
  'Tax-deferred growth potential',
  'No market risk on principal',
  'Flexible payout options',
  'Legacy planning benefits',
  'Professional guidance included',
]

const testimonials = [
  {
    name: 'Robert & Susan M.',
    location: 'Phoenix, AZ',
    quote: 'JUSTIN helped us understand our options clearly. We now have guaranteed income that covers our essential expenses for life.',
    rating: 5,
  },
  {
    name: 'Margaret T.',
    location: 'Dallas, TX',
    quote: 'After losing sleep over market volatility, I finally have peace of mind knowing my retirement is secure.',
    rating: 5,
  },
  {
    name: 'James & Linda K.',
    location: 'Chicago, IL',
    quote: 'The team took the time to explain everything in plain English. No pressure, just helpful guidance.',
    rating: 5,
  },
]

const stats = [
  { value: '25+', label: 'Years Experience' },
  { value: '5,000+', label: 'Clients Served' },
  { value: '$500M+', label: 'Assets Protected' },
  { value: '98%', label: 'Client Satisfaction' },
]

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gold-400 rounded-full filter blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500 rounded-full filter blur-3xl" />
        </div>
        
        <div className="container-custom relative z-10 pt-32 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full text-sm mb-6 backdrop-blur-sm">
                <Shield className="h-4 w-4 mr-2 text-gold-400" />
                Trusted by 5,000+ Retirees Nationwide
              </div>
              
              <h1 className="heading-1 mb-6">
                Guaranteed Income.
                <span className="block text-gold-400">Confident Retirement.</span>
              </h1>
              
              <p className="body-large text-navy-200 mb-8 max-w-xl">
                Secure your retirement with annuity solutions designed to provide 
                predictable, guaranteed income for life. No market stress. No uncertainty. 
                Just peace of mind.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link href="/contact" className="btn-gold text-lg px-8 py-4">
                  Schedule Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5 inline" />
                </Link>
                <Link href="/annuity-solutions" className="btn-secondary bg-transparent border-white text-white hover:bg-white/10 text-lg px-8 py-4">
                  Explore Solutions
                </Link>
              </div>
              
              <div className="flex items-center space-x-6 text-sm text-navy-300">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-emerald-400 mr-2" />
                  No Obligation
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-emerald-400 mr-2" />
                  Free Consultation
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-emerald-400 mr-2" />
                  Licensed Advisors
                </div>
              </div>
            </div>
            
            <div className="hidden lg:block">
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                  <h3 className="text-white text-xl font-semibold mb-6">Quick Retirement Check</h3>
                  <div className="space-y-4">
                    <div className="flex items-center text-white/80">
                      <CheckCircle className="h-5 w-5 text-emerald-400 mr-3" />
                      Are you 45-75 years old?
                    </div>
                    <div className="flex items-center text-white/80">
                      <CheckCircle className="h-5 w-5 text-emerald-400 mr-3" />
                      Do you have $100K+ in retirement savings?
                    </div>
                    <div className="flex items-center text-white/80">
                      <CheckCircle className="h-5 w-5 text-emerald-400 mr-3" />
                      Want guaranteed income in retirement?
                    </div>
                    <div className="flex items-center text-white/80">
                      <CheckCircle className="h-5 w-5 text-emerald-400 mr-3" />
                      Concerned about market volatility?
                    </div>
                  </div>
                  <div className="mt-8 p-4 bg-emerald-500/20 rounded-xl border border-emerald-500/30">
                    <p className="text-emerald-300 text-sm">
                      If you answered yes to any of these, an annuity might be right for you.
                    </p>
                  </div>
                  <Link href="/contact" className="block w-full btn-gold text-center mt-6">
                    Get Your Free Analysis
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white/50 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-navy-950 py-12 border-y border-navy-800">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gold-400 mb-2">{stat.value}</div>
                <div className="text-navy-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-2 text-navy-900 mb-4">
              Why Choose Annuities for Retirement?
            </h2>
            <p className="body-large text-navy-600">
              Annuities offer unique benefits that other retirement vehicles simply can't match. 
              Here's why thousands of retirees trust annuities for their financial security.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div 
                key={feature.title}
                className="bg-navy-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-navy-900 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gold-500 transition-colors">
                  <feature.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-navy-900 mb-3">{feature.title}</h3>
                <p className="text-navy-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-gradient-to-br from-navy-50 to-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="heading-2 text-navy-900 mb-6">
                Secure Your Future with Guaranteed Benefits
              </h2>
              <p className="body-large text-navy-600 mb-8">
                Our annuity solutions are designed to give you the confidence and security 
                you deserve in retirement. Here's what you can expect:
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 flex-shrink-0" />
                    <span className="text-navy-700">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-10">
                <Link href="/annuity-solutions" className="btn-primary">
                  Learn About Our Solutions
                  <ChevronRight className="ml-2 h-5 w-5 inline" />
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-3xl shadow-2xl p-8 border border-navy-100">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center mr-4">
                    <Phone className="h-6 w-6 text-gold-600" />
                  </div>
                  <div>
                    <p className="text-sm text-navy-500">Ready to get started?</p>
                    <p className="text-xl font-semibold text-navy-900">(878) 673-0209</p>
                  </div>
                </div>
                
                <div className="border-t border-navy-100 pt-6">
                  <h4 className="font-semibold text-navy-900 mb-4">Schedule a Free Consultation</h4>
                  <p className="text-navy-600 text-sm mb-6">
                    Speak with a licensed advisor who will review your situation and 
                    help you understand your options. No pressure, no obligation.
                  </p>
                  <Link href="/contact" className="block w-full btn-gold text-center">
                    <Calendar className="h-5 w-5 mr-2 inline" />
                    Book Your Appointment
                  </Link>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gold-400/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-emerald-400/20 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-navy-900">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-2 text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="body-large text-navy-300">
              Don't just take our word for it. Hear from real clients who have 
              secured their retirement with our help.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.name}
                className="bg-navy-800/50 backdrop-blur rounded-2xl p-8 border border-navy-700"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-gold-400 fill-current" />
                  ))}
                </div>
                <p className="text-navy-200 mb-6 leading-relaxed">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-navy-400">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-gold-500 to-gold-600">
        <div className="container-custom text-center">
          <h2 className="heading-2 text-navy-900 mb-4">
            Ready to Secure Your Retirement?
          </h2>
          <p className="body-large text-navy-800 mb-8 max-w-2xl mx-auto">
            Take the first step toward guaranteed income and peace of mind. 
            Schedule your free, no-obligation consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary bg-navy-900 hover:bg-navy-800 text-lg px-8 py-4">
              Schedule Free Consultation
              <ArrowRight className="ml-2 h-5 w-5 inline" />
            </Link>
            <a href="tel:+18786730209" className="btn-secondary border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white text-lg px-8 py-4">
              <Phone className="mr-2 h-5 w-5 inline" />
              Call (878) 673-0209
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
