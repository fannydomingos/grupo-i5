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

export default function Thinking() {
  return (
    <Section id="pensamento" theme="dark">
      <div className="mx-auto max-w-[1400px]">
        {/* texto */}
        <div className="px-6 py-24 md:px-10 lg:py-32">
          <SectionHead label="Nossa forma de pensar" />

          <h2 className="display mt-8 text-[clamp(2rem,4.4vw,3.4rem)]">
            <WordReveal text="O simples pode" />
            <br />
            <WordReveal text="ser sofisticado." accent={['sofisticado.']} delay={0.12} />
          </h2>

          <Reveal delay={0.1}>
            <p className="mt-6 text-lg font-light text-[color:var(--accent)]">
              Menos pode entregar muito mais.
            </p>
            <p className="lead mt-4 max-w-xl text-sm leading-relaxed">
              No centro de tudo está o cliente. Projetamos, construímos, vendemos,
              recebemos, hospedamos e criamos novas formas de morar e trabalhar.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-[color:var(--line)] bg-[color:var(--line)] lg:grid-cols-3">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.1} className="h-full">
                <div className="group flex h-full items-center gap-5 bg-[color:var(--bg-2)] px-6 py-7">
                  <DrawIcon
                    name={s.icon}
                    delay={i * 0.2}
                    className="h-8 w-8 shrink-0 text-[color:var(--accent)]"
                  />
                  <div>
                    <p className="font-display text-xl font-light">{s.title}</p>
                    <p className="muted mt-1 text-xs uppercase tracking-[0.18em]">{s.sub}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

      </div>
    </Section>
  );
}
