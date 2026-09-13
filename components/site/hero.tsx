import { Check } from 'lucide-react'

const benefits = [
  'Férové ceny odpovídající jejímu odhadu',
  'Nejmodernější vybavení',
  'Individuální přístup',
  'Pravidelně školený tým mechaniků',
]

export function Hero() {
  return (
    <section id="autoservis" className="relative overflow-hidden bg-background">
      {/* Desktop: full-bleed image anchored to the right edge, diagonally cut on its left.
          bg-background = neprůhledné bílé pozadí přes celý obdélník kontejneru, aby diagonálně
          ořezaná (průhledná) část obrázku nikdy neprosvítala až ke stínu pod ní. */}
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 hidden w-[58%] bg-background lg:block"
        aria-hidden="true"
      >
        <img
          src="/images/hero-building.jpeg"
          alt=""
          className="h-full w-full object-cover"
          style={{ clipPath: 'polygon(14% 0, 100% 0, 100% 100%, 0% 100%)' }}
        />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-10 lg:grid-cols-2 lg:gap-6 lg:py-14">
        <div className="relative z-10 flex flex-col justify-center text-center lg:text-left lg:-ml-[clamp(1rem,7vw,9rem)]">
          <h1 className="font-heading text-3xl font-extrabold leading-tight text-balance text-foreground sm:text-4xl">
            Moderní autoservis pro Vaši bezpečnou jízdu
          </h1>
          <p className="mt-4 font-heading text-base font-bold text-primary sm:text-2xl">
            Nově otevřený autoservis
          </p>

          <p className="mx-auto mt-5 max-w-md leading-relaxed text-muted-foreground lg:mx-0">
            Spolehlivý servis pro všechny značky aut. Zakládáme si na stoprocentní férovosti a
            osobním přístupu.
          </p>

          <ul className="mx-auto mt-6 flex w-fit flex-col items-start gap-3 lg:mx-0">
            {benefits.map((b) => (
              <li key={b} className="flex items-center gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary">
                  <Check className="h-4 w-4 text-primary-foreground" strokeWidth={3} />
                </span>
                <span className="text-sm font-medium text-foreground">{b}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex justify-center lg:justify-start">
            <a
              href="/objednejte-se"
              className="inline-flex rounded-md bg-cta px-7 py-3.5 text-sm font-bold text-cta-foreground transition-colors hover:brightness-95"
            >
              Objednejte se online!
            </a>
          </div>
        </div>

        {/* spacer that reserves the image column height on desktop */}
        <div className="hidden lg:block" aria-hidden="true" />
      </div>

      {/* Mobile / tablet: contained image with rounded corners below the text */}
      <div className="px-4 pb-6 lg:hidden">
        <img
          src="/images/hero-building.jpeg"
          alt="Budova autoservisu AUTO SOLT s modrým nápisem a zaparkovanými auty"
          className="h-56 w-full rounded-xl object-cover sm:h-72"
        />
      </div>

      {/* Jemné oddělení hero sekce od karet níže – gradient s nejtmavším bodem přesně na
          spodní hraně (žádný posun/blur nahoru), takže vizuálně 1:1 sedí na hranu fotky.
          Pravá část schovaná pod neprůhledným kontejnerem fotky. Pouze desktop. */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 hidden h-6 bg-gradient-to-t from-black/20 to-transparent lg:block"
        aria-hidden="true"
      />
    </section>
  )
}
