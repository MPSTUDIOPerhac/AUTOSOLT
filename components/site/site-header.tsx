'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Logo } from './logo'

const navItems = [
  { label: 'NAŠE SLUŽBY', href: '/#sluzby' },
  { label: 'OBJEDNAT SE', href: '/objednejte-se' },
  { label: 'KONTAKT', href: '/#kontakt' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="relative z-20 bg-primary">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4">
        <Logo className="lg:-ml-[clamp(1rem,7vw,9rem)]" />

        <nav className="hidden items-center gap-8 md:flex" aria-label="Hlavní navigace">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-semibold tracking-wide text-white transition-colors hover:text-cta"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          id="mobile-menu-button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-md p-2 text-white transition-colors duration-150 hover:bg-white/10 active:bg-white/20 md:hidden"
          aria-label={open ? 'Zavřít menu' : 'Otevřít menu'}
          aria-expanded={open}
        >
          <Menu className="h-6 w-6 [[aria-expanded=true]_&]:hidden" />
          <X className="hidden h-6 w-6 [[aria-expanded=true]_&]:block" />
        </button>
      </div>

      {/* Tmavý překryv za rozbaleným menu – klik na něj menu zavře */}
      <div
        id="mobile-menu-backdrop"
        onClick={() => setOpen(false)}
        aria-hidden="true"
        className={`fixed inset-0 z-10 bg-black/40 transition-opacity duration-300 ease-in-out md:hidden ${
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      />

      <nav
        id="mobile-menu"
        className={`relative z-20 overflow-hidden border-t border-white/15 bg-primary transition-all duration-300 ease-in-out md:hidden ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
        aria-label="Mobilní navigace"
      >
        <ul className="flex flex-col px-4 py-3">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="block py-2.5 text-sm font-semibold tracking-wide text-white transition-colors hover:text-cta"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
