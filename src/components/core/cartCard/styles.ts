// Packages
import styled, { css } from "styled-components";

export const cartCardContainer = styled.div`
  ${({ theme }) => css`
    position: relative;
    background-color: ${theme.colors.white};
    display: flex;
    height: 95px;
    max-width: 37.9rem;
    border-radius: 8px;
    padding: 2.5rem;
    gap: 20px;
    align-items: center;
    justify-content: center;
    margin: 0 auto;

    @media (max-width: ${theme.breakpoints.SM}) {
      display: flex;
      flex-direction: column;
      align-items: center;

      width: 250px;
      height: auto;
    }

    h1 {
      font-size: 1.3rem;
      font-weight: 400;

      @media (max-width: ${theme.breakpoints.SM}) {
        font-size: 1.6rem;
        text-align: center;
        width: 100%;
      }
    }

    .image {
      min-width: 46px;
      height: 57px;

      @media (max-width: ${theme.breakpoints.SM}) {
        height: auto;
      }
    }

    .dashboard {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: space-around;
      gap: 10px;

      @media (max-width: ${theme.breakpoints.SM}) {
        align-items: center;
        justify-content: space-between;
      }

      &__price {
        max-width: 80px;
        font-weight: 800;

        @media (max-width: ${theme.breakpoints.SM}) {
          max-width: fit-content;
          text-align: center;
          background-color: ${theme.colors["gray-400"]};
          color: ${theme.colors.white};
          padding: 0.5rem;
          border-radius: 5px;
        }
      }
    }

    .remove {
      position: absolute;
      top: -10px;
      right: -10px;
      width: 25px;
      height: 25px;

      display: flex;
      align-items: center;
      justify-content: center;
      background-color: ${theme.colors.black};
      color: ${theme.colors.white};
      border-radius: 50%;
      padding: 5px;
      cursor: pointer;
    }
  `}
`;
