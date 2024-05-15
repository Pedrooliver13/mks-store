"use client";

// Packages
import styled, { css } from "styled-components";

export const HeaderContainer = styled.header`
  ${({ theme }) => css`
    padding: 1rem 0;
    background-color: ${theme.colors.blue};

    .content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width: 1120px;
      width: 100%;
    }

    .logo {
      display: flex;
      align-items: flex-end;
      font-size: 3.2rem;
      gap: 5px;

      color: ${theme.colors.white};
      font-weight: 600;
      text-decoration: none;

      span {
        font-size: 1.6rem;
        line-height: 1.5;
        display: flex;
        font-weight: 400;
      }
    }

    .cart {
      display: flex;
      align-items: center;
      justify-content: space-around;
      background-color: ${theme.colors.white};
      color: ${theme.colors.black};
      border-radius: 8px;
      gap: 1rem;

      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
      padding-right: 1rem;
      padding-left: 1rem;

      span {
        color: ${theme.colors.black};
        font-size: 1.2rem;
        font-weight: 600;
      }
    }
  `}
`;
