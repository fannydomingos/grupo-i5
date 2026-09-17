/** Marca i5 em vetor (SVG) — nada de imagem rasterizada. */
export default function Logo({
  className = '',
  withWordmark = false,
}: {
  className?: string;
  withWordmark?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 120 96"
      className={className}
      role="img"
      aria-label="Grupo i5"
      fill="none"
    >
      <defs>
        <linearGradient id="i5champ" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fdf3dd" />
          <stop offset="50%" stopColor="#f3deb6" />
          <stop offset="100%" stopColor="#d8c298" />
        </linearGradient>
      </defs>

      {/* i inclinado */}
      <path d="M36 6 24 11v9l12-4V6Z" fill="url(#i5champ)" />
      <path d="M33 26 21 62l11-7 9-29h-8Z" fill="url(#i5champ)" />

      {/* 5 */}
      <path
        d="M45 8h44l-4 13H57l-4 14c5-3 10-4 15-4 13 0 22 8 22 20 0 15-13 26-31 26-9 0-17-3-22-8l6-12c4 4 10 6 16 6 9 0 16-5 16-12 0-6-5-9-13-9-5 0-10 2-15 5l-8-4 6-35Z"
        fill="url(#i5champ)"
      />

      {withWordmark && (
        <text
          x="60"
          y="90"
          textAnchor="middle"
          fill="#e9d7bb"
          fontSize="15"
          letterSpacing="5"
          fontFamily="var(--font-outfit), sans-serif"
          fontWeight="300"
        >
          GRUPO
        </text>
      )}
    </svg>
  );
}
