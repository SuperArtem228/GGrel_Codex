// BondGame — Challenges screens
const T4 = window.BG_TOKENS;

function S_ChooseDaily() {
  return (
    <>
      <StatusBar />
      <AppHeader left={<div style={{ padding: 4 }}>{Icon.back()}</div>} title="Daily" sub="выбери 3 на сегодня" />
      <Screen>
        <div style={{ fontSize: 12, color: T4.color.muted, marginBottom: 12 }}>Из 5 вариантов · бонус если закроете все три</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {[
            ['15 минут без телефонов', 'couple · 15 мин', 60, true],
            ['Комплимент друг другу', 'solo · 1 мин', 30, true],
            ['Мини-прогулка', 'couple · 30 мин', 80, true],
            ['План на выходные', 'couple · 10 мин', 50, false],
            ['Один добрый жест', 'solo · день', 40, false],
          ].map(([t, m, lc, picked], i) => (
            <div key={i} style={{
              background: picked ? T4.color.limeSoft : T4.color.surface,
              border: `1px solid ${picked ? 'transparent' : T4.color.hairline}`,
              borderRadius: 18, padding: 14, display: 'flex', alignItems: 'center', gap: 12,
            }}>
              <div style={{
                width: 22, height: 22, borderRadius: 999,
                background: picked ? T4.color.limeInk : 'transparent',
                border: `1.5px solid ${picked ? T4.color.limeInk : T4.color.hairlineStrong}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              }}>
                {picked && Icon.check(T4.color.lime)}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: T4.color.ink, letterSpacing: -0.1 }}>{t}</div>
                <div style={{ fontSize: 11, color: T4.color.muted, marginTop: 2 }}>{m}</div>
              </div>
              <Pill variant={picked ? 'ink' : 'default'} size="sm">+{lc} LC</Pill>
            </div>
          ))}
        </div>
        <div style={{ position: 'absolute', bottom: 72, left: 20, right: 20 }}>
          <Btn variant="primary" full>Выбрать · 3 из 3</Btn>
        </div>
      </Screen>
      <BottomNav active="challenge" />
    </>
  );
}

function S_Today() {
  return (
    <>
      <StatusBar />
      <AppHeader left={<BondMark size={22} />} title="Сегодня" sub="активные daily" />
      <Screen>
        <div style={{ display: 'flex', gap: 6, marginBottom: 12 }}>
          {['Сегодня', 'Неделя', 'Доступные'].map((t, i) => (
            <Pill key={t} variant={i === 0 ? 'ink' : 'ghost'}>{t}</Pill>
          ))}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <ChallengeCard title="15 минут без телефонов" sub="couple · ты готов · Маша ждёт" lc={60} progress={50} active />
          <ChallengeCard title="Комплимент друг другу" sub="solo · ты выполнил" lc={30} progress={100} done />
          <ChallengeCard title="Мини-прогулка" sub="couple · не начата" lc={80} progress={0} />
        </div>
        <div style={{ marginTop: 14, background: T4.color.surface, border: `1px solid ${T4.color.hairline}`, borderRadius: 18, padding: 14, display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 42, height: 42, borderRadius: 12, background: T4.color.limeSoft, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{Icon.flame(T4.color.limeInk)}</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 13, fontWeight: 600 }}>Пара — 12 дней подряд</div>
            <div style={{ fontSize: 11, color: T4.color.muted, marginTop: 2 }}>x1.1 к наградам сегодня</div>
          </div>
        </div>
      </Screen>
      <BottomNav active="challenge" />
    </>
  );
}

function ChallengeCard({ title, sub, lc, progress, active, done }) {
  return (
    <div style={{
      background: active ? T4.color.lime : T4.color.surface,
      border: `1px solid ${active ? 'transparent' : T4.color.hairline}`,
      borderRadius: 20, padding: 16, position: 'relative',
      opacity: done ? 0.55 : 1,
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 15, fontWeight: 600, color: active ? T4.color.limeInk : T4.color.ink, letterSpacing: -0.2 }}>{title}</div>
          <div style={{ fontSize: 11, color: active ? 'rgba(26,31,0,0.65)' : T4.color.muted, marginTop: 3 }}>{sub}</div>
        </div>
        <Pill variant={active ? 'ink' : done ? 'ghost' : 'default'} size="sm">+{lc} LC</Pill>
      </div>
      <div style={{ marginTop: 12 }}>
        <Progress value={progress} color={active ? T4.color.limeInk : T4.color.ink} track={active ? 'rgba(26,31,0,0.18)' : T4.color.bgDeep} height={6} />
      </div>
    </div>
  );
}

function S_ChallengeDetail() {
  return (
    <>
      <StatusBar />
      <AppHeader left={<div style={{ padding: 4 }}>{Icon.back()}</div>} title="Без телефонов" sub="couple · 15 минут" />
      <Screen>
        <div style={{ display: 'flex', justifyContent: 'center', paddingTop: 24 }}>
          <div style={{ width: 140, height: 140, borderRadius: 36, background: T4.color.limeSoft, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {Icon.heart(T4.color.limeInk)}
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: 20 }}>
          <div style={{ fontSize: 28, fontWeight: 600, letterSpacing: -0.9, color: T4.color.ink }}>Без телефонов</div>
          <div style={{ fontSize: 13, color: T4.color.muted, marginTop: 4 }}>15 минут вместе · без уведомлений</div>
        </div>
        <div style={{ marginTop: 22, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          <StatTile label="Артём" value="готов" done />
          <StatTile label="Маша" value="ждём" />
        </div>
        <div style={{ marginTop: 14, background: T4.color.surface, border: `1px solid ${T4.color.hairline}`, borderRadius: 16, padding: 14, fontSize: 12, color: T4.color.muted, lineHeight: 1.5 }}>
          Награда +60 LC начислится на общий кошелёк, когда оба отметят шаг.
        </div>
        <div style={{ position: 'absolute', bottom: 24, left: 20, right: 20 }}>
          <Btn variant="primary" full>Отметить шаг</Btn>
        </div>
      </Screen>
    </>
  );
}

function StatTile({ label, value, done }) {
  return (
    <div style={{ background: done ? T4.color.limeSoft : T4.color.surface, border: `1px solid ${done ? 'transparent' : T4.color.hairline}`, borderRadius: 16, padding: 14 }}>
      <div style={{ fontSize: 10, color: T4.color.muted, letterSpacing: 0.5, textTransform: 'uppercase' }}>{label}</div>
      <div style={{ fontSize: 16, fontWeight: 600, marginTop: 4, color: done ? T4.color.limeInk : T4.color.ink }}>{value}</div>
    </div>
  );
}

function S_PartnerPending() {
  return (
    <>
      <StatusBar />
      <AppHeader left={<div style={{ padding: 4 }}>{Icon.back()}</div>} title="Ждём Машу" />
      <Screen>
        <div style={{ paddingTop: 48, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <BondFace size={80} bg={T4.color.limeSoft} />
          <div style={{ fontSize: 26, fontWeight: 600, letterSpacing: -0.8, marginTop: 22 }}>Ты уже выполнил</div>
          <div style={{ fontSize: 13, color: T4.color.muted, marginTop: 6, maxWidth: 240, lineHeight: 1.45 }}>
            Как только Маша отметит свою часть — +60 LC на общий кошелёк.
          </div>
        </div>
        <div style={{ marginTop: 32, background: T4.color.surface, borderRadius: 18, padding: 14, border: `1px solid ${T4.color.hairline}`, display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ fontSize: 13, fontWeight: 600, flex: 1 }}>Мягко напомнить?</div>
          <Btn variant="soft" size="sm">Напомнить</Btn>
        </div>
        <div style={{ position: 'absolute', bottom: 24, left: 20, right: 20 }}>
          <Btn variant="ghost" full>Закрыть</Btn>
        </div>
      </Screen>
    </>
  );
}

function S_Weekly() {
  return (
    <>
      <StatusBar />
      <AppHeader left={<BondMark size={22} />} title="Неделя" sub="цепочки задач" />
      <Screen>
        <div style={{ display: 'flex', gap: 6, marginBottom: 12 }}>
          {['Сегодня', 'Неделя', 'Доступные'].map((t, i) => (
            <Pill key={t} variant={i === 1 ? 'ink' : 'ghost'}>{t}</Pill>
          ))}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <WeeklyCard title="3 ужина без доставки" progress={1} total={3} lc={240} />
          <WeeklyCard title="2 прогулки" progress={0} total={2} lc={160} />
          <WeeklyCard title="Неделя порядка" progress={4} total={7} lc={300} />
        </div>
      </Screen>
      <BottomNav active="challenge" />
    </>
  );
}

function WeeklyCard({ title, progress, total, lc }) {
  const pct = (progress / total) * 100;
  return (
    <div style={{ background: T4.color.surface, border: `1px solid ${T4.color.hairline}`, borderRadius: 20, padding: 16 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <div style={{ fontSize: 15, fontWeight: 600, letterSpacing: -0.2 }}>{title}</div>
          <div style={{ fontSize: 11, color: T4.color.muted, marginTop: 2 }}>{progress} из {total}</div>
        </div>
        <Pill variant="limeSoft" size="sm">+{lc} LC</Pill>
      </div>
      <div style={{ marginTop: 14, display: 'flex', gap: 4 }}>
        {Array.from({ length: total }).map((_, i) => (
          <div key={i} style={{ flex: 1, height: 6, borderRadius: 999, background: i < progress ? T4.color.ink : T4.color.bgDeep }} />
        ))}
      </div>
    </div>
  );
}

function S_Available() {
  return (
    <>
      <StatusBar />
      <AppHeader left={<BondMark size={22} />} title="Доступные" sub="каталог паков" />
      <Screen>
        <div style={{ display: 'flex', gap: 6, marginBottom: 12 }}>
          {['romantic', 'home', 'cozy', 'active'].map((t, i) => (
            <Pill key={t} variant={i === 0 ? 'ink' : 'ghost'} size="sm">{t}</Pill>
          ))}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {[
            ['Romantic Pack', '5 челленджей · мягкий темп', '+240 LC'],
            ['Home Reset', '7 челленджей · быт и порядок', '+300 LC'],
            ['Slow Sunday', '3 челленджа · выходные', '+180 LC'],
          ].map(([t, m, lc], i) => (
            <div key={i} style={{ background: T4.color.surface, border: `1px solid ${T4.color.hairline}`, borderRadius: 20, padding: 16, display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 48, height: 48, borderRadius: 14, background: i === 0 ? T4.color.limeSoft : T4.color.surfaceAlt, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {Icon.challenge(T4.color.ink)}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 14, fontWeight: 600, letterSpacing: -0.2 }}>{t}</div>
                <div style={{ fontSize: 11, color: T4.color.muted, marginTop: 2 }}>{m}</div>
              </div>
              <Pill variant="default" size="sm">{lc}</Pill>
            </div>
          ))}
        </div>
      </Screen>
      <BottomNav active="challenge" />
    </>
  );
}

function S_Complete() {
  return (
    <>
      <StatusBar />
      <AppHeader left={<div style={{ padding: 4 }}>{Icon.close(T4.color.ink)}</div>} title="Готово" />
      <Screen>
        <SoftBlob top={-40} right={-40} opacity={0.5} />
        <div style={{ paddingTop: 40, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <div style={{ width: 120, height: 120, borderRadius: 32, background: T4.color.lime, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <BondMark size={56} color={T4.color.ink} />
          </div>
          <div style={{ fontSize: 32, fontWeight: 600, letterSpacing: -1.1, marginTop: 24 }}>Готово</div>
          <div style={{ fontSize: 13, color: T4.color.muted, marginTop: 6 }}>челлендж закрыт</div>
        </div>
        <div style={{ marginTop: 28, display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div style={{ background: T4.color.limeSoft, borderRadius: 16, padding: '14px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ fontSize: 13, color: T4.color.limeInk, fontWeight: 500 }}>Награда</div>
            <div style={{ fontSize: 16, fontWeight: 600, color: T4.color.limeInk }}>+60 LC</div>
          </div>
          <div style={{ background: T4.color.surface, borderRadius: 16, padding: '14px 16px', border: `1px solid ${T4.color.hairline}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ fontSize: 13, color: T4.color.muted }}>В общий кошелёк</div>
            <div style={{ fontSize: 14, fontWeight: 500 }}>+20 XP пары</div>
          </div>
        </div>
        <div style={{ position: 'absolute', bottom: 24, left: 20, right: 20 }}>
          <Btn variant="primary" full>Забрать награду</Btn>
        </div>
      </Screen>
    </>
  );
}

function S_StreakSaved() {
  return (
    <>
      <StatusBar />
      <AppHeader left={<div style={{ padding: 4 }}>{Icon.close(T4.color.ink)}</div>} title="Streak" />
      <Screen>
        <SoftBlob top={0} right={-40} opacity={0.45} />
        <div style={{ paddingTop: 48, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <div style={{ width: 120, height: 120, borderRadius: 999, background: T4.color.lime, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ fontSize: 40, fontWeight: 600, color: T4.color.limeInk, letterSpacing: -1 }}>12</div>
          </div>
          <div style={{ fontSize: 28, fontWeight: 600, letterSpacing: -1, marginTop: 24 }}>Streak сохранён</div>
          <div style={{ fontSize: 13, color: T4.color.muted, marginTop: 6 }}>12 дней подряд · завтра x1.1 бонус</div>
        </div>
        <div style={{ marginTop: 28, background: T4.color.surface, border: `1px solid ${T4.color.hairline}`, borderRadius: 16, padding: 16, fontSize: 13, color: T4.color.ink, lineHeight: 1.5, textAlign: 'center' }}>
          Завтра будет новый daily · уведомим обоих в 9:00
        </div>
        <div style={{ position: 'absolute', bottom: 24, left: 20, right: 20 }}>
          <Btn variant="primary" full>К главной</Btn>
        </div>
      </Screen>
    </>
  );
}

Object.assign(window, { S_ChooseDaily, S_Today, S_ChallengeDetail, S_PartnerPending, S_Weekly, S_Available, S_Complete, S_StreakSaved, ChallengeCard, WeeklyCard, StatTile });
