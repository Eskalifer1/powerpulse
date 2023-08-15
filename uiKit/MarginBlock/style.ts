"use client";

import { styled } from "styled-components";

type PropsType = {
  $marginTop?: string;
  $marginLeft?: string;
  $marginRight?: string;
  $marginBottom?: string;
};

export const MarginBlock = styled.div<PropsType>`
  margin-top: ${(props) => props.$marginTop || "0"};
  margin-left: ${(props) => props.$marginLeft || "0"};
  margin-right: ${(props) => props.$marginRight || "0"};
  margin-bottom: ${(props) => props.$marginBottom || "0"};
`;
