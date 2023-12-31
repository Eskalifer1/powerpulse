"use client";

import { styled } from "styled-components";

export const BlackOpacitySideBarBackgroundWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: var(--height-screen);
  width: 100vw;
  background-color: rgb(0, 0, 0, 0.5);
  z-index: -1;
`;
