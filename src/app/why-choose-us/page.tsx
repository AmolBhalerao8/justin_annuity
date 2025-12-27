import Link from 'next/link'
import { Shield, Users, Award, Heart, CheckCircle, ArrowRight, Star, Phone, Clock, FileCheck } from 'lucide-react'

const reasons = [
  {
    icon: Heart,
    title: 'Client-First Philosophy',
    description: 'Your interests always come first. We recommend solutions based on what\'s best for you, not what pays us the most.',
    details: [
      'No proprietary products to push',
      'Access to solutions from top-rated carriers',
      'Recommendations based on your needs',
      'Transparent about all options',
    ],
  },
  {
    icon: Shield,
    title: 'Fiduciary-Style Approach',
    description: 'We hold ourselves to the highest ethical standards, treating your money as if it were our own.',
    details: [
      'Full disclosure of all fees and commissions',
      'Clear explanation of pros and cons',
      'No hidden charges or surprises',
      'Written recommendations you can review',
    ],
  },
  {
    icon: Award,
    title: 'Experience & Expertise',
    description: 'Our team brings decades of combined experience specifically in retirement income planning.',
    details: [
      '25+ years in retirement planning',
      'Advanced certifications (CFP®, ChFC®, RICP®)',
      'Continuous education and training',
      'Specialists in annuity strategies',
    ],
  },
  {
    icon: Users,
    title: 'Personalized Service',
    description: 'You\'re not a number to us. We take the time to understand your unique situation and goals.',
    details: [
      'One-on-one consultations',
      'Customized recommendations',
      'Ongoing relationship and support',
      'Available when you need us',
    ],
  },
]

const commitments = [
  {
    icon: Clock,
    title: 'No Pressure',
    description: 'Take all the time you need to make decisions. We\'ll never rush you or use high-pressure tactics.',
  },
  {
    icon: FileCheck,
    title: 'Full Transparency',
    description: 'We explain everything in plain English and disclose all fees, commissions, and potential drawbacks.',
  },
  {
    icon: Phone,
    title: 'Always Available',
    description: 'Have questions after your purchase? We\'re here for you throughout your retirement journey.',
  },
  {
    icon: Shield,
    title: 'Your Protection',
    description: 'We only work with A-rated insurance carriers to ensure your money is safe and secure.',
  },
]

const testimonials = [
  {
    quote: 'They took the time to explain everything and never pressured us. We finally feel confident about our retirement.',
    name: 'Richard & Barbara H.',
    location: 'Scottsdale, AZ',
    rating: 5,
  },
  {
    quote: 'After meeting with several advisors, JUSTIN was the only one who truly listened to our concerns.',
    name: 'Thomas M.',
    location: 'San Diego, CA',
    rating: 5,
  },
  {
    quote: 'The peace of mind we have now is priceless. We know exactly what our income will be every month.',
    name: 'Patricia & George L.',
    location: 'Denver, CO',
    rating: 5,
  },
]

