"use client";

import { styled } from "styled-components";

export const HomePageWrap = styled.main`
  width: 100%;
  margin-inline: auto;

  section:not(:first-child) {
    max-width: var(--max-width);
    margin-inline: auto;
  }
`;
