"use client";

import styled from "styled-components";

export const TableTd = styled.td`
  padding: 0.5rem;
  text-align: center;
  border: 1px solid var(--text-color);
  width: 25%;
`;

export const TableTr = styled.tr<{ $isDisabled?: boolean }>`
  opacity: ${(props) => (props.$isDisabled ? 0.5 : 1)};
  ${(props) => props.$isDisabled && "pointer-events: none"}
`;
