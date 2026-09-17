'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import WordReveal from '../motion/WordReveal';
import SectionHead from '../SectionHead';
import Section from '../Section';
import { timeline } from '@/lib/site';

export default function Timeline() {
  const outer = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    const measure = () => {
      const el = track.current;
      const view = el?.parentElement;
      if (!el || !view) return;
      // o trilho já inclui o respiro inicial e final no padding
      setDistance(Math.max(0, el.scrollWidth - view.clientWidth));
    };
    measure();
    const t = setTimeout(measure, 300);
    window.addEventListener('resize', measure);
    return () => {
      clearTimeout(t);
      window.removeEventListener('resize', measure);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: outer,
    offset: ['start start', 'end end'],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -distance]);
  const lineScale = useTransform(scrollYProgress, [0, 1], [0.05, 1]);

  return (
    <Section id="historia" theme="dark" clip={false}>
      <div ref={outer} className="relative h-[300vh]">
        <div className="sticky top-0 flex h-[100svh] flex-col justify-center overflow-hidden">
          <div className="shell">
            <SectionHead label="Nossa história" />

            <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <h2 className="display text-[clamp(1.9rem,4vw,3.2rem)]">
                <WordReveal text="19 anos" accent={['19', 'anos']} />
                <br />
                <WordReveal text="fazendo acontecer." delay={0.12} />
              </h2>
              <p className="lead max-w-xs text-sm leading-relaxed">
                De 2007 ao próximo capítulo — cada empresa nasceu de uma mesma
                forma de pensar.
              </p>
            </div>
          </div>

          <div className="relative mt-14 overflow-hidden">
            <div className="absolute left-0 right-0 top-[92px] h-px bg-[color:var(--line)]" />
            <motion.div
              style={{ scaleX: lineScale, transformOrigin: 'left' }}
              className="absolute left-0 right-0 top-[92px] h-px bg-gradient-to-r from-[color:var(--accent)] via-[color:var(--accent-2)] to-transparent"
            />

            <motion.div
              ref={track}
              style={{ x }}
              className="flex w-max gap-10 pl-[max(1.5rem,calc((100vw-1240px)/2))] pr-[max(3rem,calc((100vw-1240px)/2))] md:gap-16"
            >
              {timeline.map((item, i) => (
                <div key={`${item.title}-${i}`} className="w-[220px] shrink-0 md:w-[260px]">
                  <span className="font-sans text-[11px] tracking-[0.2em] text-[color:var(--accent)]">
                    {item.year || '—'}
                  </span>
                  <h3 className="display mt-3 h-[40px] text-xl md:text-2xl">{item.title}</h3>
                  <div className="relative mt-5 h-[16px]">
                    <span className="absolute left-0 top-1 h-[8px] w-[8px] rounded-sm bg-[color:var(--accent-2)]" />
                  </div>
                  <p className="lead mt-4 text-sm leading-relaxed">{item.text}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="pointer-events-none mt-12 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[color:var(--accent-2)]/60" />
            <span className="muted text-[0.6rem] font-light uppercase tracking-[0.3em]">
              role para avançar
            </span>
            <span className="h-px w-8 bg-[color:var(--accent-2)]/60" />
          </div>
        </div>
      </div>
    </Section>
  );
}
