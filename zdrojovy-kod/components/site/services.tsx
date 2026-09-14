import Link from 'next/link'
import { services } from '@/lib/services-data'

export function Services() {
  return (
    <section id="sluzby" className="scroll-mt-4 bg-background py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center font-heading text-2xl font-extrabold text-foreground sm:text-3xl">
          Vybrané služby AUTOSOLT
        </h2>

        <ul className="mx-auto mt-4 flex max-w-3xl flex-col items-center justify-center gap-x-4 gap-y-1 text-center text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:flex-row sm:text-sm">
          <li>Špičkové technologie</li>
          <li aria-hidden="true" className="hidden text-primary sm:inline">
            |
          </li>
          <li>Nejmodernější vybavení</li>
          <li aria-hidden="true" className="hidden text-primary sm:inline">
            |
          </li>
          <li>Pravidelně školený tým mechaniků</li>
        </ul>

        <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-14 sm:grid-cols-4">
          {services.map(({ slug, icon, label }) => (
            <Link
              key={slug}
              href={`/sluzby/${slug}`}
              className="group flex flex-col items-center text-center"
            >
              <img
                src={icon}
                alt={label}
                className="h-20 w-20 object-contain transition-transform group-hover:scale-105 sm:h-24 sm:w-24"
              />
              <p className="mt-4 max-w-[11rem] text-sm font-semibold leading-snug text-balance text-foreground group-hover:text-primary">
                {label}
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <a
            href="/objednejte-se"
            className="inline-flex rounded-md bg-cta px-8 py-3.5 text-sm font-bold text-cta-foreground transition-colors hover:brightness-95"
          >
            Objednejte se online!
          </a>
        </div>
      </div>
    </section>
  )
}
