"use client";

import { styled } from "styled-components";

export const SignUpButtonsWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-block-start: 1.5rem;

  & :not(:first-child) {
    margin-block-start: 1rem;
  }
`;

export const SignuUpButtonDivider = styled.p``;
