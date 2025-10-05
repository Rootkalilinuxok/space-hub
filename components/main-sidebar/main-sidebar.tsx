"use client";

import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  Calendar,
  CheckSquare,
  ChevronLeft,
  ChevronRight,
  LayoutDashboard,
  LogOut,
  MessageSquare,
  Plug,
  Rocket,
  Settings,
  Sparkles,
  Workflow,
} from "lucide-react";
import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { useMainSidebar } from "./provider";

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

type NavigationSectionProps = {
  title: string;
  items: {
    label: string;
    href: string;
    icon: LucideIcon;
  }[];
  open: boolean;
};

function NavigationSection({ title, items, open }: NavigationSectionProps) {
  return (
    <div className="space-y-3">
      {open ? (
        <p className="px-2 font-semibold text-muted-foreground text-xs uppercase tracking-wide">
          {title}
        </p>
      ) : (
        <p className="sr-only">{title}</p>
      )}
      <ul className="space-y-1">
        {items.map((item) => (
          <li key={item.label}>
            <Link
              className={cn(
                "flex items-center gap-3 rounded-md px-2 py-2 font-medium text-muted-foreground text-sm transition-colors hover:bg-accent hover:text-accent-foreground",
                open ? "justify-start" : "justify-center px-0"
              )}
              href={item.href}
            >
              <item.icon className="size-4" strokeWidth={1.8} />
              {open ? (
                <span className="transition-opacity duration-200">
                  {item.label}
                </span>
              ) : (
                <span className="sr-only">{item.label}</span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function MainSidebar() {
  const { open, toggle } = useMainSidebar();

  return (
    <aside
      className={cn(
        "flex h-full flex-col border-r bg-background py-6 transition-all duration-200",
        open ? "w-64 px-5" : "w-14 items-center px-2"
      )}
    >
      <div className="relative w-full">
        <div
          className={cn(
            "flex items-center gap-3",
            open ? "justify-start" : "justify-center"
          )}
        >
          <div className="flex size-10 items-center justify-center rounded-lg bg-primary font-semibold text-lg text-primary-foreground">
            SH
          </div>
          {open && (
            <div className="leading-tight">
              <p className="font-semibold text-muted-foreground text-xs uppercase tracking-wider">
                Space Hub
              </p>
              <p className="font-semibold text-lg">Control Center</p>
            </div>
          )}
        </div>
        <Button
          aria-label="Toggle sidebar"
          className={cn(
            "size-8 rounded-full border border-border bg-background p-0 text-muted-foreground",
            open
              ? "-translate-y-1/2 absolute top-1/2 right-0"
              : "-right-3 -translate-y-1/2 absolute top-1/2"
          )}
          onClick={toggle}
          size="icon"
          variant="ghost"
        >
          {open ? (
            <ChevronLeft className="size-4" />
          ) : (
            <ChevronRight className="size-4" />
          )}
        </Button>
      </div>

      <Button
        className={cn(
          "mt-6 w-full",
          open ? "gap-2" : "h-10 w-10 rounded-full p-0"
        )}
        size={open ? "lg" : "icon"}
      >
        <Sparkles className="size-4" strokeWidth={1.8} />
        {open ? "Quick Create" : <span className="sr-only">Quick Create</span>}
      </Button>

      <nav className="mt-8 flex w-full flex-1 flex-col gap-8 overflow-hidden">
        <div
          className={cn("space-y-8 overflow-y-auto", open ? "pr-2" : "w-full")}
        >
          <NavigationSection
            items={mainNavigation}
            open={open}
            title="Principale"
          />
          <NavigationSection
            items={servicesNavigation}
            open={open}
            title="Servizi"
          />
        </div>
      </nav>

      <footer
        className={cn(
          "mt-auto w-full border-t pt-5",
          open ? "" : "border-transparent pt-3"
        )}
      >
        <div className={cn("flex items-center gap-3", open ? "" : "flex-col")}>
          <Avatar className={cn("size-10", open ? "" : "size-9")}>
            <AvatarImage
              alt="Giulia Bianchi"
              src="/images/users/giulia-bianchi.jpg"
            />
            <AvatarFallback>GB</AvatarFallback>
          </Avatar>
          {open ? (
            <div className="flex flex-1 flex-col">
              <span className="font-medium text-sm leading-tight">
                Giulia Bianchi
              </span>
              <span className="text-muted-foreground text-xs leading-tight">
                giulia.bianchi@spacehub.io
              </span>
            </div>
          ) : (
            <div className="sr-only">Giulia Bianchi</div>
          )}
          <Button
            className={cn(
              "text-muted-foreground",
              open ? "" : "size-9 rounded-full"
            )}
            size="icon"
            variant="ghost"
          >
            <LogOut className="size-4" strokeWidth={1.8} />
            <span className="sr-only">Log out</span>
          </Button>
        </div>
      </footer>
    </aside>
  );
}
