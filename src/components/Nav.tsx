'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Logo from './Logo';

const links = [
  { href: '#manifesto', label: 'Manifesto' },
  { href: '#grupo', label: 'O Grupo' },
  { href: '#realizacoes', label: 'Realizações' },
  { href: '#historia', label: 'História' },
];

export default function Nav() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
          solid ? 'border-b border-white/[0.06] bg-[#0f0f10]/85 backdrop-blur-xl' : ''
        }`}
      >
        <nav className="shell flex h-[88px] items-center justify-between">
          <a href="#topo" aria-label="Grupo i5" className="flex items-center gap-3">
            <Logo className="h-12 w-[118px]" priority />
          </a>

          <ul className="hidden items-center gap-9 md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="font-sans text-[11px] uppercase tracking-[0.2em] text-[#f3f2ee]/65 transition-colors hover:text-[#f5d291]"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contato"
            className="hidden rounded-full border border-[#b99a63]/45 px-5 py-2 font-sans text-[11px] uppercase tracking-[0.2em] text-[#f5d291] transition-all hover:bg-[#f5d291] hover:text-[#0f0f10] md:inline-block"
          >
            Fale com a i5
          </a>

          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] md:hidden"
          >
            <span
              className={`h-px w-5 bg-[#f3f2ee] transition-transform ${open ? 'translate-y-[3px] rotate-45' : ''}`}
            />
            <span
              className={`h-px w-5 bg-[#f3f2ee] transition-transform ${open ? '-translate-y-[3px] -rotate-45' : ''}`}
            />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[#0f0f10]/95 backdrop-blur-2xl md:hidden"
          >
            <ul className="flex h-full flex-col items-center justify-center gap-7">
              {[...links, { href: '#contato', label: 'Fale com a i5' }].map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 * i }}
                >
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-3xl font-light text-[#f3f2ee]"
                  >
                    {l.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
