// BondGame — shared primitives (logo, phone frame, pills, buttons)
const T = window.BG_TOKENS;

// ─── BondMark — signature logo: two overlapping soft shapes forming a clover-bond
function BondMark({ size = 24, color = T.color.ink, accent, style = {} }) {
  const a = accent || color;
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" style={style}>
      <circle cx="11" cy="11" r="8" fill={color} />
      <circle cx="21" cy="11" r="8" fill={a} style={{ mixBlendMode: accent ? 'multiply' : 'normal' }} />
      <circle cx="11" cy="21" r="8" fill={a} style={{ mixBlendMode: accent ? 'multiply' : 'normal' }} />
      <circle cx="21" cy="21" r="8" fill={color} />
    </svg>
  );
}

// ─── Simple face — recurring brand character (two dots = eyes)
function BondFace({ size = 56, color = T.color.ink, bg = T.color.lime }) {
  return (
    <div style={{
      width: size, height: size, borderRadius: size, background: bg,
      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: size * 0.12,
    }}>
      <div style={{ width: size * 0.12, height: size * 0.22, borderRadius: size, background: color }} />
      <div style={{ width: size * 0.12, height: size * 0.22, borderRadius: size, background: color }} />
    </div>
  );
}

// ─── Phone frame
function PhoneFrame({ children, label, sub, width = 360, height = 760, theme = 'light', tint }) {
  const isDark = theme === 'dark';
  const bg = tint || (isDark ? '#0B0B0A' : T.color.bg);
  return (
    <div style={{ position: 'relative', flexShrink: 0 }}>
      {label && (
        <div style={{
          position: 'absolute', bottom: '100%', left: 0, paddingBottom: 10,
          fontSize: 11, fontWeight: 500, color: 'rgba(40,30,20,0.85)',
          letterSpacing: 0.2, textTransform: 'uppercase', whiteSpace: 'nowrap',
        }}>
          {label}
          {sub && <span style={{ color: 'rgba(40,30,20,0.45)', marginLeft: 8, textTransform: 'none', letterSpacing: 0 }}>{sub}</span>}
        </div>
      )}
      <div style={{
        width, height,
        background: bg,
        borderRadius: 44,
        padding: 10,
        boxShadow: '0 0 0 1.5px rgba(15,15,14,0.92), 0 40px 80px -40px rgba(15,15,14,0.4), 0 8px 24px -12px rgba(15,15,14,0.2)',
        position: 'relative',
      }}>
        <div style={{
          width: '100%', height: '100%', borderRadius: 34, overflow: 'hidden',
          background: bg, position: 'relative',
          display: 'flex', flexDirection: 'column',
        }}>
          {children}
        </div>
      </div>
    </div>
  );
}

// ─── Status bar + app header
function StatusBar({ time = '9:41', dark }) {
  const ink = dark ? '#fff' : T.color.ink;
  return (
    <div style={{
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '14px 22px 6px', fontSize: 14, fontWeight: 600, color: ink,
      fontFamily: T.font.body, flexShrink: 0,
    }}>
      <span>{time}</span>
      <div style={{ display: 'flex', gap: 5, alignItems: 'center' }}>
        {/* signal */}
        <svg width="17" height="11" viewBox="0 0 17 11" fill="none">
          <rect x="0" y="7" width="3" height="4" rx="1" fill={ink} />
          <rect x="4.5" y="5" width="3" height="6" rx="1" fill={ink} />
          <rect x="9" y="2.5" width="3" height="8.5" rx="1" fill={ink} />
          <rect x="13.5" y="0" width="3" height="11" rx="1" fill={ink} />
        </svg>
        {/* wifi */}
        <svg width="16" height="11" viewBox="0 0 16 11" fill="none">
          <path d="M8 3.5 C5.5 3.5 3.5 4.5 2 6 L3.5 7.5 C4.5 6.3 6.2 5.5 8 5.5 C9.8 5.5 11.5 6.3 12.5 7.5 L14 6 C12.5 4.5 10.5 3.5 8 3.5Z M0 4.5 L1.5 6 C3.4 4 5.5 3 8 3 C10.5 3 12.6 4 14.5 6 L16 4.5 C13.8 2.2 11 1 8 1 C5 1 2.2 2.2 0 4.5Z M8 7.5 C6.9 7.5 6 8.4 6 9.5 L8 11 L10 9.5 C10 8.4 9.1 7.5 8 7.5Z" fill={ink} />
        </svg>
        {/* battery */}
        <svg width="26" height="12" viewBox="0 0 26 12" fill="none">
          <rect x="0.5" y="0.5" width="22" height="11" rx="3" stroke={ink} strokeOpacity="0.4" />
          <rect x="2" y="2" width="16" height="8" rx="1.5" fill={ink} />
          <rect x="23.5" y="4" width="1.8" height="4" rx="0.9" fill={ink} fillOpacity="0.4" />
        </svg>
      </div>
    </div>
  );
}

