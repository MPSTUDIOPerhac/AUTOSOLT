const navItems = [
  { label: 'NAŠE SLUŽBY', href: '/#sluzby' },
  { label: 'OBJEDNAT SE', href: '/objednejte-se' },
  { label: 'KONTAKT', href: '/#kontakt' },
]

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 py-5 text-center md:flex-row md:justify-between md:text-left">
        <p className="text-sm font-semibold">
          © Autoservis AUTOSOLT, Italská 694, Milovice nad Labem
        </p>
        <nav aria-label="Patička">
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-sm font-semibold tracking-wide transition-opacity hover:opacity-80"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  )
}
