"use client";

import styled from "styled-components";

type LocaleSwitcherLinkType = {
  $active: boolean;
};

export const LocaleSwitcherWrap = styled.div`
  border-radius: 0.25rem;
  border: 2px solid var(--text-color);
`;

export const LocaleSwitcherLink = styled.span<LocaleSwitcherLinkType>`
  padding-inline: 0.25rem;
  &:hover,
  &:focus {
    color: var(--primary-color);
  }
  cursor: pointer;
  ${(props) => props.$active && "color: var(--primary-color)"}
`;
