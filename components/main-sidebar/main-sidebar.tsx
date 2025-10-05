"use client";

import { ChevronLeft, ChevronRight, LogOut, Sparkles } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { useMainSidebar } from "./provider";

type NavItemProps = {
  href: string;
  label: string;
  open: boolean;
};

function NavItem({ href, label, open }: NavItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      className={cn(
        "flex w-full items-center rounded-md px-2 py-2 text-sm font-medium transition-colors",
        open ? "justify-start" : "justify-center px-0",
        isActive
          ? "bg-accent text-accent-foreground"
          : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
      )}
      href={href}
    >
      {open ? (
        <span className="transition-opacity duration-200">{label}</span>
      ) : (
        <>
          <span className="text-[10px] font-semibold uppercase leading-none">
            {label.charAt(0)}
          </span>
          <span className="sr-only">{label}</span>
        </>
      )}
    </Link>
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
          <div className="space-y-3">
            {open ? (
              <p className="px-2 font-semibold text-muted-foreground text-xs uppercase tracking-wide">
                Menu
              </p>
            ) : (
              <p className="sr-only">Menu</p>
            )}
            <div className="space-y-1">
              <NavItem href="/hub" label="Hub" open={open} />
              <NavItem href="/" label="Home" open={open} />
              <NavItem href="/residenza" label="Residenza" open={open} />
              <NavItem href="/lavoro" label="Lavoro" open={open} />
              <NavItem href="/impresa" label="Impresa" open={open} />
              <NavItem href="/immigrazione" label="Immigrazione" open={open} />
              <NavItem href="/pensionati" label="Pensionati" open={open} />
            </div>
          </div>

          <div className="space-y-3">
            {open ? (
              <p className="px-2 font-semibold text-muted-foreground text-xs uppercase tracking-wide">
                Servizi
              </p>
            ) : (
              <p className="sr-only">Servizi</p>
            )}
            <div
              className={cn(
                "flex w-full items-center justify-center rounded-md border border-dashed border-muted-foreground/40 text-muted-foreground transition-colors",
                open
                  ? "px-3 py-8 text-center text-sm"
                  : "h-10 w-10 text-[10px] uppercase"
              )}
            >
              {open ? "Prossimamente disponibili" : "Servizi"}
            </div>
          </div>
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
