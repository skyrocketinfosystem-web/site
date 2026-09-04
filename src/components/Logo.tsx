/**
 * The mark is an upward chevron with a launch trail. Earlier drafts used a
 * rocket silhouette, which collapsed into a padlock shape at 32px.
 */
export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <svg viewBox="0 0 32 32" aria-hidden className="h-8 w-8 shrink-0">
        <defs>
          <linearGradient id="sr-mark" x1="2" y1="30" x2="30" y2="2">
            <stop offset="0" stopColor="#172f7d" />
            <stop offset="0.6" stopColor="#1d4ed8" />
            <stop offset="1" stopColor="#3b82f6" />
          </linearGradient>
        </defs>
        <rect width="32" height="32" rx="8" fill="url(#sr-mark)" />
        <path
          d="M8.5 18.5 16 10l7.5 8.5"
          fill="none"
          stroke="#fff"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M11.6 24h8.8" stroke="#fff" strokeOpacity="0.55" strokeWidth="2.6" strokeLinecap="round" />
      </svg>
      <span className={`font-display text-[1.05rem] font-bold tracking-tight ${light ? 'text-white' : 'text-head'}`}>
        Skyrocket <span className="text-brand-bright">InfoSystem</span>
      </span>
    </span>
  );
}
