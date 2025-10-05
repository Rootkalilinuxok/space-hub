import Link from "next/link";
import type { LucideIcon } from "lucide-react";

import {
  BarChart3,
  Calendar,
  CheckSquare,
  LayoutDashboard,
  LogOut,
  MessageSquare,
  Plug,
  Rocket,
  Settings,
  Sparkles,
  Workflow,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const mainNavigation = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Messaggi",
    href: "/messages",
    icon: MessageSquare,
  },
  {
    label: "Attività",
    href: "/tasks",
    icon: CheckSquare,
  },
  {
    label: "Calendario",
    href: "/calendar",
    icon: Calendar,
  },
];

const servicesNavigation = [
  {
    label: "Automazioni",
    href: "/services/automations",
    icon: Workflow,
  },
  {
    label: "Campagne",
    href: "/services/campaigns",
    icon: Rocket,
  },
  {
    label: "Integrazioni",
    href: "/services/integrations",
    icon: Plug,
  },
  {
    label: "Analisi",
    href: "/services/analytics",
    icon: BarChart3,
  },
  {
    label: "Impostazioni",
    href: "/settings",
    icon: Settings,
  },
];

function NavigationSection({
  title,
  items,
}: {
  title: string;
  items: { label: string; href: string; icon: LucideIcon }[];
}) {
  return (
    <div>
      <p className="px-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        {title}
      </p>
      <ul className="mt-3 space-y-1">
        {items.map((item) => (
          <li key={item.label}>
            <Link
              className="flex items-center gap-3 rounded-md px-2 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              href={item.href}
            >
              <item.icon className="size-4" strokeWidth={1.8} />
              <span>{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function MainSidebar() {
  return (
    <aside className="flex h-full w-64 flex-col border-r bg-background px-5 py-6">
      <div className="flex items-center gap-3 px-2">
        <div className="flex size-10 items-center justify-center rounded-lg bg-primary text-lg font-semibold text-primary-foreground">
          SH
        </div>
        <div className="leading-tight">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Space Hub
          </p>
          <p className="text-lg font-semibold">Control Center</p>
        </div>
      </div>

      <Button className="mt-6 w-full" size="lg">
        <Sparkles className="size-4" strokeWidth={1.8} />
        Quick Create
      </Button>

      <nav className="mt-8 flex flex-1 flex-col gap-8 overflow-hidden">
        <div className="space-y-8 overflow-y-auto pr-2">
          <NavigationSection items={mainNavigation} title="Principale" />
          <NavigationSection items={servicesNavigation} title="Servizi" />
        </div>
      </nav>

      <footer className="mt-auto border-t pt-5">
        <div className="flex items-center gap-3">
          <Avatar className="size-10">
            <AvatarImage alt="Giulia Bianchi" src="/images/users/giulia-bianchi.jpg" />
            <AvatarFallback>GB</AvatarFallback>
          </Avatar>
          <div className="flex flex-1 flex-col">
            <span className="text-sm font-medium leading-tight">Giulia Bianchi</span>
            <span className="text-xs text-muted-foreground leading-tight">
              giulia.bianchi@spacehub.io
            </span>
          </div>
          <Button className="text-muted-foreground" size="icon" variant="ghost">
            <LogOut className="size-4" strokeWidth={1.8} />
            <span className="sr-only">Log out</span>
          </Button>
        </div>
      </footer>
    </aside>
  );
}

