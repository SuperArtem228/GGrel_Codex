// BondGame — Design system overview section
const T1 = window.BG_TOKENS;

function DesignSystemSection() {
  return (
    <div style={{ padding: '0 60px', marginBottom: 100 }}>
      <div style={{ marginBottom: 36 }}>
        <div style={{ fontSize: 11, fontWeight: 600, color: 'rgba(40,30,20,0.45)', textTransform: 'uppercase', letterSpacing: 1.2 }}>00 · Foundation</div>
        <div style={{ fontSize: 40, fontWeight: 600, color: T1.color.ink, letterSpacing: -1, marginTop: 6 }}>Visual system</div>
        <div style={{ fontSize: 15, color: T1.color.muted, marginTop: 6, maxWidth: 620, lineHeight: 1.5 }}>
          Light premium surface, acid-lime accent for the core loop, magenta/plum for the private layer.
          Generous spacing, rounded pills, and a single signature shape that carries through the app.
        </div>
      </div>

      {/* Brand cover */}
      <div style={{
        background: T1.color.ink, color: '#fff', borderRadius: 28, padding: '48px 52px',
        marginBottom: 40, position: 'relative', overflow: 'hidden',
        display: 'grid', gridTemplateColumns: '1fr auto', gap: 48,
      }}>
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
          <div style={{ position: 'absolute', right: -80, top: -80, width: 320, height: 320, borderRadius: 400, background: T1.color.lime, filter: 'blur(80px)', opacity: 0.3 }} />
        </div>
        <div style={{ position: 'relative' }}>
          <div style={{ fontSize: 11, fontWeight: 500, color: 'rgba(255,255,255,0.5)', letterSpacing: 2, textTransform: 'uppercase' }}>BondGame · MVP · v1.0</div>
          <div style={{ fontSize: 68, fontWeight: 600, letterSpacing: -2.5, lineHeight: 0.95, marginTop: 18, maxWidth: 700 }}>
            A couple's game<br />that rewards<br />the <span style={{ fontStyle: 'italic', color: T1.color.lime }}>good days</span>.
          </div>
          <div style={{ fontSize: 15, color: 'rgba(255,255,255,0.65)', marginTop: 20, maxWidth: 500, lineHeight: 1.5 }}>
            A production-ready PWA direction. Two partners, real rewards, private mode.
            Premium lifestyle feel — never casino, never loot.
          </div>
          <div style={{ display: 'flex', gap: 10, marginTop: 28 }}>
            <Pill variant="lime" size="lg">Core · acid lime</Pill>
            <Pill variant="plum" size="lg" icon={Icon.lock('#fff')}>Spicy · plum</Pill>
          </div>
        </div>
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{
            width: 220, height: 220, background: T1.color.lime, borderRadius: 220,
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 18,
          }}>
            <div style={{ width: 22, height: 42, borderRadius: 22, background: T1.color.ink }} />
            <div style={{ width: 22, height: 42, borderRadius: 22, background: T1.color.ink }} />
          </div>
        </div>
      </div>

      {/* Tokens grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginBottom: 40 }}>
        {/* Palette — core */}
        <div style={{ background: '#fff', borderRadius: 22, padding: 28, border: `1px solid ${T1.color.hairline}` }}>
          <div style={{ fontSize: 12, fontWeight: 600, color: T1.color.muted, textTransform: 'uppercase', letterSpacing: 1 }}>Core palette</div>
          <div style={{ fontSize: 20, fontWeight: 600, marginTop: 4, marginBottom: 20, letterSpacing: -0.3 }}>Warm, quiet, confident</div>
          {[
            ['#F4F2EC', 'Background', 'bg · warm off-white'],
            ['#FFFFFF', 'Surface', 'surface'],
            ['#0F0F0E', 'Ink', 'ink · type primary'],
            ['#7A776F', 'Muted', 'muted · secondary'],
            ['#D8FF3D', 'Lime', 'lime · product accent'],
            ['#F0FFB8', 'Lime soft', 'lime-soft · tint'],
          ].map(([hex, name, meta]) => (
            <div key={hex} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '10px 0', borderTop: `1px solid ${T1.color.hairline}` }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: hex, border: `1px solid ${T1.color.hairline}` }} />
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: T1.color.ink }}>{name}</div>
                <div style={{ fontSize: 11, color: T1.color.muted, marginTop: 1 }}>{meta}</div>
              </div>
              <div style={{ fontSize: 11, fontFamily: T1.font.mono, color: T1.color.muted }}>{hex}</div>
            </div>
          ))}
        </div>

        {/* Palette — spicy */}
        <div style={{ background: T1.color.plumWash, borderRadius: 22, padding: 28, border: `1px solid ${T1.color.hairline}`, position: 'relative', overflow: 'hidden' }}>
          <div style={{ fontSize: 12, fontWeight: 600, color: T1.color.plum, textTransform: 'uppercase', letterSpacing: 1 }}>Private layer</div>
          <div style={{ fontSize: 20, fontWeight: 600, marginTop: 4, marginBottom: 20, letterSpacing: -0.3 }}>Adult, discreet, elegant</div>
          {[
            ['#6B2BC2', 'Plum', 'plum · private primary'],
            ['#E5199F', 'Magenta', 'magenta · accent'],
            ['#EEE2FF', 'Plum soft', 'plum-soft · surface tint'],
            ['#FFE0F2', 'Magenta soft', 'magenta-soft · tag'],
            ['#1C0338', 'Plum ink', 'plum-ink · type on soft'],
            ['#F7F0FF', 'Plum wash', 'plum-wash · background'],
          ].map(([hex, name, meta]) => (
            <div key={hex} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '10px 0', borderTop: `1px solid ${T1.color.hairline}` }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: hex, border: `1px solid ${T1.color.hairline}` }} />
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: T1.color.ink }}>{name}</div>
                <div style={{ fontSize: 11, color: T1.color.muted, marginTop: 1 }}>{meta}</div>
              </div>
              <div style={{ fontSize: 11, fontFamily: T1.font.mono, color: T1.color.muted }}>{hex}</div>
            </div>
          ))}
        </div>

        {/* Type */}
        <div style={{ background: '#fff', borderRadius: 22, padding: 28, border: `1px solid ${T1.color.hairline}` }}>
          <div style={{ fontSize: 12, fontWeight: 600, color: T1.color.muted, textTransform: 'uppercase', letterSpacing: 1 }}>Typography</div>
          <div style={{ fontSize: 20, fontWeight: 600, marginTop: 4, marginBottom: 20, letterSpacing: -0.3 }}>Geist — a clean grotesk</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            <div>
              <div style={{ fontSize: 10, fontWeight: 600, color: T1.color.muted, textTransform: 'uppercase', letterSpacing: 1 }}>Display · 34 / 600 / -1.2</div>
              <div style={{ fontSize: 34, fontWeight: 600, letterSpacing: -1.2, color: T1.color.ink, lineHeight: 1.05 }}>Сегодня</div>
            </div>
            <div>
              <div style={{ fontSize: 10, fontWeight: 600, color: T1.color.muted, textTransform: 'uppercase', letterSpacing: 1 }}>Title · 20 / 600 / -0.3</div>
              <div style={{ fontSize: 20, fontWeight: 600, letterSpacing: -0.3, color: T1.color.ink }}>Приготовить ужин</div>
            </div>
            <div>
              <div style={{ fontSize: 10, fontWeight: 600, color: T1.color.muted, textTransform: 'uppercase', letterSpacing: 1 }}>Body · 14 / 400</div>
              <div style={{ fontSize: 14, color: T1.color.ink2, lineHeight: 1.5 }}>Свидание, еда, без телефонов. Дедлайн завтра, 120 LC.</div>
            </div>
            <div>
              <div style={{ fontSize: 10, fontWeight: 600, color: T1.color.muted, textTransform: 'uppercase', letterSpacing: 1 }}>Meta · 11 / 500 / UPPER</div>
              <div style={{ fontSize: 11, fontWeight: 500, color: T1.color.muted, letterSpacing: 1, textTransform: 'uppercase' }}>Pending confirm · 2h</div>
            </div>
          </div>
        </div>
      </div>

      {/* Component specimens */}
      <div style={{ background: '#fff', borderRadius: 22, padding: 36, border: `1px solid ${T1.color.hairline}`, marginBottom: 24 }}>
        <div style={{ fontSize: 12, fontWeight: 600, color: T1.color.muted, textTransform: 'uppercase', letterSpacing: 1 }}>Components · atoms</div>
        <div style={{ fontSize: 22, fontWeight: 600, marginTop: 4, marginBottom: 28, letterSpacing: -0.4 }}>Buttons, pills, progress, chips</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: 28 }}>
          <div>
            <div style={{ fontSize: 10, fontWeight: 600, color: T1.color.muted, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 12 }}>Buttons</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'flex-start' }}>
              <Btn variant="primary">Отправить задачу</Btn>
              <Btn variant="accent">Забрать награду</Btn>
              <Btn variant="ghost">Отклонить</Btn>
              <Btn variant="soft" size="sm">Спор</Btn>
            </div>
          </div>
          <div>
            <div style={{ fontSize: 10, fontWeight: 600, color: T1.color.muted, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 12 }}>Pills · status</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              <Pill variant="lime" icon={Icon.spark(T1.color.limeInk)}>Новое</Pill>
              <Pill variant="ink">Активно</Pill>
              <Pill variant="default">Pending</Pill>
              <Pill variant="limeSoft">+140 LC</Pill>
              <Pill variant="ghost">Архив</Pill>
              <Pill variant="plum" icon={Icon.lock('#fff')}>Private</Pill>
              <Pill variant="plumSoft">Spicy</Pill>
              <Pill variant="magenta">+40 LC</Pill>
            </div>
          </div>
          <div>
            <div style={{ fontSize: 10, fontWeight: 600, color: T1.color.muted, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 12 }}>Progress</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div>
                <div style={{ fontSize: 11, color: T1.color.muted, marginBottom: 6 }}>Daily · 2 of 3</div>
                <Progress value={66} color={T1.color.lime} />
              </div>
              <div>
                <div style={{ fontSize: 11, color: T1.color.muted, marginBottom: 6 }}>Weekly · 4 of 7</div>
                <Progress value={57} color={T1.color.ink} />
              </div>
              <div>
                <div style={{ fontSize: 11, color: T1.color.muted, marginBottom: 6 }}>Bargain range</div>
                <Progress value={75} color={T1.color.ink} showCap />
              </div>
            </div>
          </div>
          <div>
            <div style={{ fontSize: 10, fontWeight: 600, color: T1.color.muted, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 12 }}>Wallet</div>
            <div style={{ background: T1.color.ink, color: '#fff', borderRadius: 20, padding: 20, display: 'flex', flexDirection: 'column', gap: 4 }}>
              <div style={{ fontSize: 10, fontWeight: 500, color: 'rgba(255,255,255,0.5)', letterSpacing: 1, textTransform: 'uppercase' }}>Кошелёк Артёма</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
                <div style={{ fontSize: 30, fontWeight: 600, letterSpacing: -1 }}>1 240</div>
                <div style={{ fontSize: 14, color: T1.color.lime, fontWeight: 500 }}>LC</div>
              </div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.55)' }}>+140 LC за сегодня</div>
            </div>
          </div>
        </div>
      </div>

      {/* Shape + motion principles */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
        <div style={{ background: '#fff', borderRadius: 22, padding: 28, border: `1px solid ${T1.color.hairline}` }}>
          <div style={{ fontSize: 12, fontWeight: 600, color: T1.color.muted, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 20 }}>Shape language</div>
          <div style={{ display: 'flex', gap: 16, alignItems: 'flex-end' }}>
            {[{ r: 10, l: 'sm · 10' }, { r: 16, l: 'md · 16' }, { r: 22, l: 'lg · 22' }, { r: 28, l: 'xl · 28' }, { r: 999, l: 'pill' }].map(({ r, l }) => (
              <div key={l} style={{ textAlign: 'center' }}>
                <div style={{ width: 64, height: 64, background: T1.color.bg, borderRadius: r, border: `1px solid ${T1.color.hairline}` }} />
                <div style={{ fontSize: 11, color: T1.color.muted, marginTop: 8, fontFamily: T1.font.mono }}>{l}</div>
              </div>
            ))}
          </div>
          <div style={{ fontSize: 13, color: T1.color.muted, marginTop: 24, lineHeight: 1.55 }}>
            Cards default to <b style={{ color: T1.color.ink }}>28px</b>. Inputs, chips and buttons use the pill radius to stay friendly on mobile.
          </div>
        </div>
        <div style={{ background: '#fff', borderRadius: 22, padding: 28, border: `1px solid ${T1.color.hairline}` }}>
          <div style={{ fontSize: 12, fontWeight: 600, color: T1.color.muted, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 20 }}>Signature mark</div>
          <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
            <div style={{ width: 100, height: 100, background: T1.color.lime, borderRadius: 28, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <BondMark size={44} color={T1.color.ink} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 15, fontWeight: 600, color: T1.color.ink, letterSpacing: -0.2 }}>Two halves · one shape</div>
              <div style={{ fontSize: 13, color: T1.color.muted, marginTop: 6, lineHeight: 1.55 }}>
                Four-lobed bond mark — the brand's only illustrative device. Used in the empty states,
                case reveal, pair-ready celebration and as the PWA icon.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { DesignSystemSection });
