// BondGame — Profile + system states
const T7 = window.BG_TOKENS;

function S_PairProfile() {
  return (
    <>
      <StatusBar />
      <AppHeader left={<BondMark size={22} />} title="Пара" right={<div style={{ padding: 4 }}>{Icon.more(T7.color.ink)}</div>} />
      <Screen>
        <div style={{ paddingTop: 20, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: -10, position: 'relative' }}>
            <div style={{ width: 72, height: 72, borderRadius: 72, background: T7.color.lime, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28, fontWeight: 600 }}>А</div>
            <div style={{ width: 72, height: 72, borderRadius: 72, background: T7.color.ink, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28, fontWeight: 600, marginLeft: -14, border: '3px solid ' + T7.color.bg }}>М</div>
          </div>
          <div style={{ fontSize: 26, fontWeight: 600, letterSpacing: -0.8, marginTop: 14 }}>Артём & Маша</div>
          <div style={{ fontSize: 12, color: T7.color.muted, marginTop: 4 }}>в паре с марта · level 4</div>
        </div>
        <div style={{ marginTop: 20, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 }}>
          <Stat v="12" k="streak" />
          <Stat v="31" k="задач" />
          <Stat v="18" k="наград" />
        </div>
        <div style={{ marginTop: 14, background: T7.color.surface, border: `1px solid ${T7.color.hairline}`, borderRadius: 20, padding: 16 }}>
          <div style={{ fontSize: 12, fontWeight: 600, color: T7.color.muted, letterSpacing: 0.5, textTransform: 'uppercase', marginBottom: 10 }}>Progress · level 4 → 5</div>
          <Progress value={62} color={T7.color.ink} />
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8 }}>
            <div style={{ fontSize: 11, color: T7.color.muted }}>620 XP</div>
            <div style={{ fontSize: 11, color: T7.color.muted }}>1000 XP</div>
          </div>
        </div>
        <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 8 }}>
          <RowItem title="Профиль Артёма" meta="1 240 LC · 8 streak" />
          <RowItem title="Профиль Маши" meta="980 LC · 12 streak" />
          <RowItem title="Альбом" meta="6 моментов" />
          <RowItem title="Настройки пары" meta="таймзона, уведомления" />
        </div>
      </Screen>
      <BottomNav active="profile" />
    </>
  );
}

function Stat({ v, k }) {
  return (
    <div style={{ background: T7.color.surface, borderRadius: 16, padding: 14, border: `1px solid ${T7.color.hairline}`, textAlign: 'center' }}>
      <div style={{ fontSize: 22, fontWeight: 600, letterSpacing: -0.5 }}>{v}</div>
      <div style={{ fontSize: 11, color: T7.color.muted, marginTop: 2 }}>{k}</div>
    </div>
  );
}

