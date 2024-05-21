"use client";

// Packages
import { ReactElement, ReactNode } from "react";

// Styles
import * as Styled from "./styles";

interface SectionListProps {
  children: ReactNode;
}

export const SectionList = ({ children }: SectionListProps): ReactElement => {
  return <Styled.SectionListContainer>{children}</Styled.SectionListContainer>;
};
