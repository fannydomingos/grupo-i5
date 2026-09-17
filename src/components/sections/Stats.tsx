'use client';

import Image from 'next/image';
import Counter from '../motion/Counter';
import Reveal from '../motion/Reveal';
import WordReveal from '../motion/WordReveal';
import SectionHead from '../SectionHead';
import Section from '../Section';

const items = [
  { render: () => <Counter to={19} />, label: 'anos de história' },
  { render: () => <Counter to={5} />, label: 'empresas no grupo' },
  { render: () => <Counter to={10} prefix="+" />, label: 'anos de hospitalidade' },
  // TODO: substituir "+X" pelos números oficiais do Grupo
  { render: () => <span>+X</span>, label: 'm² / unidades / projetos' },
];

const shots = [
  { src: '/img/incorp.jpg', alt: 'i5 Incorp' },
  { src: '/img/hotel.jpg', alt: 'i5 Hotel' },
  { src: '/img/stay.jpg', alt: 'i5 Stay' },
  { src: '/img/cowork.jpg', alt: 'i5 Cowork' },
];

export default function Stats() {
  return (
    <Section id="realizacoes" theme="dark" className="py-24 sm:py-36">
      <div className="pointer-events-none absolute right-0 top-1/4 h-[520px] w-[520px] bg-[radial-gradient(circle,rgba(243,222,182,0.08),transparent_65%)]" />

      <div className="shell relative">
        <SectionHead label="Realizações" />

        <div className="mt-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="display max-w-2xl text-[clamp(2rem,5vw,4rem)]">
            <WordReveal text="Inteligência que" />
            <br />
            <WordReveal text="vira realidade." accent={['realidade.']} delay={0.12} />
          </h2>
          <p className="lead max-w-sm text-sm leading-relaxed">
            Uma história construída com execução, experiência e visão de longo prazo.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-[color:var(--line)] bg-[color:var(--line)] grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <Reveal key={item.label} delay={i * 0.08} className="h-full">
              <div className="h-full bg-[color:var(--bg-2)] px-6 py-8">
                <p className="font-display text-[clamp(2.2rem,4.4vw,3.4rem)] font-light leading-none text-[color:var(--accent)]">
                  {item.render()}
                </p>
                <p className="muted mt-3 text-[0.78rem] font-light uppercase tracking-[0.18em]">
                  {item.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {shots.map((s, i) => (
            <Reveal key={s.src} delay={i * 0.1}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-[color:var(--line)]">
                <Image
                  src={s.src}
                  alt={s.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 25vw"
                  className="object-cover transition-transform duration-[1.4s] hover:scale-105"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
