import { notFound } from 'next/navigation'
import Link from 'next/link'
import { SiteHeader } from '@/components/site/site-header'
import { SiteFooter } from '@/components/site/site-footer'
import { services } from '@/lib/services-data'

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)
  if (!service) return {}
  return {
    title: `${service.label} – AUTOSOLT`,
    description: service.paragraphs[0],
  }
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)
  if (!service) notFound()

  return (
    <>
      <SiteHeader />
      <main>
        <section className="bg-background py-14">
          <div className="mx-auto max-w-3xl px-4">
            <Link
              href="/#sluzby"
              className="text-sm font-semibold text-muted-foreground hover:text-primary"
            >
              ← Zpět na služby
            </Link>

            <div className="mt-6 flex flex-col items-center text-center">
              <img src={service.icon} alt="" className="h-20 w-20 object-contain" />
              <h1 className="mt-4 font-heading text-3xl font-extrabold text-foreground sm:text-4xl">
                {service.label}
              </h1>
            </div>

            <div className="mx-auto mt-10 max-w-2xl space-y-5 text-left leading-relaxed text-foreground">
              {service.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}

              {service.list && (
                <div>
                  <p>{service.list.intro}</p>
                  <ul className="mt-2 list-inside list-disc space-y-1 text-muted-foreground">
                    {service.list.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {service.usedBy && (
                <p className="pt-2 text-sm font-semibold text-muted-foreground">
                  {service.usedBy}
                </p>
              )}
            </div>

            <div className="mt-12 flex justify-center">
              <a
                href="/objednejte-se"
                className="inline-flex rounded-md bg-cta px-8 py-3.5 text-sm font-bold text-cta-foreground transition-colors hover:brightness-95"
              >
                Objednejte se online!
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
