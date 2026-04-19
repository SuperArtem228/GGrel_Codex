// BondGame — Tasks lifecycle screens
const T3 = window.BG_TOKENS;

// ─── Tasks inbox
function S_TasksInbox() {
  return (
    <>
      <StatusBar />
      <AppHeader left={<BondMark size={22} />} title="Задачи" right={<div style={{ padding: 4 }}>{Icon.more(T3.color.ink)}</div>} />
      <Screen>
        <div style={{ display: 'flex', gap: 6, marginBottom: 14 }}>
          {['Входящие', 'Исходящие', 'Биржа', 'Архив'].map((t, i) => (
            <Pill key={t} variant={i === 0 ? 'ink' : 'ghost'} size="md">{t}</Pill>
          ))}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {[
            { t: 'Купить вкусное', f: 'Маша', lc: 40, d: 'сегодня', s: 'new' },
            { t: 'Мини-свидание дома', f: 'Маша', lc: 120, d: 'завтра', s: 'bargain', bargain: true },
            { t: 'Прижимашки утром', f: 'Маша', lc: 60, d: 'принято', s: 'accepted' },
          ].map((x, i) => (
            <div key={i} style={{ background: T3.color.surface, borderRadius: 20, padding: 16, border: `1px solid ${T3.color.hairline}` }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 10 }}>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 11, color: T3.color.muted, marginBottom: 2 }}>От {x.f} · {x.d}</div>
                  <div style={{ fontSize: 16, fontWeight: 600, color: T3.color.ink, letterSpacing: -0.2 }}>{x.t}</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: 18, fontWeight: 600, color: T3.color.ink, letterSpacing: -0.4 }}>{x.lc}</div>
                  <div style={{ fontSize: 10, color: T3.color.muted, letterSpacing: 0.5 }}>LC</div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 6, marginTop: 12 }}>
                {x.s === 'new' && <><Pill variant="lime" size="sm" icon={Icon.spark(T3.color.limeInk)}>Новое</Pill><Pill variant="ghost" size="sm">Торг ok</Pill></>}
                {x.s === 'bargain' && <><Pill variant="default" size="sm">Торг · 2 раунда</Pill></>}
                {x.s === 'accepted' && <><Pill variant="ink" size="sm">Принято</Pill><Pill variant="ghost" size="sm">дедлайн 2 дня</Pill></>}
              </div>
            </div>
          ))}
        </div>
        <div style={{
          position: 'absolute', bottom: 14, right: 14,
          width: 54, height: 54, borderRadius: 54, background: T3.color.ink,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 10px 30px -10px rgba(0,0,0,0.4)',
        }}>{Icon.plus('#fff')}</div>
      </Screen>
      <BottomNav active="tasks" />
    </>
  );
}

