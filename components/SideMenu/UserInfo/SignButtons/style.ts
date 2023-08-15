"use client";

import { DefaultButton } from "@/uiKit/button/style";
import { styled } from "styled-components";

export const SignButtonsWrap = styled.div`
  ${DefaultButton} {
    &:not(:first-child) {
      margin-block-start: 0.5rem;
    }
  }
`;
