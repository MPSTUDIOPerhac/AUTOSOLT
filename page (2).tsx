import { SiteHeader } from '@/components/site/site-header'
import { OrderForm } from '@/components/site/order-form'
import { SiteFooter } from '@/components/site/site-footer'

export const metadata = {
  title: 'Objednejte se – AUTOSOLT',
  description: 'Objednávkový formulář autoservisu AUTOSOLT. Objednejte se ještě dnes!',
}

export default function ObjednejteSePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <OrderForm />
      </main>
      <SiteFooter />
    </>
  )
}
