'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, BookOpen, HelpCircle, Calculator, ArrowRight, Search } from 'lucide-react'

const faqs = [
  {
    question: 'What is an annuity?',
    answer: 'An annuity is a contract between you and an insurance company where you make a lump sum payment or series of payments. In return, the insurer agrees to make periodic payments to you beginning immediately or at some future date. Annuities are designed to provide a steady income stream during retirement.',
  },
  {
    question: 'What is the difference between fixed and indexed annuities?',
    answer: 'Fixed annuities offer a guaranteed interest rate for a specific period, providing predictable, stable growth. Indexed annuities link your returns to a market index (like the S&P 500) while protecting your principal from losses. With indexed annuities, you get potential for higher returns with a floor of 0% (you never lose money due to market performance).',
  },
  {
    question: 'Are annuities safe?',
    answer: 'Annuities are backed by the financial strength of the issuing insurance company, not the stock market. Additionally, each state has a guaranty association that provides protection (similar to FDIC for banks) up to certain limits. We only work with A-rated carriers to ensure maximum security for your funds.',
  },
  {
    question: 'What are surrender charges?',
    answer: 'Surrender charges are fees you may pay if you withdraw more than the allowed amount during the surrender period (typically 5-10 years). Most annuities allow you to withdraw up to 10% annually without penalty. After the surrender period ends, you can access all your funds without charges.',
  },
  {
    question: 'How are annuities taxed?',
    answer: 'Annuities grow tax-deferred, meaning you don\'t pay taxes on earnings until you withdraw them. When you do withdraw, earnings are taxed as ordinary income. If you withdraw before age 59½, you may also face a 10% IRS penalty. Consult a tax professional for advice specific to your situation.',
  },
  {
    question: 'Can I lose money in an annuity?',
    answer: 'With fixed and indexed annuities, your principal is protected from market losses. You cannot lose money due to market downturns. However, early withdrawals beyond the free withdrawal amount may incur surrender charges, and inflation could reduce your purchasing power over time.',
  },
  {
    question: 'What is a lifetime income rider?',
    answer: 'A lifetime income rider is an optional add-on that guarantees you\'ll receive income payments for as long as you live, regardless of how your account performs or how long you live. It\'s like creating your own personal pension.',
  },
  {
    question: 'When should I consider an annuity?',
    answer: 'Annuities are typically best suited for people within 10-15 years of retirement or already retired who want guaranteed income, principal protection, and tax-deferred growth. They\'re ideal if you\'re concerned about outliving your savings or want to reduce exposure to market volatility.',
  },
]

const glossary = [
  { term: 'Accumulation Phase', definition: 'The period when you\'re adding money to your annuity and it\'s growing.' },
  { term: 'Annuitization', definition: 'Converting your annuity into a stream of periodic income payments.' },
  { term: 'Beneficiary', definition: 'The person(s) who will receive your annuity benefits if you pass away.' },
  { term: 'Cap Rate', definition: 'The maximum rate of return you can earn in an indexed annuity during a specific period.' },
  { term: 'Death Benefit', definition: 'The amount paid to beneficiaries upon the annuity owner\'s death.' },
  { term: 'Deferred Annuity', definition: 'An annuity where income payments begin at a future date.' },
  { term: 'Fixed Annuity', definition: 'An annuity that pays a guaranteed interest rate.' },
  { term: 'Free Withdrawal', definition: 'The amount you can withdraw annually without surrender charges (typically 10%).' },
  { term: 'Immediate Annuity', definition: 'An annuity where income payments begin within one year of purchase.' },
  { term: 'Indexed Annuity', definition: 'An annuity with returns linked to a market index, with principal protection.' },
  { term: 'Income Rider', definition: 'An optional benefit that guarantees lifetime income payments.' },
  { term: 'Participation Rate', definition: 'The percentage of index gains credited to your indexed annuity.' },
  { term: 'Premium', definition: 'The money you pay into an annuity.' },
  { term: 'Principal', definition: 'The original amount of money you invest in an annuity.' },
  { term: 'Surrender Charge', definition: 'A fee for withdrawing more than allowed during the surrender period.' },
  { term: 'Surrender Period', definition: 'The time during which surrender charges apply (typically 5-10 years).' },
]

