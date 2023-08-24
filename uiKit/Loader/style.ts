"use client";

import { MarginBlockProps } from "@/types/Margin";
import { styled } from "styled-components";

interface PropsType extends MarginBlockProps {
  $color?: string;
  $size?: string;
}

export const Loader = styled.div<PropsType>`
  margin-block-start: ${(props) => props.$marginTop || "2rem"};
  margin-block-end: ${(props) => props.$marginBottom || "2rem"};
  margin-inline: auto;
  width: ${(props) => props.$color || "3rem"};
  height: ${(props) => props.$color || "3rem"};
  border: 5px solid ${(props) => props.$color || "var(--text-color)"};
  border-bottom-color: transparent;
  border-radius: 50%;
  display: block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
