'use client';

import Logo from '../Logo';
import Reveal from '../motion/Reveal';
import WordReveal from '../motion/WordReveal';
import { brands, contact } from '@/lib/site';

export default function Closing() {
  const year = new Date().getFullYear();

  return (
    <footer id="contato" data-theme="dark" className="theme-dark relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(70%_100%_at_50%_0%,rgba(243,222,182,0.14),transparent_70%)]" />

      <div className="shell relative py-28 md:py-40">
        <div className="text-center">
          <Reveal>
            <Logo className="mx-auto h-24 w-auto" withWordmark />
          </Reveal>

          <h2 className="display mx-auto mt-10 max-w-3xl text-[clamp(2rem,5.6vw,4.2rem)]">
            <WordReveal text="A inteligência" />
            <br />
            <WordReveal text="transforma vidas." accent={['transforma', 'vidas.']} delay={0.12} />
          </h2>

          <Reveal delay={0.15}>
            <p className="lead mx-auto mt-8 max-w-lg text-base">
              Fale com o Grupo i5 e descubra qual das nossas empresas resolve o
              que você precisa hoje.
            </p>
          </Reveal>

          <Reveal delay={0.22}>
            <div className="mt-11 flex flex-wrap justify-center gap-4">
              <a href={`mailto:${contact.email}`} className="btn-solid">
                Fale conosco
              </a>
              <a href="#grupo" className="btn-ghost">
                Conhecer as empresas
              </a>
            </div>
          </Reveal>
        </div>

        <div className="hairline mt-24 h-px w-full" />

        <div className="mt-12 grid gap-12 md:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="label">Somos i5</p>
            <ul className="mt-6 space-y-4">
              {brands.map((b) => {
                const isExternal = b.href.startsWith('http');
                return (
                  <li key={b.key}>
                    <a
                      href={b.live ? b.href : `#${b.key}`}
                      target={b.live && isExternal ? '_blank' : undefined}
                      rel={b.live && isExternal ? 'noopener noreferrer' : undefined}
                      className="group flex flex-wrap items-baseline gap-x-4 gap-y-1 border-b border-[color:var(--line)] pb-4 transition-colors hover:border-[color:var(--accent)]/40"
                    >
                      <span className="font-display text-lg font-light transition-colors group-hover:text-[color:var(--accent)]">
                        {b.name}
                      </span>
                      <span className="muted text-sm">{b.headline}</span>
                      {!b.live && (
                        <span className="muted ml-auto text-[10px] uppercase tracking-[0.2em]">
                          em breve
                        </span>
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <p className="label">Contato</p>
            <ul className="lead mt-6 space-y-3 text-sm">
              <li>
                <a href={`mailto:${contact.email}`} className="hover:text-[color:var(--accent)]">
                  {contact.email}
                </a>
              </li>
              {contact.whatsapp && (
                <li>
                  <a
                    href={contact.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[color:var(--accent)]"
                  >
                    WhatsApp
                  </a>
                </li>
              )}
              {contact.instagram && (
                <li>
                  <a
                    href={contact.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[color:var(--accent)]"
                  >
                    Instagram
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="muted mt-16 flex flex-col gap-3 border-t border-[color:var(--line)] pt-8 text-[11px] md:flex-row md:items-center md:justify-between">
          <span>© {year} Grupo i5. Todos os direitos reservados.</span>
          <span className="tracking-[0.18em]">INCORP · IMOB · HOTEL · STAY · COWORK</span>
        </div>
      </div>
    </footer>
  );
}
