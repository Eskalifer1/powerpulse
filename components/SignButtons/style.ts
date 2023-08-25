"use client";

import { mediaQueries } from "@/utils/media";
import { styled } from "styled-components";

export const SignButtonsWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-block-start: 1.5rem;

  & :not(:first-child) {
    margin-inline-start: 1rem;
  }

  ${mediaQueries.phoneSm} {
    flex-direction: column;

    & :not(:first-child) {
      margin-block-start: 1rem;
      margin-inline-start: 0;
    }
  }
`;

export const SignButtonDivider = styled.p``;
