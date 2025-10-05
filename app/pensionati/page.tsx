import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pensionati",
  description:
    "Accedi a servizi per pensionati esteri, agevolazioni fiscali e trasferimenti di residenza.",
};

export default function PensionatiPage() {
  return (
    <div className="h-full overflow-y-auto p-6">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-4">
        <h1 className="font-semibold text-3xl tracking-tight">Pensionati</h1>
        <p className="text-muted-foreground">
          Accedi a servizi per pensionati esteri, agevolazioni fiscali e
          trasferimenti di residenza.
        </p>
      </div>
    </div>
  );
}
