export function PhoneMockup({ className = "" }: { className?: string }) {
  return (
    <div className={`group relative ${className}`} aria-hidden="true">
      <div className="absolute inset-x-0 top-1/2 -z-10 mx-auto h-[80%] w-[80%] -translate-y-1/2 rounded-full bg-gold/20 blur-3xl transition-all duration-700 ease-out group-hover:bg-gold/40 group-hover:blur-[80px]" />

      <div className="-rotate-3 transition-transform duration-700 ease-out group-hover:rotate-0 group-hover:scale-[1.04]">
        <svg
          viewBox="0 0 360 720"
          className="mx-auto w-full max-w-[18rem] drop-shadow-[0_30px_60px_rgba(0,0,0,0.12)] transition-[filter] duration-700 ease-out group-hover:drop-shadow-[0_50px_90px_rgba(0,0,0,0.22)]"
        >
          <defs>
            <linearGradient id="phoneFrame" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="oklch(20% 0.008 80)" />
              <stop offset="100%" stopColor="oklch(12% 0.008 80)" />
            </linearGradient>
            <clipPath id="phoneScreen">
              <rect x="20" y="20" width="320" height="680" rx="40" />
            </clipPath>
          </defs>

          <rect x="6" y="6" width="348" height="708" rx="52" fill="url(#phoneFrame)" />
          <rect x="20" y="20" width="320" height="680" rx="40" fill="oklch(98% 0.008 85)" />

          <g clipPath="url(#phoneScreen)">
            <rect x="140" y="32" width="80" height="22" rx="11" fill="oklch(12% 0.008 80)" />

            <text x="40" y="100" fontFamily="var(--font-fraunces), serif" fontSize="11" fontWeight="500" letterSpacing="2" fill="oklch(55% 0.008 80)">DASHBOARD</text>
            <text x="40" y="135" fontFamily="var(--font-fraunces), serif" fontSize="22" fontWeight="300" fill="oklch(15% 0.008 80)">Good evening,</text>
            <text x="40" y="162" fontFamily="var(--font-fraunces), serif" fontSize="22" fontWeight="400" fontStyle="italic" fill="oklch(58% 0.11 78)">Roanne.</text>

            <line x1="40" y1="195" x2="320" y2="195" stroke="oklch(92% 0.008 80)" strokeWidth="1" />

            <text x="40" y="225" fontFamily="var(--font-fraunces), serif" fontSize="9" fontWeight="500" letterSpacing="1.5" fill="oklch(55% 0.008 80)">PIPELINE VALUE</text>
            <text x="40" y="270" fontFamily="var(--font-fraunces), serif" fontSize="36" fontWeight="300" fill="oklch(15% 0.008 80)">$47,820</text>
            <g>
              <circle cx="44" cy="285" r="3" fill="oklch(58% 0.11 78)">
                <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
              </circle>
              <text x="55" y="289" fontFamily="var(--font-fraunces), serif" fontSize="11" fontWeight="400" fill="oklch(58% 0.11 78)">+24% this month</text>
            </g>

            <g transform="translate(40, 320)">
              <polyline points="0,40 30,32 60,38 90,22 120,28 150,14 180,18 210,8 240,12 270,4" fill="none" stroke="oklch(58% 0.11 78)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <polyline points="0,40 30,32 60,38 90,22 120,28 150,14 180,18 210,8 240,12 270,4 270,50 0,50" fill="oklch(58% 0.11 78)" opacity="0.08" />
            </g>

            <line x1="40" y1="410" x2="320" y2="410" stroke="oklch(92% 0.008 80)" strokeWidth="1" />

            <text x="40" y="440" fontFamily="var(--font-fraunces), serif" fontSize="9" fontWeight="500" letterSpacing="1.5" fill="oklch(55% 0.008 80)">ACTIVITY</text>

            <g transform="translate(40, 460)">
              <circle cx="14" cy="14" r="14" fill="oklch(92% 0.008 80)" />
              <path d="M9 14 L13 18 L19 11" stroke="oklch(58% 0.11 78)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              <text x="38" y="12" fontFamily="var(--font-fraunces), serif" fontSize="11" fontWeight="500" fill="oklch(15% 0.008 80)">Nurture sequence sent</text>
              <text x="38" y="26" fontFamily="var(--font-fraunces), serif" fontSize="10" fill="oklch(55% 0.008 80)">12 leads, just now</text>
            </g>

            <g transform="translate(40, 510)">
              <circle cx="14" cy="14" r="14" fill="oklch(92% 0.008 80)" />
              <path d="M8 14 H 20 M14 8 V 20" stroke="oklch(15% 0.008 80)" strokeWidth="1.5" strokeLinecap="round" />
              <text x="38" y="12" fontFamily="var(--font-fraunces), serif" fontSize="11" fontWeight="500" fill="oklch(15% 0.008 80)">New booked call</text>
              <text x="38" y="26" fontFamily="var(--font-fraunces), serif" fontSize="10" fill="oklch(55% 0.008 80)">Discovery audit, tomorrow 10am</text>
            </g>

            <g transform="translate(40, 560)">
              <circle cx="14" cy="14" r="14" fill="oklch(92% 0.008 80)" />
              <path d="M14 8 V 14 L18 18" stroke="oklch(15% 0.008 80)" strokeWidth="1.5" strokeLinecap="round" fill="none" />
              <circle cx="14" cy="14" r="6" fill="none" stroke="oklch(15% 0.008 80)" strokeWidth="1.5" />
              <text x="38" y="12" fontFamily="var(--font-fraunces), serif" fontSize="11" fontWeight="500" fill="oklch(15% 0.008 80)">Follow-up scheduled</text>
              <text x="38" y="26" fontFamily="var(--font-fraunces), serif" fontSize="10" fill="oklch(55% 0.008 80)">3 ghosted leads, sending 8am</text>
            </g>

            <g transform="translate(40, 630)">
              <circle cx="6" cy="6" r="3" fill="oklch(58% 0.11 78)">
                <animate attributeName="opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite" />
              </circle>
              <text x="18" y="10" fontFamily="var(--font-fraunces), serif" fontSize="10" fontWeight="500" letterSpacing="1" fill="oklch(15% 0.008 80)">SYSTEM ACTIVE</text>
              <text x="200" y="10" fontFamily="var(--font-fraunces), serif" fontSize="10" fill="oklch(55% 0.008 80)">9:14 PM</text>
            </g>
          </g>

          <line x1="160" y1="40" x2="200" y2="40" stroke="oklch(40% 0.008 80)" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>

      <div className="absolute -left-4 top-16 hidden -rotate-[4deg] transition-all duration-700 ease-out group-hover:-translate-x-4 group-hover:-translate-y-3 group-hover:rotate-[-7deg] sm:block">
        <div className="w-44 rounded-xl bg-cream p-3 shadow-[0_10px_30px_rgba(0,0,0,0.08)] ring-1 ring-ink-100 transition-shadow duration-700 ease-out group-hover:shadow-[0_24px_50px_rgba(0,0,0,0.16)]">
          <p className="text-[10px] uppercase tracking-[0.15em] text-gold-dark">Workflow</p>
          <p className="mt-1 text-xs font-medium text-ink-900">Cold lead revived</p>
          <p className="text-[10px] text-ink-500">After 14 days silent</p>
        </div>
      </div>

      <div className="absolute -right-2 bottom-24 hidden rotate-[3deg] transition-all duration-700 ease-out group-hover:translate-x-4 group-hover:translate-y-3 group-hover:rotate-[6deg] sm:block">
        <div className="w-44 rounded-xl bg-cream p-3 shadow-[0_10px_30px_rgba(0,0,0,0.08)] ring-1 ring-ink-100 transition-shadow duration-700 ease-out group-hover:shadow-[0_24px_50px_rgba(0,0,0,0.16)]">
          <p className="text-[10px] uppercase tracking-[0.15em] text-gold-dark">Booked</p>
          <p className="mt-1 text-xs font-medium text-ink-900">Discovery + Audit</p>
          <p className="text-[10px] text-ink-500">Tomorrow, 10:00 AM</p>
        </div>
      </div>
    </div>
  );
}
