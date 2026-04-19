// BondGame — Spicy mode screens (private layer)
const T6 = window.BG_TOKENS;

function SpicyShell({ children, pad = 20 }) {
  return (
    <Screen pad={pad} bg={T6.color.plumWash}>
      <div style={{ position: 'absolute', top: -50, right: -50, width: 220, height: 220, borderRadius: 999, background: T6.color.magenta, filter: 'blur(60px)', opacity: 0.22, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: 100, left: -60, width: 180, height: 180, borderRadius: 999, background: T6.color.plum, filter: 'blur(60px)', opacity: 0.18, pointerEvents: 'none' }} />
      {children}
    </Screen>
  );
}

function S_SpicyLocked() {
  return (
    <>
      <StatusBar />
      <AppHeader left={<BondMark size={22} color={T6.color.plumInk} />} title="Private" right={<Pill variant="plumSoft" size="sm" icon={Icon.lock(T6.color.plumInk)}>Locked</Pill>} />
      <SpicyShell>
        <div style={{ paddingTop: 28 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '6px 12px', borderRadius: 999, background: T6.color.plum, color: '#fff', fontSize: 11, fontWeight: 500, letterSpacing: 0.5 }}>
            {Icon.lock('#fff')} PRIVATE MODE · 18+
          </div>
          <div style={{ fontSize: 36, fontWeight: 600, letterSpacing: -1.2, color: T6.color.plumInk, marginTop: 16, lineHeight: 1.05 }}>
            Spicy mode<br />— по согласию обоих.
          </div>
          <div style={{ fontSize: 14, color: 'rgba(28,3,56,0.65)', marginTop: 14, lineHeight: 1.5, maxWidth: 300 }}>
            Отдельный приватный слой с взрослыми наградами и кейсами. Скрыт от истории и общего профиля. Включается только если оба дадут явное согласие.
          </div>
        </div>
        <div style={{ marginTop: 28, display: 'flex', flexDirection: 'column', gap: 10 }}>
          <PrivacyRow title="Отдельная приватная комната" />
          <PrivacyRow title="Приватные награды и кейсы" />
          <PrivacyRow title="Нейтральные уведомления" />
          <PrivacyRow title="Выключить может любой — в одно касание" />
        </div>
        <div style={{ position: 'absolute', bottom: 24, left: 20, right: 20 }}>
          <Btn variant="accent" accent="plum" full>Дать согласие</Btn>
        </div>
      </SpicyShell>
    </>
  );
}

