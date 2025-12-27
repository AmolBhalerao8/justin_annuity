import Link from 'next/link'
import { Shield, Heart, Target, Award, Users, CheckCircle, ArrowRight } from 'lucide-react'

const values = [
  {
    icon: Shield,
    title: 'Integrity First',
    description: 'We believe in complete transparency. You\'ll always know exactly what you\'re getting and why it\'s right for your situation.',
  },
  {
    icon: Heart,
    title: 'Client-Centered',
    description: 'Your goals are our priority. We take the time to understand your unique situation before making any recommendations.',
  },
  {
    icon: Target,
    title: 'Results-Driven',
    description: 'We measure our success by your success. Our strategies are designed to help you achieve your retirement dreams.',
  },
]

const team = [
  {
    name: 'Michael Richardson',
    title: 'Founder & Senior Advisor',
    credentials: 'CFP®, ChFC®, CLU®',
    experience: '30+ years',
    bio: 'Michael founded JUSTIN Retirement Partners with a simple mission: help everyday Americans achieve retirement security. His client-first approach has helped thousands of families.',
    image: '/team/michael.jpg',
  },
  {
    name: 'Sarah Chen',
    title: 'Director of Client Services',
    credentials: 'CFP®, RICP®',
    experience: '18 years',
    bio: 'Sarah leads our client services team, ensuring every client receives personalized attention and ongoing support throughout their retirement journey.',
    image: '/team/sarah.jpg',
  },
  {
    name: 'David Thompson',
    title: 'Senior Retirement Specialist',
    credentials: 'ChFC®, CASL®',
    experience: '22 years',
    bio: 'David specializes in complex retirement income strategies, helping clients maximize their guaranteed income while minimizing tax implications.',
    image: '/team/david.jpg',
  },
  {
    name: 'Jennifer Martinez',
    title: 'Annuity Specialist',
    credentials: 'RICP®, LACP',
    experience: '15 years',
    bio: 'Jennifer is our annuity expert, staying current on the latest products and strategies to ensure clients get the best solutions available.',
    image: '/team/jennifer.jpg',
  },
]

const milestones = [
  { year: '1998', event: 'JUSTIN Retirement Partners founded' },
  { year: '2005', event: 'Expanded to serve clients nationwide' },
  { year: '2010', event: 'Reached $100M in assets under management' },
  { year: '2015', event: 'Launched comprehensive retirement planning services' },
  { year: '2020', event: 'Celebrated helping 5,000+ families' },
  { year: '2024', event: 'Surpassed $500M in protected assets' },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-navy-900 to-navy-800">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="heading-1 text-white mb-6">
              Your Trusted Partner in
              <span className="block text-gold-400">Retirement Planning</span>
            </h1>
            <p className="body-large text-navy-200">
              For over 25 years, JUSTIN Retirement Partners has helped thousands of 
              Americans achieve retirement security through personalized annuity solutions 
              and comprehensive planning.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="heading-2 text-navy-900 mb-6">Our Mission</h2>
              <p className="body-large text-navy-600 mb-6">
                We believe everyone deserves a secure, worry-free retirement. Our mission 
                is to provide clear, honest guidance that helps you make informed decisions 
                about your financial future.
              </p>
              <p className="text-navy-600 mb-8">
                Unlike many financial firms, we don't push products. We listen to your 
                goals, understand your concerns, and recommend solutions that truly fit 
                your needs. If an annuity isn't right for you, we'll tell you.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-navy-900">No High-Pressure Sales</p>
                    <p className="text-navy-600 text-sm">Take your time to make the right decision</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-navy-900">Education-First Approach</p>
                    <p className="text-navy-600 text-sm">We explain everything in plain English</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-navy-900">Ongoing Support</p>
                    <p className="text-navy-600 text-sm">We're here for you throughout retirement</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-navy-50 rounded-3xl p-10">
              <blockquote className="text-xl text-navy-800 italic mb-6">
                "Our success is measured not by the products we sell, but by the 
                peace of mind we provide to the families we serve."
              </blockquote>
              <div className="flex items-center">
                <div className="w-16 h-16 bg-navy-200 rounded-full mr-4" />
                <div>
                  <p className="font-semibold text-navy-900">Michael Richardson</p>
                  <p className="text-navy-600 text-sm">Founder & Senior Advisor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-navy-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-2 text-navy-900 mb-4">Our Core Values</h2>
            <p className="body-large text-navy-600">
              These principles guide everything we do and every recommendation we make.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div 
                key={value.title}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 bg-gold-100 rounded-xl flex items-center justify-center mb-6">
                  <value.icon className="h-7 w-7 text-gold-600" />
                </div>
                <h3 className="text-xl font-semibold text-navy-900 mb-3">{value.title}</h3>
                <p className="text-navy-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-2 text-navy-900 mb-4">Meet Our Team</h2>
            <p className="body-large text-navy-600">
              Our experienced advisors bring decades of combined expertise to help 
              you navigate your retirement journey with confidence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div 
                key={member.name}
                className="bg-navy-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-24 h-24 bg-navy-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-10 w-10 text-navy-400" />
                </div>
                <h3 className="font-semibold text-navy-900 text-lg">{member.name}</h3>
                <p className="text-gold-600 text-sm font-medium mb-1">{member.title}</p>
                <p className="text-navy-500 text-xs mb-3">{member.credentials}</p>
                <div className="inline-flex items-center px-3 py-1 bg-navy-100 rounded-full text-xs text-navy-600 mb-4">
                  <Award className="h-3 w-3 mr-1" />
                  {member.experience}
                </div>
                <p className="text-navy-600 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-navy-900">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-2 text-white mb-4">Our Journey</h2>
            <p className="body-large text-navy-300">
              Over 25 years of helping families achieve retirement security.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-navy-700" />
              
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className="relative flex items-start mb-8 last:mb-0">
                  <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center text-navy-900 font-bold text-sm z-10 flex-shrink-0">
                    {milestone.year}
                  </div>
                  <div className="ml-6 bg-navy-800 rounded-xl p-4 flex-1">
                    <p className="text-white">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-gold-500 to-gold-600">
        <div className="container-custom text-center">
          <h2 className="heading-2 text-navy-900 mb-4">
            Ready to Meet Our Team?
          </h2>
          <p className="body-large text-navy-800 mb-8 max-w-2xl mx-auto">
            Schedule a free consultation and discover how we can help you 
            achieve your retirement goals.
          </p>
          <Link href="/contact" className="btn-primary bg-navy-900 hover:bg-navy-800 text-lg px-8 py-4">
            Schedule Free Consultation
            <ArrowRight className="ml-2 h-5 w-5 inline" />
          </Link>
        </div>
      </section>
    </>
  )
}
