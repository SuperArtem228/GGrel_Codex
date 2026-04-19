// BondGame — Shop, rewards, cases screens
const T5 = window.BG_TOKENS;

// Reward image placeholder — subtle diagonal stripe, no illustration
function RewardArt({ label = 'reward', tint = T5.color.limeSoft, h = 120, size = 'md' }) {
  const stripe = `repeating-linear-gradient(45deg, ${tint} 0 14px, ${T5.color.surface} 14px 28px)`;
  return (
    <div style={{
      height: h, borderRadius: 14, background: stripe,
      border: `1px solid ${T5.color.hairline}`,
      display: 'flex', alignItems: 'flex-end', padding: 10,
    }}>
      <div style={{ fontFamily: T5.font.mono, fontSize: 10, color: T5.color.muted, letterSpacing: 0.5 }}>{label}</div>
    </div>
  );
}

function S_ShopHub() {
  return (
    <>
      <StatusBar />
      <AppHeader left={<BondMark size={22} />} title="Магазин" sub="награды и кейсы" />
      <Screen>
        <div style={{ display: 'flex', gap: 6, marginBottom: 14 }}>
          {['Всё', 'Награды', 'Кейсы', 'Для Маши'].map((t, i) => (
            <Pill key={t} variant={i === 0 ? 'ink' : 'ghost'}>{t}</Pill>
          ))}
        </div>

        <div style={{ background: T5.color.ink, color: '#fff', borderRadius: 24, padding: 20, position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', right: -30, top: -30, width: 140, height: 140, borderRadius: 140, background: T5.color.lime, filter: 'blur(40px)', opacity: 0.35 }} />
          <div style={{ position: 'relative' }}>
            <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.55)', letterSpacing: 1, textTransform: 'uppercase' }}>Намекнуть на подарок</div>
            <div style={{ fontSize: 20, fontWeight: 600, letterSpacing: -0.3, marginTop: 6, maxWidth: 220 }}>Отправь Маше wishlist из 4 наград</div>
            <div style={{ marginTop: 14 }}>
              <Btn variant="accent" size="sm">Собрать список</Btn>
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginTop: 14 }}>
          <div style={{ background: T5.color.surface, borderRadius: 18, padding: 16, border: `1px solid ${T5.color.hairline}` }}>
            <div style={{ fontSize: 11, color: T5.color.muted, letterSpacing: 0.5, textTransform: 'uppercase' }}>Желания</div>
            <div style={{ fontSize: 22, fontWeight: 600, marginTop: 4, letterSpacing: -0.4 }}>4</div>
            <div style={{ fontSize: 11, color: T5.color.muted, marginTop: 2 }}>в wishlist</div>
          </div>
          <div style={{ background: T5.color.surface, borderRadius: 18, padding: 16, border: `1px solid ${T5.color.hairline}` }}>
            <div style={{ fontSize: 11, color: T5.color.muted, letterSpacing: 0.5, textTransform: 'uppercase' }}>Готовые кейсы</div>
            <div style={{ fontSize: 22, fontWeight: 600, marginTop: 4, letterSpacing: -0.4 }}>12</div>
            <div style={{ fontSize: 11, color: T5.color.muted, marginTop: 2 }}>шаблонов</div>
          </div>
        </div>

        <div style={{ marginTop: 14 }}>
          <Btn variant="primary" full>Открыть кейсы</Btn>
        </div>
      </Screen>
      <BottomNav active="shop" />
    </>
  );
}

function S_Rewards() {
  return (
    <>
      <StatusBar />
      <AppHeader left={<div style={{ padding: 4 }}>{Icon.back()}</div>} title="Награды" sub="для Маши · 42" />
      <Screen>
        <div style={{ display: 'flex', gap: 6, marginBottom: 14 }}>
          {['забота', 'романтика', 'дом', 'свидание'].map((t, i) => (
            <Pill key={t} variant={i === 1 ? 'ink' : 'ghost'} size="sm">{t}</Pill>
          ))}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {[
            ['Массаж 20 минут', 80, T5.color.limeSoft],
            ['Завтрак в постель', 20, T5.color.bgDeep],
            ['Выбрать фильм', 40, T5.color.limeSoft],
            ['Свидание дома', 160, T5.color.bgDeep],
            ['Ресторан на двоих', 400, T5.color.limeSoft],
          ].map(([t, lc, c], i) => (
            <div key={i} style={{ background: T5.color.surface, borderRadius: 18, padding: 12, border: `1px solid ${T5.color.hairline}`, display: 'flex', gap: 12, alignItems: 'center' }}>
              <div style={{ width: 56, height: 56, borderRadius: 14, background: c, flexShrink: 0 }} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 14, fontWeight: 600, letterSpacing: -0.2 }}>{t}</div>
                <div style={{ fontSize: 11, color: T5.color.muted, marginTop: 2 }}>для Маши · action</div>
              </div>
              <Pill variant="default" size="sm">{lc} LC</Pill>
            </div>
          ))}
        </div>
      </Screen>
      <BottomNav active="shop" />
    </>
  );
}

