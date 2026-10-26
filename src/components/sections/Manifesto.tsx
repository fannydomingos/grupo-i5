'use client';

import Reveal from '../motion/Reveal';
import WordReveal from '../motion/WordReveal';
import SectionHead from '../SectionHead';
import Section from '../Section';
import DrawIcon from '../motion/DrawIcon';

const steps = [
  { title: 'Planejamos.', icon: 'plan' as const },
  { title: 'Decidimos.', icon: 'decide' as const },
  { title: 'Fazemos acontecer.', icon: 'execute' as const },
];

export default function Manifesto() {
  return (
    <Section id="grupo" theme="dark" className="scroll-mt-20 py-24 sm:py-36">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 bg-[radial-gradient(circle,rgba(243,222,182,0.05),transparent_65%)]" />

      <div className="shell relative">
        <SectionHead label="O Grupo" />

        <div className="mt-10 grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-20">
          <div>
            <p className="text-[0.95rem] font-light text-[color:var(--fg-soft)]">
              Cinco negócios. Uma mesma forma de pensar.
            </p>

            <h2 className="display mt-6 text-[clamp(2rem,4.6vw,3.5rem)]">
              <WordReveal text="Sempre existe uma" />
              <br />
              <WordReveal text="maneira melhor de fazer." accent={['melhor']} delay={0.15} />
            </h2>

            <Reveal delay={0.2}>
              <p className="gold-text mt-5 font-display text-[clamp(1.3rem,2.6vw,2rem)] font-light">
                Com o cliente no centro.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <div className="max-w-md space-y-6 lg:pt-4">
              <p className="lead text-base leading-[1.85]">
                Há 19 anos, criamos novas formas de morar e trabalhar, guiados
                pela <em className="not-italic text-[color:var(--accent)]">inteligência</em> e
                pela busca por uma maneira melhor de fazer.
              </p>
              <p className="lead text-base leading-[1.85]">
                Aproveitamos melhor os espaços, usamos a tecnologia onde faz
                diferença e simplificamos escolhas para melhorar a vida das
                pessoas.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 border-t border-[color:var(--line)] pt-10">
          <div className="grid gap-8 sm:grid-cols-3">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.12}>
                <div className="flex items-center gap-4">
                  <DrawIcon
                    name={s.icon}
                    delay={i * 0.2}
                    className="h-9 w-9 shrink-0 text-[color:var(--accent)]"
                  />
                  <p className="font-display text-[1.15rem] font-light text-[color:var(--fg)] md:text-[1.3rem]">
                    {s.title}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
