"use client"

import styled from "styled-components";

export const CreateFormButtonsWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 1.5rem;
  & :not(:first-child) {
    margin-left: 1rem;
  }
`;
