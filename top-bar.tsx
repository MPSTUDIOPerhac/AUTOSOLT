export function TopBar() {
  return (
    <div className="bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-3 px-4 py-3 text-center sm:flex-row sm:gap-6">
        <p className="text-xs font-semibold leading-snug text-pretty sm:text-sm">
          Vyrazte na STK bez starostí, nebo ji celou nechte na nás!
          <br className="hidden sm:block" />
          <span className="font-medium"> Kontrola vozidla před STK za 1999,-</span>
        </p>
        <a
          href="/objednejte-se"
          className="shrink-0 rounded-md bg-cta px-5 py-2 text-xs font-bold text-cta-foreground transition-colors hover:brightness-95 sm:px-6 sm:py-2.5 sm:text-sm"
        >
          Objednat kontrolu
        </a>
      </div>
    </div>
  )
}