function S_RewardDetail() {
  return (
    <>
      <StatusBar />
      <AppHeader left={<div style={{ padding: 4 }}>{Icon.back()}</div>} title="" right={<div style={{ padding: 4 }}>{Icon.more(T5.color.ink)}</div>} />
      <Screen pad={0}>
        <div style={{ background: T5.color.limeSoft, height: 220, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'repeating-linear-gradient(135deg, transparent 0 20px, rgba(26,31,0,0.04) 20px 40px)' }} />
          <div style={{ fontFamily: T5.font.mono, fontSize: 10, color: T5.color.muted, position: 'absolute', bottom: 16, left: 16 }}>reward · массаж</div>
        </div>
        <div style={{ padding: 20 }}>
          <div style={{ fontSize: 11, fontWeight: 500, color: T5.color.muted, letterSpacing: 1, textTransform: 'uppercase' }}>Action · забота</div>
          <div style={{ fontSize: 30, fontWeight: 600, letterSpacing: -1, marginTop: 6 }}>Массаж</div>
          <div style={{ fontSize: 14, color: T5.color.muted, marginTop: 6, lineHeight: 1.5 }}>
            20 минут, спина и шея, с маслом. Партнёр активирует, когда захочет.
          </div>
          <div style={{ marginTop: 20, background: T5.color.ink, color: '#fff', borderRadius: 20, padding: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.55)', letterSpacing: 1, textTransform: 'uppercase' }}>Цена</div>
              <div style={{ fontSize: 22, fontWeight: 600, letterSpacing: -0.4, marginTop: 4 }}>80 LC</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.55)', letterSpacing: 1, textTransform: 'uppercase' }}>Твой баланс</div>
              <div style={{ fontSize: 16, fontWeight: 500, marginTop: 4 }}>1 240 LC</div>
            </div>
          </div>
          <div style={{ marginTop: 14, background: T5.color.surfaceAlt, borderRadius: 14, padding: 12, fontSize: 12, color: T5.color.muted, lineHeight: 1.5 }}>
            Награда попадёт в активные у Маши. Она решит, когда применить.
          </div>
        </div>
        <div style={{ position: 'absolute', bottom: 20, left: 20, right: 20 }}>
          <Btn variant="primary" full>Купить для Маши · 80 LC</Btn>
        </div>
      </Screen>
    </>
  );
}

function S_CasesEntry() {
  return (
    <>
      <StatusBar />
      <AppHeader left={<div style={{ padding: 4 }}>{Icon.back()}</div>} title="Кейсы" />
      <Screen>
        <div style={{ display: 'flex', gap: 6, marginBottom: 14 }}>
          <Pill variant="ink">Готовые</Pill>
          <Pill variant="ghost">Мои</Pill>
          <Pill variant="ghost">Создать</Pill>
        </div>
        <div style={{ background: T5.color.lime, borderRadius: 24, padding: 20, marginBottom: 14, position: 'relative', overflow: 'hidden' }}>
          <div style={{ fontSize: 11, color: T5.color.limeInk, opacity: 0.7, letterSpacing: 1, textTransform: 'uppercase' }}>Как это работает</div>
          <div style={{ fontSize: 20, fontWeight: 600, color: T5.color.limeInk, letterSpacing: -0.3, marginTop: 6, maxWidth: 240 }}>
            Внутри — реальные награды из магазина
          </div>
          <div style={{ fontSize: 12, color: T5.color.limeInk, opacity: 0.7, marginTop: 8, lineHeight: 1.45 }}>
            Чем дороже награда, тем меньше шанс. Никакого косметического лута.
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {[
            ['Cozy Case', '80 LC', 'Массаж, завтрак, фильм', T5.color.limeSoft],
            ['Date Case', '160 LC', 'Свидания и рестораны', T5.color.bgDeep],
            ['Home Case', '60 LC', 'Маленькие сюрпризы', T5.color.limeSoft],
          ].map(([n, p, m, c], i) => (
            <div key={i} style={{ background: T5.color.surface, borderRadius: 20, padding: 14, border: `1px solid ${T5.color.hairline}`, display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 56, height: 56, borderRadius: 14, background: c, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <BondMark size={24} color={T5.color.ink} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 14, fontWeight: 600, letterSpacing: -0.2 }}>{n}</div>
                <div style={{ fontSize: 11, color: T5.color.muted, marginTop: 2 }}>{m}</div>
              </div>
              <Pill variant="ink" size="sm">{p}</Pill>
            </div>
          ))}
        </div>
      </Screen>
      <BottomNav active="shop" />
    </>
  );
}

