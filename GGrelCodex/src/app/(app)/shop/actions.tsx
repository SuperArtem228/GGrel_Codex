"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { buyRewardAction } from "@/actions/rewards";
import { openCaseAction } from "@/actions/cases";

export function RewardBuyAction({ rewardTemplateId }: { rewardTemplateId: string }) {
  const router = useRouter();
  const [pending, start] = useTransition();
  const [error, setError] = useState<string | null>(null);

  return (
    <div className="space-y-2">
      <div className="grid grid-cols-2 gap-2">
        <Button
          size="sm"
          variant="soft"
          onClick={() => {
            setError(null);
            start(async () => {
              try {
                await buyRewardAction(rewardTemplateId, false);
                router.refresh();
              } catch (e) {
                setError((e as Error).message);
              }
            });
          }}
          loading={pending}
        >
          Себе
        </Button>
        <Button
          size="sm"
          variant="accent"
          onClick={() => {
            setError(null);
            start(async () => {
              try {
                await buyRewardAction(rewardTemplateId, true);
                router.refresh();
              } catch (e) {
                setError((e as Error).message);
              }
            });
          }}
          loading={pending}
        >
          Партнёру
        </Button>
      </div>
      {error ? <p className="text-[12px] text-danger">{error}</p> : null}
    </div>
  );
}

export function CaseOpenAction({ caseTemplateId }: { caseTemplateId: string }) {
  const router = useRouter();
  const [pending, start] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<{ title: string; probability: number } | null>(null);

  return (
    <div className="space-y-2">
      <Button
        variant="primary"
        full
        size="sm"
        onClick={() => {
          setError(null);
          start(async () => {
            try {
              const res = await openCaseAction(caseTemplateId);
              setResult({ title: res.rewardTemplate.title, probability: res.probability });
              router.refresh();
            } catch (e) {
              setError((e as Error).message);
            }
          });
        }}
        loading={pending}
      >
        Открыть
      </Button>
      {result ? (
        <p className="rounded-lg bg-surface-alt p-2 text-[12px] text-ink">
          Выпало: <b>{result.title}</b> · шанс {result.probability}%
        </p>
      ) : null}
      {error ? <p className="text-[12px] text-danger">{error}</p> : null}
    </div>
  );
}
