import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const services = [
  {
    title: "Residenza",
    description:
      "Gestisci cambi di residenza, certificati anagrafici e documentazione locale.",
    href: "/residenza",
  },
  {
    title: "Lavoro",
    description:
      "Scopri come ottenere permessi, comprendere i contratti e rispettare la normativa.",
    href: "/lavoro",
  },
  {
    title: "Impresa",
    description:
      "Avvia o gestisci la tua attività con guide su licenze, fisco e adempimenti.",
    href: "/impresa",
  },
  {
    title: "Immigrazione",
    description:
      "Orientati fra visti, permessi di soggiorno e procedure di ricongiungimento familiare.",
    href: "/immigrazione",
  },
  {
    title: "Pensionati",
    description:
      "Accedi a servizi per pensionati esteri, agevolazioni fiscali e trasferimenti di residenza.",
    href: "/pensionati",
  },
];

export const metadata: Metadata = {
  title: "Hub dei Servizi",
  description:
    "Esplora i servizi dedicati a residenza, lavoro, impresa, immigrazione e pensionati.",
};

export default function HubPage() {
  return (
    <div className="h-full overflow-y-auto p-6">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-10">
        <header className="flex flex-col gap-4">
          <div className="space-y-2">
            <p className="font-medium text-muted-foreground text-sm uppercase tracking-wider">
              Space Hub
            </p>
            <h1 className="font-semibold text-3xl tracking-tight">
              Hub dei Servizi
            </h1>
          </div>
          <p className="max-w-2xl text-muted-foreground">
            Scegli un ambito per scoprire risorse, linee guida e strumenti
            pratici. Puoi sempre tornare al chatbot per ottenere supporto
            personalizzato.
          </p>
          <Button asChild className="w-fit">
            <Link href="/">
              Apri Chatbot
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </header>

        <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <Card className="flex flex-col" key={service.title}>
              <CardHeader className="flex-1">
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button
                  asChild
                  className="w-full justify-between"
                  variant="outline"
                >
                  <Link href={service.href}>
                    Esplora servizio
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </section>
      </div>
    </div>
  );
}
