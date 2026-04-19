// BondGame — Entry, onboarding, home screens
const T2 = window.BG_TOKENS;

// Reusable full-screen scroller for phone content
function Screen({ children, bg, pad = 20, scroll = true }) {
  return (
    <div style={{
      flex: 1, background: bg || T2.color.bg, overflow: scroll ? 'auto' : 'hidden',
      padding: pad ? `4px ${pad}px 20px` : 0, position: 'relative',
    }}>
      {children}
    </div>
  );
}

function SoftBlob({ tint = T2.color.lime, top = -40, right = -40, size = 180, opacity = 0.4 }) {
  return <div style={{ position: 'absolute', top, right, width: size, height: size, borderRadius: size, background: tint, filter: 'blur(30px)', opacity, pointerEvents: 'none' }} />;
}

// Input field
function Field({ label, value, placeholder, hint, icon, type = 'text' }) {
  return (
    <div>
      {label && <div style={{ fontSize: 11, fontWeight: 500, color: T2.color.muted, letterSpacing: 0.4, textTransform: 'uppercase', marginBottom: 8 }}>{label}</div>}
      <div style={{
        background: T2.color.surface, border: `1px solid ${T2.color.hairline}`,
        borderRadius: 14, padding: '14px 16px', fontSize: 15, color: value ? T2.color.ink : T2.color.muted,
        display: 'flex', alignItems: 'center', gap: 10,
      }}>
        {icon}
        <span style={{ flex: 1, letterSpacing: -0.1 }}>{value || placeholder}</span>
      </div>
      {hint && <div style={{ fontSize: 11, color: T2.color.muted, marginTop: 6 }}>{hint}</div>}
    </div>
  );
}

// ─── 1. Welcome
function S_Welcome() {
  return (
    <>
      <StatusBar />
      <AppHeader right={<Pill variant="limeSoft" size="sm">BondGame</Pill>} />
      <Screen>
        <SoftBlob top={-60} right={-60} size={220} opacity={0.5} />
        <div style={{ paddingTop: 28 }}>
          <BondFace size={88} />
        </div>
        <div style={{ marginTop: 36 }}>
          <div style={{ fontSize: 40, fontWeight: 600, color: T2.color.ink, letterSpacing: -1.4, lineHeight: 1.05 }}>
            Делать друг другу <span style={{ fontStyle: 'italic' }}>приятно</span> — теперь игра.
          </div>
          <div style={{ fontSize: 15, color: T2.color.muted, marginTop: 14, lineHeight: 1.45 }}>
            Задачи, челленджи и реальные награды для вас двоих. Приватный режим — по согласию обоих.
          </div>
        </div>
        <div style={{ position: 'absolute', bottom: 24, left: 20, right: 20, display: 'flex', flexDirection: 'column', gap: 10 }}>
          <Btn variant="primary" full>Создать пару</Btn>
          <Btn variant="ghost" full>У меня уже есть код</Btn>
          <div style={{ textAlign: 'center', fontSize: 11, color: T2.color.muted, marginTop: 6 }}>
            18+ · Приватный режим опционален и согласован
          </div>
        </div>
      </Screen>
    </>
  );
}

// ─── 2. Sign up
function S_SignUp() {
  return (
    <>
      <StatusBar />
      <AppHeader left={<div style={{ padding: 4, cursor: 'pointer' }}>{Icon.back()}</div>} title="" />
      <Screen>
        <div style={{ marginTop: 12 }}>
          <div style={{ fontSize: 11, fontWeight: 500, color: T2.color.muted, letterSpacing: 1, textTransform: 'uppercase' }}>1 · Аккаунт</div>
          <div style={{ fontSize: 34, fontWeight: 600, color: T2.color.ink, letterSpacing: -1.1, marginTop: 6 }}>Создать аккаунт</div>
          <div style={{ fontSize: 14, color: T2.color.muted, marginTop: 6 }}>Нужен для того, чтобы сессия пары сохранялась между устройствами.</div>
        </div>
        <div style={{ marginTop: 28, display: 'flex', flexDirection: 'column', gap: 16 }}>
          <Field label="Как тебя зовут" value="Артём" />
          <Field label="Email" value="artem@email.com" />
          <Field label="Пароль" placeholder="Минимум 8 символов" />
        </div>
        <div style={{ position: 'absolute', bottom: 24, left: 20, right: 20 }}>
          <div style={{ fontSize: 11, color: T2.color.muted, marginBottom: 12, lineHeight: 1.4 }}>
            Продолжая, ты соглашаешься с <u>условиями</u> и <u>политикой приватности</u>. Возраст 18+.
          </div>
          <Btn variant="primary" full>Продолжить</Btn>
        </div>
      </Screen>
    </>
  );
}

