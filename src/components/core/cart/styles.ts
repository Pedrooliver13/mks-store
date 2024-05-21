// Packages
import styled, { css, keyframes } from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";

const slideIn = keyframes`
  from {
    right: -500px;
  }

  to {
    right: 0;
  }
`;

const slideOut = keyframes`
  from {
    right: 0;
  }

  to {
    right: -500px;
  }
`;

export const Content = styled(Dialog.Content)`
  ${({ theme }) => css`
    position: fixed;
    right: 0;
    display: flex;
    flex-direction: column;

    max-width: 42rem;
    width: 100%;
    min-height: 100vh;
    border-radius: 6px;
    background-color: ${theme.colors.blue};
    box-shadow: rgba(0, 0, 0, 0.5) 0px 2px 8px 0px;

    &[data-state="open"] {
      animation: ${slideIn} 0.3s ease-in-out;
    }

    &[data-state="closed"] {
      animation: ${slideOut} 0.3s ease-in-out;
    }

    @media (max-width: ${theme.breakpoints.SM}) {
      max-width: 90%;
    }

    .title {
      padding: 2.5rem 3rem;
      color: ${theme.colors.white};
      margin-bottom: 1rem;

      @media (max-width: ${theme.breakpoints.SM}) {
        font-size: 2rem;
      }
    }

    img {
      height: 100%;
      object-fit: cover;
      overflow: hidden;
    }

    .description {
      display: flex;
      flex-direction: column;
      gap: 20px;
      padding: 2rem;
      margin-bottom: auto;
      max-height: 50vh;
      overflow-y: auto;
    }

    .total {
      display: flex;
      align-items: center;
      justify-content: space-between;

      margin-top: auto;
      padding: 2rem 4rem;
      font-size: 2.5rem;
      color: ${theme.colors.white};
      font-weight: 700;
    }

    button[type="submit"] {
      font-size: 2rem;
      padding: 2rem;
      height: 65.86px;

      cursor: pointer;
      background-color: ${theme.colors.black};
      color: ${theme.colors.white};
      border: none;
      width: 100%;
      transition: background-color 0.2s ease-in-out;

      &:disabled {
        cursor: not-allowed;
        opacity: 0.8;
      }

      &:not(:disabled):hover {
        background-color: ${theme.colors["gray-800"]};
      }
    }
  `};
`;

export const CloseButton = styled(Dialog.Close)`
  ${({ theme }) => css`
    position: absolute;
    background: transparent;
    border: 0;
    top: 2.5rem;
    right: 1.5rem;
    line-height: 0;
    cursor: pointer;
    color: ${theme.colors.white};
    background-color: ${theme.colors.black};
    padding: 0.5rem;
    border-radius: 50%;
  `}
`;
