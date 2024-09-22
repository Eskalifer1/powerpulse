"use client";

import { ReactNode, createContext, useMemo, useState } from "react";

import Dialog from "./Dialog";

export interface IConfirmationProps {
  open?: boolean;
  resolve: (value?: unknown) => void;
  reject: () => void;
  title?: string;
  text?: string;
}

interface IConfirmationContext {
  showConfirmation: (props: IConfirmationProps) => void;
  hideConfirmation: () => void;
}

export const ConfirmationContext = createContext<IConfirmationContext | null>(
  null
);

interface IConfirmationProviderProps {
  children?: ReactNode;
}

export default function ConfirmationProvider({
  children,
}: IConfirmationProviderProps) {
  const [confirmationProps, setConfirmationProps] =
    useState<Partial<IConfirmationProps> | null>(null);

  const contextValue = useMemo(
    () => ({
      showConfirmation: (props: IConfirmationProps) => {
        setConfirmationProps({
          ...props,
          open: true,
        });
      },
      hideConfirmation: () => {
        setConfirmationProps({
          open: false,
        });
      },
    }),
    []
  );

  return (
    <ConfirmationContext.Provider value={contextValue}>
      {children}
      <Dialog {...confirmationProps} />
    </ConfirmationContext.Provider>
  );
}
