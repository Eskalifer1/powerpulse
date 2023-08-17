"use client";

import { styled } from "styled-components";

export const PopUpOverlay = styled.dialog`
  max-width: min(500px, 90%);
  width: 100%;

  padding: var(--step-2);

  &::backdrop {
    background: rgba(0, 0, 0, 0.6);
  }
`;
