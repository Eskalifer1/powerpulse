"use client";
import { createSharedPathnamesNavigation } from "next-intl/navigation";

import styled from "styled-components";

type LocaleSwitcherLinkType = {
  $active: boolean;
};

export const LocaleSwitcherWrap = styled.div`
  border-radius: 0.25rem;
  border: 2px solid var(--text-color);
`;
const locales = ["en", "uk"] as const;
const { Link } = createSharedPathnamesNavigation({ locales });

export const LocaleSwitcherLink = styled(Link)<LocaleSwitcherLinkType>`
  padding-inline: 0.25rem;
  &:hover,
  &:focus {
    color: var(--primary-color);
  }
  ${(props) => props.$active && "color: var(--primary-color)"}
`;