function S_CaseBuilder() {
  return (
    <>
      <StatusBar />
      <AppHeader left={<div style={{ padding: 4 }}>{Icon.back()}</div>} title="Свой кейс" sub="шаг 1 из 3 · название" />
      <Screen>
        <div style={{ marginTop: 6 }}>
          <Progress value={33} color={T5.color.ink} height={4} />
        </div>
        <div style={{ marginTop: 24 }}>
          <Field label="Название кейса" value="Машин вечер" />
        </div>
        <div style={{ marginTop: 14 }}>
          <Field label="Описание" value="Мягкий вечер для двоих" />
        </div>
        <div style={{ marginTop: 14 }}>
          <div style={{ fontSize: 11, fontWeight: 500, color: T5.color.muted, letterSpacing: 0.4, textTransform: 'uppercase', marginBottom: 8 }}>Получатель</div>
          <div style={{ display: 'flex', gap: 6 }}>
            <Pill variant="ink">Маша</Pill>
            <Pill variant="ghost">Артём</Pill>
            <Pill variant="ghost">Оба</Pill>
          </div>
        </div>
        <div style={{ marginTop: 20, background: T5.color.surfaceAlt, borderRadius: 14, padding: 12, fontSize: 12, color: T5.color.muted, lineHeight: 1.5 }}>
          Дальше — выбор 3-8 наград из магазина и назначение шансов.
        </div>
        <div style={{ position: 'absolute', bottom: 24, left: 20, right: 20 }}>
          <Btn variant="primary" full>Добавить награды</Btn>
        </div>
      </Screen>
    </>
  );
}

