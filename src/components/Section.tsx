type Props = {
  id?: string;
  theme?: 'dark' | 'light';
  className?: string;
  /** desligue quando a seção usar position: sticky por dentro */
  clip?: boolean;
  children: React.ReactNode;
};

/** Envelope de seção — aplica o tema (preto ou claro) e os tokens de cor. */
export default function Section({
  id,
  theme = 'dark',
  className = '',
  clip = true,
  children,
}: Props) {
  return (
    <section
      id={id}
      data-theme={theme}
      className={`theme-${theme} relative ${clip ? 'overflow-hidden' : ''} ${className}`}
    >
      {children}
    </section>
  );
}
