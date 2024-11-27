'use client'

import { useSearchParams } from 'next/navigation'
import CheckoutForm from '@/components/ui/CheckoutForm'

export default function CheckoutPage() {
  const searchParams = useSearchParams()
  const plan = searchParams.get('plan')

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Checkout - {plan ? plan.charAt(0).toUpperCase() + plan.slice(1) : 'Plano'}</h1>
        <CheckoutForm />
      </div>
    </div>
  )
}

