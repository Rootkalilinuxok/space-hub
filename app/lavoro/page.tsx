import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lavoro",
  description:
    "Scopri come ottenere permessi, comprendere i contratti e rispettare la normativa.",
};

export default function LavoroPage() {
  return (
    <div className="h-full overflow-y-auto p-6">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-4">
        <h1 className="font-semibold text-3xl tracking-tight">Lavoro</h1>
        <p className="text-muted-foreground">
          Scopri come ottenere permessi, comprendere i contratti e rispettare la
          normativa.
        </p>
      </div>
    </div>
  );
}
