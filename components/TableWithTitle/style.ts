"use client";

import { styled } from "styled-components";

type PropsType = {
  $isDisabled?: boolean;
};

export const TableWithTitleWrap = styled.div<PropsType>`
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
  opacity: ${(props) => (props.$isDisabled ? 0.5 : 1)};
  ${(props) => props.$isDisabled && "pointer-events: none"}
`;

export const TableWithTitleTitleWrap = styled.div`
  min-width: 30rem;
  width: 100%;
  background: var(--secondary-color);
  border: 2px solid var(--text-color);
  border-bottom: none;
  padding: 0.5rem;
  padding-left: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
