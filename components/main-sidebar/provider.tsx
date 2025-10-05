"use client";

import React from "react";

const MAIN_SIDEBAR_COOKIE_NAME = "main_sidebar_state";
const MAIN_SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 365; // 1 year

type MainSidebarContextValue = {
  open: boolean;
  setOpen: (value: boolean | ((value: boolean) => boolean)) => void;
  toggle: () => void;
};

const MainSidebarContext = React.createContext<
  MainSidebarContextValue | undefined
>(undefined);

function getInitialSidebarState() {
  if (typeof document === "undefined") {
    return true;
  }

  const cookie = document.cookie
    .split("; ")
    .find((entry) => entry.startsWith(`${MAIN_SIDEBAR_COOKIE_NAME}=`));

  if (!cookie) {
    return true;
  }

  const [, value] = cookie.split("=");
  return value !== "false";
}

type MainSidebarProviderProps = {
  children: React.ReactNode;
  defaultOpen?: boolean;
};

export function MainSidebarProvider({
  children,
  defaultOpen,
}: MainSidebarProviderProps) {
  const [open, setOpenState] = React.useState(() => {
    if (typeof defaultOpen === "boolean") {
      return defaultOpen;
    }

    return getInitialSidebarState();
  });

  React.useEffect(() => {
    if (typeof defaultOpen === "boolean") {
      setOpenState(defaultOpen);
      return;
    }

    setOpenState(getInitialSidebarState());
  }, [defaultOpen]);

  const setOpen = React.useCallback(
    (nextOpen: boolean | ((value: boolean) => boolean)) => {
      setOpenState((previous) => {
        const nextValue =
          typeof nextOpen === "function" ? nextOpen(previous) : nextOpen;

        if (typeof document !== "undefined") {
          // biome-ignore lint/suspicious/noDocumentCookie: cookie fallback when CookieStore is unavailable
          document.cookie = `${MAIN_SIDEBAR_COOKIE_NAME}=${nextValue}; path=/; max-age=${MAIN_SIDEBAR_COOKIE_MAX_AGE}`;
        }

        return nextValue;
      });
    },
    []
  );

  const toggle = React.useCallback(() => {
    setOpen((value) => !value);
  }, [setOpen]);

  const contextValue = React.useMemo(
    () => ({
      open,
      setOpen,
      toggle,
    }),
    [open, setOpen, toggle]
  );

  return (
    <MainSidebarContext.Provider value={contextValue}>
      {children}
    </MainSidebarContext.Provider>
  );
}

export function useMainSidebar() {
  const context = React.useContext(MainSidebarContext);

  if (!context) {
    throw new Error("useMainSidebar must be used within a MainSidebarProvider");
  }

  return context;
}
