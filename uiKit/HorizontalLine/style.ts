"use client";

import { MarginBlockProps } from "@/types/Margin";
import { styled } from "styled-components";

interface PropsType extends MarginBlockProps {
  $type: "primary" | "secondary" | "text" | "accent" | "grey";
  $width?: string;
  $height?: string;
}

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
      : props.$type === "accent"
      ? "var(--accent-color)"
      : "#808080"};
  min-height: ${(props) => props.$height || "1px"};
  width: ${(props) => props.$width || "100%"};
  z-index: 4;
  margin-block-start: ${(props) => props.$marginTop || "0"};
  margin-block-end: ${(props) => props.$marginBottom || "0"};
  margin-inline: auto;
`;
