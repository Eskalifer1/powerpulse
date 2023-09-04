"use client";

import { styled } from "styled-components";

export const AboutItemWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AboutItemNumberWrap = styled.span`
  color: white;
  mix-blend-mode: darken;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
  font-size: var(--nav-links-size);
`;

export const AboutItemText = styled.p`
  margin-block-start: 1rem;
  display: flex;
  flex: 1;
  align-items: center;
`;
