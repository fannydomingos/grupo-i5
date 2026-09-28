import Image from 'next/image';

/** Logo oficial do Grupo i5 (arquivo em public/img/logo-i5.png). */
export default function Logo({
  className = '',
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <span className={`relative block ${className}`}>
      <Image
        src="/img/logo-i5.png"
        alt="Grupo i5"
        fill
        priority={priority}
        sizes="240px"
        className="object-contain object-left"
      />
    </span>
  );
}
