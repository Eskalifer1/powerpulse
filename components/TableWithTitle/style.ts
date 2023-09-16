"use client";

import { styled } from "styled-components";

export const TableWithTitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-inline: auto;
  width: 100%;
  min-width: 30rem;
  &:not(:first-child) {
    margin-block-start: 3rem;
  }
`;

export const TableWithTitleTitleWrap = styled.div`
  min-width: 30rem;
  width: 100%;
  background: var(--secondary-color);
  border: 2px solid var(--text-color);
  border-bottom: none;
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
