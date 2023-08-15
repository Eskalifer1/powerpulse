"use client";

import Link from "next/link";
import { styled } from "styled-components";

export const LogoLink = styled(Link)`
  cursor: pointer;
`;

export const LogoWrap = styled.div`
  position: relative;
  width: clamp(3rem, calc(2.3rem + 3.48vw), 5rem);
  height: clamp(3rem, calc(2.3rem + 3.48vw), 5rem);
  min-height: clamp(3rem, calc(2.3rem + 3.48vw), 5rem);
`;
