'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import WordReveal from '../motion/WordReveal';

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '12%']);
  const fade = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const zoom = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section
      id="topo"
      ref={ref}
      data-theme="dark"
      className="theme-dark relative flex min-h-[100svh] items-center overflow-hidden"
    >
      {/* imagem à direita */}
      <motion.div
        style={{ scale: zoom }}
        className="absolute inset-y-0 right-0 w-full origin-right lg:w-[56%]"
      >
        <Image
          src="/img/hero.jpg"
          alt="Empreendimento do Grupo i5"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 56vw"
          className="object-cover"
        />
      </motion.div>

      {/* véus: a imagem some dentro do preto à esquerda e embaixo */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,11,0.8)_0%,rgba(10,10,11,0.45)_45%,rgba(10,10,11,0.95)_92%,#0a0a0b_100%)] lg:bg-[linear-gradient(90deg,#0a0a0b_0%,#0a0a0b_40%,rgba(10,10,11,0.85)_48%,rgba(10,10,11,0.15)_66%,rgba(10,10,11,0)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0a0a0b] to-transparent" />

      <motion.div style={{ y, opacity: fade }} className="relative z-10 w-full pt-28">
        <div className="shell">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-9 flex items-center gap-4"
          >
            <span className="h-px w-12 bg-[color:var(--accent-2)]" />
            <span className="label">Grupo i5 · desde 2007</span>
          </motion.div>

          <h1 className="display max-w-3xl text-[clamp(2.6rem,6.4vw,5.2rem)]">
            <WordReveal text="A inteligência" delay={0.3} />
            <br />
            <WordReveal text="transforma vidas." accent={['transforma', 'vidas.']} delay={0.5} />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.05 }}
            className="lead mt-8 max-w-lg text-base leading-relaxed md:text-[1.05rem]"
          >
            Há 19 anos, criamos formas mais simples e inteligentes de morar,
            trabalhar e viver.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.25 }}
            className="mt-12"
          >
            <a
              href="#grupo"
              className="group inline-flex items-center gap-6 rounded-full border border-white/25 px-9 py-4 text-sm font-light text-[color:var(--fg)] transition-colors hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
            >
              Conheça nossos negócios
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
              >
                <path
                  d="M4 12h15M13 6l6 6-6 6"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
