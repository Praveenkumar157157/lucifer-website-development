'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavItem {
  id: number;
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: 1, label: 'HOME', href: '/' },
  { id: 2, label: 'AI', href: '/ai' },
  { id: 3, label: 'APIS', href: '/apis' },
  { id: 4, label: 'PROJECTS', href: '/projects' },
  { id: 5, label: 'GAMES', href: '/games' },
  { id: 6, label: 'FREE MONEY', href: '/free-money' },
  { id: 7, label: 'CONTACT', href: '/contact' },
];

export default function MagneticNav() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);


  if (!mounted || pathname === "/sign-in") return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-40">
      <button
        type="button"
        aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
        className="pointer-events-auto fixed right-6 top-6 z-50 flex size-12 flex-col items-center justify-center gap-1.5 rounded-full border border-white/15 bg-black/35 backdrop-blur-md transition hover:border-cyan-300/60 hover:bg-cyan-300/10"
      >
        <span className={`block h-0.5 w-6 rounded-full bg-cyan-300 transition-transform ${menuOpen ? 'translate-y-2 rotate-45' : ''}`} />
        <span className={`block h-0.5 w-4 rounded-full bg-fuchsia-400 transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
        <span className={`block h-0.5 w-6 rounded-full bg-white transition-transform ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
      </button>

      {menuOpen && (
        <nav aria-label="Main navigation" className="pointer-events-auto fixed right-6 top-24 w-48 rounded-2xl border border-white/10 bg-[#0d0d12]/95 p-3 shadow-2xl shadow-cyan-950/30 backdrop-blur-xl">
          {NAV_ITEMS.map((item) => (
            <Link key={item.id} href={item.href} onClick={() => setMenuOpen(false)} className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold text-white/80 transition hover:bg-cyan-300/10 hover:text-cyan-300">
              <span className="font-mono text-[10px] text-cyan-300/60">{String(item.id).padStart(2, '0')}</span>
              {item.label}
            </Link>
          ))}
        </nav>
      )}


    </div>
  );
}
