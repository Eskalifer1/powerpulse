"use client";

import { mediaQueries } from "@/utils/media";
import styled from "styled-components";

export const StyledForm = styled.form`
  max-width: min(600px, 100% - 1rem);
  width: 100%;
  display: flex;
  flex-direction: column;

  margin-top: var(--step-3);
  margin-inline: auto;
`;

export const CreateFormButtonsWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 1.5rem;
  & :not(:first-child) {
    margin-left: 1rem;
  }

  ${mediaQueries.phoneMd} {
    flex-direction: column;
    & :not(:first-child) {
      margin-left: 0rem;
      margin-top: 1rem;
    }
  }
`;