function S_CaseAddRewards() {
  return (
    <>
      <StatusBar />
      <AppHeader left={<div style={{ padding: 4 }}>{Icon.back()}</div>} title="Призы кейса" sub="3 из 8" />
      <Screen>
        <Progress value={66} color={T5.color.ink} height={4} />
        <div style={{ marginTop: 18, display: 'flex', flexDirection: 'column', gap: 10 }}>
          {[
            ['Выбрать фильм', 40, true],
            ['Массаж', 80, true],
            ['Свидание дома', 160, true],
            ['Ресторан', 400, false],
            ['Завтрак в постель', 20, false],
          ].map(([t, lc, on], i) => (
            <div key={i} style={{
              background: on ? T5.color.limeSoft : T5.color.surface,
              border: `1px solid ${on ? 'transparent' : T5.color.hairline}`,
              borderRadius: 16, padding: 12, display: 'flex', alignItems: 'center', gap: 12,
            }}>
              <div style={{ width: 22, height: 22, borderRadius: 6, background: on ? T5.color.limeInk : 'transparent', border: `1.5px solid ${on ? T5.color.limeInk : T5.color.hairlineStrong}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {on && Icon.check(T5.color.lime)}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 600 }}>{t}</div>
                <div style={{ fontSize: 11, color: T5.color.muted, marginTop: 2 }}>action · для Маши</div>
              </div>
              <Pill variant={on ? 'ink' : 'default'} size="sm">{lc} LC</Pill>
            </div>
          ))}
        </div>
        <div style={{ position: 'absolute', bottom: 24, left: 20, right: 20 }}>
          <Btn variant="primary" full>Дальше · шансы</Btn>
        </div>
      </Screen>
    </>
  );
}

function S_CaseChances() {
  return (
    <>
      <StatusBar />
      <AppHeader left={<div style={{ padding: 4 }}>{Icon.back()}</div>} title="Шансы" sub="сумма 100%" />
      <Screen>
        <div style={{ marginTop: 6 }}><Progress value={100} color={T5.color.ink} height={4} /></div>
        <div style={{ marginTop: 18, display: 'flex', flexDirection: 'column', gap: 12 }}>
          {[
            ['Выбрать фильм', 40, 45, T5.color.lime],
            ['Массаж', 80, 28, T5.color.limeDeep],
            ['Свидание дома', 160, 18, T5.color.ink],
            ['Ресторан', 400, 9, T5.color.muted],
          ].map(([t, lc, pct, c], i) => (
            <div key={i} style={{ background: T5.color.surface, borderRadius: 16, padding: 14, border: `1px solid ${T5.color.hairline}` }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, letterSpacing: -0.2 }}>{t}</div>
                  <div style={{ fontSize: 11, color: T5.color.muted, marginTop: 1 }}>{lc} LC · цена награды</div>
                </div>
                <div style={{ fontSize: 20, fontWeight: 600, letterSpacing: -0.4 }}>{pct}%</div>
              </div>
              <div style={{ marginTop: 10 }}>
                <Progress value={pct} color={c} height={6} />
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 14, background: T5.color.limeSoft, borderRadius: 14, padding: 12, fontSize: 12, color: T5.color.limeInk, lineHeight: 1.45 }}>
          Чем дороже награда — тем ниже шанс. Система подсказывает баланс.
        </div>
      </Screen>
    </>
  );
}

function S_CasePrice() {
  return (
    <>
      <StatusBar />
      <AppHeader left={<div style={{ padding: 4 }}>{Icon.back()}</div>} title="Цена кейса" />
      <Screen>
        <div style={{ marginTop: 24, textAlign: 'center' }}>
          <div style={{ fontSize: 11, color: T5.color.muted, letterSpacing: 1, textTransform: 'uppercase' }}>Стоимость открытия</div>
          <div style={{ fontSize: 56, fontWeight: 600, letterSpacing: -2, marginTop: 6 }}>120 <span style={{ fontSize: 22, color: T5.color.muted }}>LC</span></div>
        </div>
        <div style={{ marginTop: 24 }}>
          <Progress value={60} color={T5.color.ink} showCap />
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 6 }}>
            <div style={{ fontSize: 10, color: T5.color.muted }}>40</div>
            <div style={{ fontSize: 10, color: T5.color.muted }}>400</div>
          </div>
        </div>
        <div style={{ marginTop: 20, display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div style={{ background: T5.color.surface, borderRadius: 16, padding: '14px 16px', border: `1px solid ${T5.color.hairline}`, display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ fontSize: 13, color: T5.color.muted }}>Ожидаемая ценность</div>
            <div style={{ fontSize: 14, fontWeight: 600 }}>≈ 103 LC</div>
          </div>
          <div style={{ background: T5.color.surface, borderRadius: 16, padding: '14px 16px', border: `1px solid ${T5.color.hairline}`, display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ fontSize: 13, color: T5.color.muted }}>Маржа баланса</div>
            <div style={{ fontSize: 14, fontWeight: 600 }}>+17 LC</div>
          </div>
        </div>
        <div style={{ position: 'absolute', bottom: 24, left: 20, right: 20 }}>
          <Btn variant="primary" full>Сохранить</Btn>
        </div>
      </Screen>
    </>
  );
}

function S_CasePreview() {
  return (
    <>
      <StatusBar />
      <AppHeader left={<div style={{ padding: 4 }}>{Icon.back()}</div>} title="Машин вечер" sub="превью кейса" />
      <Screen>
        <div style={{ background: T5.color.ink, color: '#fff', borderRadius: 24, padding: 20, position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', right: -20, top: -20, width: 120, height: 120, borderRadius: 120, background: T5.color.lime, filter: 'blur(40px)', opacity: 0.35 }} />
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{ width: 56, height: 56, borderRadius: 16, background: T5.color.lime, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><BondMark size={24} color={T5.color.ink} /></div>
            <div style={{ flex: 1 }}>
              <Pill variant="lime" size="sm">4 приза внутри</Pill>
              <div style={{ fontSize: 18, fontWeight: 600, marginTop: 6, letterSpacing: -0.2 }}>120 LC · открыть</div>
            </div>
          </div>
        </div>
        <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 8 }}>
          {[['Выбрать фильм', '45%', T5.color.lime], ['Массаж', '28%', T5.color.limeDeep], ['Свидание дома', '18%', T5.color.ink], ['Ресторан', '9%', T5.color.muted]].map(([t, p, c], i) => (
            <div key={i} style={{ background: T5.color.surface, border: `1px solid ${T5.color.hairline}`, borderRadius: 14, padding: '12px 14px', display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 10, height: 10, borderRadius: 999, background: c }} />
              <div style={{ flex: 1, fontSize: 13, fontWeight: 500 }}>{t}</div>
              <div style={{ fontSize: 13, fontWeight: 600, color: T5.color.ink }}>{p}</div>
            </div>
          ))}
        </div>
        <div style={{ position: 'absolute', bottom: 24, left: 20, right: 20 }}>
          <Btn variant="primary" full>Опубликовать</Btn>
        </div>
      </Screen>
    </>
  );
}

function S_CaseSuspense() {
  return (
    <>
      <StatusBar />
      <AppHeader left={<div style={{ padding: 4 }}>{Icon.close(T5.color.ink)}</div>} title="" />
      <Screen>
        <SoftBlob top={60} right={-60} size={260} opacity={0.4} />
        <SoftBlob top={180} left={-60} size={200} opacity={0.3} />
        <div style={{ paddingTop: 48, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <div style={{
            width: 170, height: 170, borderRadius: 40, background: T5.color.lime,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 20px 50px -20px rgba(0,0,0,0.3)',
            transform: 'rotate(-4deg)',
          }}>
            <BondMark size={70} color={T5.color.ink} />
          </div>
          <div style={{ fontSize: 32, fontWeight: 600, letterSpacing: -1.1, marginTop: 36 }}>Открываем</div>
          <div style={{ fontSize: 13, color: T5.color.muted, marginTop: 8, maxWidth: 220, lineHeight: 1.45 }}>
            Шанс считается по цене награды — чем дороже, тем реже
          </div>
        </div>
        <div style={{ marginTop: 28, display: 'flex', flexDirection: 'column', gap: 8 }}>
          <div style={{ background: T5.color.surface, border: `1px solid ${T5.color.hairline}`, borderRadius: 14, padding: 12, display: 'flex', justifyContent: 'space-between', fontSize: 13 }}>
            <span>Может выпасть ресторан</span><span style={{ color: T5.color.muted }}>9%</span>
          </div>
          <div style={{ background: T5.color.surface, border: `1px solid ${T5.color.hairline}`, borderRadius: 14, padding: 12, display: 'flex', justifyContent: 'space-between', fontSize: 13 }}>
            <span>Вероятнее всего — фильм</span><span style={{ color: T5.color.muted }}>45%</span>
          </div>
        </div>
        <div style={{ position: 'absolute', bottom: 24, left: 20, right: 20 }}>
          <Btn variant="ghost" full>Пропустить анимацию</Btn>
        </div>
      </Screen>
    </>
  );
}

function S_CaseReveal() {
  return (
    <>
      <StatusBar />
      <AppHeader left={<div style={{ padding: 4 }}>{Icon.close(T5.color.ink)}</div>} title="" />
      <Screen>
        <SoftBlob top={0} right={-60} size={220} opacity={0.5} />
        <div style={{ paddingTop: 36, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <div style={{
            width: 130, height: 130, borderRadius: 32, background: T5.color.limeSoft,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            border: `1px solid rgba(26,31,0,0.1)`,
          }}>
            <BondMark size={54} color={T5.color.ink} />
          </div>
          <Pill variant="lime" size="md" style={{ marginTop: 20 }} icon={Icon.spark(T5.color.limeInk)}>28% шанс</Pill>
          <div style={{ fontSize: 30, fontWeight: 600, letterSpacing: -1, marginTop: 16 }}>Массаж 20 минут</div>
          <div style={{ fontSize: 13, color: T5.color.muted, marginTop: 6 }}>награда добавлена Маше</div>
        </div>
        <div style={{ marginTop: 28, background: T5.color.surface, border: `1px solid ${T5.color.hairline}`, borderRadius: 16, padding: 14, fontSize: 13, color: T5.color.ink2, lineHeight: 1.5 }}>
          Маша активирует награду, когда захочет. Ты получишь уведомление.
        </div>
        <div style={{ position: 'absolute', bottom: 24, left: 20, right: 20, display: 'flex', flexDirection: 'column', gap: 10 }}>
          <Btn variant="primary" full>Активировать позже</Btn>
          <Btn variant="ghost" full>Открыть ещё</Btn>
        </div>
      </Screen>
    </>
  );
}

Object.assign(window, {
  S_ShopHub, S_Rewards, S_RewardDetail, S_CasesEntry, S_CaseBuilder,
  S_CaseAddRewards, S_CaseChances, S_CasePrice, S_CasePreview,
  S_CaseSuspense, S_CaseReveal, RewardArt,
});
