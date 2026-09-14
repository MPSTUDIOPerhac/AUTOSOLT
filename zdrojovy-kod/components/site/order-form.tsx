'use client'

import { useState } from 'react'
import { services } from '@/lib/services-data'

export function OrderForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="bg-background py-16">
      <div className="mx-auto max-w-2xl px-4">
        <h2 className="text-center font-heading text-2xl font-extrabold text-foreground sm:text-3xl">
          Objednejte se ještě dnes!
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-center leading-relaxed text-muted-foreground">
          Vyplňte objednávkový formulář a my se vám co nejdříve ozveme s potvrzením termínu.
        </p>

        <div className="mt-10 rounded-lg border border-border bg-muted p-6 sm:p-8">
          {submitted ? (
            <div className="py-6 text-center">
              <p className="font-heading text-lg font-bold text-foreground">Děkujeme za objednávku!</p>
              <p className="mt-2 text-muted-foreground">
                Ozveme se vám co nejdříve na uvedený telefon nebo e-mail.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label htmlFor="name" className="block text-sm font-semibold text-foreground">
                  Jméno a příjmení *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="mt-1.5 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-primary"
                />
              </div>

              <div className="sm:col-span-1">
                <label htmlFor="phone" className="block text-sm font-semibold text-foreground">
                  Telefon *
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  className="mt-1.5 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-primary"
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-semibold text-foreground">
                  E-mail *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-1.5 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-primary"
                />
              </div>

              <div className="sm:col-span-1">
                <label htmlFor="car" className="block text-sm font-semibold text-foreground">
                  Značka a model vozu
                </label>
                <input
                  id="car"
                  name="car"
                  type="text"
                  placeholder="např. Škoda Octavia"
                  className="mt-1.5 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-primary"
                />
              </div>

              <div className="sm:col-span-1">
                <label htmlFor="date" className="block text-sm font-semibold text-foreground">
                  Preferovaný termín
                </label>
                <input
                  id="date"
                  name="date"
                  type="date"
                  className="mt-1.5 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-primary"
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="service" className="block text-sm font-semibold text-foreground">
                  Požadovaná služba
                </label>
                <select
                  id="service"
                  name="service"
                  className="mt-1.5 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-primary"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Vyberte službu
                  </option>
                  {services.map((s) => (
                    <option key={s.slug} value={s.label}>
                      {s.label}
                    </option>
                  ))}
                  <option value="jine">Jiné</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-semibold text-foreground">
                  Zpráva
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Popište prosím stručně, s čím vám můžeme pomoci."
                  className="mt-1.5 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-primary"
                />
              </div>

              <div className="flex items-start gap-2 sm:col-span-2">
                <input
                  id="gdpr"
                  name="gdpr"
                  type="checkbox"
                  required
                  className="mt-1 h-4 w-4 shrink-0 rounded border-border accent-primary"
                />
                <label htmlFor="gdpr" className="text-xs leading-relaxed text-muted-foreground">
                  Souhlasím se zpracováním osobních údajů za účelem vyřízení mé objednávky.
                </label>
              </div>

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-md bg-neutral-900 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-neutral-800 sm:w-auto"
                >
                  Odeslat objednávku
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
