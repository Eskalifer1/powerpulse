"use client";

import { styled } from "styled-components";

interface PropsType {
  $color?: string;
  $size?: string;
}

export const Loader = styled.div<PropsType>`
  margin-inline: auto;
  width: ${(props) => props.$size || "3rem"};
  height: ${(props) => props.$size || "3rem"};
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
