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

    h1 {
      width: 90px;
      font-size: 13px;
      font-weight: 400;
    }

    .image {
      width: 46px;
      height: 57px;
    }

    .dashboard {
      flex: 1;
      display: flex;
      justify-content: space-around;
      gap: 20px;

      &__price {
        max-width: 80px;
        font-weight: 800;
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
