'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

/**
 * Cenas em linha para cada empresa — desenhadas em vetor (SVG), na mesma
 * linguagem dos ícones da marca. Cada traço se desenha sozinho quando a seção
 * entra na tela. Para trocar por foto, basta preencher `brands[].image`.
 */

type SceneName = 'incorp' | 'imob' | 'hotel' | 'stay' | 'cowork';

const scenes: Record<SceneName, { d: string; fill?: boolean }[]> = {
  incorp: [
    { d: 'M40 300h320' },
    { d: 'M90 300V140l60-34v194' },
    { d: 'M150 300V80l66 38v182' },
    { d: 'M216 300V150l58 26v124' },
    { d: 'M274 300V196l46 22v82' },
    { d: 'M104 166h14M104 196h14M104 226h14M104 256h14' },
    { d: 'M166 140h16M166 172h16M166 204h16M166 236h16M166 268h16' },
    { d: 'M232 190h14M232 220h14M232 250h14' },
    { d: 'M288 228h12M288 258h12' },
  ],
  imob: [
    { d: 'M40 300h320' },
    { d: 'M96 300V128l96-40 96 40v172' },
    { d: 'M76 138 192 88l116 50' },
    { d: 'M168 300v-86h48v86' },
    { d: 'M206 258h6' },
    { d: 'M236 150h44v42h-44z' },
    { d: 'M104 150h44v42h-44z' },
    { d: 'M300 96a16 16 0 1 0 0 32 16 16 0 0 0 0-32Z' },
    { d: 'M316 112h44l8 10 8-10' },
  ],
  hotel: [
    { d: 'M40 300h320' },
    { d: 'M72 300v-78h256v78' },
    { d: 'M72 240h256' },
    { d: 'M96 222v-40h96v40' },
    { d: 'M208 222v-40h96v40' },
    { d: 'M60 300v-120' },
    { d: 'M340 300v-120' },
    { d: 'M330 60v74' },
    { d: 'M306 134h48l-10 26h-28z' },
  ],
  stay: [
    { d: 'M40 300h320' },
    { d: 'M90 300v-58h220v58' },
    { d: 'M90 242v-34a14 14 0 0 1 14-14h192a14 14 0 0 1 14 14v34' },
    { d: 'M130 194v-26a12 12 0 0 1 12-12h116a12 12 0 0 1 12 12v26' },
    { d: 'M120 300v-18M280 300v-18' },
    { d: 'M330 300v-52a22 22 0 0 0-44 0' },
    { d: 'M60 300V150l28-22 28 22v46' },
  ],
  cowork: [
    { d: 'M40 300h320' },
    { d: 'M70 214h130M70 214v58M200 214v58' },
    { d: 'M210 214h130M210 214v58M340 214v58' },
    { d: 'M108 214v-30a18 18 0 0 1 36 0v30' },
    { d: 'M250 214v-30a18 18 0 0 1 36 0v30' },
    { d: 'M120 70v58M280 70v58' },
    { d: 'M104 128h32l-8 20h-16z' },
    { d: 'M264 128h32l-8 20h-16z' },
    { d: 'M156 186h48v-34h-48z' },
  ],
};

export default function BrandScene({
  name,
  className = '',
}: {
  name: SceneName;
  className?: string;
}) {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, margin: '-12% 0px' });
  const paths = scenes[name];

  return (
    <svg
      ref={ref}
      viewBox="0 0 400 340"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {paths.map((p, i) => (
        <motion.path
          key={i}
          d={p.d}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={inView ? { pathLength: 1, opacity: 1 } : {}}
          transition={{
            duration: 1.6,
            delay: 0.1 + i * 0.12,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      ))}
    </svg>
  );
}
