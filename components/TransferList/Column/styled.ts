"use client";

import { styled } from "styled-components";

export const TransferListColumnWrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  border: 2px solid var(--text-color);

  border-radius: 0.25rem;
  width: 100%;
  max-width: min(50%, 30rem);
  max-height: 45rem;
`;

export const TransferListColumnTitleWrap = styled.div`
  text-align: center;
  width: 100%;
  padding: var(--step--1);
`;

export const TransferListColumnTitle = styled.h4`
  font-size: var(--fs-lg);
`;

export const TransferListColumnDropableWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding-inline: var(--step--2);
  height: 25rem;
  width: 100%;
  padding-block-start: 2rem;
  padding-block-end: 4rem;
  overflow: auto;
  margin-top: auto;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    display: block;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }
`;
