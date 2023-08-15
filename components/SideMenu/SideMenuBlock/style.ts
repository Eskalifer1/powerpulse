"use client";

import Link from "next/link";
import { styled } from "styled-components";

export const SideMenuBlockWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow-x: hidden;
`;

export const SideMenuTitle = styled.p`
  margin-inline-start: 1rem;
`;

export const SideMenuList = styled.ul``;

export const SideMenuLink = styled(Link)`
  &:hover,
  &:focus {
    color: var(--primary-color);
  }
  display: flex;
  align-items: center;
`;

export const SideMenuItem = styled.li`
  &:not(:first-child) {
    margin-block-start: 0.5rem;
  }
`;

export const SideMenuIcon = styled.div``;
