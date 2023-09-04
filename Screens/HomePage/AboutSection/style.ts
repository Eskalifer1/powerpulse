"use client";

import { mediaQueries } from "@/utils/media";
import { styled } from "styled-components";

export const AboutWrap = styled.section`
  margin-block-start: 2rem;
`;

export const AboutTitle = styled.h2``;

export const AboutGrid = styled.div`
  margin-block-start: 1rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  text-align: center;

  ${mediaQueries.tabletSm} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${mediaQueries.phoneSm} {
    grid-template-columns: 1fr;
  }
`;
