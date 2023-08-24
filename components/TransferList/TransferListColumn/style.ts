"use client";

import { styled } from "styled-components";

export const TransferListColumnWrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  border: 2px solid var(--text-color);

  border-radius: 0.25rem;
  width: 100%;
  max-width: 30rem;
  max-height: 45rem;
  overflow-y: auto;
`;

export const TransferListColumnTitleWrap = styled.div`
  text-align: center;
  width: 100%;
  padding: var(--step--1);
`;

export const TransferListColumnTitle = styled.h3``;

export const TransferListColumnDropableWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding-inline: var(--step--2);
  padding-bottom: var(--step--2);
  height: 25rem;
  width: 100%;
`;
