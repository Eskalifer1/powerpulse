"use client";

import { styled } from "styled-components";

type PropsType = {
  $isDisabled?: boolean;
};

export const StyledTableWrap = styled.div<PropsType>`
  width: max(100%, 30rem);
  opacity: ${(props) => (props.$isDisabled ? 0.5 : 1)};
  ${(props) => props.$isDisabled && "pointer-events: none"}
`;

export const StyledTable = styled.table`
  width: 100%;
  border: 2px solid var(--text-color);
  margin-inline: auto;
  border-collapse: collapse;
  font-size: var(--fs-sm);
`;

export const StyledTableTh = styled.th`
  padding: 0.5rem;
  border: 1px solid var(--text-color);
`;

export const StyledTableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-inline: auto;
  width: 100%;
  background: var(--secondary-color);
  border: 2px solid var(--text-color);
  border-bottom: none;
  padding: 0.5rem;
  padding-left: 1.5rem;
`;

export const TableTh = styled.th`
  padding: 0.5rem;
  border: 1px solid var(--text-color);
`;

export const StyledTableTd = styled.td`
  padding: 0.5rem;
  text-align: center;
  border: 1px solid var(--text-color);
  width: 25%;
`;

export const StyledTableTr = styled.tr<{ $isDisabled?: boolean }>`
  opacity: ${(props) => (props.$isDisabled ? 0.5 : 1)};
  ${(props) => props.$isDisabled && "pointer-events: none"}
`;
