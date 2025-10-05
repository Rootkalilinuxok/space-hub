import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Residenza",
  description:
    "Gestisci cambi di residenza, certificati anagrafici e documentazione locale.",
};

export default function ResidenzaPage() {
  return (
    <div className="h-full overflow-y-auto p-6">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-4">
        <h1 className="font-semibold text-3xl tracking-tight">Residenza</h1>
        <p className="text-muted-foreground">
          Gestisci cambi di residenza, certificati anagrafici e documentazione
          locale.
        </p>
      </div>
    </div>
  );
}
