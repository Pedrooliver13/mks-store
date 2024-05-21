// Packages
import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 218px;
  height: 380px;

  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  @media (max-width: ${({ theme }) => theme.breakpoints.SM}) {
    max-width: 251px;
  }

  img {
    width: 100%;
    object-fit: contain;
  }

  .info {
    padding: 1rem;

    &__header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 5px;
      height: 50px;
    }

    &__header h1 {
      font-size: 1.6rem;
      font-weight: 400;
    }

    &__header--price {
      font-size: 1.6rem;
      font-weight: 700;
      background-color: ${({ theme }) => theme.colors["gray-400"]};
      color: ${({ theme }) => theme.colors.white};
      padding: 0.5rem 1.5rem;
      border-radius: 5px;
    }

    &__description {
      flex: 1;

      align-items: center;
      font-size: 1rem;
      margin-top: 1rem;
      margin-bottom: 1rem;
      overflow-y: auto;
    }
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    margin-top: auto;

    background-color: ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.white};
    font-size: 1.4rem;
    font-weight: 700;
    padding: 0.8rem;
    border: none;
    border-radius: 0 0 8px 8px;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
      filter: brightness(110%);
    }
  }
`;
