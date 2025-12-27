import Link from 'next/link'
import { Shield, TrendingUp, DollarSign, CheckCircle, ArrowRight, AlertCircle, Clock, Percent } from 'lucide-react'

const annuityTypes = [
  {
    id: 'fixed',
    name: 'Fixed Annuities',
    icon: Shield,
    tagline: 'Guaranteed Growth, Zero Market Risk',
    description: 'Fixed annuities offer a guaranteed interest rate for a specified period, providing predictable growth without any exposure to market volatility.',
    features: [
      'Guaranteed interest rate (typically 3-6%)',
      'Principal protection - never lose money',
      'Tax-deferred growth',
      'Predictable, stable returns',
      'FDIC-like protection through state guaranty associations',
    ],
    pros: [
      'Complete protection from market losses',
      'Guaranteed minimum interest rate',
      'Simple and easy to understand',
      'Lower fees than variable annuities',
      'Great for conservative investors',
    ],
    cons: [
      'Lower potential returns than market investments',
      'Surrender charges for early withdrawal',
      'Interest may not keep pace with inflation',
      'Less flexibility than other options',
    ],
    bestFor: 'Conservative investors seeking guaranteed growth and principal protection, especially those within 10 years of retirement.',
  },
  {
    id: 'indexed',
    name: 'Indexed Annuities',
    icon: TrendingUp,
    tagline: 'Market Upside, Downside Protection',
    description: 'Indexed annuities link your returns to a market index (like the S&P 500) while protecting your principal from market losses.',
    features: [
      'Returns linked to market index performance',
      'Principal protection - floor of 0% (never negative)',
      'Participation rates and caps on gains',
      'Tax-deferred growth',
      'Optional income riders available',
    ],
    pros: [
      'Potential for higher returns than fixed annuities',
      'Protection from market downturns',
      'Balance of growth and security',
      'Tax-deferred accumulation',
      'Lifetime income options available',
    ],
    cons: [
      'Caps may limit upside potential',
      'More complex than fixed annuities',
      'Surrender periods typically 5-10 years',
      'Returns may trail direct market investment',
    ],
    bestFor: 'Investors who want growth potential but cannot afford to lose principal, typically those 5-15 years from retirement.',
  },
  {
    id: 'income',
    name: 'Income Riders',
    icon: DollarSign,
    tagline: 'Guaranteed Income for Life',
    description: 'Income riders are optional add-ons that guarantee a lifetime income stream, regardless of how long you live or market performance.',
    features: [
      'Guaranteed lifetime income payments',
      'Income based on benefit base, not account value',
      'Spousal continuation options',
      'Inflation protection options available',
      'Income can start immediately or be deferred',
    ],
    pros: [
      'Cannot outlive your income',
      'Predictable monthly payments',
      'Peace of mind in retirement',
      'Spousal benefits available',
      'Supplements Social Security and pensions',
    ],
    cons: [
      'Additional annual fee (typically 0.5-1.5%)',
      'Reduces overall account growth',
      'Complex calculations',
      'May not be needed if other income sources sufficient',
    ],
    bestFor: 'Retirees who want guaranteed income they cannot outlive, especially those without pensions.',
  },
]