function PrivacyRow({ title }) {
  return (
    <div style={{ background: '#fff', borderRadius: 16, padding: '14px 16px', display: 'flex', alignItems: 'center', gap: 12, border: `1px solid ${T6.color.hairline}` }}>
      <div style={{ width: 24, height: 24, borderRadius: 999, background: T6.color.plum, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {Icon.check('#fff')}
      </div>
      <div style={{ fontSize: 13, fontWeight: 500, color: T6.color.plumInk }}>{title}</div>
    </div>
  );
}

function S_SpicyConsent() {
  return (
    <>
      <StatusBar />
      <AppHeader left={<div style={{ padding: 4 }}>{Icon.back(T6.color.plumInk)}</div>} title="Согласие" />
      <SpicyShell>
        <div style={{ fontSize: 11, fontWeight: 500, color: T6.color.plum, letterSpacing: 1, textTransform: 'uppercase', marginTop: 10 }}>Шаг 1 из 2</div>
        <div style={{ fontSize: 30, fontWeight: 600, letterSpacing: -1, color: T6.color.plumInk, marginTop: 6 }}>Сначала согласие</div>
        <div style={{ fontSize: 14, color: 'rgba(28,3,56,0.65)', marginTop: 10, lineHeight: 1.5 }}>
          Мы зафиксируем твоё согласие. Пока оба не подтвердят — приватный контент недоступен никому.
        </div>
        <div style={{ marginTop: 24, display: 'flex', flexDirection: 'column', gap: 10 }}>
          <ConsentCheck text="Мне 18+" on />
          <ConsentCheck text="Я согласен, чтобы приватный контент был виден только мне и партнёру" on />
          <ConsentCheck text="Я могу отозвать согласие в любой момент" on />
        </div>
        <div style={{ marginTop: 16, background: '#fff', borderRadius: 14, padding: 12, border: `1px solid ${T6.color.hairline}`, fontSize: 12, color: T6.color.muted, lineHeight: 1.5 }}>
          Push-уведомления Spicy-режима — нейтральные: «У вас есть приватное обновление».
        </div>
        <div style={{ position: 'absolute', bottom: 24, left: 20, right: 20 }}>
          <Btn variant="accent" accent="plum" full>Подтвердить согласие</Btn>
        </div>
      </SpicyShell>
    </>
  );
}

function ConsentCheck({ text, on }) {
  return (
    <div style={{ background: '#fff', borderRadius: 14, padding: 14, display: 'flex', alignItems: 'center', gap: 12, border: `1px solid ${T6.color.hairline}` }}>
      <div style={{ width: 22, height: 22, borderRadius: 6, background: on ? T6.color.plum : 'transparent', border: `1.5px solid ${on ? T6.color.plum : T6.color.hairlineStrong}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {on && Icon.check('#fff')}
      </div>
      <div style={{ fontSize: 13, color: T6.color.plumInk, fontWeight: 500 }}>{text}</div>
    </div>
  );
}

function S_SpicyWaiting() {
  return (
    <>
      <StatusBar />
      <AppHeader left={<BondMark size={22} color={T6.color.plumInk} />} title="Private" />
      <SpicyShell>
        <div style={{ paddingTop: 48, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <div style={{ width: 100, height: 100, borderRadius: 999, background: T6.color.plum, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {Icon.lock('#fff')}
          </div>
          <div style={{ fontSize: 28, fontWeight: 600, letterSpacing: -1, color: T6.color.plumInk, marginTop: 22 }}>Ждём Машу</div>
          <div style={{ fontSize: 13, color: 'rgba(28,3,56,0.65)', marginTop: 8, maxWidth: 260, lineHeight: 1.45 }}>
            Твоё согласие сохранено. Пока партнёр не даст своё — приватный слой остаётся закрыт для обоих.
          </div>
        </div>
        <div style={{ marginTop: 24, background: '#fff', borderRadius: 16, padding: 14, border: `1px solid ${T6.color.hairline}`, fontSize: 12, color: T6.color.plumInk, lineHeight: 1.5 }}>
          Если Маша откажется — твоё согласие автоматически отзывается. Никакой истории не останется.
        </div>
        <div style={{ position: 'absolute', bottom: 24, left: 20, right: 20, display: 'flex', flexDirection: 'column', gap: 10 }}>
          <Btn variant="ghost" full>Отозвать согласие</Btn>
        </div>
      </SpicyShell>
    </>
  );
}

function S_SpicyHome() {
  return (
    <>
      <StatusBar />
      <AppHeader left={<BondMark size={22} color={T6.color.plumInk} accent={T6.color.magenta} />} title="Private room" sub="только вы двое" right={<Pill variant="plumSoft" size="sm" icon={Icon.eye(T6.color.plumInk)}>Hidden</Pill>} />
      <SpicyShell>
        <div style={{
          background: `linear-gradient(135deg, ${T6.color.plum} 0%, ${T6.color.magenta} 100%)`,
          color: '#fff', borderRadius: 24, padding: 22, position: 'relative', overflow: 'hidden',
        }}>
          <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.7)', letterSpacing: 1, textTransform: 'uppercase' }}>Spicy wallet</div>
          <div style={{ fontSize: 32, fontWeight: 600, letterSpacing: -1, marginTop: 6 }}>240 LC</div>
          <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.7)', marginTop: 2 }}>отдельно от основного</div>
        </div>

        <div style={{ marginTop: 14 }}>
          <div style={{ fontSize: 12, fontWeight: 600, color: T6.color.plumInk, marginBottom: 8, padding: '0 4px' }}>Доступно сейчас</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            <SpicyTile title="Spicy награды" count="8" />
            <SpicyTile title="Spicy кейсы" count="3" />
            <SpicyTile title="Свои награды" count="Создать" accent />
            <SpicyTile title="Приватность" count="Настройки" />
          </div>
        </div>

        <div style={{ marginTop: 14, background: '#fff', borderRadius: 16, padding: 14, border: `1px solid ${T6.color.hairline}`, display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 36, height: 36, borderRadius: 999, background: T6.color.magentaSoft, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {Icon.heart(T6.color.magenta, T6.color.magenta)}
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: T6.color.plumInk }}>Новая приватная награда</div>
            <div style={{ fontSize: 11, color: T6.color.muted, marginTop: 2 }}>Маша только что добавила</div>
          </div>
          {Icon.chevron(T6.color.plum)}
        </div>
      </SpicyShell>
      <BottomNav active="home" tint="#fff" />
    </>
  );
}

function SpicyTile({ title, count, accent }) {
  return (
    <div style={{
      background: accent ? T6.color.plum : '#fff',
      color: accent ? '#fff' : T6.color.plumInk,
      border: `1px solid ${accent ? 'transparent' : T6.color.hairline}`,
      borderRadius: 20, padding: 16,
    }}>
      <div style={{ fontSize: 11, color: accent ? 'rgba(255,255,255,0.7)' : T6.color.muted, letterSpacing: 0.5, textTransform: 'uppercase' }}>{title}</div>
      <div style={{ fontSize: 22, fontWeight: 600, marginTop: 6, letterSpacing: -0.4 }}>{count}</div>
    </div>
  );
}

function S_SpicyRewards() {
  return (
    <>
      <StatusBar />
      <AppHeader left={<div style={{ padding: 4 }}>{Icon.back(T6.color.plumInk)}</div>} title="Награды" sub="приватные · 8" />
      <SpicyShell>
        <div style={{ display: 'flex', gap: 6, marginBottom: 12 }}>
          {['все', 'мягкие', 'игривые'].map((t, i) => <Pill key={t} variant={i === 0 ? 'plum' : 'plumSoft'} size="sm">{t}</Pill>)}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {[
            ['Медленный поцелуй', 40, 'soft'],
            ['Спальня только свечи', 80, 'soft'],
            ['Выбор сюрприза', 120, 'игривый'],
            ['Массаж с маслом', 160, 'soft'],
          ].map(([t, lc, tag], i) => (
            <div key={i} style={{ background: '#fff', borderRadius: 18, padding: 14, border: `1px solid ${T6.color.hairline}`, display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 48, height: 48, borderRadius: 14, background: T6.color.magentaSoft, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {Icon.heart(T6.color.magenta, T6.color.magenta)}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: T6.color.plumInk, letterSpacing: -0.2 }}>{t}</div>
                <div style={{ fontSize: 11, color: T6.color.muted, marginTop: 2 }}>{tag} · для Маши</div>
              </div>
              <Pill variant="plum" size="sm">{lc} LC</Pill>
            </div>
          ))}
        </div>
      </SpicyShell>
    </>
  );
}

function S_CreateSpicyReward() {
  return (
    <>
      <StatusBar />
      <AppHeader left={<div style={{ padding: 4 }}>{Icon.close(T6.color.plumInk)}</div>} title="Новая награда" sub="приватная" />
      <SpicyShell>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <Field label="Название" value="Медленный поцелуй" />
          <Field label="Подсказка партнёру" value="Без телефонов, 5 минут" />
          <div>
            <div style={{ fontSize: 11, fontWeight: 500, color: T6.color.muted, letterSpacing: 0.4, textTransform: 'uppercase', marginBottom: 8 }}>Тон</div>
            <div style={{ display: 'flex', gap: 6 }}>
              <Pill variant="plum">мягкий</Pill>
              <Pill variant="plumSoft">игривый</Pill>
              <Pill variant="plumSoft">страстный</Pill>
            </div>
          </div>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
              <div style={{ fontSize: 11, fontWeight: 500, color: T6.color.muted, letterSpacing: 0.4, textTransform: 'uppercase' }}>Цена</div>
              <div style={{ fontSize: 13, fontWeight: 600, color: T6.color.plumInk }}>60 LC</div>
            </div>
            <Progress value={30} color={T6.color.plum} showCap />
          </div>
        </div>
        <div style={{ position: 'absolute', bottom: 24, left: 20, right: 20 }}>
          <Btn variant="accent" accent="plum" full>Создать</Btn>
        </div>
      </SpicyShell>
    </>
  );
}

function S_SpicyCases() {
  return (
    <>
      <StatusBar />
      <AppHeader left={<div style={{ padding: 4 }}>{Icon.back(T6.color.plumInk)}</div>} title="Spicy кейсы" />
      <SpicyShell>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {[['Мягкий сюрприз', '60 LC'], ['Игривый вечер', '120 LC'], ['Свой кейс', 'создать']].map(([n, p], i) => (
            <div key={i} style={{ background: '#fff', borderRadius: 20, padding: 14, border: `1px solid ${T6.color.hairline}`, display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 56, height: 56, borderRadius: 16, background: i === 2 ? T6.color.plumSoft : `linear-gradient(135deg, ${T6.color.plum}, ${T6.color.magenta})`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <BondMark size={22} color={i === 2 ? T6.color.plum : '#fff'} accent={i === 2 ? T6.color.magenta : '#fff'} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: T6.color.plumInk, letterSpacing: -0.2 }}>{n}</div>
                <div style={{ fontSize: 11, color: T6.color.muted, marginTop: 2 }}>{i === 2 ? 'добавь свои награды' : '4 приза внутри'}</div>
              </div>
              <Pill variant={i === 2 ? 'plumSoft' : 'plum'} size="sm">{p}</Pill>
            </div>
          ))}
        </div>
      </SpicyShell>
    </>
  );
}

function S_SpicyReveal() {
  return (
    <>
      <StatusBar />
      <AppHeader left={<div style={{ padding: 4 }}>{Icon.close(T6.color.plumInk)}</div>} title="" />
      <SpicyShell>
        <div style={{ paddingTop: 40, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <div style={{
            width: 130, height: 130, borderRadius: 32,
            background: `linear-gradient(135deg, ${T6.color.plum}, ${T6.color.magenta})`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 20px 50px -20px rgba(107,43,194,0.5)',
          }}>
            {Icon.heart('#fff', '#fff')}
          </div>
          <Pill variant="magenta" size="md" style={{ marginTop: 22 }}>28% шанс</Pill>
          <div style={{ fontSize: 28, fontWeight: 600, letterSpacing: -0.9, color: T6.color.plumInk, marginTop: 16 }}>Мягкий сюрприз</div>
          <div style={{ fontSize: 13, color: 'rgba(28,3,56,0.65)', marginTop: 6 }}>добавлено в приватные</div>
        </div>
        <div style={{ marginTop: 24, background: '#fff', border: `1px solid ${T6.color.hairline}`, borderRadius: 16, padding: 14, fontSize: 13, color: T6.color.plumInk, lineHeight: 1.5 }}>
          Эта награда видна только тебе и Маше. Не попадёт в общий магазин или историю.
        </div>
        <div style={{ position: 'absolute', bottom: 24, left: 20, right: 20, display: 'flex', flexDirection: 'column', gap: 10 }}>
          <Btn variant="accent" accent="plum" full>Активировать позже</Btn>
          <Btn variant="ghost" full>Открыть ещё</Btn>
        </div>
      </SpicyShell>
    </>
  );
}

function S_Privacy() {
  return (
    <>
      <StatusBar />
      <AppHeader left={<div style={{ padding: 4 }}>{Icon.back(T6.color.plumInk)}</div>} title="Приватность" />
      <SpicyShell>
        <div style={{ fontSize: 11, color: T6.color.muted, letterSpacing: 0.5, textTransform: 'uppercase', marginBottom: 8 }}>Видимость</div>
        <div style={{ background: '#fff', borderRadius: 18, border: `1px solid ${T6.color.hairline}`, overflow: 'hidden' }}>
          <Toggle title="Скрывать от общего магазина" on />
          <Toggle title="Нейтральный текст уведомлений" on />
          <Toggle title="Скрывать из истории транзакций" on />
          <Toggle title="Требовать Face ID при входе" />
        </div>
        <div style={{ fontSize: 11, color: T6.color.muted, letterSpacing: 0.5, textTransform: 'uppercase', marginTop: 20, marginBottom: 8 }}>Безопасность</div>
        <div style={{ background: '#fff', borderRadius: 18, border: `1px solid ${T6.color.hairline}`, overflow: 'hidden' }}>
          <RowLink title="Отозвать согласие" danger />
          <RowLink title="Удалить приватный контент" danger />
        </div>
      </SpicyShell>
    </>
  );
}

function Toggle({ title, on }) {
  return (
    <div style={{ padding: '14px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: `1px solid ${T6.color.hairline}` }}>
      <div style={{ fontSize: 13, fontWeight: 500, color: T6.color.plumInk }}>{title}</div>
      <div style={{ width: 40, height: 24, borderRadius: 999, background: on ? T6.color.plum : T6.color.hairlineStrong, padding: 2, display: 'flex', justifyContent: on ? 'flex-end' : 'flex-start' }}>
        <div style={{ width: 20, height: 20, borderRadius: 999, background: '#fff' }} />
      </div>
    </div>
  );
}

function RowLink({ title, danger }) {
  return (
    <div style={{ padding: '14px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: `1px solid ${T6.color.hairline}`, color: danger ? T6.color.danger : T6.color.plumInk }}>
      <div style={{ fontSize: 13, fontWeight: 500 }}>{title}</div>
      {Icon.chevron(danger ? T6.color.danger : T6.color.muted)}
    </div>
  );
}

Object.assign(window, {
  S_SpicyLocked, S_SpicyConsent, S_SpicyWaiting, S_SpicyHome, S_SpicyRewards,
  S_CreateSpicyReward, S_SpicyCases, S_SpicyReveal, S_Privacy,
  SpicyShell, PrivacyRow, ConsentCheck, SpicyTile, Toggle, RowLink,
});