function AppHeader({ title, left, right, sub, dark }) {
  const ink = dark ? '#fff' : T.color.ink;
  const muted = dark ? 'rgba(255,255,255,0.5)' : T.color.muted;
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '6px 20px 10px', minHeight: 44, flexShrink: 0,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, minWidth: 0, flex: 1 }}>
        {left}
        <div style={{ minWidth: 0 }}>
          {title && <div style={{ fontSize: 15, fontWeight: 600, color: ink, letterSpacing: -0.2, lineHeight: 1.1 }}>{title}</div>}
          {sub && <div style={{ fontSize: 11, color: muted, marginTop: 1 }}>{sub}</div>}
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>{right}</div>
    </div>
  );
}

// ─── Buttons
function Btn({ children, variant = 'primary', size = 'md', full, onClick, icon, style = {}, disabled, accent = 'lime' }) {
  const sizes = {
    sm: { h: 36, px: 14, fs: 13 },
    md: { h: 48, px: 20, fs: 14 },
    lg: { h: 56, px: 24, fs: 15 },
  }[size];
  const accentMap = {
    lime: { bg: T.color.lime, text: T.color.limeInk },
    plum: { bg: T.color.plum, text: '#fff' },
    magenta: { bg: T.color.magenta, text: '#fff' },
  };
  const variants = {
    primary: { bg: T.color.ink, text: '#fff', border: 'transparent' },
    accent: { bg: accentMap[accent].bg, text: accentMap[accent].text, border: 'transparent' },
    ghost: { bg: 'transparent', text: T.color.ink, border: T.color.hairlineStrong },
    soft: { bg: T.color.surfaceAlt, text: T.color.ink, border: T.color.hairline },
  }[variant];
  return (
    <button onClick={onClick} disabled={disabled} style={{
      height: sizes.h, padding: `0 ${sizes.px}px`,
      background: variants.bg, color: variants.text,
      border: `1px solid ${variants.border}`,
      borderRadius: 999, fontSize: sizes.fs, fontWeight: 600,
      fontFamily: T.font.body, letterSpacing: -0.1,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.4 : 1,
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
      width: full ? '100%' : 'auto', whiteSpace: 'nowrap',
      transition: 'transform 120ms ease',
      ...style,
    }}>
      {icon}{children}
    </button>
  );
}

// ─── Pills / chips
function Pill({ children, variant = 'default', size = 'md', icon, style = {}, onClick }) {
  const sizes = {
    sm: { h: 22, px: 8, fs: 11 },
    md: { h: 28, px: 12, fs: 12 },
    lg: { h: 34, px: 14, fs: 13 },
  }[size];
  const variants = {
    default: { bg: T.color.surface, text: T.color.ink, border: T.color.hairlineStrong },
    lime: { bg: T.color.lime, text: T.color.limeInk, border: 'transparent' },
    limeSoft: { bg: T.color.limeSoft, text: T.color.limeInk, border: 'transparent' },
    ink: { bg: T.color.ink, text: '#fff', border: 'transparent' },
    ghost: { bg: 'transparent', text: T.color.muted, border: T.color.hairlineStrong },
    muted: { bg: T.color.surfaceAlt, text: T.color.muted, border: 'transparent' },
    plum: { bg: T.color.plum, text: '#fff', border: 'transparent' },
    plumSoft: { bg: T.color.plumSoft, text: T.color.plumInk, border: 'transparent' },
    magenta: { bg: T.color.magenta, text: '#fff', border: 'transparent' },
  }[variant];
  return (
    <span onClick={onClick} style={{
      display: 'inline-flex', alignItems: 'center', gap: 4,
      height: sizes.h, padding: `0 ${sizes.px}px`, borderRadius: 999,
      background: variants.bg, color: variants.text,
      border: `1px solid ${variants.border}`,
      fontSize: sizes.fs, fontWeight: 500, letterSpacing: -0.1,
      cursor: onClick ? 'pointer' : 'default',
      whiteSpace: 'nowrap',
      ...style,
    }}>
      {icon}{children}
    </span>
  );
}