// ─── 3. Create pair
function S_CreatePair() {
  return (
    <>
      <StatusBar />
      <AppHeader left={<div style={{ padding: 4, cursor: 'pointer' }}>{Icon.back()}</div>} />
      <Screen>
        <SoftBlob top={-40} right={-40} opacity={0.35} />
        <div style={{ marginTop: 12 }}>
          <div style={{ fontSize: 11, fontWeight: 500, color: T2.color.muted, letterSpacing: 1, textTransform: 'uppercase' }}>2 · Пара</div>
          <div style={{ fontSize: 34, fontWeight: 600, color: T2.color.ink, letterSpacing: -1.1, marginTop: 6 }}>Создать пару</div>
          <div style={{ fontSize: 14, color: T2.color.muted, marginTop: 6 }}>Отправь код партнёру — как только он войдёт, пара будет готова.</div>
        </div>

        <div style={{
          marginTop: 28, background: T2.color.ink, color: '#fff', borderRadius: 26, padding: 28, position: 'relative', overflow: 'hidden',
        }}>
          <div style={{ fontSize: 11, fontWeight: 500, color: 'rgba(255,255,255,0.5)', letterSpacing: 1.2, textTransform: 'uppercase' }}>Код приглашения</div>
          <div style={{ fontSize: 52, fontWeight: 600, color: T2.color.lime, letterSpacing: 6, marginTop: 10, fontFamily: T2.font.mono }}>AB72K</div>
          <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.55)', marginTop: 10 }}>Действителен 24 часа · обновить</div>
          <div style={{ display: 'flex', gap: 8, marginTop: 18 }}>
            <Btn variant="accent" size="sm">Поделиться</Btn>
            <Btn variant="soft" size="sm" style={{ background: 'rgba(255,255,255,0.08)', color: '#fff', border: '1px solid rgba(255,255,255,0.12)' }}>Скопировать</Btn>
          </div>
        </div>

        <div style={{ marginTop: 20, fontSize: 13, color: T2.color.muted, lineHeight: 1.5 }}>
          Ты автоматически станешь участником пары, как только партнёр введёт этот код.
        </div>
      </Screen>
    </>
  );
}

// ─── 4. Join pair
function S_JoinPair() {
  return (
    <>
      <StatusBar />
      <AppHeader left={<div style={{ padding: 4, cursor: 'pointer' }}>{Icon.back()}</div>} />
      <Screen>
        <div style={{ marginTop: 12 }}>
          <div style={{ fontSize: 11, fontWeight: 500, color: T2.color.muted, letterSpacing: 1, textTransform: 'uppercase' }}>2 · Пара</div>
          <div style={{ fontSize: 34, fontWeight: 600, color: T2.color.ink, letterSpacing: -1.1, marginTop: 6 }}>Ввести код</div>
          <div style={{ fontSize: 14, color: T2.color.muted, marginTop: 6 }}>Пять символов от партнёра.</div>
        </div>
        <div style={{ marginTop: 28, display: 'flex', gap: 8 }}>
          {['A', 'B', '7', '2', 'K'].map((c, i) => (
            <div key={i} style={{
              flex: 1, aspectRatio: '1/1.1', background: T2.color.surface, border: `1.5px solid ${i === 4 ? T2.color.ink : T2.color.hairlineStrong}`,
              borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 28, fontWeight: 600, fontFamily: T2.font.mono, color: T2.color.ink,
            }}>{c}</div>
          ))}
        </div>
        <div style={{ marginTop: 24, background: T2.color.limeSoft, borderRadius: 16, padding: '12px 14px', display: 'flex', gap: 10, alignItems: 'center' }}>
          {Icon.check(T2.color.limeInk)}
          <div style={{ fontSize: 12, color: T2.color.limeInk, fontWeight: 500 }}>Код действителен · Маша ждёт тебя</div>
        </div>
        <div style={{ position: 'absolute', bottom: 24, left: 20, right: 20 }}>
          <Btn variant="primary" full>Присоединиться</Btn>
        </div>
      </Screen>
    </>
  );
}

