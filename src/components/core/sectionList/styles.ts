// Packages
import styled from "styled-components";

export const SectionListContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  max-width: 938px;
  width: 100%;
  margin: 6rem auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.LG}) {
    max-width: 720px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.MD}) {
    max-width: 476px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.SM}) {
    justify-content: center;
  }
`;