function RowItem({ title, meta }) {
  return (
    <div style={{ background: T7.color.surface, border: `1px solid ${T7.color.hairline}`, borderRadius: 16, padding: '14px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div>
        <div style={{ fontSize: 14, fontWeight: 500 }}>{title}</div>
        <div style={{ fontSize: 11, color: T7.color.muted, marginTop: 2 }}>{meta}</div>
      </div>
      {Icon.chevron(T7.color.muted)}
    </div>
  );
}

function S_PartnerProfile() {
  return (
    <>
      <StatusBar />
      <AppHeader left={<div style={{ padding: 4 }}>{Icon.back()}</div>} title="Маша" right={<div style={{ padding: 4 }}>{Icon.more(T7.color.ink)}</div>} />
      <Screen>
        <div style={{ paddingTop: 20, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <BondFace size={80} />
          <div style={{ fontSize: 24, fontWeight: 600, letterSpacing: -0.7, marginTop: 14 }}>Маша</div>
          <div style={{ fontSize: 18, fontWeight: 600, color: T7.color.ink, marginTop: 4 }}>63 LC</div>
          <div style={{ fontSize: 11, color: T7.color.muted }}>кошелёк</div>
        </div>
        <div style={{ marginTop: 20, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          <Stat v="8" k="streak" />
          <Stat v="14" k="задач" />
        </div>
        <div style={{ marginTop: 14 }}>
          <div style={{ fontSize: 12, fontWeight: 600, color: T7.color.muted, marginBottom: 8, padding: '0 4px' }}>Недавно</div>
          <div style={{ background: T7.color.surface, borderRadius: 18, border: `1px solid ${T7.color.hairline}`, overflow: 'hidden' }}>
            <TaskRow title="Ужин при свечах" meta="+140 LC · сегодня" status="accepted" />
            <TaskRow title="Комплимент" meta="+30 LC · вчера" status="new" />
          </div>
        </div>
        <div style={{ position: 'absolute', bottom: 24, left: 20, right: 20 }}>
          <Btn variant="primary" full>Создать задачу</Btn>
        </div>
      </Screen>
    </>
  );
}

function S_Album() {
  return (
    <>
      <StatusBar />
      <AppHeader left={<div style={{ padding: 4 }}>{Icon.back()}</div>} title="Альбом" />
      <Screen>
        <div style={{ display: 'flex', gap: 6, marginBottom: 12 }}>
          <Pill variant="ink">Все</Pill><Pill variant="ghost">Моменты</Pill><Pill variant="ghost">Награды</Pill>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} style={{ aspectRatio: '1/1.2', borderRadius: 16, background: i % 2 ? T7.color.limeSoft : T7.color.bgDeep, padding: 12, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
              <div style={{ fontSize: 11, color: T7.color.muted }}>12 дек</div>
              <div style={{ fontSize: 13, fontWeight: 600, marginTop: 2 }}>{['Streak x10', 'Ужин', 'Свидание', 'Фильм', 'Завтрак', 'Массаж'][i]}</div>
            </div>
          ))}
        </div>
      </Screen>
      <BottomNav active="profile" />
    </>
  );
}

function S_Settings() {
  return (
    <>
      <StatusBar />
      <AppHeader left={<div style={{ padding: 4 }}>{Icon.back()}</div>} title="Настройки" />
      <Screen>
        <div style={{ fontSize: 11, color: T7.color.muted, letterSpacing: 0.5, textTransform: 'uppercase', marginBottom: 8 }}>Пара</div>
        <div style={{ background: T7.color.surface, borderRadius: 18, border: `1px solid ${T7.color.hairline}`, overflow: 'hidden', marginBottom: 16 }}>
          <RowSetting title="Имя пары" v="Артём & Маша" />
          <RowSetting title="Таймзона" v="Europe/Belgrade" />
          <RowSetting title="Push" v="оба" />
        </div>
        <div style={{ fontSize: 11, color: T7.color.muted, letterSpacing: 0.5, textTransform: 'uppercase', marginBottom: 8 }}>Приватное</div>
        <div style={{ background: T7.color.surface, borderRadius: 18, border: `1px solid ${T7.color.hairline}`, overflow: 'hidden', marginBottom: 16 }}>
          <RowSetting title="Spicy mode" v="выключено" />
          <RowSetting title="Face ID для private" v="—" />
        </div>
        <div style={{ fontSize: 11, color: T7.color.muted, letterSpacing: 0.5, textTransform: 'uppercase', marginBottom: 8 }}>Аккаунт</div>
        <div style={{ background: T7.color.surface, borderRadius: 18, border: `1px solid ${T7.color.hairline}`, overflow: 'hidden' }}>
          <RowSetting title="Сменить пароль" v="" />
          <RowSetting title="Выйти" v="" danger />
        </div>
      </Screen>
      <BottomNav active="profile" />
    </>
  );
}

function RowSetting({ title, v, danger }) {
  return (
    <div style={{ padding: '14px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: `1px solid ${T7.color.hairline}`, color: danger ? T7.color.danger : T7.color.ink }}>
      <div style={{ fontSize: 13, fontWeight: 500 }}>{title}</div>
      <div style={{ fontSize: 12, color: danger ? T7.color.danger : T7.color.muted, display: 'flex', alignItems: 'center', gap: 4 }}>
        {v}{!danger && Icon.chevron(T7.color.muted)}
      </div>
    </div>
  );
}

function S_Notifications() {
  return (
    <>
      <StatusBar />
      <AppHeader left={<div style={{ padding: 4 }}>{Icon.back()}</div>} title="Уведомления" />
      <Screen>
        <div style={{ background: T7.color.surface, borderRadius: 18, border: `1px solid ${T7.color.hairline}`, overflow: 'hidden' }}>
          <Toggle title="Новая задача" on />
          <Toggle title="Ответ на торг" on />
          <Toggle title="Streak под риском" on />
          <Toggle title="Награда активирована" on />
          <Toggle title="Приватные обновления (нейтрально)" on />
        </div>
        <div style={{ marginTop: 14, background: T7.color.surfaceAlt, borderRadius: 14, padding: 12, fontSize: 12, color: T7.color.muted, lineHeight: 1.5 }}>
          Spicy-уведомления всегда идут нейтральным текстом: «У вас есть приватное обновление».
        </div>
      </Screen>
    </>
  );
}

function S_Empty() {
  return (
    <>
      <StatusBar />
      <AppHeader left={<BondMark size={22} />} title="Задачи" />
      <Screen>
        <div style={{ paddingTop: 80, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <div style={{ width: 96, height: 96, borderRadius: 28, background: T7.color.limeSoft, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <BondMark size={40} color={T7.color.ink} />
          </div>
          <div style={{ fontSize: 24, fontWeight: 600, letterSpacing: -0.8, marginTop: 22 }}>Задач нет</div>
          <div style={{ fontSize: 13, color: T7.color.muted, marginTop: 8, maxWidth: 240, lineHeight: 1.45 }}>
            Отправь Маше первую — от 20 LC
          </div>
        </div>
        <div style={{ position: 'absolute', bottom: 80, left: 20, right: 20 }}>
          <Btn variant="primary" full>Создать задачу</Btn>
        </div>
      </Screen>
      <BottomNav active="tasks" />
    </>
  );
}

function S_Offline() {
  return (
    <>
      <StatusBar />
      <AppHeader left={<BondMark size={22} />} title="" right={<Pill variant="default" size="sm">offline</Pill>} />
      <Screen>
        <div style={{ paddingTop: 80, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <div style={{ width: 88, height: 88, borderRadius: 28, background: T7.color.bgDeep, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: 36, height: 2, background: T7.color.muted, transform: 'rotate(-45deg)', position: 'absolute' }} />
            {Icon.home(T7.color.muted)}
          </div>
          <div style={{ fontSize: 22, fontWeight: 600, letterSpacing: -0.7, marginTop: 22 }}>Нет сети</div>
          <div style={{ fontSize: 13, color: T7.color.muted, marginTop: 8, maxWidth: 260, lineHeight: 1.45 }}>
            Доступны кешированные задачи и черновики. Отправка и кейсы — после подключения.
          </div>
        </div>
        <div style={{ position: 'absolute', bottom: 24, left: 20, right: 20 }}>
          <Btn variant="ghost" full>Повторить</Btn>
        </div>
      </Screen>
    </>
  );
}

function S_Loading() {
  return (
    <>
      <StatusBar />
      <AppHeader left={<BondMark size={22} />} title="Загрузка" />
      <Screen>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ height: 120, borderRadius: 24, background: T7.color.bgDeep, opacity: 0.6 }} />
          <div style={{ height: 80, borderRadius: 20, background: T7.color.bgDeep, opacity: 0.5 }} />
          <div style={{ height: 56, borderRadius: 16, background: T7.color.bgDeep, opacity: 0.45 }} />
          <div style={{ height: 56, borderRadius: 16, background: T7.color.bgDeep, opacity: 0.4 }} />
          <div style={{ height: 56, borderRadius: 16, background: T7.color.bgDeep, opacity: 0.35 }} />
        </div>
      </Screen>
      <BottomNav active="home" />
    </>
  );
}

function S_Error() {
  return (
    <>
      <StatusBar />
      <AppHeader left={<BondMark size={22} />} />
      <Screen>
        <div style={{ paddingTop: 80, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <div style={{ width: 88, height: 88, borderRadius: 28, background: '#FFE8E3', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {Icon.close(T7.color.danger)}
          </div>
          <div style={{ fontSize: 22, fontWeight: 600, letterSpacing: -0.7, marginTop: 22 }}>Что-то пошло не так</div>
          <div style={{ fontSize: 13, color: T7.color.muted, marginTop: 8, maxWidth: 260, lineHeight: 1.45 }}>
            Мы уже знаем. Попробуй ещё раз — состояние задачи сохранено на сервере.
          </div>
        </div>
        <div style={{ position: 'absolute', bottom: 24, left: 20, right: 20, display: 'flex', flexDirection: 'column', gap: 10 }}>
          <Btn variant="primary" full>Повторить</Btn>
          <Btn variant="ghost" full>В поддержку</Btn>
        </div>
      </Screen>
    </>
  );
}

Object.assign(window, {
  S_PairProfile, S_PartnerProfile, S_Album, S_Settings, S_Notifications,
  S_Empty, S_Offline, S_Loading, S_Error, Stat, RowItem, RowSetting,
});
