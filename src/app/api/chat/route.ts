import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'

const systemPrompt = `You are a helpful retirement planning assistant for JUSTIN Retirement Partners, a professional annuity and retirement planning firm. Your role is to educate users about:

- Fixed annuities: Guaranteed interest rates, principal protection, predictable income
- Indexed annuities: Market-linked growth potential with downside protection
- Retirement income planning: Strategies for sustainable retirement income
- Risk tolerance: Helping users understand their comfort with market volatility
- Common annuity myths: Clarifying misconceptions about annuities

Guidelines:
1. Use clear, simple language that anyone can understand
2. Avoid jargon - explain terms when you must use them
3. Be warm, professional, and reassuring
4. Focus on education, not sales
5. If asked personal financial questions or for specific advice, suggest scheduling a consultation
6. Keep responses concise but helpful (2-3 paragraphs max)
7. Always end with the disclaimer when providing educational content

IMPORTANT: Always include this disclaimer at the end of educational responses:
"*This is for educational purposes only and not financial advice. For personalized guidance, please schedule a free consultation with our team.*"

If someone asks complex personal questions like "How much should I invest?" or "Is this right for my situation?", respond with:
"That's a great question that really depends on your personal financial situation. I'd recommend scheduling a free consultation with one of our advisors who can review your specific circumstances and goals. Would you like me to help you set that up?"
`

const fallbackResponses: Record<string, string> = {
  'fixed annuity': `A **fixed annuity** is a contract with an insurance company that guarantees a fixed interest rate on your investment for a specific period. Think of it like a CD from a bank, but typically with higher rates and tax-deferred growth.

**Key benefits:**
• Guaranteed interest rate (typically 3-6%)
• Principal protection - your money is safe from market losses
• Tax-deferred growth until withdrawal
• Predictable, reliable returns

Fixed annuities are ideal for conservative investors who want safety and predictability in their retirement portfolio.

*This is for educational purposes only and not financial advice. For personalized guidance, please schedule a free consultation with our team.*`,
  
  'indexed annuity': `An **indexed annuity** (also called a fixed indexed annuity) offers growth potential linked to a market index like the S&P 500, while protecting your principal from market losses.

**How it works:**
• Your returns are tied to index performance, up to a cap
• If the market goes down, you don't lose money (0% floor)
• You participate in gains without direct market risk

**Key benefits:**
• Growth potential higher than fixed annuities
• Downside protection - never lose principal to market drops
• Tax-deferred growth

Indexed annuities are great for those who want some market participation without the full risk.

*This is for educational purposes only and not financial advice. For personalized guidance, please schedule a free consultation with our team.*`,
  
  'retirement income': `Planning for **retirement income** involves creating a strategy to ensure you have enough money to cover your expenses throughout retirement.

**Key strategies:**
• **Guaranteed income:** Annuities can provide lifetime income you can't outlive
• **Bucket strategy:** Divide savings into short, medium, and long-term buckets
• **Social Security optimization:** Timing your benefits for maximum payout
• **Withdrawal planning:** Sustainable withdrawal rates (typically 3-4%)

The goal is to create predictable income that covers essential expenses while allowing growth for discretionary spending.

*This is for educational purposes only and not financial advice. For personalized guidance, please schedule a free consultation with our team.*`,
  
  'difference': `**Fixed vs. Indexed Annuities:**

**Fixed Annuities:**
• Guaranteed fixed interest rate
• Lower but predictable returns
• Best for: Conservative investors wanting certainty

**Indexed Annuities:**
• Returns linked to market index performance
• Higher growth potential with downside protection
• Best for: Those wanting growth without market risk

Both protect your principal and offer tax-deferred growth. The right choice depends on your risk tolerance and goals.

*This is for educational purposes only and not financial advice. For personalized guidance, please schedule a free consultation with our team.*`,
  
  'default': `Thank you for your question! I'd be happy to help you learn more about annuities and retirement planning.

For the most accurate and personalized information, I recommend scheduling a free consultation with one of our experienced advisors. They can review your specific situation and provide tailored guidance.

You can also explore our website for educational resources on:
• Fixed and indexed annuities
• Retirement income strategies
• Risk management in retirement

*This is for educational purposes only and not financial advice. For personalized guidance, please schedule a free consultation with our team.*`
}

function getFallbackResponse(message: string): string {
  const lowerMessage = message.toLowerCase()
  
  if (lowerMessage.includes('fixed annuity') || lowerMessage.includes('what is a fixed')) {
    return fallbackResponses['fixed annuity']
  }
  if (lowerMessage.includes('indexed annuity') || lowerMessage.includes('index annuity')) {
    return fallbackResponses['indexed annuity']
  }
  if (lowerMessage.includes('retirement income') || lowerMessage.includes('plan for retirement')) {
    return fallbackResponses['retirement income']
  }
  if (lowerMessage.includes('difference') || lowerMessage.includes('compare') || lowerMessage.includes('vs')) {
    return fallbackResponses['difference']
  }
  
  return fallbackResponses['default']
}

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json()

    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      )
    }

    const apiKey = process.env.OPENAI_API_KEY

    if (!apiKey) {
      return NextResponse.json({
        message: getFallbackResponse(message)
      })
    }

    const openai = new OpenAI({ apiKey })

    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: message }
      ],
      max_tokens: 500,
      temperature: 0.7,
    })

    const responseMessage = completion.choices[0]?.message?.content || 
      "I apologize, but I couldn't generate a response. Please try again or contact us directly."

    return NextResponse.json({ message: responseMessage })

  } catch (error) {
    console.error('Chat API error:', error)
    return NextResponse.json({
      message: getFallbackResponse(message)
    })
  }
}
