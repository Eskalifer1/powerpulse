"use client";

import { DefaultButton } from "@/uiKit/button/style";
import { BiTrash } from "react-icons/bi";
import { styled } from "styled-components";

export const TableExerciseNavigationButtonWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TableExerciseNavigationButton = styled(DefaultButton)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TableExerciseNavigationBiTrash = styled(BiTrash)`
  width: var(--fs-lg);
  height: var(--fs-lg);
`;
