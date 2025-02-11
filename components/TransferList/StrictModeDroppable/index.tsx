"use client";

import { useEffect, useState } from "react";
import { Droppable as Droppable1, DroppableProps } from "react-beautiful-dnd";

export const Droppable = Droppable1 as React.ComponentClass<DroppableProps>;

export const StrictModeDroppable = ({ children, ...props }: DroppableProps) => {
  const [enabled, setEnabled] = useState(false);
  useEffect(() => {
    const animation = requestAnimationFrame(() => setEnabled(true));
    return () => {
      cancelAnimationFrame(animation);
      setEnabled(false);
    };
  }, []);
  if (!enabled) {
    return null;
  }
  return <Droppable {...props}>{children}</Droppable>;
};
