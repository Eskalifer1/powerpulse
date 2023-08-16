"use client";

import styled from "styled-components";

export const SocialLinksWrap = styled.div`
  margin-block-start: 0.25rem;
  flex: 1;
`;

export const SocialLinkTitle = styled.h4``;

export const SocialLinkWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  &:not(:first-child) {
    margin-block-start: 0.5rem;
  }
`;
