'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Reveal from '../motion/Reveal';
import WordReveal from '../motion/WordReveal';
import SectionHead from '../SectionHead';
import Section from '../Section';
import Logo from '../Logo';
import { brands } from '@/lib/site';
import BrandIcon from '../BrandIcon';

const steps = ['Projetamos.', 'Construímos.', 'Vendemos.', 'Operamos.', 'Cuidamos.'];

export default function Ecosystem() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-15% 0px' });
  const [active, setActive] = useState<string | null>(null);

  const radius = 38;

  return (
    <Section id="ecossistema" theme="dark" className="py-28 md:py-40">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(233,215,187,0.12),transparent_65%)]" />

      <div className="shell relative">
        <SectionHead label="O ecossistema i5" />

        <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <h2 className="display max-w-2xl text-[clamp(2rem,5.2vw,4rem)]">
            <WordReveal text="Cinco empresas." />
            <br />
            <WordReveal text="Uma experiência completa." accent={['completa.']} delay={0.12} />
          </h2>
          <ul className="flex flex-wrap gap-x-5 gap-y-2 md:max-w-xs">
            {steps.map((s) => (
              <li key={s} className="lead text-sm">
                {s}
              </li>
            ))}
          </ul>
        </div>

        <div ref={ref} className="relative mx-auto mt-20 aspect-square w-full max-w-[560px]">
          {[1, 0.72, 0.44].map((s, i) => (
            <motion.span
              key={i}
              initial={{ scale: 0.7, opacity: 0 }}
              animate={inView ? { scale: s, opacity: 1 } : {}}
              transition={{ duration: 1.3, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 rounded-full border border-[color:var(--line)]"
            />
          ))}

          <motion.div
            className="absolute inset-0"
            animate={{ rotate: 360 }}
            transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
          >
            {brands.map((b, i) => {
              const angle = (i / brands.length) * Math.PI * 2 - Math.PI / 2;
              const left = 50 + Math.cos(angle) * radius;
              const top = 50 + Math.sin(angle) * radius;
              const isExternal = b.href.startsWith('http');

              return (
                <motion.div
                  key={b.key}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${left}%`, top: `${top}%` }}
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.5 + i * 0.12 }}
                >
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
                  >
                    <a
                      href={b.live ? b.href : `#${b.key}`}
                      target={b.live && isExternal ? '_blank' : undefined}
                      rel={b.live && isExternal ? 'noopener noreferrer' : undefined}
                      onMouseEnter={() => setActive(b.key)}
                      onMouseLeave={() => setActive(null)}
                      className={`flex h-[74px] w-[74px] items-center justify-center rounded-full border border-[color:var(--line)] bg-[color:var(--bg-2)] text-center backdrop-blur-xl transition-all duration-500 md:h-[104px] md:w-[104px] ${
                        active === b.key
                          ? 'border-[color:var(--accent)]/50 shadow-[0_0_44px_-8px_rgba(233,215,187,0.35)]'
                          : ''
                      }`}
                    >
                      <span className="flex flex-col items-center gap-1.5 text-[color:var(--accent)]">
                        <BrandIcon src={b.icon} className="h-5 w-5 md:h-7 md:w-7" />
                        <span className="font-sans text-[8px] tracking-[0.18em] md:text-[10px]">
                          {b.wordmark}
                        </span>
                      </span>
                    </a>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.25 }}
            className="absolute left-1/2 top-1/2 flex h-[128px] w-[128px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-[color:var(--accent)]/30 bg-[color:var(--bg-2)]/80 backdrop-blur-xl md:h-[164px] md:w-[164px]"
          >
            <Logo className="h-8 w-auto md:h-10" />
            <span className="muted mt-3 max-w-[110px] text-center font-sans text-[8px] uppercase leading-relaxed tracking-[0.2em] md:text-[9px]">
              Uma mesma inteligência
            </span>
          </motion.div>
        </div>

        <Reveal delay={0.2}>
          <p className="lead mx-auto mt-16 max-w-xl text-center text-base">
            Do projeto à entrega das chaves, do check-in à gestão do seu imóvel —
            tudo conectado por uma mesma forma de pensar.
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