// ─── Coin icon
function Coin({ size = 14, color = T.color.limeInk }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="7" fill={color === T.color.limeInk ? T.color.lime : 'none'} stroke={color} strokeWidth="1.4" />
      <path d="M6 5.5 L6 10.5 M6 5.5 L9 5.5 C9.8 5.5 10.5 6.2 10.5 7 C10.5 7.8 9.8 8.5 9 8.5 L6 8.5 M8 8.5 L10.5 10.5" stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ─── Icon shapes (stroke-based)
const Icon = {
  back: (c = 'currentColor') => <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M12 5 L7 10 L12 15" stroke={c} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>,
  close: (c = 'currentColor') => <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5 5 L15 15 M15 5 L5 15" stroke={c} strokeWidth="1.6" strokeLinecap="round" /></svg>,
  more: (c = 'currentColor') => <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="4" cy="10" r="1.3" fill={c} /><circle cx="10" cy="10" r="1.3" fill={c} /><circle cx="16" cy="10" r="1.3" fill={c} /></svg>,
  bell: (c = 'currentColor') => <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5 14 L15 14 M6 14 L6 9 C6 6.8 7.8 5 10 5 C12.2 5 14 6.8 14 9 L14 14 M8.5 16.5 C8.7 17.2 9.3 17.5 10 17.5 C10.7 17.5 11.3 17.2 11.5 16.5" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>,
  plus: (c = 'currentColor') => <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 5 L10 15 M5 10 L15 10" stroke={c} strokeWidth="1.6" strokeLinecap="round" /></svg>,
  chevron: (c = 'currentColor') => <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 4 L10 8 L6 12" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>,
  heart: (c = 'currentColor', f = 'none') => <svg width="20" height="20" viewBox="0 0 20 20" fill={f}><path d="M10 16 C7 14 3.5 11.5 3.5 8 C3.5 5.8 5 4 7 4 C8.3 4 9.4 4.7 10 5.7 C10.6 4.7 11.7 4 13 4 C15 4 16.5 5.8 16.5 8 C16.5 11.5 13 14 10 16Z" stroke={c} strokeWidth="1.5" strokeLinejoin="round" /></svg>,
  home: (c = 'currentColor') => <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M4 10 L11 4 L18 10 L18 17 C18 17.6 17.6 18 17 18 L14 18 L14 13 L8 13 L8 18 L5 18 C4.4 18 4 17.6 4 17 Z" stroke={c} strokeWidth="1.6" strokeLinejoin="round" /></svg>,
  tasks: (c = 'currentColor') => <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><rect x="4" y="4" width="14" height="14" rx="3" stroke={c} strokeWidth="1.6" /><path d="M7.5 11 L10 13.5 L14.5 8.5" stroke={c} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>,
  challenge: (c = 'currentColor') => <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M11 3 L13.2 7.8 L18.5 8.5 L14.6 12.2 L15.6 17.5 L11 15 L6.4 17.5 L7.4 12.2 L3.5 8.5 L8.8 7.8 Z" stroke={c} strokeWidth="1.5" strokeLinejoin="round" /></svg>,
  shop: (c = 'currentColor') => <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M4 8 L5 5 L17 5 L18 8 M4 8 L4 17 C4 17.6 4.4 18 5 18 L17 18 C17.6 18 18 17.6 18 17 L18 8 M4 8 L18 8 M8 11 C8 12.7 9.3 14 11 14 C12.7 14 14 12.7 14 11" stroke={c} strokeWidth="1.5" strokeLinejoin="round" /></svg>,
  profile: (c = 'currentColor') => <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="8" r="3.5" stroke={c} strokeWidth="1.6" /><path d="M4 18 C4 14.7 7.1 12.5 11 12.5 C14.9 12.5 18 14.7 18 18" stroke={c} strokeWidth="1.6" strokeLinecap="round" /></svg>,
  lock: (c = 'currentColor') => <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="3.5" y="7" width="9" height="6.5" rx="1.5" stroke={c} strokeWidth="1.4" /><path d="M5.5 7 L5.5 5 C5.5 3.6 6.6 2.5 8 2.5 C9.4 2.5 10.5 3.6 10.5 5 L10.5 7" stroke={c} strokeWidth="1.4" strokeLinecap="round" /></svg>,
  spark: (c = 'currentColor') => <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 1 L8.2 5.8 L13 7 L8.2 8.2 L7 13 L5.8 8.2 L1 7 L5.8 5.8 Z" fill={c} /></svg>,
  check: (c = 'currentColor') => <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7.5 L6 10.5 L11.5 3.5" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>,
  flame: (c = 'currentColor') => <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 1 C7 3 5 4 5 6 C5 7 5.5 7.5 6 8 C5.5 7 6 5.5 7 5 C7.5 6.5 9 7 9 9 C9 11.2 7.5 12.5 7 12.5 C7.5 12 8 11 7.5 10 C7 11 4 10.5 4 8 C4 5 7 4 7 1 Z" stroke={c} fill="none" strokeWidth="1.3" strokeLinejoin="round" /></svg>,
  eye: (c = 'currentColor') => <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M1.5 8 C3 5 5.5 3.5 8 3.5 C10.5 3.5 13 5 14.5 8 C13 11 10.5 12.5 8 12.5 C5.5 12.5 3 11 1.5 8 Z" stroke={c} strokeWidth="1.4" /><circle cx="8" cy="8" r="2" stroke={c} strokeWidth="1.4" /></svg>,
};

// ─── Bottom nav
function BottomNav({ active = 'home', dark, accent = T.color.lime, tint }) {
  const items = [
    { key: 'home', icon: Icon.home, label: 'Главная' },
    { key: 'tasks', icon: Icon.tasks, label: 'Задачи' },
    { key: 'challenge', icon: Icon.challenge, label: 'Челленджи' },
    { key: 'shop', icon: Icon.shop, label: 'Магазин' },
    { key: 'profile', icon: Icon.profile, label: 'Профиль' },
  ];
  const ink = dark ? '#fff' : T.color.ink;
  const mutedC = dark ? 'rgba(255,255,255,0.45)' : T.color.muted;
  return (
    <div style={{
      background: tint || (dark ? '#0F0F0E' : T.color.surface),
      borderTop: `1px solid ${dark ? 'rgba(255,255,255,0.08)' : T.color.hairline}`,
      padding: '10px 10px 18px', display: 'flex', justifyContent: 'space-around',
      flexShrink: 0,
    }}>
      {items.map(it => {
        const isActive = active === it.key;
        return (
          <div key={it.key} style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
            padding: '4px 10px', borderRadius: 12,
            background: isActive ? (dark ? 'rgba(216,255,61,0.14)' : T.color.limeSoft) : 'transparent',
            color: isActive ? ink : mutedC,
          }}>
            {it.icon(isActive ? ink : mutedC)}
            <div style={{ fontSize: 10, fontWeight: 500, letterSpacing: -0.1 }}>{it.label}</div>
          </div>
        );
      })}
    </div>
  );
}

