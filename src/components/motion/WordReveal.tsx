'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

type Props = {
  text: string;
  className?: string;
  /** palavras destacadas em dourado (comparação sem acento/pontuação) */
  accent?: string[];
  delay?: number;
};

const normalize = (w: string) =>
  w
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]/g, '');

export default function WordReveal({ text, className, accent = [], delay = 0 }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-15% 0px' });
  const accentSet = new Set(accent.map(normalize));
  const words = text.split(' ');

  return (
    <span ref={ref} className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom">
          <motion.span
            className={`inline-block ${accentSet.has(normalize(word)) ? 'gold-text' : ''}`}
            initial={{ y: '110%', opacity: 0 }}
            animate={inView ? { y: '0%', opacity: 1 } : {}}
            transition={{
              duration: 0.85,
              delay: delay + i * 0.045,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
            {i < words.length - 1 ? ' ' : ''}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
