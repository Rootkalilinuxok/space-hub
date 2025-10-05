import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Immigrazione",
  description:
    "Orientati fra visti, permessi di soggiorno e procedure di ricongiungimento familiare.",
};

export default function ImmigrazionePage() {
  return (
    <div className="h-full overflow-y-auto p-6">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-4">
        <h1 className="font-semibold text-3xl tracking-tight">Immigrazione</h1>
        <p className="text-muted-foreground">
          Orientati fra visti, permessi di soggiorno e procedure di
          ricongiungimento familiare.
        </p>
      </div>
    </div>
  );
}
