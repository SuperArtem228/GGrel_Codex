"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Pill } from "@/components/ui/pill";
import { claimChallengeRewardAction, completeChallengeStepAction, selectDailyChallengesAction } from "@/actions/challenges";
import type { ChallengeStatus } from "@prisma/client";

type PairChallengeMini = {
  id: string;
  status: ChallengeStatus;
  rewardClaimed: boolean;
};

function Main({ pc }: { pc: PairChallengeMini }) {
  const router = useRouter();
  const [pending, start] = useTransition();
  const [error, setError] = useState<string | null>(null);

  const run = (fn: () => Promise<unknown>) => {
    setError(null);
    start(async () => {
      try {
        await fn();
        router.refresh();
      } catch (e) {
        setError((e as Error).message);
      }
    });
  };

  return (
    <div className="space-y-2">
      {error ? <div className="rounded-lg bg-[rgba(197,48,48,0.08)] p-2 text-[12px] text-danger">{error}</div> : null}

      {(pc.status === "SELECTED" || pc.status === "IN_PROGRESS") && (
        <Button
          variant="accent"
          full
          onClick={() => run(() => completeChallengeStepAction(pc.id))}
          loading={pending}
        >
          Отметить шаг
        </Button>
      )}

      {pc.status === "DONE" && !pc.rewardClaimed && (
        <Button
          variant="primary"
          full
          onClick={() => run(() => claimChallengeRewardAction(pc.id))}
          loading={pending}
        >
          Забрать награду
        </Button>
      )}

      {pc.status === "CLAIMED" && (
        <div className="rounded-lg bg-surface-alt p-2 text-center text-[12px] text-muted">
          <Pill variant="success" size="sm">Награда выдана</Pill>
        </div>
      )}
    </div>
  );
}

function Add({
  templateId,
  title,
  rewardLc,
  description,
  requiresBoth,
}: {
  templateId: string;
  title: string;
  rewardLc: number;
  description?: string | null;
  requiresBoth?: boolean;
}) {
  const router = useRouter();
  const [pending, start] = useTransition();
  const [error, setError] = useState<string | null>(null);

  return (
    <div className="card p-3">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <div className="text-[14px] font-semibold tracking-tight">{title}</div>
          {description ? <p className="mt-0.5 text-[12px] text-muted">{description}</p> : null}
          <div className="mt-2 flex items-center gap-2">
            <Pill size="sm" variant="accent-soft">+{rewardLc} LC</Pill>
            {requiresBoth ? (
              <Pill size="sm" variant="muted">Вдвоём</Pill>
            ) : null}
          </div>
        </div>
        <Button
          size="sm"
          variant="ghost"
          onClick={() => {
            setError(null);
            start(async () => {
              try {
                await selectDailyChallengesAction([templateId]);
                router.refresh();
              } catch (e) {
                setError((e as Error).message);
              }
            });
          }}
          loading={pending}
        >
          Добавить
        </Button>
      </div>
      {error ? <div className="mt-2 text-[12px] text-danger">{error}</div> : null}
    </div>
  );
}

export const ChallengeActions = Object.assign(Main, { Add });
