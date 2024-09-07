"use client";

import { styled } from "styled-components";

export const Input = styled.input`
  width: 100%;
  font-size: var(--fs-md);
  background: var(--primary-color);
  color: var(--secondary-color);
  border-radius: 0.35rem;
  padding: 1rem;
  outline: none;
  border: 1px solid var(--text-color);

  &::placeholder {
    opacity: 0.5;
    color: var(--secondary-color);
    font-family: inherit;
    font-size: var(--fs-md);
  }
`;

export const Label = styled.label`
  font-size: var(--fs-md);
  display: flex;
  align-items: center;
`;

export const InputErrorText = styled.p`
  color: red;
  margin-top: 0.25rem;
  letter-spacing: 1px;
`;

export const InputBlock = styled.div`
  &:not(:first-child) {
    margin-top: 1.25rem;
  }
`;
