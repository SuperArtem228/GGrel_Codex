import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { requirePair } from "@/lib/session";
import { TopHeader } from "@/components/top-header";
import { MobileScroll } from "@/components/app-shell";
import { Pill } from "@/components/ui/pill";
import { CaseOpenAction } from "../../../shop/actions";

export const dynamic = "force-dynamic";

export default async function SpicyCasePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const { pair } = await requirePair();
  const caseTpl = await prisma.caseTemplate.findFirst({
    where: { id, pairId: pair.id, isSpicy: true },
    include: { items: { include: { rewardTemplate: true }, orderBy: { sortOrder: "asc" } } },
  });
  if (!caseTpl) notFound();

  return (
    <>
      <TopHeader title={caseTpl.title} sub="Private case" backHref="/spicy" />
      <MobileScroll>
        <div className="rounded-xl border border-[color:var(--hairline)] bg-plum-wash p-5">
          <p className="text-[13px] text-plum-ink/75">{caseTpl.description || "Приватный кейс по согласию обоих."}</p>
          <div className="mt-3">
            <CaseOpenAction caseTemplateId={caseTpl.id} />
          </div>
        </div>

        <div className="mt-5 space-y-2">
          {caseTpl.items.map((item) => (
            <div key={item.id} className="card flex items-center justify-between p-3">
              <div className="text-[14px] font-medium">{item.rewardTemplate.title}</div>
              <Pill size="sm" variant="magenta-soft">{item.probabilityPercent}%</Pill>
            </div>
          ))}
        </div>
      </MobileScroll>
    </>
  );
}
