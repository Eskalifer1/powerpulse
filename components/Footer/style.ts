"use client";

import Link from "next/link";
import { styled } from "styled-components";

export const FooterWrap = styled.footer`
  text-align: center;
  margin-block-start: auto;
  width: 100%;
  background: var(--secondary-color);
  padding: 0.25rem;
`;

export const SocialLinksOutsideWrap = styled.div`
  display: flex;
`;

export const SocialBlockLink = styled(Link)`
  &:hover {
    color: var(--text-color);
    opacity: 0.7;
  }
`;

export const FooterText = styled.p`
  padding: 0.25rem;
`;
