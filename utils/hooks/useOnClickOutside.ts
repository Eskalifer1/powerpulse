import { RefObject, useEffect } from "react";
import { useLatest } from "./useLatest";

type ClickHandler = () => void;

export function useOutsideClick(
  elementRef: RefObject<any>,
  handler: ClickHandler,
  attached = true
) {
  const latestHandler = useLatest(handler);

  useEffect(() => {
    if (!attached) return;

    const handleClick = (e: MouseEvent) => {
      if (!elementRef.current) return;

      if (!elementRef.current.contains(e.target as Node)) {
        latestHandler.current();
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [elementRef, latestHandler, attached]);
}
