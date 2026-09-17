'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import WordReveal from '../motion/WordReveal';
import BrandIcon from '../BrandIcon';
import { brands } from '@/lib/site';

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '14%']);
  const fade = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const zoom = useTransform(scrollYProgress, [0, 1], [1, 1.12]);

  return (
    <section
      id="topo"
      ref={ref}
      data-theme="dark"
      className="theme-dark relative flex min-h-[100svh] flex-col justify-end overflow-hidden"
    >
      {/* arte à direita, como no slide de abertura */}
      <motion.div style={{ scale: zoom }} className="absolute inset-y-0 right-0 w-full lg:w-[52%]">
        <Image
          src="/img/incorp.jpg"
          alt="Empreendimento i5"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      {/* véus */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,11,12,0.78)_0%,rgba(11,11,12,0.35)_40%,rgba(11,11,12,0.92)_88%,#0b0b0c_100%)] lg:bg-[linear-gradient(90deg,#0b0b0c_0%,#0b0b0c_44%,rgba(11,11,12,0.7)_54%,rgba(11,11,12,0.25)_72%,rgba(11,11,12,0.55)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#0b0b0c] to-transparent" />

      <motion.div style={{ y, opacity: fade }} className="relative z-10 pb-10 pt-32 lg:pb-16">
        <div className="shell lg:max-w-[1400px]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.25 }}
            className="mb-8 flex items-center gap-4"
          >
            <span className="h-px w-10 bg-[color:var(--accent-2)]" />
            <span className="label">Grupo i5 · desde 2007</span>
          </motion.div>

          <h1 className="display max-w-4xl text-[clamp(2.5rem,7vw,5.6rem)]">
            <WordReveal text="A inteligência" delay={0.35} />
            <br />
            <WordReveal text="transforma vidas." accent={['transforma', 'vidas.']} delay={0.55} />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="lead mt-7 max-w-lg text-base leading-relaxed md:text-lg"
          >
            19 anos buscando uma maneira melhor de fazer. Cinco negócios, uma
            mesma forma de pensar.
          </motion.p>
        </div>
      </motion.div>

      {/* barra das cinco empresas */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.3, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 border-t border-white/[0.09] bg-[#121213]/55 backdrop-blur-md"
      >
        <div className="shell grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
          {brands.map((b) => (
            <a
              key={b.key}
              href={`#${b.key}`}
              className="group flex items-center gap-3 border-b border-white/[0.06] py-4 transition-colors hover:text-[color:var(--accent)] lg:border-b-0 lg:border-r lg:border-white/[0.06] lg:px-4 lg:last:border-r-0"
            >
              <BrandIcon
                src={b.icon}
                className="h-8 w-8 shrink-0 text-[color:var(--accent-2)] transition-colors group-hover:text-[color:var(--accent)]"
              />
              <span className="font-sans text-[10px] uppercase tracking-label text-[#f3f2ee]/70 transition-colors group-hover:text-[color:var(--accent)] md:text-[11px]">
                {b.wordmark}
              </span>
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
