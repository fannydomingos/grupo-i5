'use client';

import Counter from '../motion/Counter';
import Reveal from '../motion/Reveal';
import WordReveal from '../motion/WordReveal';
import SectionHead from '../SectionHead';
import Section from '../Section';
import BrandScene from '../BrandScene';

const items = [
  { render: () => <Counter to={19} />, label: 'anos de história' },
  { render: () => <Counter to={5} />, label: 'empresas no grupo' },
  { render: () => <Counter to={10} prefix="+" />, label: 'anos de hospitalidade' },
  // TODO: substituir "+X" pelos números oficiais do Grupo
  { render: () => <span>+X</span>, label: 'm² / unidades / projetos' },
];

const scenes = [
  { name: 'incorp' as const, label: 'Incorp' },
  { name: 'hotel' as const, label: 'Hotel' },
  { name: 'stay' as const, label: 'Stay' },
  { name: 'cowork' as const, label: 'Cowork' },
];

export default function Stats() {
  return (
    <Section id="realizacoes" theme="light" className="py-24 sm:py-36">
      <div className="shell relative">
        <SectionHead label="Realizações" />

        <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-20">
          <h2 className="display text-[clamp(2rem,4.8vw,3.6rem)]">
            <WordReveal text="Inteligência que" />
            <br />
            <WordReveal text="vira realidade." accent={['realidade.']} delay={0.12} />
          </h2>

          <Reveal delay={0.12}>
            <p className="lead max-w-md text-base leading-[1.85] lg:pt-3">
              Uma história construída com execução, experiência e visão de longo
              prazo — do projeto à entrega das chaves, do check-in à gestão do
              seu imóvel.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-[color:var(--line)] bg-[color:var(--line)] lg:grid-cols-4">
          {items.map((item, i) => (
            <Reveal key={item.label} delay={i * 0.08} className="h-full">
              <div className="h-full bg-[color:var(--bg)] px-7 py-9">
                <p className="font-display text-[clamp(2.2rem,4.4vw,3.4rem)] font-light leading-none text-[color:var(--fg)]">
                  {item.render()}
                </p>
                <p className="muted mt-3 text-[0.72rem] font-light uppercase tracking-[0.2em]">
                  {item.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {scenes.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.1}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[color:var(--line)] bg-[color:var(--bg-2)]">
                <div className="absolute inset-0 bg-[radial-gradient(90%_70%_at_30%_20%,rgba(169,141,94,0.12),transparent_72%)]" />
                <BrandScene
                  name={s.name}
                  className="absolute inset-x-5 bottom-5 top-14 text-[color:var(--accent-2)]"
                />
                <span className="absolute left-6 top-5 text-[0.72rem] uppercase tracking-[0.2em] text-[color:var(--accent)]">
                  {s.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
