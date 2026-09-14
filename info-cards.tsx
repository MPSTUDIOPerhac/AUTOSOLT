const cards = [
  {
    title: 'Kontrola vozu před dovolenou',
    image: '/images/kontrola-dovolena.png',
    alt: 'Rodinný vůz naložený na dovolenou po kontrole v autoservisu',
    text: 'Než vyrazíte na dovolenou, prohlédneme vůz od A do Z – brzdy, klimatizaci, provozní kapaliny i pneumatiky, abyste dojeli bezpečně.',
  },
  {
    title: 'Kontrola vozu před STK',
    image: '/images/kontrola-stk.png',
    alt: 'Vozidlo na zvedáku při přípravě na technickou kontrolu STK',
    text: 'Připravíme váš vůz na technickou kontrolu. Prověříme brzdy, emise i další důležité části tak, aby STK proběhla na první pokus.',
  },
  {
    title: 'Prodej náhradních dílů',
    image: '/images/car-parts.png',
    alt: 'Náhradní díly – brzdový kotouč s červeným třmenem, motorový olej, akumulátor a olejový filtr',
    text: 'V našem autoservisu můžete nakoupit veškeré náhradní díly, jako např. žárovky, výbojky, akumulátory, brzdové díly...',
  },
  {
    slug: 'vlastni-odtah',
    title: 'Vlastní odtah',
    image: '/images/vlastni-odtah-card.png',
    alt: 'Grafika s ikonou odtahového vozu na tmavě modrém pozadí',
    text: 'Nepojízdné auto? Dopravíme ho k nám vlastním odtahovým vozem s podvalníkem, po celém Středočeském kraji.',
  },
]

export function InfoCards() {
  return (
    <section className="bg-background py-4">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [scrollbar-width:thin]">
          {cards.map((card, i) => (
            <article
              key={i}
              className="flex w-[85%] shrink-0 snap-start flex-col overflow-hidden rounded-xl sm:w-[46%] lg:w-[31%]"
            >
              <img
                src={card.image || "/placeholder.svg"}
                alt={card.alt}
                className="h-56 w-full object-cover"
              />
              <div className="flex flex-1 flex-col bg-neutral-900 p-6 text-white">
                <span className="mb-4 inline-flex w-fit bg-cta px-4 py-1.5 text-sm font-bold text-cta-foreground">
                  {card.title}
                </span>
                <p className="text-sm leading-relaxed text-neutral-300">{card.text}</p>
                <a
                  href={card.slug ? `/sluzby/${card.slug}` : '#kontakt'}
                  className="mt-6 inline-flex w-fit text-sm font-semibold text-white underline underline-offset-4 hover:text-cta"
                >
                  Číst více
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
