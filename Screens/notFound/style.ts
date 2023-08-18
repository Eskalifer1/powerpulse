"use client";

import { styled } from "styled-components";

export const NotFoundImageWrap = styled.div`
  position: relative;
  aspect-ratio: 4 / 3;
  width: clamp(15rem, calc(7.17rem + 39.13vw), 37.5rem);
`;

export const NotFoundTitle = styled.h1`
  font-size: clamp(1.56rem, calc(0.56rem + 4.99vw), 4.43rem);
  text-align: center;
`;

export const NotFoundSubTitle = styled.h2`
  margin-block-start: 1rem;
  font-size: clamp(1.08rem, calc(0.47rem + 3.05vw), 2.83rem);
  text-align: center;
`;

export const NotFoundDescription = styled.p`
  text-align: center;
  margin-block-start: 0.5rem;
  font-size: clamp(0.85rem, calc(0.38rem + 1.85vw), 1.81rem);
  text-align: center;
`;
