"use client";

import { SizeType } from "@/types/SizeType";
import styled from "styled-components";

export interface DefaultButtonPropsType {
  $marginTop?: string;
  $type: "primary" | "secondary";
  $size: SizeType;
}

export const DefaultButton = styled.button<DefaultButtonPropsType>`
  border-radius: 0.5rem;
  padding: ${(props) =>
    props.$size === "sm"
      ? "0.5rem 1rem"
      : props.$size === "md"
      ? "0.75rem 1.5rem"
      : "1rem 2rem"};

  font-size: ${(props) =>
    props.$size === "sm"
      ? "var(--fs-sm)"
      : props.$size === "md"
      ? "var(--fs-md)"
      : "var(--fs-lg)"};
  ${(props) => props.$marginTop && `margin-top: ${props.$marginTop};`}

  color: var(--text-color);
  background-color: ${(props) =>
    props.$type === "primary"
      ? "var(--primary-color)"
      : "var(--secondary-color)"};

  &:hover {
    box-shadow: ${(props) =>
      props.$type === "primary"
        ? "var(--box-shadow) var(--primary-color)"
        : "var(--box-shadow) var(--secondary-color)"};
    transform: translate(0, -3px);
  }
`;
