import { requirePair } from "@/lib/session";
import { TopHeader } from "@/components/top-header";
import { MobileScroll } from "@/components/app-shell";
import { Pill } from "@/components/ui/pill";
import { signOutAction } from "@/actions/auth";

export const dynamic = "force-dynamic";

function Stat({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="card p-4 text-center">
      <div className="text-[22px] font-semibold tracking-tight">{value}</div>
      <div className="text-[11px] text-muted">{label}</div>
    </div>
  );
}

export default async function ProfilePage() {
  const { user, pair, me, partner } = await requirePair();

  return (
    <>
      <TopHeader title="Пара" sub={`${user.displayName} и ${partner?.user.displayName ?? "партнёр"}`} />
      <MobileScroll>
        <div className="card p-5">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[11px] uppercase tracking-wide text-muted">Пара</div>
              <div className="mt-1 h-display text-[24px]">{pair.name}</div>
            </div>
            <Pill variant={pair.spicyEnabled ? "magenta" : "muted"} size="sm">
              {pair.spicyEnabled ? "Private ON" : "Private OFF"}
            </Pill>
          </div>
          <p className="mt-2 text-[12px] text-muted">Таймзона: {pair.timezone}. Статус: {pair.status}.</p>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-3">
          <Stat label="Серия пары" value={pair.coupleStreak} />
          <Stat label="Твой кошелёк" value={`${me.personalWalletBalance} LC`} />
          <Stat label="Общий" value={`${pair.commonWalletBalance} LC`} />
        </div>

        <div className="mt-6 card p-4">
          <h3 className="text-[15px] font-semibold tracking-tight">Согласие на Spicy Mode</h3>
          <p className="mt-1 text-[12px] text-muted">
            Твоё согласие: <b>{me.spicyOptIn ? "включено" : "выключено"}</b>. Согласие партнёра: <b>{partner?.spicyOptIn ? "включено" : "выключено"}</b>.
          </p>
          <p className="mt-2 text-[12px] text-muted">Изменить можно в разделе Private.</p>
        </div>

        <div className="mt-6 card p-4">
          <h3 className="text-[15px] font-semibold tracking-tight">Аккаунт</h3>
          <p className="mt-1 text-[12px] text-muted">{user.email}</p>
          <form action={signOutAction} className="mt-3">
            <button className="h-10 rounded-pill border border-[color:var(--hairline-strong)] px-4 text-[13px] font-semibold" type="submit">
              Выйти
            </button>
          </form>
        </div>

        <div className="h-4" />
      </MobileScroll>
    </>
  );
}
