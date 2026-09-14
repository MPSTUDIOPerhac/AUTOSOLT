import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Poppins } from 'next/font/google'
import { SmoothScroll } from '@/components/site/smooth-scroll'
import './globals.css'

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin', 'latin-ext'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'AUTOSOLT – Moderní autoservis',
  description:
    'Spolehlivý autoservis pro všechny značky aut. Férové ceny, nejmodernější vybavení a individuální přístup. Objednejte se online!',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  themeColor: '#173a5e',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="cs"
      className={`${inter.variable} ${poppins.variable} scroll-smooth bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        <SmoothScroll />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
