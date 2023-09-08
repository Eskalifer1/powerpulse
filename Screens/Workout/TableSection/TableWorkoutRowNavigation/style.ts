"use client";

import { BiMinusCircle, BiPlusCircle } from "react-icons/bi";
import { styled } from "styled-components";

export const TableWorkoutNavigationButtonWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

export const TableWorkoutNavigationBiPlusCircle = styled(BiPlusCircle)`
  width: var(--fs-lg);
  height: var(--fs-lg);
`;

export const TableWorkoutNavigationBiMinusCircle = styled(BiMinusCircle)`
  width: var(--fs-lg);
  height: var(--fs-lg);
`;
