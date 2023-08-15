"use client";

import { styled } from "styled-components";

export const InfoCardWrap = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
`;

export const InfoCardTextBlock = styled.div`
  padding-inline-start: 0.5rem;
  max-width: 100%;
  overflow: hidden;
`;

export const InfoCardImageWrap = styled.div`
  position: relative;
  min-width: var(--step-3);
  width: var(--step-3);
  height: var(--step-3);
`;

export const InfoCardTextBlockTitle = styled.h4`
  text-align: start;
  overflow-x: hidden;
  text-overflow: ellipsis;
`;

export const InfoCardTextBlockSubTitle = styled.p`
  overflow-x: hidden;
  text-overflow: ellipsis;
`;
