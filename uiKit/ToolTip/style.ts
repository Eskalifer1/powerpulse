"use client";

import { styled } from "styled-components";

export const ToolTipWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const ToolTipText = styled.div`
  position: absolute;
  top: 100%;
  left: 0;

  width: max-content;
  max-width: 250px;

  padding: 1rem;
  background: rgba(0, 0, 0, 0.8);
  color: #fff;
  border-radius: 0.25rem;

  font-size: var(--fs-sm);
`;
