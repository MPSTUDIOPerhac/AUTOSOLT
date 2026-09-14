'use client'

import { useEffect } from 'react'

function scrollToHash(hash: string) {
  const el = document.getElementById(hash.slice(1))
  if (!el) return
  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export function SmoothScroll() {
  useEffect(() => {
    // Doskočení na kotvu po přechodu z jiné stránky (např. z podstránky služby
    // na "/#kontakt") – prohlížeč tam jinak skočí okamžitě, bez animace.
    if (window.location.hash) {
      const hash = window.location.hash
      window.scrollTo(0, 0)
      requestAnimationFrame(() => scrollToHash(hash))
    }

    function handleClick(e: MouseEvent) {
      const link = (e.target as HTMLElement)?.closest('a')
      if (!link) return
      const href = link.getAttribute('href')
      if (!href) return

      const hashIndex = href.indexOf('#')
      if (hashIndex === -1) return

      const pathPart = href.slice(0, hashIndex)
      const hashPart = href.slice(hashIndex)
      const isSamePage = pathPart === '' || pathPart === '/' || pathPart === window.location.pathname

      if (isSamePage && document.getElementById(hashPart.slice(1))) {
        e.preventDefault()
        scrollToHash(hashPart)
        window.history.pushState(null, '', hashPart)
      }
      // Jinak (odkaz na jinou stránku) necháme běžnou navigaci – doskočení
      // na kotvu po načtení obstará kód výše.
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  return null
}