// ─── Decorative lime blob (subtle background accent visible in wireframes)
function LimeBlob({ size = 240, top, right, left, bottom, opacity = 0.55, color }) {
  return (
    <div style={{
      position: 'absolute', top, right, left, bottom,
      width: size, height: size, borderRadius: size,
      background: color || T.color.lime,
      filter: 'blur(40px)', opacity, pointerEvents: 'none',
    }} />
  );
}

// ─── Progress bar
function Progress({ value = 0, max = 100, color, track, height = 8, showCap }) {
  const pct = Math.min(100, (value / max) * 100);
  return (
    <div style={{
      height, background: track || T.color.bgDeep, borderRadius: 999, overflow: 'hidden', position: 'relative',
    }}>
      <div style={{
        height: '100%', width: `${pct}%`,
        background: color || T.color.ink,
        borderRadius: 999,
        transition: 'width 300ms ease',
      }} />
      {showCap && (
        <div style={{
          position: 'absolute', top: '50%', left: `${pct}%`, transform: 'translate(-50%, -50%)',
          width: height + 4, height: height + 4, borderRadius: 999, background: color || T.color.ink,
          boxShadow: '0 0 0 2px rgba(255,255,255,0.9)',
        }} />
      )}
    </div>
  );
}

Object.assign(window, {
  BondMark, BondFace, PhoneFrame, StatusBar, AppHeader,
  Btn, Pill, Coin, Icon, BottomNav, LimeBlob, Progress,
});
