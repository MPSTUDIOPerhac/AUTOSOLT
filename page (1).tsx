import { SiteHeader } from '@/components/site/site-header'
import { Hero } from '@/components/site/hero'
import { InfoCards } from '@/components/site/info-cards'
import { Services } from '@/components/site/services'
import { Contact } from '@/components/site/contact'
import { SiteFooter } from '@/components/site/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <InfoCards />
        <Services />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
