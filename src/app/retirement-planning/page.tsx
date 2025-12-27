import Link from 'next/link'
import { Target, Shield, Clock, TrendingUp, Heart, DollarSign, CheckCircle, ArrowRight, AlertTriangle } from 'lucide-react'

const strategies = [
  {
    id: 'income',
    icon: DollarSign,
    title: 'Retirement Income Planning',
    description: 'Create a sustainable income stream that lasts throughout your retirement years.',
    points: [
      'Social Security optimization strategies',
      'Pension maximization analysis',
      'Systematic withdrawal planning',
      'Guaranteed income floor creation',
      'Tax-efficient distribution strategies',
    ],
  },
  {
    id: 'risk',
    icon: Shield,
    title: 'Risk Management',
    description: 'Protect your retirement from market volatility and unexpected events.',
    points: [
      'Portfolio risk assessment',
      'Sequence of returns risk mitigation',
      'Healthcare cost planning',
      'Long-term care considerations',
      'Emergency fund strategies',
    ],
  },
  {
    id: 'longevity',
    icon: Clock,
    title: 'Longevity Planning',
    description: 'Ensure your money lasts as long as you do with proper planning.',
    points: [
      'Life expectancy analysis',
      'Inflation protection strategies',
      'Lifetime income solutions',
      'Asset allocation adjustments',
      'Legacy and estate planning',
    ],
  },
]

const risks = [
  {
    icon: TrendingUp,
    title: 'Market Risk',
    description: 'Market downturns early in retirement can devastate your portfolio.',
    solution: 'Protected growth strategies and guaranteed income floors.',
  },
  {
    icon: Clock,
    title: 'Longevity Risk',
    description: 'Living longer than expected can deplete your savings.',
    solution: 'Lifetime income annuities that pay regardless of how long you live.',
  },
  {
    icon: AlertTriangle,
    title: 'Inflation Risk',
    description: 'Rising costs can erode your purchasing power over time.',
    solution: 'Inflation-adjusted income options and growth-oriented allocations.',
  },
  {
    icon: Heart,
    title: 'Healthcare Risk',
    description: 'Medical expenses can quickly drain retirement savings.',
    solution: 'Healthcare cost projections and dedicated medical expense funds.',
  },
]

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We learn about your goals, concerns, current situation, and retirement vision.',
  },
  {
    number: '02',
    title: 'Analysis',
    description: 'We analyze your finances, identify gaps, and model different scenarios.',
  },
  {
    number: '03',
    title: 'Strategy',
    description: 'We develop a customized plan addressing income, protection, and growth.',
  },
  {
    number: '04',
    title: 'Implementation',
    description: 'We help you execute the plan with the right products and strategies.',
  },
  {
    number: '05',
    title: 'Monitoring',
    description: 'We provide ongoing reviews and adjustments as your needs evolve.',
  },
]