// ─── Create task
function S_CreateTask() {
  return (
    <>
      <StatusBar />
      <AppHeader left={<div style={{ padding: 4 }}>{Icon.close(T3.color.ink)}</div>} title="Новая задача" sub="для Маши" />
      <Screen>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <Field label="Название" value="Приготовить ужин" />
          <Field label="Описание" value="Свидание, еда, без телефонов" />
          <div>
            <div style={{ fontSize: 11, fontWeight: 500, color: T3.color.muted, letterSpacing: 0.4, textTransform: 'uppercase', marginBottom: 8 }}>Категория</div>
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
              {['забота', 'романтика', 'быт', 'сюрприз'].map((c, i) => (
                <Pill key={c} variant={i === 1 ? 'ink' : 'default'} size="md">{c}</Pill>
              ))}
            </div>
          </div>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
              <div style={{ fontSize: 11, fontWeight: 500, color: T3.color.muted, letterSpacing: 0.4, textTransform: 'uppercase' }}>Цена</div>
              <div style={{ fontSize: 13, fontWeight: 600, color: T3.color.ink }}>120 LC</div>
            </div>
            <Progress value={40} color={T3.color.ink} showCap />
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 6 }}>
              <div style={{ fontSize: 10, color: T3.color.muted }}>20</div>
              <div style={{ fontSize: 10, color: T3.color.muted }}>500</div>
            </div>
          </div>
          <div>
            <div style={{ fontSize: 11, fontWeight: 500, color: T3.color.muted, letterSpacing: 0.4, textTransform: 'uppercase', marginBottom: 8 }}>Дедлайн</div>
            <div style={{ display: 'flex', gap: 6 }}>
              {['Сегодня', 'Завтра', 'Выходные', '+7 дней'].map((c, i) => (
                <Pill key={c} variant={i === 1 ? 'ink' : 'default'} size="md">{c}</Pill>
              ))}
            </div>
          </div>
          <div style={{ background: T3.color.surface, borderRadius: 16, padding: '14px 16px', border: `1px solid ${T3.color.hairline}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: 14, fontWeight: 500, color: T3.color.ink }}>Торг разрешён</div>
              <div style={{ fontSize: 11, color: T3.color.muted, marginTop: 2 }}>Максимум +150% от цены</div>
            </div>
            <div style={{ width: 44, height: 26, borderRadius: 999, background: T3.color.ink, padding: 2, display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
              <div style={{ width: 22, height: 22, borderRadius: 999, background: '#fff' }} />
            </div>
          </div>
        </div>
        <div style={{ position: 'absolute', bottom: 24, left: 20, right: 20 }}>
          <div style={{ fontSize: 11, color: T3.color.muted, textAlign: 'center', marginBottom: 10 }}>120 LC зарезервируется из твоего кошелька до подтверждения</div>
          <Btn variant="primary" full>Отправить задачу</Btn>
        </div>
      </Screen>
    </>
  );
}

// ─── Task preview (proposed)
function S_TaskProposed() {
  return (
    <>
      <StatusBar />
      <AppHeader left={<div style={{ padding: 4 }}>{Icon.back()}</div>} title="Задача" sub="Артём · ждём ответа" />
      <Screen>
        <div style={{ background: T3.color.surface, borderRadius: 24, padding: 20, border: `1px solid ${T3.color.hairline}` }}>
          <Pill variant="lime" size="sm" icon={Icon.spark(T3.color.limeInk)}>Новая задача</Pill>
          <div style={{ fontSize: 28, fontWeight: 600, letterSpacing: -0.8, marginTop: 14, color: T3.color.ink }}>Мини-свидание дома</div>
          <div style={{ fontSize: 14, color: T3.color.muted, marginTop: 8, lineHeight: 1.5 }}>Свидание, еда, без телефонов. Дедлайн завтра до 22:00.</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginTop: 18 }}>
            <div style={{ background: T3.color.bg, borderRadius: 14, padding: 12 }}>
              <div style={{ fontSize: 10, color: T3.color.muted, letterSpacing: 0.5, textTransform: 'uppercase' }}>Награда</div>
              <div style={{ fontSize: 18, fontWeight: 600, marginTop: 2 }}>120 LC</div>
            </div>
            <div style={{ background: T3.color.bg, borderRadius: 14, padding: 12 }}>
              <div style={{ fontSize: 10, color: T3.color.muted, letterSpacing: 0.5, textTransform: 'uppercase' }}>Дедлайн</div>
              <div style={{ fontSize: 18, fontWeight: 600, marginTop: 2 }}>Завтра</div>
            </div>
          </div>
          <div style={{ marginTop: 14, padding: '10px 12px', background: T3.color.limeSoft, borderRadius: 12, fontSize: 12, color: T3.color.limeInk, fontWeight: 500 }}>
            +30 LC бонус за скорость · +20 LC за качество
          </div>
        </div>
        <div style={{ position: 'absolute', bottom: 24, left: 20, right: 20, display: 'flex', flexDirection: 'column', gap: 10 }}>
          <Btn variant="primary" full>Принять</Btn>
          <div style={{ display: 'flex', gap: 10 }}>
            <Btn variant="ghost" style={{ flex: 1 }}>Торг</Btn>
            <Btn variant="ghost" style={{ flex: 1 }}>Отклонить</Btn>
          </div>
        </div>
      </Screen>
    </>
  );
}

// ─── Counter offer
function S_CounterOffer() {
  return (
    <>
      <StatusBar />
      <AppHeader left={<div style={{ padding: 4 }}>{Icon.back()}</div>} title="Контрофер" sub="Раунд 1 из 2" />
      <Screen>
        <div style={{ background: T3.color.surfaceAlt, borderRadius: 18, padding: 16, border: `1px solid ${T3.color.hairline}` }}>
          <div style={{ fontSize: 12, color: T3.color.muted }}>Артём предложил</div>
          <div style={{ fontSize: 20, fontWeight: 600, letterSpacing: -0.3, marginTop: 4 }}>Мини-свидание дома · 120 LC</div>
        </div>

        <div style={{ marginTop: 18 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
            <div style={{ fontSize: 11, fontWeight: 500, color: T3.color.muted, letterSpacing: 0.4, textTransform: 'uppercase' }}>Твоя цена</div>
            <div style={{ fontSize: 20, fontWeight: 600, color: T3.color.ink, letterSpacing: -0.4 }}>160 LC</div>
          </div>
          <Progress value={70} color={T3.color.ink} showCap />
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 6 }}>
            <div style={{ fontSize: 10, color: T3.color.muted }}>120 исходная</div>
            <div style={{ fontSize: 10, color: T3.color.muted }}>180 макс (+150%)</div>
          </div>
        </div>

        <div style={{ marginTop: 18 }}>
          <div style={{ fontSize: 11, fontWeight: 500, color: T3.color.muted, letterSpacing: 0.4, textTransform: 'uppercase', marginBottom: 8 }}>Причина</div>
          <div style={{ background: T3.color.surface, border: `1px solid ${T3.color.hairline}`, borderRadius: 14, padding: '14px 16px', fontSize: 14, color: T3.color.ink, lineHeight: 1.4 }}>
            Я соберу посиделки — продукты и свечи на мне
          </div>
        </div>

        <div style={{ marginTop: 14, background: T3.color.surfaceAlt, borderRadius: 14, padding: 12, fontSize: 11, color: T3.color.muted, lineHeight: 1.5 }}>
          После раунда 2 система автоматически закроет торг по правилу 50/50 от исходной и финальной цены.
        </div>

        <div style={{ position: 'absolute', bottom: 24, left: 20, right: 20 }}>
          <Btn variant="primary" full>Отправить оффер</Btn>
        </div>
      </Screen>
    </>
  );
}

// ─── Bargain chat
function S_BargainChat() {
  return (
    <>
      <StatusBar />
      <AppHeader left={<div style={{ padding: 4 }}>{Icon.back()}</div>} title="Торг" sub="Мини-свидание · раунд 2" />
      <Screen>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <BubbleOffer from="Артём" price="120 LC" time="14:22" meta="исходная цена" />
          <BubbleOffer from="Маша" price="160 LC" time="14:30" meta="+30 LC · продукты на мне" mine />
          <BubbleOffer from="Артём" price="140 LC" time="14:35" meta="встречное — 140 и дедлайн сдвиг" />
          <div style={{ background: T3.color.limeSoft, borderRadius: 12, padding: '10px 12px', fontSize: 11, color: T3.color.limeInk, textAlign: 'center' }}>
            Финальный раунд — принять или отклонить
          </div>
        </div>
        <div style={{ position: 'absolute', bottom: 24, left: 20, right: 20, display: 'flex', gap: 10 }}>
          <Btn variant="primary" style={{ flex: 1 }}>Принять 140</Btn>
          <Btn variant="ghost" style={{ flex: 1 }}>Отклонить</Btn>
        </div>
      </Screen>
    </>
  );
}

function BubbleOffer({ from, price, time, meta, mine }) {
  return (
    <div style={{
      alignSelf: mine ? 'flex-end' : 'flex-start',
      background: mine ? T3.color.ink : T3.color.surface,
      color: mine ? '#fff' : T3.color.ink,
      border: mine ? 'none' : `1px solid ${T3.color.hairline}`,
      borderRadius: 18, padding: '12px 14px', maxWidth: '80%',
    }}>
      <div style={{ fontSize: 10, opacity: 0.6, letterSpacing: 0.5, textTransform: 'uppercase' }}>{from} · {time}</div>
      <div style={{ fontSize: 18, fontWeight: 600, letterSpacing: -0.3, marginTop: 2 }}>{price}</div>
      <div style={{ fontSize: 11, opacity: 0.7, marginTop: 2 }}>{meta}</div>
    </div>
  );
}

// ─── Accepted
function S_Accepted() {
  return (
    <>
      <StatusBar />
      <AppHeader left={<div style={{ padding: 4 }}>{Icon.back()}</div>} title="Задача" sub="Принято" />
      <Screen>
        <SoftBlob top={40} right={-40} opacity={0.35} />
        <div style={{ paddingTop: 40, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <BondFace size={80} bg={T3.color.lime} />
          <div style={{ fontSize: 28, fontWeight: 600, letterSpacing: -1, color: T3.color.ink, marginTop: 20 }}>Принято</div>
          <div style={{ fontSize: 13, color: T3.color.muted, marginTop: 6 }}>Мини-свидание · для Маши</div>
        </div>
        <div style={{ marginTop: 28, background: T3.color.surface, borderRadius: 20, padding: 18, border: `1px solid ${T3.color.hairline}` }}>
          <Row k="Финальная цена" v="140 LC" bold />
          <Row k="Дедлайн" v="Завтра, 22:00" />
          <Row k="Бонус за скорость" v="+30 LC до 18:00" />
        </div>
        <div style={{ position: 'absolute', bottom: 24, left: 20, right: 20 }}>
          <Btn variant="primary" full>Начать работу</Btn>
        </div>
      </Screen>
    </>
  );
}

function Row({ k, v, bold }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderTop: `1px solid ${T3.color.hairline}` }}>
      <div style={{ fontSize: 13, color: T3.color.muted }}>{k}</div>
      <div style={{ fontSize: bold ? 15 : 13, fontWeight: bold ? 600 : 500, color: T3.color.ink, letterSpacing: -0.1 }}>{v}</div>
    </div>
  );
}

// ─── In progress
function S_InProgress() {
  return (
    <>
      <StatusBar />
      <AppHeader left={<div style={{ padding: 4 }}>{Icon.back()}</div>} title="В работе" sub="Мини-свидание" />
      <Screen>
        <div style={{ background: T3.color.ink, color: '#fff', borderRadius: 24, padding: 22, position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', right: -30, top: -30, width: 120, height: 120, borderRadius: 120, background: T3.color.lime, filter: 'blur(40px)', opacity: 0.4 }} />
          <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', letterSpacing: 1, textTransform: 'uppercase' }}>Осталось</div>
          <div style={{ fontSize: 40, fontWeight: 600, letterSpacing: -1.4, marginTop: 6 }}>1 день 18 часов</div>
          <div style={{ marginTop: 18 }}>
            <Progress value={55} color={T3.color.lime} track="rgba(255,255,255,0.12)" />
          </div>
        </div>
        <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 10 }}>
          {[['Цена', '140 LC'], ['Бонус за скорость', '+30 LC до 18:00'], ['Категория', 'Романтика']].map(([k, v]) => (
            <div key={k} style={{ background: T3.color.surface, borderRadius: 16, padding: '14px 16px', display: 'flex', justifyContent: 'space-between', border: `1px solid ${T3.color.hairline}` }}>
              <div style={{ fontSize: 13, color: T3.color.muted }}>{k}</div>
              <div style={{ fontSize: 14, fontWeight: 500, color: T3.color.ink }}>{v}</div>
            </div>
          ))}
        </div>
        <div style={{ position: 'absolute', bottom: 24, left: 20, right: 20 }}>
          <Btn variant="primary" full>Отметить выполненной</Btn>
        </div>
      </Screen>
    </>
  );
}

// ─── Pending confirm
function S_PendingConfirm() {
  return (
    <>
      <StatusBar />
      <AppHeader left={<div style={{ padding: 4 }}>{Icon.back()}</div>} title="На проверке" />
      <Screen>
        <div style={{ background: T3.color.lime, borderRadius: 24, padding: 22 }}>
          <Pill variant="ink" size="sm">Готово</Pill>
          <div style={{ fontSize: 26, fontWeight: 600, letterSpacing: -0.8, color: T3.color.limeInk, marginTop: 14 }}>Маша отметила<br />выполненной</div>
          <div style={{ fontSize: 13, color: T3.color.limeInk, opacity: 0.7, marginTop: 8 }}>Подтверди — и 140 LC уйдут на её кошелёк</div>
        </div>

        <div style={{ marginTop: 14, background: T3.color.surface, borderRadius: 20, padding: 16, border: `1px solid ${T3.color.hairline}` }}>
          <div style={{ fontSize: 12, color: T3.color.muted, marginBottom: 10 }}>Комментарий от Маши</div>
          <div style={{ fontSize: 14, color: T3.color.ink, lineHeight: 1.5 }}>Всё готово: паста, свечи, плейлист. Телефоны в коробке 🙂</div>
        </div>

        <div style={{ marginTop: 14, background: T3.color.surfaceAlt, borderRadius: 16, padding: 14, fontSize: 12, color: T3.color.muted, lineHeight: 1.5 }}>
          Если не подтвердишь за 24 часа — система подтвердит автоматически.
        </div>

        <div style={{ position: 'absolute', bottom: 24, left: 20, right: 20, display: 'flex', gap: 10 }}>
          <Btn variant="primary" style={{ flex: 1 }}>Подтвердить</Btn>
          <Btn variant="ghost" style={{ flex: 1 }}>Оспорить</Btn>
        </div>
      </Screen>
    </>
  );
}

// ─── Confirmed
function S_Confirmed() {
  return (
    <>
      <StatusBar />
      <AppHeader left={<div style={{ padding: 4 }}>{Icon.close(T3.color.ink)}</div>} title="Оплачено" />
      <Screen>
        <SoftBlob top={0} right={-40} opacity={0.5} />
        <div style={{ paddingTop: 56, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <div style={{ width: 110, height: 110, borderRadius: 30, background: T3.color.lime, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <BondMark size={50} color={T3.color.ink} />
          </div>
          <div style={{ fontSize: 32, fontWeight: 600, letterSpacing: -1.1, color: T3.color.ink, marginTop: 24 }}>Оплачено</div>
          <div style={{ fontSize: 13, color: T3.color.muted, marginTop: 6 }}>Задача закрыта</div>
        </div>
        <div style={{ marginTop: 28, background: T3.color.ink, color: '#fff', borderRadius: 22, padding: 18, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.55)', textTransform: 'uppercase', letterSpacing: 1 }}>Машин кошелёк</div>
            <div style={{ fontSize: 22, fontWeight: 600, letterSpacing: -0.5, marginTop: 4 }}>+140 LC</div>
          </div>
          <BondMark size={28} color={T3.color.lime} accent="#fff" />
        </div>
        <div style={{ position: 'absolute', bottom: 24, left: 20, right: 20, display: 'flex', flexDirection: 'column', gap: 10 }}>
          <Btn variant="primary" full>К задачам</Btn>
          <Btn variant="ghost" full>Создать новую</Btn>
        </div>
      </Screen>
    </>
  );
}

// ─── Dispute
function S_Dispute() {
  return (
    <>
      <StatusBar />
      <AppHeader left={<div style={{ padding: 4 }}>{Icon.back()}</div>} title="Спор" sub="12 часов на решение" />
      <Screen>
        <div style={{ background: '#FFF3D9', borderRadius: 20, padding: 16 }}>
          <div style={{ fontSize: 12, fontWeight: 600, color: '#8A5A0B', letterSpacing: 0.5, textTransform: 'uppercase' }}>Разногласие</div>
          <div style={{ fontSize: 18, fontWeight: 600, color: T3.color.ink, marginTop: 4, letterSpacing: -0.3 }}>Мини-свидание дома · 140 LC</div>
          <div style={{ fontSize: 13, color: T3.color.ink2, marginTop: 8, lineHeight: 1.45 }}>Артём отметил, что не все условия выполнены. Мягко договоритесь.</div>
        </div>

        <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div style={{ background: T3.color.surface, borderRadius: 18, padding: 16, border: `1px solid ${T3.color.hairline}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontSize: 14, fontWeight: 600 }}>Предложить компромисс</div>
              <div style={{ fontSize: 11, color: T3.color.muted, marginTop: 2 }}>Своя сумма от 70 до 140</div>
            </div>
            {Icon.chevron(T3.color.muted)}
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <Btn variant="soft" style={{ flex: 1 }}>50 / 50</Btn>
            <Btn variant="soft" style={{ flex: 1 }}>Вернуть</Btn>
          </div>
        </div>

        <div style={{ marginTop: 14, background: T3.color.surfaceAlt, borderRadius: 14, padding: 12, fontSize: 12, color: T3.color.muted, lineHeight: 1.5 }}>
          Если не договоритесь — система делит LC поровну. Никаких штрафов.
        </div>
      </Screen>
    </>
  );
}