export default function WhyChooseUsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-navy-900 to-navy-800">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="heading-1 text-white mb-6">
              Why Families Trust
              <span className="block text-gold-400">JUSTIN Retirement Partners</span>
            </h1>
            <p className="body-large text-navy-200 mb-8">
              Choosing the right advisor for your retirement is one of the most 
              important decisions you'll make. Here's why thousands of families 
              have trusted us with their financial future.
            </p>
          </div>
        </div>
      </section>

      {/* Main Reasons */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {reasons.map((reason) => (
              <div 
                key={reason.title}
                className="bg-navy-50 rounded-2xl p-8 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start mb-6">
                  <div className="w-14 h-14 bg-navy-900 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <reason.icon className="h-7 w-7 text-gold-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-navy-900 mb-2">{reason.title}</h3>
                    <p className="text-navy-600">{reason.description}</p>
                  </div>
                </div>
                <ul className="space-y-2 ml-18">
                  {reason.details.map((detail) => (
                    <li key={detail} className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-emerald-500 mr-2 flex-shrink-0" />
                      <span className="text-navy-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitments */}
      <section className="section-padding bg-navy-900">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-2 text-white mb-4">Our Commitment to You</h2>
            <p className="body-large text-navy-300">
              These aren't just words—they're promises we keep with every client.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {commitments.map((commitment) => (
              <div 
                key={commitment.title}
                className="bg-navy-800 rounded-xl p-6 border border-navy-700 text-center"
              >
                <div className="w-12 h-12 bg-gold-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <commitment.icon className="h-6 w-6 text-gold-400" />
                </div>
                <h3 className="font-semibold text-white mb-2">{commitment.title}</h3>
                <p className="text-navy-300 text-sm">{commitment.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The JUSTIN Difference */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="heading-2 text-navy-900 mb-6">The JUSTIN Difference</h2>
              <p className="body-large text-navy-600 mb-8">
                We do things differently than most financial firms. Our approach 
                is built on education, transparency, and putting your needs first.
              </p>
              
              <div className="space-y-6">
                <div className="border-l-4 border-gold-500 pl-6">
                  <h4 className="font-semibold text-navy-900 mb-2">Education Before Sales</h4>
                  <p className="text-navy-600">We believe informed clients make better decisions. That's why we spend time educating you about all your options before making any recommendations.</p>
                </div>
                
                <div className="border-l-4 border-gold-500 pl-6">
                  <h4 className="font-semibold text-navy-900 mb-2">No One-Size-Fits-All</h4>
                  <p className="text-navy-600">Every client is unique. We create customized strategies based on your specific goals, timeline, and risk tolerance.</p>
                </div>
                
                <div className="border-l-4 border-gold-500 pl-6">
                  <h4 className="font-semibold text-navy-900 mb-2">Long-Term Relationships</h4>
                  <p className="text-navy-600">We're not here for a quick sale. We build lasting relationships and provide ongoing support throughout your retirement.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-navy-50 rounded-3xl p-8">
              <h3 className="text-xl font-semibold text-navy-900 mb-6 text-center">
                Compare the Difference
              </h3>
              
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-red-50 rounded-xl p-4 border border-red-200">
                    <p className="font-semibold text-red-800 mb-2 text-sm">Others May...</p>
                    <ul className="text-red-700 text-xs space-y-1">
                      <li>• Push proprietary products</li>
                      <li>• Use high-pressure tactics</li>
                      <li>• Hide fees and commissions</li>
                      <li>• Disappear after the sale</li>
                    </ul>
                  </div>
                  
                  <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-200">
                    <p className="font-semibold text-emerald-800 mb-2 text-sm">We Always...</p>
                    <ul className="text-emerald-700 text-xs space-y-1">
                      <li>• Offer unbiased options</li>
                      <li>• Give you time to decide</li>
                      <li>• Disclose everything upfront</li>
                      <li>• Provide ongoing support</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-navy-200">
                <p className="text-center text-navy-600 text-sm">
                  Experience the difference for yourself with a free consultation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-navy-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-2 text-navy-900 mb-4">What Our Clients Say</h2>
            <p className="body-large text-navy-600">
              Real feedback from real clients who trusted us with their retirement.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.name}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-gold-400 fill-current" />
                  ))}
                </div>
                <p className="text-navy-700 mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-navy-900">{testimonial.name}</p>
                  <p className="text-sm text-navy-500">{testimonial.location}</p>
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
            Experience the JUSTIN Difference
          </h2>
          <p className="body-large text-navy-800 mb-8 max-w-2xl mx-auto">
            See for yourself why families trust us with their retirement. 
            Schedule a free, no-obligation consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary bg-navy-900 hover:bg-navy-800 text-lg px-8 py-4">
              Schedule Free Consultation
              <ArrowRight className="ml-2 h-5 w-5 inline" />
            </Link>
            <a href="tel:+18786730209" className="btn-secondary border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white text-lg px-8 py-4">
              <Phone className="mr-2 h-5 w-5 inline" />
              (878) 673-0209
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