// ─── 5. Waiting for partner
function S_Waiting() {
  return (
    <>
      <StatusBar />
      <AppHeader right={<Pill variant="ghost" size="sm">AB72K</Pill>} />
      <Screen>
        <SoftBlob top={40} right={-40} size={220} opacity={0.4} />
        <div style={{ paddingTop: 60, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <div style={{ position: 'relative' }}>
            <BondFace size={96} />
            <div style={{ position: 'absolute', inset: -10, borderRadius: 999, border: `2px solid ${T2.color.lime}`, animation: 'none', opacity: 0.5 }} />
          </div>
          <div style={{ fontSize: 30, fontWeight: 600, letterSpacing: -1, color: T2.color.ink, marginTop: 32 }}>Ждём Машу</div>
          <div style={{ fontSize: 14, color: T2.color.muted, marginTop: 10, maxWidth: 260, lineHeight: 1.45 }}>
            Как только партнёр введёт код AB72K — пара будет создана автоматически.
          </div>
        </div>
        <div style={{ position: 'absolute', bottom: 96, left: 20, right: 20, background: T2.color.surface, borderRadius: 18, padding: 16, border: `1px solid ${T2.color.hairline}`, display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 8, height: 8, borderRadius: 999, background: T2.color.lime, boxShadow: `0 0 0 4px ${T2.color.limeSoft}` }} />
          <div style={{ fontSize: 13, color: T2.color.ink, flex: 1 }}>Код активен · истекает через 23:47</div>
        </div>
        <div style={{ position: 'absolute', bottom: 24, left: 20, right: 20, display: 'flex', gap: 8 }}>
          <Btn variant="ghost" full>Поделиться кодом</Btn>
        </div>
      </Screen>
    </>
  );
}

// ─── 6. Pair ready
function S_PairReady() {
  return (
    <>
      <StatusBar />
      <AppHeader />
      <Screen>
        <SoftBlob top={-40} right={-40} size={220} opacity={0.5} />
        <div style={{ paddingTop: 40, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <div style={{ width: 120, height: 120, borderRadius: 32, background: T2.color.lime, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <BondMark size={56} color={T2.color.ink} />
          </div>
          <div style={{ fontSize: 32, fontWeight: 600, letterSpacing: -1.1, color: T2.color.ink, marginTop: 28 }}>Пара создана</div>
          <div style={{ fontSize: 14, color: T2.color.muted, marginTop: 8 }}>Добро пожаловать, Артём & Маша</div>
        </div>

        <div style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 10 }}>
          {[
            ['Стартовый баланс каждого', '100 LC'],
            ['Общий кошелёк пары', '0 LC'],
            ['Streak', '0 дней'],
          ].map(([k, v]) => (
            <div key={k} style={{ background: T2.color.surface, borderRadius: 16, padding: '14px 18px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: `1px solid ${T2.color.hairline}` }}>
              <div style={{ fontSize: 13, color: T2.color.muted }}>{k}</div>
              <div style={{ fontSize: 15, fontWeight: 600, color: T2.color.ink, letterSpacing: -0.2 }}>{v}</div>
            </div>
          ))}
        </div>

        <div style={{ position: 'absolute', bottom: 24, left: 20, right: 20 }}>
          <Btn variant="primary" full>Открыть приложение</Btn>
        </div>
      </Screen>
    </>
  );
}

// ─── 7. Home empty
function S_HomeEmpty() {
  return (
    <>
      <StatusBar />
      <AppHeader
        left={<BondMark size={22} color={T2.color.ink} />}
        title="Артём & Маша"
        sub="1 день в паре"
        right={<div style={{ padding: 4 }}>{Icon.bell(T2.color.ink)}</div>}
      />
      <Screen>
        <SoftBlob top={-40} right={-50} size={200} opacity={0.35} />
        <div style={{ paddingTop: 60, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <BondFace size={72} />
          <div style={{ fontSize: 28, fontWeight: 600, letterSpacing: -1, color: T2.color.ink, marginTop: 24 }}>Пока тихо</div>
          <div style={{ fontSize: 14, color: T2.color.muted, marginTop: 8, maxWidth: 260, lineHeight: 1.45 }}>
            Отправь Маше первую задачу — от 20 LC. Это разблокирует daily и челленджи пары.
          </div>
        </div>
        <div style={{ marginTop: 36, display: 'flex', flexDirection: 'column', gap: 10 }}>
          <Btn variant="primary" full>Создать задачу</Btn>
          <Btn variant="ghost" full>Выбрать daily</Btn>
        </div>
        <div style={{ marginTop: 20, background: T2.color.surface, borderRadius: 18, padding: 16, border: `1px solid ${T2.color.hairline}` }}>
          <div style={{ fontSize: 11, fontWeight: 500, color: T2.color.muted, letterSpacing: 1, textTransform: 'uppercase' }}>Подсказка</div>
          <div style={{ fontSize: 13, color: T2.color.ink, marginTop: 4, lineHeight: 1.45 }}>
            Задачи можно торговать — партнёр может предложить свою цену в пределах 150%.
          </div>
        </div>
      </Screen>
      <BottomNav active="home" />
    </>
  );
}

// ─── 8. Home active — the hero screen
function S_HomeActive() {
  return (
    <>
      <StatusBar />
      <AppHeader
        left={<BondMark size={22} color={T2.color.ink} />}
        title="Артём & Маша"
        sub="12 дней подряд · streak"
        right={
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <Pill variant="limeSoft" size="sm" icon={Icon.flame(T2.color.limeInk)}>12</Pill>
            <div style={{ padding: 4 }}>{Icon.bell(T2.color.ink)}</div>
          </div>
        }
      />
      <Screen>
        {/* Wallet */}
        <div style={{
          background: T2.color.ink, color: '#fff', borderRadius: 24, padding: 20, position: 'relative', overflow: 'hidden',
        }}>
          <div style={{ position: 'absolute', right: -40, top: -40, width: 140, height: 140, borderRadius: 140, background: T2.color.lime, filter: 'blur(40px)', opacity: 0.5 }} />
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.5)', letterSpacing: 1, textTransform: 'uppercase' }}>Твой кошелёк</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginTop: 6 }}>
                <div style={{ fontSize: 30, fontWeight: 600, letterSpacing: -1 }}>1 240</div>
                <div style={{ fontSize: 13, color: T2.color.lime }}>LC</div>
              </div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', marginTop: 2 }}>+140 сегодня</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.5)', letterSpacing: 1, textTransform: 'uppercase' }}>Общий</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginTop: 6, justifyContent: 'flex-end' }}>
                <div style={{ fontSize: 22, fontWeight: 600, letterSpacing: -0.6 }}>360</div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.65)' }}>LC</div>
              </div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', marginTop: 2 }}>пары</div>
            </div>
          </div>
        </div>

        {/* Daily preview */}
        <div style={{ marginTop: 14, background: T2.color.lime, borderRadius: 24, padding: 18, position: 'relative', overflow: 'hidden' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <div style={{ fontSize: 11, fontWeight: 600, color: T2.color.limeInk, letterSpacing: 1, textTransform: 'uppercase', opacity: 0.7 }}>Daily · 2 из 3</div>
              <div style={{ fontSize: 20, fontWeight: 600, color: T2.color.limeInk, letterSpacing: -0.4, marginTop: 4 }}>15 минут без телефонов</div>
            </div>
            <Pill variant="ink" size="sm">+60 LC</Pill>
          </div>
          <div style={{ marginTop: 14 }}>
            <Progress value={66} color={T2.color.limeInk} track="rgba(26,31,0,0.18)" />
          </div>
          <div style={{ marginTop: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ fontSize: 11, color: T2.color.limeInk, opacity: 0.7 }}>Ты: готово · Маша: ждём</div>
            <div style={{ fontSize: 12, fontWeight: 600, color: T2.color.limeInk, display: 'flex', alignItems: 'center', gap: 2 }}>Продолжить {Icon.chevron(T2.color.limeInk)}</div>
          </div>
        </div>

        {/* Incoming */}
        <div style={{ marginTop: 14 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 4px', marginBottom: 10 }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: T2.color.ink }}>Входящие</div>
            <div style={{ fontSize: 12, color: T2.color.muted }}>2 новых</div>
          </div>
          <div style={{ background: T2.color.surface, borderRadius: 20, border: `1px solid ${T2.color.hairline}`, overflow: 'hidden' }}>
            <TaskRow title="Купить вкусное" meta="Маша · 40 LC · сегодня" status="new" />
            <TaskRow title="Мини-свидание дома" meta="Маша · 120 LC · завтра" status="bargain" />
          </div>
        </div>

        {/* Streak risk mini */}
        <div style={{ marginTop: 14, background: T2.color.surface, borderRadius: 20, padding: 16, border: `1px solid ${T2.color.hairline}`, display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{ width: 44, height: 44, borderRadius: 14, background: '#FFF3D9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {Icon.flame('#B8760E')}
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 14, fontWeight: 600, color: T2.color.ink, letterSpacing: -0.1 }}>Streak 12 дней</div>
            <div style={{ fontSize: 12, color: T2.color.muted, marginTop: 2 }}>Ещё один daily до полуночи</div>
          </div>
          {Icon.chevron(T2.color.muted)}
        </div>
      </Screen>
      <BottomNav active="home" />
    </>
  );
}

function TaskRow({ title, meta, status }) {
  const statusMap = {
    new: { bg: T2.color.lime, fg: T2.color.limeInk, text: 'Новая' },
    bargain: { bg: T2.color.surfaceAlt, fg: T2.color.ink2, text: 'Торг' },
    progress: { bg: T2.color.ink, fg: '#fff', text: 'В работе' },
    accepted: { bg: T2.color.limeSoft, fg: T2.color.limeInk, text: 'Принято' },
    done: { bg: T2.color.surfaceAlt, fg: T2.color.muted, text: 'Выполнено' },
  }[status] || { bg: T2.color.surfaceAlt, fg: T2.color.muted, text: status || '—' };
  return (
    <div style={{ padding: '14px 16px', display: 'flex', alignItems: 'center', gap: 12, borderBottom: `1px solid ${T2.color.hairline}` }}>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 14, fontWeight: 600, color: T2.color.ink, letterSpacing: -0.1 }}>{title}</div>
        <div style={{ fontSize: 11, color: T2.color.muted, marginTop: 2 }}>{meta}</div>
      </div>
      <Pill variant={status === 'new' ? 'lime' : 'default'} size="sm">{statusMap.text}</Pill>
    </div>
  );
}

// ─── 9. Reward toast (home with toast)
function S_RewardToast() {
  return (
    <>
      <StatusBar />
      <AppHeader left={<BondMark size={22} color={T2.color.ink} />} title="Артём & Маша" sub="12 дней streak" right={<div style={{ padding: 4 }}>{Icon.bell(T2.color.ink)}</div>} />
      <Screen>
        <div style={{ background: T2.color.ink, color: '#fff', borderRadius: 24, padding: 20, opacity: 0.5 }}>
          <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.5)', letterSpacing: 1, textTransform: 'uppercase' }}>Твой кошелёк</div>
          <div style={{ fontSize: 30, fontWeight: 600, letterSpacing: -1, marginTop: 6 }}>1 240 LC</div>
        </div>
        <div style={{ marginTop: 14, background: T2.color.surfaceAlt, borderRadius: 24, padding: 20, opacity: 0.5 }}>
          <div style={{ height: 80 }} />
        </div>
        {/* Toast */}
        <div style={{
          position: 'absolute', bottom: 24, left: 20, right: 20,
          background: T2.color.ink, color: '#fff', borderRadius: 22, padding: '16px 18px',
          boxShadow: '0 20px 50px -20px rgba(0,0,0,0.4)',
          display: 'flex', alignItems: 'center', gap: 14,
        }}>
          <div style={{ width: 44, height: 44, borderRadius: 14, background: T2.color.lime, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <BondMark size={22} color={T2.color.ink} />
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 14, fontWeight: 600, letterSpacing: -0.1 }}>+60 LC · челлендж готов</div>
            <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)', marginTop: 2 }}>«Без телефонов» закрыт обоими</div>
          </div>
          <Pill variant="lime" size="sm">Открыть</Pill>
        </div>
      </Screen>
      <BottomNav active="home" />
    </>
  );
}

Object.assign(window, { S_Welcome, S_SignUp, S_CreatePair, S_JoinPair, S_Waiting, S_PairReady, S_HomeEmpty, S_HomeActive, S_RewardToast, Screen, SoftBlob, Field, TaskRow });
