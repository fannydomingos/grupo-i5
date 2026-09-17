'use client';

import Reveal from '../motion/Reveal';
import WordReveal from '../motion/WordReveal';
import SectionHead from '../SectionHead';
import Section from '../Section';

const lines = [
  'Aproveitar melhor os espaços.',
  'Usar a tecnologia onde faz diferença.',
  'Eliminar barreiras.',
  'Simplificar escolhas.',
  'Criar novas possibilidades.',
];

export default function Manifesto() {
  return (
    <Section id="manifesto" theme="dark" className="py-24 sm:py-36">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 bg-[radial-gradient(circle,rgba(243,222,182,0.07),transparent_65%)]" />

      <div className="shell relative">
        <SectionHead label="O Manifesto" />

        <h2 className="display mt-10 max-w-4xl text-[clamp(2rem,5.2vw,4rem)]">
          <WordReveal text="Sempre existe uma" />
          <br />
          <WordReveal text="maneira melhor de fazer." accent={['melhor']} delay={0.15} />
        </h2>

        <div className="ml-auto mt-14 max-w-2xl">
          <p className="lead text-[1.05rem] font-light leading-[1.75] sm:text-[1.3rem]">
            <WordReveal text="Há 19 anos, crescemos questionando o convencional, simplificando processos e buscando soluções mais inteligentes." />
          </p>

          <Reveal delay={0.1}>
            <div className="mt-10 flex items-center gap-4">
              <span className="h-px flex-1 bg-[color:var(--line)]" />
              <span className="font-display text-sm font-light tracking-[0.2em] text-[color:var(--accent)]">
                Inteligência não é complicar. É fazer melhor.
              </span>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 divide-y divide-[color:var(--line)] border-y border-[color:var(--line)]">
          {lines.map((line, i) => (
            <Reveal key={line} delay={i * 0.07}>
              <div className="group flex items-center gap-6 py-5">
                <span className="h-px w-8 shrink-0 bg-[color:var(--accent-2)] transition-all duration-500 group-hover:w-14" />
                <span className="lead text-base font-light transition-colors group-hover:text-[color:var(--fg)] sm:text-lg">
                  {line}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
