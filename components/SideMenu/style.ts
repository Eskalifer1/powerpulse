"use client";

import { styled } from "styled-components";

type PropsType = {
  $collapsed: boolean;
};

export const SideMenuWrap = styled.aside<PropsType>`
  display: flex;
  flex-direction: column;
  align-items: center;

  min-height: var(--height-screen);
  max-width: max-content;
  ${(props) =>
    props.$collapsed &&
    `
  max-width: var(--body-padding);
  .collaps {
    display: none;
  }
  `}
  padding: var(--step--2);
  background: var(--secondary-color);

  text-align: center;
`;

export const SideMenuWithBackground = styled.div<PropsType>`
  ${(props) =>
    props.$collapsed &&
    `.sideMenuBackground {
      display: none;
    }
    #registerButton {
      display: none;
    }`}
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  overflow-y: auto;
  overflow-x: hidden;
  min-height: var(--height-screen);
  max-width: max-content;
  padding-left: 1rem;
  z-index: 1;
`;