// ─── Exchange
function S_Exchange() {
  return (
    <>
      <StatusBar />
      <AppHeader left={<BondMark size={22} />} title="Биржа" sub="добровольные задачи" />
      <Screen>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {[
            { t: 'Забрать заказ', f: 'Маша', lc: 40 },
            { t: 'Выбрать ужин', f: 'Маша', lc: 30 },
            { t: 'Собрать плейлист', f: 'Маша', lc: 20 },
          ].map((x, i) => (
            <div key={i} style={{ background: T3.color.surface, borderRadius: 20, padding: 16, border: `1px solid ${T3.color.hairline}` }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <div style={{ fontSize: 11, color: T3.color.muted }}>Открыта {x.f} · 48 часов</div>
                  <div style={{ fontSize: 16, fontWeight: 600, marginTop: 2, letterSpacing: -0.2 }}>{x.t}</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: 18, fontWeight: 600, letterSpacing: -0.3 }}>{x.lc}</div>
                  <div style={{ fontSize: 10, color: T3.color.muted }}>LC</div>
                </div>
              </div>
              <div style={{ marginTop: 12 }}>
                <Btn variant="ghost" size="sm" full>Взять задачу</Btn>
              </div>
            </div>
          ))}
        </div>
      </Screen>
      <BottomNav active="tasks" />
    </>
  );
}

Object.assign(window, {
  S_TasksInbox, S_CreateTask, S_TaskProposed, S_CounterOffer, S_BargainChat,
  S_Accepted, S_InProgress, S_PendingConfirm, S_Confirmed, S_Dispute, S_Exchange,
  BubbleOffer, Row,
});
