"use client";

import styled from "styled-components";

type PropsType = {
  $marginTop: string;
};

export const HelpPageWrap = styled.main<PropsType>`
  display: flex;
  align-items: center;
  flex-direction: column;

  max-width: var(--max-width);

  margin-inline: auto;
  margin-block-start: ${(props) => props.$marginTop || "4rem"};
`;
