'use client';

import Reveal from '../motion/Reveal';
import WordReveal from '../motion/WordReveal';
import SectionHead from '../SectionHead';
import Section from '../Section';
import DrawIcon from '../motion/DrawIcon';

const steps = [
  { title: 'Planejamos.', sub: 'clareza para escolher', icon: 'plan' as const },
  { title: 'Decidimos.', sub: 'coragem para avançar', icon: 'decide' as const },
  { title: 'Fazemos acontecer.', sub: 'execução para transformar', icon: 'execute' as const },
];

export default function Manifesto() {
  return (
    <Section id="manifesto" theme="dark" className="py-24 sm:py-36">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 bg-[radial-gradient(circle,rgba(243,222,182,0.05),transparent_65%)]" />

      <div className="shell relative">
        <SectionHead label="O Manifesto" />

        <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-20">
          <h2 className="display text-[clamp(2rem,4.8vw,3.6rem)]">
            <WordReveal text="Sempre existe uma" />
            <br />
            <WordReveal text="maneira melhor de fazer." accent={['melhor']} delay={0.15} />
          </h2>

          <Reveal delay={0.12}>
            <p className="lead max-w-md text-base leading-[1.85] lg:pt-3">
              Questionamos o convencional, aproveitamos melhor os espaços e
              usamos a tecnologia onde ela realmente faz diferença. Simplificamos
              escolhas para criar novas possibilidades.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-[color:var(--line)] bg-[color:var(--line)] lg:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.12} className="h-full">
              <div className="group flex h-full items-center gap-6 bg-[color:var(--bg-2)] px-8 py-9">
                <DrawIcon
                  name={s.icon}
                  delay={i * 0.2}
                  className="h-10 w-10 shrink-0 text-[color:var(--accent)]"
                />
                <div>
                  <p className="font-display text-xl font-light text-[color:var(--fg)] md:text-[1.35rem]">
                    {s.title}
                  </p>
                  <p className="muted mt-2 text-[0.68rem] uppercase tracking-[0.22em]">{s.sub}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
