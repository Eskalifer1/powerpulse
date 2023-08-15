"use client";

import { styled } from "styled-components";

type PropsType = {
  $collapsed: boolean;
};

export const SideMenuButton = styled.button<PropsType>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--primary-color);
  margin-block-start: 1rem;

  transform: ${(props) => (props.$collapsed ? "none" : "rotate(180deg)")};
  padding: 0.125rem;
  border-radius: 50%;
  transition: all 0.5s;

  position: absolute;
  left: 0;
  top: 3rem;

  &:hover,
  &:focus {
    transform: ${(props) => (props.$collapsed ? "none" : "rotate(180deg)")};
  }

  z-index: 5;
`;
