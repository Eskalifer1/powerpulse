"use client";

import { styled } from "styled-components";

type PropsType = {
  $marginTop?: string;
};

export const ItemsCenter = styled.div<PropsType>`
  text-align: center;
  margin-inline: auto;
  margin-top: ${(props) => props.$marginTop || "0"};
`;
