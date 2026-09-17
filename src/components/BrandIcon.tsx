/**
 * Ícone da empresa — o PNG entra como máscara, então a cor vem do CSS
 * (currentColor) e funciona igual nas seções pretas e claras.
 */
export default function BrandIcon({
  src,
  className = '',
}: {
  src: string;
  className?: string;
}) {
  return (
    <span
      aria-hidden
      className={`inline-block bg-current ${className}`}
      style={{
        maskImage: `url(${src})`,
        WebkitMaskImage: `url(${src})`,
        maskSize: 'contain',
        WebkitMaskSize: 'contain',
        maskRepeat: 'no-repeat',
        WebkitMaskRepeat: 'no-repeat',
        maskPosition: 'center',
        WebkitMaskPosition: 'center',
      }}
    />
  );
}
