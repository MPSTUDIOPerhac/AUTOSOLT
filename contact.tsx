export function Contact() {
  return (
    <section id="kontakt" className="bg-muted py-16 scroll-mt-4">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-center font-heading text-2xl font-extrabold text-foreground sm:text-3xl">
          Kontakt
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2 md:items-start">
          <div className="space-y-6 text-foreground md:pl-8">
            <div>
              <p className="font-semibold">Autoservis AUTOSOLT</p>
              <p className="text-muted-foreground">Italská 694</p>
              <p className="text-muted-foreground">289 24 Milovice nad Labem 3 - Mladá</p>
            </div>
            <div>
              <p className="font-semibold">Otevírací doba</p>
              <p className="text-muted-foreground">PO - PÁ: 8 - 17 hod</p>
              <p className="text-muted-foreground">SO - NE: Zavřeno</p>
            </div>
            <div>
              <p className="font-semibold">Kontaktní údaje</p>
              <p className="text-muted-foreground">
                Tel:{' '}
                <a href="tel:+420775957128" className="hover:text-primary">
                  775 957 128
                </a>
              </p>
              <p className="text-muted-foreground">
                E-mail:{' '}
                <a href="mailto:vanosolt@seznam.cz" className="hover:text-primary">
                  vanosolt@seznam.cz
                </a>
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg border border-border shadow-sm">
            <div className="bg-primary px-5 py-3">
              <span className="font-heading text-lg font-semibold text-primary-foreground">
                AUTOSOLT - Kde nás najít?
              </span>
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=AUTOSERVIS+SOLT+Italsk%C3%A1+694+Milovice+nad+Labem"
              target="_blank"
              rel="noopener noreferrer"
              className="relative block h-72 w-full"
            >
              <img
                src="/images/map.png"
                alt="Mapa s umístěním AUTOSERVIS SOLT – proklik na Google Maps"
                className="h-full w-full object-cover"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
