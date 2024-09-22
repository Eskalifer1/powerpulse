"use client";

import { useContext } from "react";
import {
  ConfirmationContext,
  IConfirmationProps,
} from "./ConfirmationProvider";

export default function useConfirmation() {
  const context = useContext(ConfirmationContext);

  if (!context) {
    throw new Error(
      "useConfirmation must be used within a ConfirmationProvider"
    );
  }

  const { showConfirmation, hideConfirmation } = context;

  return function confirm(props?: Partial<IConfirmationProps>) {
    const { resolve: propsResolve, ...otherProps } = props || {};
    return new Promise((resolve, reject) => {
      showConfirmation({
        resolve: async (value) => {
          if (propsResolve) {
            await propsResolve(value);
          }
          resolve(value);
        },
        reject,
        ...otherProps,
        open: true,
      });
    })
      .catch(() => {})
      .finally(() => {
        hideConfirmation();
      });
  };
}
