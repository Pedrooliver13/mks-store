// Packages
import styled from "styled-components";

export const CounterButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 95px;
  padding: 1rem;
  border-radius: 6px;
  gap: 10px;
  border: 1px solid ${({ theme }) => theme.colors["gray-200"]};

  svg {
    cursor: pointer;
    width: 14px;
    user-select: none;
  }
`;
