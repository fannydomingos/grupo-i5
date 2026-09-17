'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function SectionHead({ label }: { label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });

  return (
    <div ref={ref} className="flex items-center gap-5">
      <motion.span
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: 'left' }}
        className="h-px w-16 bg-[color:var(--accent-2)] md:w-24"
      />
      <span className="label">{label}</span>
    </div>
  );
}
