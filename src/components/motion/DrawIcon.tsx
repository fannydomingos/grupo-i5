'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

type Name = 'plan' | 'decide' | 'execute';

const paths: Record<Name, string[]> = {
  // bússola — clareza para escolher
  plan: ['M32 6a26 26 0 1 0 0 52 26 26 0 0 0 0-52', 'M42 22 26 28l-4 14 16-6z'],
  // caminho que se decide — coragem para avançar
  decide: ['M12 52h14c8 0 8-20 16-20h10', 'M44 24l8 8-8 8'],
  // faísca — execução que transforma
  execute: [
    'M34 8 22 34h11l-3 22 20-28H38z',
    'M12 16h6M12 46h8M48 12h4',
  ],
};

export default function DrawIcon({
  name,
  className = '',
  delay = 0,
}: {
  name: Name;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, margin: '-15% 0px' });

  return (
    <svg
      ref={ref}
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      {paths[name].map((d, i) => (
        <motion.path
          key={i}
          d={d}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={inView ? { pathLength: 1, opacity: 1 } : {}}
          transition={{
            duration: 1.5,
            delay: delay + i * 0.35,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      ))}
    </svg>
  );
}
