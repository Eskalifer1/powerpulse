"use client";

import { InfoCardTextBlock } from "@/uiKit/InfoCard/style";
import { styled } from "styled-components";
import { SideMenuTitle } from "./SideMenuBlock/style";

export const SideMenuWrap = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;

  transition: 0.5s;

  min-height: var(--height-screen);
  max-width: max-content;
  &:has([data-collapsed="true"]) {
    max-width: var(--body-padding);

    ${SideMenuTitle} {
      display: none;
    }
    ${InfoCardTextBlock} {
      display: none;
    }
  }
  padding: var(--step--2);
  background: var(--secondary-color);

  text-align: center;
`;

export const SideMenuWithBackground = styled.div`
  &:has([data-collapsed="true"]) {
    .sideMenuBackground {
      display: none;
    }
    #registerButton {
      display: none;
    }
  }

  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  overflow-y: auto;
  overflow-x: hidden;
  min-height: var(--height-screen);
  max-width: max-content;
  padding-left: 1rem;
  z-index: 10;
`;
