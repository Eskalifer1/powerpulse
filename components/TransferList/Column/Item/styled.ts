"use client";

import { styled } from "styled-components";

type PropsType = {
  $isDraging: boolean;
};

export const TransferListItemWrap = styled.div<PropsType>`
  display: flex;
  align-items: center;
  flex: none;
  min-height: 4rem;
  background-color: var(--secondary-color);
  border-radius: 0.25rem;
  padding: var(--step--2);
  outline: 2px solid
    ${(props) =>
      props.$isDraging ? "var(--accent-color)" : "var(--primary-color)"};
  box-shadow: ${(props) =>
    props.$isDraging ? "0 5px 10px rgba(0, 0, 0, 0.6)" : "unset"};

  &:not(:first-child) {
    margin-top: 1rem;
  }
`;

export const TransferListItemText = styled.p`
  word-break: break-word;
`;
