"use client";

import styled from "styled-components";

export const OverlayingPopUpContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  padding: var(--step-1);

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 1;
`;

export const OverlayingPopUpOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background-color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
`;

export const OverlayingPopUpChildrenWrap = styled.div`
  z-index: 2;
`;
