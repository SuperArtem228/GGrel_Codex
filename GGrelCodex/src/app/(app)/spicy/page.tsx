import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { requirePair } from "@/lib/session";
import { TopHeader } from "@/components/top-header";
import { MobileScroll } from "@/components/app-shell";
import { SectionHeader } from "@/components/section-header";
import { EmptyState } from "@/components/empty-state";
import { Pill } from "@/components/ui/pill";
import { CaseCard } from "@/components/case-card";
import { SpicyConsentAction } from "./actions";
import { CaseOpenAction, RewardBuyAction } from "../shop/actions";

export const dynamic = "force-dynamic";

export default async function SpicyPage() {
  const { pair, me, partner } = await requirePair();

  const [rewards, cases] = await Promise.all([
    prisma.rewardTemplate.findMany({
      where: { pairId: pair.id, active: true, isSpicy: true },
      orderBy: [{ isSystem: "desc" }, { priceLc: "asc" }],
      take: 10,
    }),
    prisma.caseTemplate.findMany({
      where: { pairId: pair.id, active: true, isSpicy: true },
      include: { items: true },
      orderBy: [{ isSystem: "desc" }, { openPriceLc: "asc" }],
      take: 6,
    }),
  ]);

  return (
    <>
      <TopHeader title="Private" sub="Только по согласию" />
      <MobileScroll>
        <div className="rounded-xl border border-[color:var(--hairline)] bg-plum-wash p-5">
          <div className="flex items-center gap-2">
            <Pill size="sm" variant="magenta">18+ · приватно</Pill>
            <Pill size="sm" variant={pair.spicyEnabled ? "plum" : "plum-soft"}>
              {pair.spicyEnabled ? "Включено для пары" : "Ожидает согласия"}
            </Pill>
          </div>
          <h2 className="mt-3 h-display text-[22px] text-plum-ink">Spicy Mode</h2>
          <p className="mt-1 text-[13px] text-plum-ink/75">
            Нейтральный интерфейс, никакой публичности. {partner?.user.displayName ?? "Партнёр"} должен(на) дать такое же согласие.
          </p>
          <div className="mt-4">
            <SpicyConsentAction current={me.spicyOptIn} />
          </div>
        </div>

        {!pair.spicyEnabled ? (
          <EmptyState
            className="mt-6"
            icon="🌙"
            title="Приватный слой ещё закрыт"
            body="Сейчас видны только настройки согласия. Контент появится, когда оба подтвердят."
          />
        ) : (
          <>
            <div className="mt-6">
              <SectionHeader title="Приватные награды" />
              <div className="mt-3 space-y-3">
                {rewards.length === 0 ? (
                  <EmptyState title="Пока пусто" body="Добавь приватные награды в seed/админке." />
                ) : (
                  rewards.map((reward) => (
                    <div key={reward.id} className="card p-4">
                      <div className="text-[15px] font-semibold tracking-tight text-plum-ink">{reward.emoji ? `${reward.emoji} ` : ""}{reward.title}</div>
                      {reward.description ? <p className="mt-0.5 text-[12px] text-muted">{reward.description}</p> : null}
                      <div className="mt-3">
                        <RewardBuyAction rewardTemplateId={reward.id} />
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>

            <div className="mt-6">
              <SectionHeader title="Приватные кейсы" />
              <div className="mt-3 space-y-3">
                {cases.length === 0 ? (
                  <EmptyState title="Кейсов нет" icon="🎁" />
                ) : (
                  cases.map((c) => (
                    <div key={c.id} className="space-y-2">
                      <CaseCard
                        id={c.id}
                        title={c.title}
                        description={c.description}
                        openPriceLc={c.openPriceLc}
                        emoji={c.emoji}
                        itemsCount={c.items.length}
                        isSpicy
                      />
                      <CaseOpenAction caseTemplateId={c.id} />
                    </div>
                  ))
                )}
              </div>
            </div>
          </>
        )}

        <Link href="/profile" className="mt-6 block text-center text-[12px] text-muted underline-offset-4 hover:underline">
          Настройки приватности в профиле
        </Link>
        <div className="h-4" />
      </MobileScroll>
    </>
  );
}
