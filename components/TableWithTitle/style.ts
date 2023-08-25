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
`;

export const TableWithTitleTitle = styled.h2`
  width: 100%;
  min-width: 30rem;
  text-align: left;
  background: var(--secondary-color);
  border: 2px solid var(--text-color);
  border-bottom: none;
  padding-inline: 0.5rem;
`;
