// Packages
import styled, { css } from "styled-components";

export const FooterContainer = styled.footer`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    text-align: center;

    max-width: 100%;
    margin-top: auto;
    padding: 1.6rem;

    background-color: ${theme.colors["gray-100"]};
    color: ${theme.colors["black"]};
  `}
`;
