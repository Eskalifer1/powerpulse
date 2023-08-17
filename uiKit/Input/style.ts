"use client";

import { styled } from "styled-components";

export const Input = styled.input`
  font-size: var(--fs-md);
  background: var(--primary-color);
  color: var(--secondary-color);
  border-radius: 0.35rem;
  padding: 1rem;
  margin-top: 1.25rem;
  outline: none;
  border: 1px solid var(--text-color);

  &::placeholder {
    color: var(--secondary-color);
    font-family: inherit;
    font-size: var(--fs-md);
  }
`;

export const InputErrorText = styled.p`
  color: red;
  margin-top: 0.25rem;
  letter-spacing: 1px;
`;
