'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { brands } from '@/lib/site';
import BrandIcon from '../BrandIcon';

function Diag() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor">
      <path d="M7 17 17 7M9 7h8v8" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const label = (w: string) => `i5 ${w.charAt(0) + w.slice(1).toLowerCase()}`;

export default function Hero() {
  return (
    <section
      id="topo"
      data-theme="dark"
      className="theme-dark relative flex min-h-[100svh] items-center overflow-hidden"
    >
      {/* foto — metade direita */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-[50%]">
        <Image
          src="/img/hero.jpg"
          alt="Empreendimento do Grupo i5"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
        />
      </div>

      {/* véus */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,11,0.88)_0%,rgba(10,10,11,0.6)_45%,rgba(10,10,11,0.96)_92%,#0a0a0b_100%)] lg:bg-[linear-gradient(90deg,#0a0a0b_0%,#0a0a0b_44%,rgba(10,10,11,0.8)_52%,rgba(10,10,11,0.1)_72%,rgba(10,10,11,0)_100%)]" />

      <div className="relative z-10 w-full pb-16 pt-32 lg:pb-20 lg:pt-36">
        <div className="shell">
          <div className="max-w-[640px] lg:max-w-[560px]">
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="display text-[clamp(3rem,7vw,5.6rem)] leading-[0.95]"
            >
              Grupo i<span className="gold-text">5</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="lead mt-5 text-[1.05rem] font-light md:text-[1.2rem]"
            >
              A inteligência transforma vidas
            </motion.p>

            <ul className="mt-12 border-t border-white/[0.12]">
              {brands.map((b, i) => (
                <motion.li
                  key={b.key}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 + i * 0.09, ease: [0.22, 1, 0.36, 1] }}
                  className="border-b border-white/[0.12]"
                >
                  <a
                    href={`#${b.key}`}
                    className="group flex items-center gap-5 py-4 transition-colors hover:bg-white/[0.03]"
                  >
                    <BrandIcon
                      src={b.icon}
                      className="h-8 w-8 shrink-0 text-[color:var(--accent)] transition-transform duration-500 group-hover:scale-110"
                    />
                    <span className="min-w-0 flex-1">
                      <span className="block font-display text-[1.15rem] font-light text-[color:var(--fg)] md:text-[1.3rem]">
                        {label(b.wordmark)}
                      </span>
                      <span className="mt-0.5 block text-[0.8rem] font-light text-[color:var(--fg-mute)]">
                        {b.claim}
                      </span>
                    </span>
                    <span className="shrink-0 text-[color:var(--accent)] transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                      <Diag />
                    </span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
