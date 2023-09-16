"use client";

import { BiEditAlt, BiTrash } from "react-icons/bi";
import { styled } from "styled-components";

export const TableExerciseNavigationButtonWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

export const TableExerciseNavigationBiTrash = styled(BiTrash)`
  width: var(--fs-lg);
  height: var(--fs-lg);
`;

export const TableExerciseNavigationBiEditAlt = styled(BiEditAlt)`
  width: var(--fs-lg);
  height: var(--fs-lg);
`;