export default function AnnuitySolutionsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-navy-900 to-navy-800">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="heading-1 text-white mb-6">
              Annuity Solutions for
              <span className="block text-gold-400">Every Retirement Goal</span>
            </h1>
            <p className="body-large text-navy-200 mb-8">
              Discover the right annuity strategy for your unique situation. 
              We offer a range of solutions designed to provide security, growth, 
              and guaranteed income in retirement.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-gold">
                Get Personalized Recommendations
                <ArrowRight className="ml-2 h-5 w-5 inline" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Comparison */}
      <section className="py-12 bg-navy-950">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-navy-900 rounded-xl p-6 border border-navy-800">
              <Shield className="h-8 w-8 text-gold-400 mb-3" />
              <h3 className="font-semibold text-white mb-2">Fixed Annuities</h3>
              <p className="text-navy-300 text-sm">Guaranteed rates, zero market risk</p>
            </div>
            <div className="bg-navy-900 rounded-xl p-6 border border-navy-800">
              <TrendingUp className="h-8 w-8 text-gold-400 mb-3" />
              <h3 className="font-semibold text-white mb-2">Indexed Annuities</h3>
              <p className="text-navy-300 text-sm">Market-linked growth with protection</p>
            </div>
            <div className="bg-navy-900 rounded-xl p-6 border border-navy-800">
              <DollarSign className="h-8 w-8 text-gold-400 mb-3" />
              <h3 className="font-semibold text-white mb-2">Income Riders</h3>
              <p className="text-navy-300 text-sm">Guaranteed lifetime income</p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Sections */}
      {annuityTypes.map((annuity, index) => (
        <section 
          key={annuity.id}
          id={annuity.id}
          className={`section-padding ${index % 2 === 0 ? 'bg-white' : 'bg-navy-50'}`}
        >
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-navy-900 rounded-xl flex items-center justify-center mr-4">
                    <annuity.icon className="h-6 w-6 text-gold-400" />
                  </div>
                  <div>
                    <h2 className="heading-3 text-navy-900">{annuity.name}</h2>
                    <p className="text-gold-600 font-medium">{annuity.tagline}</p>
                  </div>
                </div>
                
                <p className="body-large text-navy-600 mb-8">
                  {annuity.description}
                </p>
                
                <h3 className="font-semibold text-navy-900 mb-4">Key Features</h3>
                <ul className="space-y-3 mb-8">
                  {annuity.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-navy-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="bg-gold-50 border border-gold-200 rounded-xl p-6">
                  <h4 className="font-semibold text-navy-900 mb-2">Best For:</h4>
                  <p className="text-navy-700">{annuity.bestFor}</p>
                </div>
              </div>
              
              <div className="space-y-6">
                {/* Pros */}
                <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-200">
                  <h3 className="font-semibold text-emerald-800 mb-4 flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    Advantages
                  </h3>
                  <ul className="space-y-2">
                    {annuity.pros.map((pro) => (
                      <li key={pro} className="flex items-start text-emerald-700">
                        <span className="text-emerald-500 mr-2">+</span>
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Cons */}
                <div className="bg-amber-50 rounded-xl p-6 border border-amber-200">
                  <h3 className="font-semibold text-amber-800 mb-4 flex items-center">
                    <AlertCircle className="h-5 w-5 mr-2" />
                    Considerations
                  </h3>
                  <ul className="space-y-2">
                    {annuity.cons.map((con) => (
                      <li key={con} className="flex items-start text-amber-700">
                        <span className="text-amber-500 mr-2">•</span>
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Comparison Table */}
      <section className="section-padding bg-navy-900">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="heading-2 text-white mb-4">Quick Comparison</h2>
            <p className="body-large text-navy-300">
              See how different annuity types compare at a glance.
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-navy-800 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-navy-700">
                  <th className="px-6 py-4 text-left text-white font-semibold">Feature</th>
                  <th className="px-6 py-4 text-center text-white font-semibold">Fixed</th>
                  <th className="px-6 py-4 text-center text-white font-semibold">Indexed</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-navy-700">
                <tr>
                  <td className="px-6 py-4 text-navy-200 flex items-center">
                    <Percent className="h-4 w-4 mr-2 text-gold-400" />
                    Return Potential
                  </td>
                  <td className="px-6 py-4 text-center text-navy-300">Moderate (3-6%)</td>
                  <td className="px-6 py-4 text-center text-navy-300">Higher (0-10%+)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-navy-200 flex items-center">
                    <Shield className="h-4 w-4 mr-2 text-gold-400" />
                    Principal Protection
                  </td>
                  <td className="px-6 py-4 text-center text-emerald-400">100%</td>
                  <td className="px-6 py-4 text-center text-emerald-400">100%</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-navy-200 flex items-center">
                    <TrendingUp className="h-4 w-4 mr-2 text-gold-400" />
                    Market Exposure
                  </td>
                  <td className="px-6 py-4 text-center text-navy-300">None</td>
                  <td className="px-6 py-4 text-center text-navy-300">Index-Linked</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-navy-200 flex items-center">
                    <Clock className="h-4 w-4 mr-2 text-gold-400" />
                    Typical Term
                  </td>
                  <td className="px-6 py-4 text-center text-navy-300">3-10 years</td>
                  <td className="px-6 py-4 text-center text-navy-300">5-10 years</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-navy-200 flex items-center">
                    <DollarSign className="h-4 w-4 mr-2 text-gold-400" />
                    Income Options
                  </td>
                  <td className="px-6 py-4 text-center text-navy-300">Available</td>
                  <td className="px-6 py-4 text-center text-navy-300">Available</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-gold-500 to-gold-600">
        <div className="container-custom text-center">
          <h2 className="heading-2 text-navy-900 mb-4">
            Not Sure Which Annuity Is Right for You?
          </h2>
          <p className="body-large text-navy-800 mb-8 max-w-2xl mx-auto">
            Our advisors will analyze your situation and recommend the best solution 
            for your retirement goals. No pressure, no obligation.
          </p>
          <Link href="/contact" className="btn-primary bg-navy-900 hover:bg-navy-800 text-lg px-8 py-4">
            Get Your Free Analysis
            <ArrowRight className="ml-2 h-5 w-5 inline" />
          </Link>
        </div>
      </section>
    </>
  )
}
