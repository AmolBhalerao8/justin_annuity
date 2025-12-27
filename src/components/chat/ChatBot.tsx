'use client'

import { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send, Bot, User, Loader2, Calendar } from 'lucide-react'
import { cn } from '@/lib/utils'
import Link from 'next/link'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

const INITIAL_MESSAGE: Message = {
  id: '1',
  role: 'assistant',
  content: "Hello! I'm your retirement planning assistant. I can help answer questions about annuities, retirement income strategies, and more. How can I help you today?\n\n*This is for educational purposes only and not financial advice.*",
  timestamp: new Date(),
}

const SUGGESTED_QUESTIONS = [
  "What is a fixed annuity?",
  "How do indexed annuities work?",
  "What's the difference between annuity types?",
  "How can I plan for retirement income?",
]

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input.trim(),
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage.content }),
      })

      const data = await response.json()

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.message || "I apologize, but I'm having trouble responding right now. Please try again or schedule a consultation with our team.",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, assistantMessage])
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: "I apologize, but I'm experiencing technical difficulties. Please try again later or contact us directly at (878) 673-0209.",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const handleSuggestedQuestion = (question: string) => {
    setInput(question)
    inputRef.current?.focus()
  }

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={cn(
          "fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-br from-navy-800 to-navy-900 text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-gold-400/20",
          isOpen && "scale-0 opacity-0"
        )}
        aria-label="Open chat assistant"
      >
        <MessageCircle className="h-7 w-7" />
        <span className="absolute top-0 right-0 w-4 h-4 bg-gold-400 rounded-full animate-pulse" />
      </button>

      {/* Chat Window */}
      <div
        className={cn(
          "fixed bottom-6 right-6 z-50 w-full max-w-md bg-white rounded-2xl shadow-2xl transition-all duration-300 flex flex-col",
          isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"
        )}
        style={{ height: 'min(600px, calc(100vh - 100px))' }}
        role="dialog"
        aria-label="Chat assistant"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-navy-800 to-navy-900 text-white p-4 flex items-center justify-between flex-shrink-0 rounded-t-2xl">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
              <Bot className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-semibold">Retirement Assistant</h3>
              <p className="text-xs text-navy-200">Here to help with your questions</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Close chat"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={cn(
                "flex items-start space-x-3",
                message.role === 'user' && "flex-row-reverse space-x-reverse"
              )}
            >
              <div
                className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0",
                  message.role === 'assistant' 
                    ? "bg-navy-100 text-navy-600" 
                    : "bg-gold-100 text-gold-600"
                )}
              >
                {message.role === 'assistant' ? (
                  <Bot className="h-4 w-4" />
                ) : (
                  <User className="h-4 w-4" />
                )}
              </div>
              <div
                className={cn(
                  "max-w-[80%] rounded-2xl px-4 py-3 text-sm",
                  message.role === 'assistant'
                    ? "bg-navy-50 text-navy-800"
                    : "bg-navy-800 text-white"
                )}
              >
                <p className="whitespace-pre-wrap">{message.content}</p>
              </div>
            </div>
          ))}
          
          {isLoading && (
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 rounded-full bg-navy-100 text-navy-600 flex items-center justify-center">
                <Bot className="h-4 w-4" />
              </div>
              <div className="bg-navy-50 rounded-2xl px-4 py-3">
                <Loader2 className="h-5 w-5 animate-spin text-navy-400" />
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Suggested Questions */}
        {messages.length === 1 && (
          <div className="px-4 pb-2 flex-shrink-0">
            <p className="text-xs text-navy-500 mb-2">Quick questions:</p>
            <div className="flex flex-wrap gap-2">
              {SUGGESTED_QUESTIONS.map((question) => (
                <button
                  key={question}
                  onClick={() => handleSuggestedQuestion(question)}
                  className="text-xs bg-navy-50 text-navy-700 px-3 py-1.5 rounded-full hover:bg-navy-100 transition-colors"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Input */}
        <div className="p-4 border-t border-navy-100 flex-shrink-0">
          <form onSubmit={handleSubmit} className="flex items-center space-x-2">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about annuities, retirement..."
              className="flex-1 px-4 py-3 bg-navy-50 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-navy-300 transition-all"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="p-3 bg-navy-800 text-white rounded-xl hover:bg-navy-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              aria-label="Send message"
            >
              <Send className="h-5 w-5" />
            </button>
          </form>
          <div className="mt-3 flex items-center justify-between">
            <p className="text-2xs text-navy-400">
              For personalized advice, schedule a consultation
            </p>
            <Link
              href="/contact"
              className="flex items-center text-xs text-gold-600 hover:text-gold-700 font-medium"
            >
              <Calendar className="h-3 w-3 mr-1" />
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
