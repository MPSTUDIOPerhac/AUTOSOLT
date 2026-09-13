export type ServiceData = {
  slug: string
  label: string
  icon: string
  paragraphs: string[]
  list?: { intro: string; items: string[] }
  usedBy?: string
}

export const services: ServiceData[] = [
  {
    slug: 'prodej-nahradnich-dilu',
    label: 'Prodej náhradních dílů',
    icon: '/images/services/icon-prodej-dilu.png',
    paragraphs: [
      'Skladem i na objednávku dodáváme originální i kvalitní neoriginální náhradní díly pro většinu značek osobních a užitkových vozidel – od žárovek a filtrů přes brzdové komponenty a spojkové sady až po akumulátory.',
      'Většinu běžných dílů máme skladem k okamžitému odběru, méně obvyklé položky objednáváme u prověřených dodavatelů s dodáním do 24 hodin.',
      'Součástí nabídky je i autokosmetika a chemie – oleje, čisticí a ochranné přípravky pro interiér i exteriér vozu.',
    ],
  },
  {
    slug: 'pneuservis',
    label: 'Pneuservis 12”-24”',
    icon: '/images/services/icon-pneuservis.png',
    paragraphs: [
      'Kompletní přezutí, opravy defektů i prodej nových a použitých pneumatik pro ráfky 12" až 24".',
      'Kola vyvažujeme na digitální vyvažovačce, čímž eliminujeme vibrace volantu a nerovnoměrné opotřebení pneumatik při vyšších rychlostech.',
    ],
    usedBy: 'Pracujeme s technikou John Bean.',
  },
  {
    slug: '3d-geometrie',
    label: '3D Geometrie',
    icon: '/images/services/icon-geometrie.png',
    paragraphs: [
      'Přesné seřízení geometrie náprav pomocí 3D měřicí techniky prodlužuje životnost pneumatik a vrací vozu stabilní, přímočarý jízdní projev.',
      'Po měření obdržíte protokol s naměřenými i výrobcem předepsanými hodnotami, takže máte jasný přehled o stavu podvozku.',
    ],
    usedBy: 'Pracujeme s technikou John Bean.',
  },
  {
    slug: 'klimatizace',
    label: 'Servis a plnění klimatizací',
    icon: '/images/services/icon-klimatizace.png',
    paragraphs: [
      'Kompletní servis klimatizace – od kontroly těsnosti systému a dohledání případného úniku chladiva až po jeho doplnění na předepsané množství.',
      'Součástí servisu je i dezinfekce výparníku, která odstraní bakterie a nepříjemný zápach z ventilace.',
      'Plnění provádíme na stanici Clima 9000, která zvládne i nejnáročnější systémy moderních vozů.',
    ],
    usedBy: 'Technika Brain Bee.',
  },
  {
    slug: 'diagnostika-autoelektrika',
    label: 'Diagnostika a autoelektrika',
    icon: '/images/services/icon-diagnostika.png',
    paragraphs: [
      'Počítačovou diagnostiku provádíme na zařízení Bosch KTS 650 – jednom z nejvýkonnějších diagnostických přístrojů na trhu, který umí cíleně vyhledat zdroj závady napříč všemi řídicími jednotkami vozu.',
      'Přístroj pracuje se systémem Bosch ESI[tronic], díky kterému máme k dispozici aktuální technické podklady, schémata zapojení i postupy oprav přímo od výrobců vozidel.',
      'Odhalíme tak nejen chybové kódy, ale i jejich skutečnou příčinu – ať už jde o elektroniku, senzory nebo samotnou autoelektriku.',
    ],
    usedBy: 'Diagnostika Bosch.',
  },
  {
    slug: 'vymena-autoskel',
    label: 'Výměna autoskel',
    icon: '/images/services/icon-vymena-autoskel.png',
    paragraphs: [
      'Poškozené nebo prasklé čelní, boční i zadní sklo vyměníme za nové, včetně potřebného seřízení a kalibrace souvisejících asistenčních systémů, pokud jimi vůz je vybaven.',
      'Konečná cena se odvíjí od typu vozu a náročnosti montáže – přesnou kalkulaci vám rádi připravíme předem.',
    ],
  },
  {
    slug: 'priprava-na-stk',
    label: 'Příprava vozu na STK',
    icon: '/images/services/icon-priprava-stk.png',
    paragraphs: [
      'Před samotnou technickou kontrolou vůz projedeme podle stejných kritérií, jaká uplatňuje STK, a upozorníme vás na vše, co by mohlo vést k neúspěchu.',
      'Zjištěné závady s vámi probereme a navrhneme nejrychlejší i nejhospodárnější způsob opravy.',
      'Na přání zajistíme i samotné přistavení vozu na měrovou linku technické kontroly.',
    ],
  },
  {
    slug: 'vlastni-odtah',
    label: 'Vlastní odtah',
    icon: '/images/services/icon-vlastni-odtah.png',
    paragraphs: [
      'Nepojízdné vozidlo k nám dopravíme vlastním odtahovým vozem s podvalníkem, takže se auto při přepravě ani nedotkne vozovky.',
      'Odtah zajišťujeme po celém Středočeském kraji, po telefonické domluvě je možné vyjet i mimo běžnou otevírací dobu.',
    ],
  },
]
