"use client";

import styled from "styled-components";

type PropsType = {
  $size?: string;
};

export const Spacer = styled.div<PropsType>`
  margin-top: ${(props) => props.$size || "1rem"};
`;
