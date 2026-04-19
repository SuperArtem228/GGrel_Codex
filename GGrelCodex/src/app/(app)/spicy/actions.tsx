"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { setSpicyConsentAction } from "@/actions/spicy";

export function SpicyConsentAction({ current }: { current: boolean }) {
  const router = useRouter();
  const [pending, start] = useTransition();
  const [error, setError] = useState<string | null>(null);

  return (
    <div className="space-y-2">
      <Button
        variant={current ? "soft" : "accent"}
        full
        onClick={() => {
          setError(null);
          start(async () => {
            try {
              await setSpicyConsentAction(!current);
              router.refresh();
            } catch (e) {
              setError((e as Error).message);
            }
          });
        }}
        loading={pending}
      >
        {current ? "Отозвать согласие" : "Дать согласие"}
      </Button>
      {error ? <p className="text-[12px] text-danger">{error}</p> : null}
    </div>
  );
}
