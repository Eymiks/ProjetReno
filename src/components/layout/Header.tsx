'use client'
import Link from 'next/link'
import { useState } from 'react'
import { Hammer, Menu, X } from 'lucide-react'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-white border-b border-beige sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 text-wood font-bold text-xl">
            <Hammer className="w-6 h-6" />
            <span>RénoFacile</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-slate hover:text-wood transition-colors text-sm font-medium">Accueil</Link>
            <Link href="/tutoriels" className="text-slate hover:text-wood transition-colors text-sm font-medium">Tutoriels</Link>
            <Link href="/tutoriels?categorie=electricite" className="text-slate hover:text-wood transition-colors text-sm font-medium">Électricité</Link>
            <Link href="/tutoriels?categorie=plomberie" className="text-slate hover:text-wood transition-colors text-sm font-medium">Plomberie</Link>
            <Link href="/tutoriels" className="btn-primary text-sm py-2">
              Tous les tutoriels
            </Link>
          </nav>

          <button className="md:hidden p-2 text-slate" onClick={() => setOpen(!open)}>
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-beige px-4 py-4 flex flex-col gap-3">
          <Link href="/" className="text-slate hover:text-wood py-2 font-medium" onClick={() => setOpen(false)}>Accueil</Link>
          <Link href="/tutoriels" className="text-slate hover:text-wood py-2 font-medium" onClick={() => setOpen(false)}>Tous les tutoriels</Link>
          <Link href="/tutoriels?categorie=electricite" className="text-slate hover:text-wood py-2 font-medium" onClick={() => setOpen(false)}>Électricité</Link>
          <Link href="/tutoriels?categorie=plomberie" className="text-slate hover:text-wood py-2 font-medium" onClick={() => setOpen(false)}>Plomberie</Link>
        </div>
      )}
    </header>
  )
}
