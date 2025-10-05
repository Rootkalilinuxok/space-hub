import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impresa",
  description:
    "Avvia o gestisci la tua attività con guide su licenze, fisco e adempimenti.",
};

export default function ImpresaPage() {
  return (
    <div className="h-full overflow-y-auto p-6">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-4">
        <h1 className="font-semibold text-3xl tracking-tight">Impresa</h1>
        <p className="text-muted-foreground">
          Avvia o gestisci la tua attività con guide su licenze, fisco e
          adempimenti.
        </p>
      </div>
    </div>
  );
}
