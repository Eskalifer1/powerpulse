"use client";

import { styled } from "styled-components";

type PropsType = {
  $type: "primary" | "secondary" | "text" | "accent";
};

export const HorizontalLine = styled.hr<PropsType>`
  border: 0;
  border-radius: 2px;
  background-color: ${(props) =>
    props.$type === "primary"
      ? "var(--primary-color)"
      : props.$type === "secondary"
      ? "var(--secondary-color)"
      : props.$type === "text"
      ? "var(--text-color)"
      : "var(--accent-color)"};
  min-height: 3px;
  width: 100%;
  z-index: 4;
  margin-block-start: 1rem;
`;
