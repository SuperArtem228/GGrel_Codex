import { prisma } from "@/lib/prisma";
import { requirePair } from "@/lib/session";
import { TopHeader } from "@/components/top-header";
import { MobileScroll } from "@/components/app-shell";
import { SectionHeader } from "@/components/section-header";
import { EmptyState } from "@/components/empty-state";
import { Pill } from "@/components/ui/pill";
import { Coin } from "@/components/bond-mark";
import { formatLC } from "@/lib/utils";
import { CaseCard } from "@/components/case-card";
import { CaseOpenAction, RewardBuyAction } from "./actions";

export const dynamic = "force-dynamic";

export default async function ShopPage() {
  const { pair, me, partner } = await requirePair();

  const [rewards, cases] = await Promise.all([
    prisma.rewardTemplate.findMany({
      where: { pairId: pair.id, active: true, isSpicy: false },
      orderBy: [{ isSystem: "desc" }, { priceLc: "asc" }],
      take: 12,
    }),
    prisma.caseTemplate.findMany({
      where: { pairId: pair.id, active: true, isSpicy: false },
      include: { items: true },
      orderBy: [{ isSystem: "desc" }, { openPriceLc: "asc" }],
      take: 6,
    }),
  ]);

  return (
    <>
      <TopHeader title="Магазин" sub="Награды и кейсы" />
      <MobileScroll>
        <div className="card p-5">
          <div className="text-[11px] uppercase tracking-wide text-muted">Баланс</div>
          <div className="mt-1 flex items-center gap-2 text-[26px] font-semibold tracking-tight">
            <Coin size={18} /> {formatLC(me.personalWalletBalance)} LC
          </div>
          <p className="mt-1 text-[12px] text-muted">
            Покупки списываются с твоего кошелька. Партнёр: {partner?.user.displayName ?? "—"}.
          </p>
        </div>

        <div className="mt-6">
          <SectionHeader title="Награды" sub="Покупай себе или партнёру" />
          <div className="mt-3 space-y-3">
            {rewards.length === 0 ? (
              <EmptyState title="Наград пока нет" body="Добавь через seed или создай кастомные в следующих итерациях." />
            ) : (
              rewards.map((reward) => (
                <div key={reward.id} className="card p-4">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div className="text-[15px] font-semibold tracking-tight">{reward.emoji ? `${reward.emoji} ` : ""}{reward.title}</div>
                      {reward.description ? <p className="mt-0.5 text-[12px] text-muted">{reward.description}</p> : null}
                      <div className="mt-2">
                        <Pill size="sm" variant="accent-soft">{formatLC(reward.priceLc)} LC</Pill>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3">
                    <RewardBuyAction rewardTemplateId={reward.id} />
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="mt-6">
          <SectionHeader title="Кейсы" sub="Награды с вероятностями" />
          <div className="mt-3 space-y-3">
            {cases.length === 0 ? (
              <EmptyState title="Кейсов пока нет" body="Создай кейс из наград, когда добавим конструктор." icon="🎁" />
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
                  />
                  <CaseOpenAction caseTemplateId={c.id} />
                </div>
              ))
            )}
          </div>
        </div>

        <div className="h-4" />
      </MobileScroll>
    </>
  );
}
