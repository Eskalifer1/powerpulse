"use client";

import styled from "styled-components";

export const ModalWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  overflow: auto;
  background-color: #f8f8f8;
  max-width: min(550px, 90%);
  max-height: 90%;
  min-height: 15rem;
  width: 100%;

  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 1rem;
  padding: var(--step-1);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);

  z-index: 2;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
    margin-block: 10px;
    display: block;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }
`;
