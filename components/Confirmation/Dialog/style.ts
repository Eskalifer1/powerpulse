"use client";

import { styled } from "styled-components";

export const DialogWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  background-color: #f8f8f8;
  max-width: min(500px, 90%);
  max-height: 40rem;
  min-height: 15rem;
  width: 100%;

  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 1rem;
  padding: var(--step-1);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);

  z-index: 2;
  &::backdrop {
    background: rgba(0, 0, 0, 0.6);
  }
`;

export const DialogButtonsWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: auto;
  gap: 16px;

  & button {
    flex: 1;
  }
`;

export const DialogDescription = styled.p`
  padding-block: var(--step--1);
  font-size: var(--fs-md);
  margin-block: auto;
`;

export const DialogHeaderWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const DialogHeaderTitle = styled.h4`
  margin-block: auto;
  font-size: var(--fs-lg);
`;
