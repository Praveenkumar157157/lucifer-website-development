'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { GoogleSignupButton } from '@/components/google-signup-button';

interface NavItem {
  id: number;
  label: string;
  href: string;
}

interface ItemState {
  x: number;
  y: number;
  scale: number;
  opacity: number;
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
  const [signupPromptOpen, setSignupPromptOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [itemStates, setItemStates] = useState<Record<number, ItemState>>(
    Object.fromEntries(NAV_ITEMS.map((item) => [item.id, { x: 0, y: 0, scale: 1, opacity: 0.6 }]))
  );
  const velocitiesRef = useRef<Record<number, { x: number; y: number }>>(
    Object.fromEntries(NAV_ITEMS.map((item) => [item.id, { x: 0, y: 0 }]))
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    let animationId: number;

    const animate = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const containerCenterX = rect.left + rect.width / 2;
      const containerCenterY = rect.top + rect.height / 2;

      setItemStates((prev) => {
        const newStates = { ...prev };
        const MAGNETIC_RADIUS = 150;
        const SPRING_CONSTANT = 0.2;
        const FRICTION = 0.92;
        const MAX_OFFSET = 40;

        NAV_ITEMS.forEach((item) => {
          const itemY = containerCenterY + (item.id - (NAV_ITEMS.length + 1) / 2) * 58;
          const itemX = rect.right - 60;

          const distX = mousePos.x - itemX;
          const distY = mousePos.y - itemY;
          const distance = Math.sqrt(distX * distX + distY * distY);

          let targetX = 0;
          let targetY = 0;
          let scale = 1;
          let opacity = 0.6;

          if (distance < MAGNETIC_RADIUS) {
            const attractForce = 1 - distance / MAGNETIC_RADIUS;
            const normalX = distX / distance || 0;
            const normalY = distY / distance || 0;

            targetX = normalX * Math.min(attractForce * MAX_OFFSET, MAX_OFFSET);
            targetY = normalY * Math.min(attractForce * MAX_OFFSET, MAX_OFFSET);
            scale = 1 + attractForce * 0.3;
            opacity = 0.8 + attractForce * 0.2;
          }

          // Spring physics
          const vel = velocitiesRef.current[item.id];
          vel.x += (targetX - prev[item.id].x) * SPRING_CONSTANT;
          vel.y += (targetY - prev[item.id].y) * SPRING_CONSTANT;
          vel.x *= FRICTION;
          vel.y *= FRICTION;

          newStates[item.id] = {
            x: prev[item.id].x + vel.x,
            y: prev[item.id].y + vel.y,
            scale: prev[item.id].scale + (scale - prev[item.id].scale) * 0.1,
            opacity: prev[item.id].opacity + (opacity - prev[item.id].opacity) * 0.1,
          };
        });

        return newStates;
      });

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, [mousePos]);

  const isActive = (href: string) => pathname === href;

  if (!mounted) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-40"
    >
      <div className="pointer-events-auto fixed right-6 top-6 z-50 flex items-center gap-3">
        <GoogleSignupButton />
        <button
          type="button"
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="flex size-12 flex-col items-center justify-center gap-1.5 rounded-full border border-white/15 bg-black/40 backdrop-blur-md transition hover:border-cyan-300/60 hover:bg-cyan-300/10"
        >
          <span className={`h-0.5 w-6 rounded-full bg-cyan-300 transition-transform ${menuOpen ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`h-0.5 w-4 rounded-full bg-fuchsia-400 transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`h-0.5 w-6 rounded-full bg-white transition-transform ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </div>

      {signupPromptOpen && (
        <div className="pointer-events-auto fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6 backdrop-blur-sm" role="dialog" aria-modal="true" aria-labelledby="signup-prompt-title">
          <div className="relative w-full max-w-sm rounded-3xl border border-white/15 bg-[#0d0d12] p-6 shadow-2xl shadow-cyan-950/40">
            <button type="button" onClick={() => setSignupPromptOpen(false)} className="absolute right-4 top-4 text-2xl leading-none text-white/50 hover:text-white" aria-label="Close sign up prompt">×</button>
            <p className="mb-2 font-mono text-xs uppercase tracking-[0.25em] text-cyan-300">Members area</p>
            <h2 id="signup-prompt-title" className="mb-2 text-2xl font-bold text-white">Sign up to continue</h2>
            <p className="mb-5 text-sm leading-6 text-white/60">Explore the homepage freely. Sign up with Google to open this section.</p>
            <GoogleSignupButton />
          </div>
        </div>
      )}

      {menuOpen && (
        <div className="relative h-full flex flex-col justify-center items-end pr-6 pointer-events-auto">
        {NAV_ITEMS.map((item) => {
          const state = itemStates[item.id];
          const active = isActive(item.href);

          return (
            <Link
              key={item.id}
              href={item.href}
              onClick={(event) => {
                if (item.href !== '/') {
                  event.preventDefault();
                  setMenuOpen(false);
                  setSignupPromptOpen(true);
                }
              }}
              className="group relative mb-16 last:mb-0 transition-all duration-300"
              style={{
                transform: `translate(${state.x}px, ${state.y}px) scale(${state.scale})`,
                opacity: state.opacity,
              }}
            >
              <div className="flex flex-col items-end gap-2">
                {/* Glowing dot for active state */}
                {active && (
                  <div className="absolute -right-12 top-1/2 -translate-y-1/2 flex items-center gap-2">
                    <div className="w-0.5 h-8 bg-gradient-to-b from-transparent via-cyan-400 to-transparent" />
                    <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50" />
                  </div>
                )}

                {/* Index number */}
                <div className="text-[10px] font-mono text-gray-500 group-hover:text-cyan-400 transition-colors duration-200 tracking-widest">
                  {String(item.id).padStart(2, '0')}
                </div>

                {/* Label */}
                <div className="text-xs font-bold uppercase tracking-wider text-white group-hover:text-cyan-300 transition-colors duration-200 whitespace-nowrap">
                  {item.label}
                </div>

                {/* Indicator line */}
                <div
                  className="h-0.5 bg-gradient-to-l from-cyan-400 to-transparent transition-all duration-300"
                  style={{
                    width: active || state.scale > 1.1 ? '48px' : '32px',
                    opacity: active ? 1 : 0.4,
                  }}
                />
              </div>
            </Link>
          );
        })}
        </div>
      )}
    </div>
  );
}
