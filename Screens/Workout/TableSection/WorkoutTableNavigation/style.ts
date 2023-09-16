"use client";

import { BiEditAlt, BiTrash } from "react-icons/bi";
import styled from "styled-components";

export const TableWorkoutNavigationBiTrash = styled(BiTrash)`
  width: var(--fs-lg);
  height: var(--fs-lg);
`;

export const TableWorkoutNavigationBiEditAlt = styled(BiEditAlt)`
  width: var(--fs-lg);
  height: var(--fs-lg);
`;

export const TableWorkoutNavigationButtonsWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
