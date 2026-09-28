'use client';

import Image from 'next/image';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Reveal from '../motion/Reveal';
import WordReveal from '../motion/WordReveal';
import SectionHead from '../SectionHead';
import Section from '../Section';
import { brands, type Brand } from '@/lib/site';
import BrandIcon from '../BrandIcon';
import BrandScene from '../BrandScene';

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor">
      <path d="M5 12h14M13 6l6 6-6 6" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BrandVisual({ brand }: { brand: Brand }) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], ['6deg', '-6deg']), {
    stiffness: 140,
    damping: 18,
  });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], ['-8deg', '8deg']), {
    stiffness: 140,
    damping: 18,
  });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => {
        mx.set(0);
        my.set(0);
      }}
      style={{ perspective: 1100 }}
    >
      <motion.div
        style={{ rotateX: rx, rotateY: ry, transformStyle: 'preserve-3d' }}
        className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[color:var(--line)] bg-[color:var(--bg-2)]"
      >
        {brand.image ? (
          <>
            <Image
              src={brand.image}
              alt={brand.name}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-[1.4s] ease-out hover:scale-[1.06]"
              priority={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
          </>
        ) : (
          <>
            <div className="absolute inset-0 bg-[radial-gradient(95%_75%_at_30%_20%,rgba(169,141,94,0.14),transparent_72%)]" />
            <div
              className="absolute inset-0 opacity-[0.07]"
              style={{
                backgroundImage:
                  'linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)',
                backgroundSize: '58px 58px',
                maskImage: 'radial-gradient(75% 65% at 50% 45%, #000 20%, transparent 80%)',
                WebkitMaskImage: 'radial-gradient(75% 65% at 50% 45%, #000 20%, transparent 80%)',
              }}
            />
            <BrandScene
              name={brand.key as 'incorp' | 'imob' | 'hotel' | 'stay' | 'cowork'}
              className="absolute inset-x-8 bottom-8 top-28 text-[color:var(--accent-2)]"
            />
          </>
        )}

        <div
          style={{ transform: 'translateZ(45px)' }}
          className="absolute inset-0 flex flex-col p-7 md:p-9"
        >
          <p
            className="font-display text-4xl font-light tracking-tight md:text-5xl"
            style={{ color: brand.image ? '#F3F2EE' : 'var(--fg)' }}
          >
            i5<span className="gold-text"> {brand.wordmark.toLowerCase()}</span>
          </p>
        </div>
      </motion.div>
    </div>
  );
}

function BrandBlock({ brand, index }: { brand: Brand; index: number }) {
  const isExternal = brand.href.startsWith('http');
  const flip = index % 2 === 1;

  return (
    <Section id={brand.key} theme={brand.theme} className="scroll-mt-20 py-24 md:py-32">
      <div className="shell">
        <div className="flex items-center gap-5">
          <BrandIcon src={brand.icon} className="h-11 w-11 text-[color:var(--accent-2)]" />
          <SectionHead label={`i5 ${brand.wordmark}`} />
        </div>

        <div
          className={`mt-14 grid items-center gap-10 md:grid-cols-2 md:gap-16 ${
            flip ? 'md:[&>*:first-child]:order-2' : ''
          }`}
        >
          <Reveal>
            <BrandVisual brand={brand} />
          </Reveal>

          <div>
            <Reveal>
              <h3 className="display text-[clamp(1.7rem,3.4vw,2.7rem)]">
                <WordReveal text={brand.headline} />
              </h3>
            </Reveal>

            <Reveal delay={0.08}>
              <p className="lead mt-5 max-w-md text-base leading-relaxed">{brand.body}</p>
            </Reveal>

            <ul className="mt-8 space-y-3">
              {brand.bullets.map((b, i) => (
                <Reveal key={b} delay={0.12 + i * 0.06}>
                  <li className="lead flex gap-3 text-sm">
                    <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-[color:var(--accent-2)]" />
                    {b}
                  </li>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={0.25}>
              <div className="mt-9">
                {brand.live ? (
                  <a
                    href={brand.href}
                    target={isExternal ? '_blank' : undefined}
                    rel={isExternal ? 'noopener noreferrer' : undefined}
                    className="btn-solid group inline-flex items-center gap-3"
                  >
                    Visitar {brand.name}
                    <span className="transition-transform group-hover:translate-x-1">
                      <ArrowIcon />
                    </span>
                  </a>
                ) : (
                  <span className="btn-ghost inline-flex items-center gap-3">Site em breve</span>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default function Brands() {
  return (
    <>
      <Section id="grupo" theme="dark" className="py-24 sm:py-36">
        <div className="shell">
          <SectionHead label="O Grupo" />

          <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-20">
            <h2 className="display text-[clamp(2.4rem,5.4vw,4.4rem)]">
              <WordReveal text="Somos i5." accent={['i5.']} />
            </h2>

            <Reveal delay={0.12}>
              <div className="max-w-md lg:pt-3">
                <p className="text-[1.05rem] font-light leading-relaxed text-[color:var(--fg)]">
                  Cinco negócios. Uma mesma forma de pensar.
                </p>
                <p className="lead mt-4 text-[0.95rem] leading-[1.8]">
                  Inteligência para simplificar e melhorar a vida das pessoas.
                  Com o cliente no centro.
                </p>
              </div>
            </Reveal>
          </div>

          <ul className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-[color:var(--line)] bg-[color:var(--line)] sm:grid-cols-2 lg:grid-cols-5">
            {brands.map((b, i) => (
              <Reveal key={b.key} delay={i * 0.07} className="h-full">
                <li className="h-full">
                  <a
                    href={`#${b.key}`}
                    className="group flex h-full flex-col gap-7 bg-[color:var(--bg-2)] px-7 py-10 transition-colors hover:bg-[color:var(--bg)]"
                  >
                    <BrandIcon
                      src={b.icon}
                      className="h-16 w-16 text-[color:var(--accent-2)] transition-colors group-hover:text-[color:var(--accent)]"
                    />
                    <span className="mt-auto">
                      <span className="block font-display text-[1.35rem] font-light text-[color:var(--fg)]">
                        {b.wordmark.charAt(0) + b.wordmark.slice(1).toLowerCase()}
                      </span>
                      <span className="mt-2 block text-[0.82rem] font-light text-[color:var(--accent-2)]">
                        {b.claim}
                      </span>
                    </span>
                  </a>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </Section>

      {brands.map((b, i) => (
        <BrandBlock key={b.key} brand={b} index={i} />
      ))}
    </>
  );
}
