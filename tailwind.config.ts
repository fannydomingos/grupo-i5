import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0C0C0D',
          800: '#121213',
          700: '#161617',
          600: '#1C1C1E',
          500: '#232325',
          400: '#303032',
        },
        gold: {
          DEFAULT: '#F5D291',
          soft: '#E8C486',
          deep: '#B99A63',
        },
        bone: '#E1E1DE',
      },
      fontFamily: {
        display: ['var(--font-outfit)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        label: '0.32em',
      },
      maxWidth: {
        shell: '1240px',
      },
    },
  },
  plugins: [],
};

export default config;
