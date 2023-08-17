"use client";

import { styled } from "styled-components";

export const SignUpStyledForm = styled.form`
  max-width: min(600px, 100% - 3rem);
  width: 100%;
  display: flex;
  flex-direction: column;

  margin-top: var(--step-3);
  margin-inline: auto;
`;

export const SignUpButtonsWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-block-start: 1.5rem;

  & :not(:first-child) {
    margin-inline-start: 1rem;
  }
`;