export default function RetirementPlanningPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-navy-900 to-navy-800">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="heading-1 text-white mb-6">
              Comprehensive
              <span className="block text-gold-400">Retirement Planning</span>
            </h1>
            <p className="body-large text-navy-200 mb-8">
              A successful retirement requires more than just saving money. 
              We help you create a complete strategy for income, protection, 
              and peace of mind throughout your retirement years.
            </p>
            <Link href="/contact" className="btn-gold">
              Start Your Retirement Plan
              <ArrowRight className="ml-2 h-5 w-5 inline" />
            </Link>
          </div>
        </div>
      </section>

      {/* Key Strategies */}
      <section id="income" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-2 text-navy-900 mb-4">
              Our Planning Approach
            </h2>
            <p className="body-large text-navy-600">
              We address the three pillars of retirement security: income, 
              risk management, and longevity planning.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {strategies.map((strategy) => (
              <div 
                key={strategy.id}
                id={strategy.id}
                className="bg-navy-50 rounded-2xl p-8 hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 bg-navy-900 rounded-xl flex items-center justify-center mb-6">
                  <strategy.icon className="h-7 w-7 text-gold-400" />
                </div>
                <h3 className="text-xl font-semibold text-navy-900 mb-3">{strategy.title}</h3>
                <p className="text-navy-600 mb-6">{strategy.description}</p>
                <ul className="space-y-2">
                  {strategy.points.map((point) => (
                    <li key={point} className="flex items-start text-sm">
                      <CheckCircle className="h-4 w-4 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-navy-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Retirement Risks */}
      <section className="section-padding bg-navy-900">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-2 text-white mb-4">
              Retirement Risks We Help You Navigate
            </h2>
            <p className="body-large text-navy-300">
              Understanding and planning for these risks is essential for a secure retirement.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {risks.map((risk) => (
              <div 
                key={risk.title}
                className="bg-navy-800 rounded-2xl p-8 border border-navy-700"
              >
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <risk.icon className="h-6 w-6 text-red-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{risk.title}</h3>
                    <p className="text-navy-300">{risk.description}</p>
                  </div>
                </div>
                <div className="bg-emerald-500/10 rounded-xl p-4 border border-emerald-500/20">
                  <p className="text-emerald-300 text-sm">
                    <span className="font-semibold">Our Solution:</span> {risk.solution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Planning Process */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-2 text-navy-900 mb-4">
              Our Planning Process
            </h2>
            <p className="body-large text-navy-600">
              A structured approach to building your retirement security.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Connecting Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-navy-200 hidden md:block" />
              
              {steps.map((step, index) => (
                <div key={step.number} className="relative flex items-start mb-12 last:mb-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-navy-800 to-navy-900 rounded-2xl flex items-center justify-center text-gold-400 font-bold text-xl z-10 flex-shrink-0 shadow-lg">
                    {step.number}
                  </div>
                  <div className="ml-6 bg-navy-50 rounded-xl p-6 flex-1">
                    <h3 className="text-xl font-semibold text-navy-900 mb-2">{step.title}</h3>
                    <p className="text-navy-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Income Sources */}
      <section className="section-padding bg-navy-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="heading-2 text-navy-900 mb-6">
                Building Your Retirement Income
              </h2>
              <p className="body-large text-navy-600 mb-8">
                A well-designed retirement income plan combines multiple sources 
                to create a reliable, sustainable income stream.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-navy-900 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-gold-400 font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-900 mb-1">Guaranteed Income Floor</h4>
                    <p className="text-navy-600 text-sm">Social Security, pensions, and annuities cover essential expenses.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-navy-900 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-gold-400 font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-900 mb-1">Systematic Withdrawals</h4>
                    <p className="text-navy-600 text-sm">Strategic distributions from retirement accounts for flexibility.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-navy-900 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-gold-400 font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-900 mb-1">Growth Portfolio</h4>
                    <p className="text-navy-600 text-sm">Investments for long-term growth and inflation protection.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-navy-900 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-gold-400 font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-900 mb-1">Emergency Reserve</h4>
                    <p className="text-navy-600 text-sm">Liquid funds for unexpected expenses without disrupting your plan.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-navy-100">
              <h3 className="text-xl font-semibold text-navy-900 mb-6 text-center">
                The Bucket Strategy
              </h3>
              <div className="space-y-4">
                <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-200">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-emerald-800">Bucket 1: Now</span>
                    <span className="text-emerald-600 text-sm">1-2 Years</span>
                  </div>
                  <p className="text-emerald-700 text-sm">Cash and short-term bonds for immediate needs</p>
                </div>
                
                <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-blue-800">Bucket 2: Soon</span>
                    <span className="text-blue-600 text-sm">3-7 Years</span>
                  </div>
                  <p className="text-blue-700 text-sm">Bonds and conservative investments for stability</p>
                </div>
                
                <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-purple-800">Bucket 3: Later</span>
                    <span className="text-purple-600 text-sm">8+ Years</span>
                  </div>
                  <p className="text-purple-700 text-sm">Stocks and growth investments for long-term</p>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-navy-100">
                <p className="text-navy-600 text-sm text-center">
                  This strategy helps manage sequence of returns risk while 
                  maintaining growth potential.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-gold-500 to-gold-600">
        <div className="container-custom text-center">
          <h2 className="heading-2 text-navy-900 mb-4">
            Ready to Plan Your Retirement?
          </h2>
          <p className="body-large text-navy-800 mb-8 max-w-2xl mx-auto">
            Let's create a comprehensive retirement plan tailored to your goals. 
            Schedule your free consultation today.
          </p>
          <Link href="/contact" className="btn-primary bg-navy-900 hover:bg-navy-800 text-lg px-8 py-4">
            Start Planning Today
            <ArrowRight className="ml-2 h-5 w-5 inline" />
          </Link>
        </div>
      </section>
    </>
  )
}
