"use client";

import { FC, useEffect, useState } from "react";
import ReactDOM from "react-dom";

interface PropsType {
  children: any;
}

const Portal: FC<PropsType> = ({ children }) => {
  const [container] = useState(() => document.createElement("div"));

  useEffect(() => {
    document.body.appendChild(container);
    return () => {
      document.body.removeChild(container);
    };
  }, []);

  return ReactDOM.createPortal(children, container);
};

export default Portal;