const guides = [
  {
    title: 'Understanding Fixed Annuities',
    description: 'Learn how fixed annuities provide guaranteed growth and principal protection.',
    category: 'Annuity Basics',
  },
  {
    title: 'Indexed Annuities Explained',
    description: 'Discover how indexed annuities balance growth potential with downside protection.',
    category: 'Annuity Basics',
  },
  {
    title: 'Creating Retirement Income',
    description: 'Strategies for building a sustainable income stream in retirement.',
    category: 'Retirement Planning',
  },
  {
    title: 'Social Security Optimization',
    description: 'When to claim and how to maximize your Social Security benefits.',
    category: 'Retirement Planning',
  },
  {
    title: 'Tax-Efficient Retirement',
    description: 'Minimize taxes on your retirement income with smart planning.',
    category: 'Tax Planning',
  },
  {
    title: 'Protecting Against Inflation',
    description: 'Strategies to maintain your purchasing power throughout retirement.',
    category: 'Risk Management',
  },
]

export default function ResourcesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const [searchTerm, setSearchTerm] = useState('')

  const filteredGlossary = glossary.filter(item =>
    item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.definition.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-navy-900 to-navy-800">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="heading-1 text-white mb-6">
              Educational
              <span className="block text-gold-400">Resources</span>
            </h1>
            <p className="body-large text-navy-200">
              We believe informed decisions are the best decisions. Explore our 
              educational resources to learn more about annuities, retirement 
              planning, and securing your financial future.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-8 bg-navy-950 border-b border-navy-800">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#faq" className="flex items-center px-6 py-3 bg-navy-800 rounded-lg text-white hover:bg-navy-700 transition-colors">
              <HelpCircle className="h-5 w-5 mr-2 text-gold-400" />
              FAQs
            </a>
            <a href="#glossary" className="flex items-center px-6 py-3 bg-navy-800 rounded-lg text-white hover:bg-navy-700 transition-colors">
              <BookOpen className="h-5 w-5 mr-2 text-gold-400" />
              Glossary
            </a>
            <a href="#calculator" className="flex items-center px-6 py-3 bg-navy-800 rounded-lg text-white hover:bg-navy-700 transition-colors">
              <Calculator className="h-5 w-5 mr-2 text-gold-400" />
              Calculator
            </a>
            <a href="#guides" className="flex items-center px-6 py-3 bg-navy-800 rounded-lg text-white hover:bg-navy-700 transition-colors">
              <BookOpen className="h-5 w-5 mr-2 text-gold-400" />
              Guides
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-2 text-navy-900 mb-4">Frequently Asked Questions</h2>
              <p className="body-large text-navy-600">
                Get answers to the most common questions about annuities and retirement planning.
              </p>
            </div>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  className="border border-navy-200 rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-navy-50 transition-colors"
                  >
                    <span className="font-semibold text-navy-900 pr-4">{faq.question}</span>
                    <ChevronDown 
                      className={`h-5 w-5 text-navy-400 flex-shrink-0 transition-transform ${
                        openFaq === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-6">
                      <p className="text-navy-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Glossary Section */}
      <section id="glossary" className="section-padding bg-navy-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-2 text-navy-900 mb-4">Annuity Glossary</h2>
              <p className="body-large text-navy-600 mb-8">
                Understanding the terminology is the first step to making informed decisions.
              </p>
              
              <div className="relative max-w-md mx-auto">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-navy-400" />
                <input
                  type="text"
                  placeholder="Search terms..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-navy-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-navy-300"
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              {filteredGlossary.map((item) => (
                <div 
                  key={item.term}
                  className="bg-white rounded-xl p-6 border border-navy-100"
                >
                  <h3 className="font-semibold text-navy-900 mb-2">{item.term}</h3>
                  <p className="text-navy-600 text-sm">{item.definition}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 text-navy-900 mb-4">Retirement Income Calculator</h2>
            <p className="body-large text-navy-600">
              Get a quick estimate of your potential retirement income.
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <RetirementCalculator />
          </div>
        </div>
      </section>

      {/* Guides Section */}
      <section id="guides" className="section-padding bg-navy-900">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 text-white mb-4">Educational Guides</h2>
            <p className="body-large text-navy-300">
              In-depth resources to help you understand your options.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.map((guide) => (
              <div 
                key={guide.title}
                className="bg-navy-800 rounded-xl p-6 border border-navy-700 hover:border-gold-500/50 transition-colors group"
              >
                <span className="inline-block px-3 py-1 bg-gold-500/20 text-gold-400 text-xs rounded-full mb-4">
                  {guide.category}
                </span>
                <h3 className="font-semibold text-white mb-2 group-hover:text-gold-400 transition-colors">
                  {guide.title}
                </h3>
                <p className="text-navy-300 text-sm mb-4">{guide.description}</p>
                <span className="text-gold-400 text-sm font-medium flex items-center">
                  Read More <ArrowRight className="h-4 w-4 ml-1" />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-gold-500 to-gold-600">
        <div className="container-custom text-center">
          <h2 className="heading-2 text-navy-900 mb-4">
            Have More Questions?
          </h2>
          <p className="body-large text-navy-800 mb-8 max-w-2xl mx-auto">
            Our team is here to help you understand your options. 
            Schedule a free consultation to get personalized answers.
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

function RetirementCalculator() {
  const [currentAge, setCurrentAge] = useState(55)
  const [retirementAge, setRetirementAge] = useState(65)
  const [currentSavings, setCurrentSavings] = useState(500000)
  const [monthlyContribution, setMonthlyContribution] = useState(1000)
  const [expectedReturn, setExpectedReturn] = useState(5)
  const [withdrawalRate, setWithdrawalRate] = useState(4)
  const [showResults, setShowResults] = useState(false)

  const calculateRetirement = () => {
    const yearsToRetirement = retirementAge - currentAge
    const monthsToRetirement = yearsToRetirement * 12
    const monthlyRate = expectedReturn / 100 / 12

    let futureValue = currentSavings
    for (let i = 0; i < monthsToRetirement; i++) {
      futureValue = futureValue * (1 + monthlyRate) + monthlyContribution
    }

    const annualIncome = futureValue * (withdrawalRate / 100)
    const monthlyIncome = annualIncome / 12

    return {
      futureValue: Math.round(futureValue),
      annualIncome: Math.round(annualIncome),
      monthlyIncome: Math.round(monthlyIncome),
    }
  }

  const results = calculateRetirement()

  return (
    <div className="bg-navy-50 rounded-2xl p-8">
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-navy-700 mb-2">
            Current Age: {currentAge}
          </label>
          <input
            type="range"
            min="30"
            max="70"
            value={currentAge}
            onChange={(e) => setCurrentAge(Number(e.target.value))}
            className="w-full h-2 bg-navy-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-navy-700 mb-2">
            Retirement Age: {retirementAge}
          </label>
          <input
            type="range"
            min={currentAge + 1}
            max="80"
            value={retirementAge}
            onChange={(e) => setRetirementAge(Number(e.target.value))}
            className="w-full h-2 bg-navy-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-navy-700 mb-2">
            Current Retirement Savings
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-navy-500">$</span>
            <input
              type="number"
              value={currentSavings}
              onChange={(e) => setCurrentSavings(Number(e.target.value))}
              className="w-full pl-8 pr-4 py-3 border border-navy-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-navy-300"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-navy-700 mb-2">
            Monthly Contribution
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-navy-500">$</span>
            <input
              type="number"
              value={monthlyContribution}
              onChange={(e) => setMonthlyContribution(Number(e.target.value))}
              className="w-full pl-8 pr-4 py-3 border border-navy-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-navy-300"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-navy-700 mb-2">
            Expected Annual Return: {expectedReturn}%
          </label>
          <input
            type="range"
            min="1"
            max="10"
            step="0.5"
            value={expectedReturn}
            onChange={(e) => setExpectedReturn(Number(e.target.value))}
            className="w-full h-2 bg-navy-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-navy-700 mb-2">
            Withdrawal Rate: {withdrawalRate}%
          </label>
          <input
            type="range"
            min="2"
            max="6"
            step="0.5"
            value={withdrawalRate}
            onChange={(e) => setWithdrawalRate(Number(e.target.value))}
            className="w-full h-2 bg-navy-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>
      </div>

      <div className="mt-8 p-6 bg-white rounded-xl border border-navy-200">
        <h3 className="font-semibold text-navy-900 mb-4 text-center">Estimated Results</h3>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold text-navy-900">
              ${results.futureValue.toLocaleString()}
            </p>
            <p className="text-xs text-navy-500">Nest Egg at Retirement</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-emerald-600">
              ${results.annualIncome.toLocaleString()}
            </p>
            <p className="text-xs text-navy-500">Annual Income</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-gold-600">
              ${results.monthlyIncome.toLocaleString()}
            </p>
            <p className="text-xs text-navy-500">Monthly Income</p>
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-amber-50 rounded-xl border border-amber-200">
        <p className="text-amber-800 text-xs text-center">
          <strong>Disclaimer:</strong> This calculator provides estimates for educational purposes only. 
          Actual results will vary. Consult with a financial professional for personalized advice.
        </p>
      </div>

      <div className="mt-6 text-center">
        <Link href="/contact" className="btn-gold">
          Get a Personalized Analysis
        </Link>
      </div>
    </div>
  )
}
