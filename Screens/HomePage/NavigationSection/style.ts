"use client";

import { styled } from "styled-components";

export const NavigationSectionWrap = styled.section`
  margin-block-start: 1.5rem;
`;

export const NavigationSectionTitle = styled.h2``;

export const NavigationSectionButtonsWrap = styled.div`
  margin-block-start: 1rem;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 200px), 1fr));
  place-items: center;
  gap: var(--step-2);
`;
