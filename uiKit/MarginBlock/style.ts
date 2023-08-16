"use client";

import { MarginProps } from "@/types/Margin";
import { styled } from "styled-components";

export const MarginBlock = styled.div<MarginProps>`
  margin-top: ${(props) => props.$marginTop || "0"};
  margin-left: ${(props) => props.$marginLeft || "0"};
  margin-right: ${(props) => props.$marginRight || "0"};
  margin-bottom: ${(props) => props.$marginBottom || "0"};
`;
