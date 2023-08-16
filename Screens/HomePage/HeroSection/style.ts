"use client";

import { mediaQueries } from "@/utils/media";
import { styled } from "styled-components";

export const HeroSectionWrap = styled.section``;

export const HeroImageWrap = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
`;

export const HeroSectionTextBlock = styled.div`
  position: absolute;
  padding-inline-start: var(--step--1);
  max-width: 55%;
  left: 0;
  top: 50%;
  transform: translateY(-50%);

  ${mediaQueries.phoneSm} {
    max-width: 65%;
  }
`;

export const HeroSectionTitle = styled.h1`
  font-size: var(--step-2);
`;

export const HeroSectionDescription = styled.p`
  margin-block-start: 0.5rem;
`;
