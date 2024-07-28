import styled from "styled-components";

export const Container = styled.input`
  width: 100%;
  border-radius: 5px;
  padding: 10px 20px;
  outline: none;
  font-size: 16px;
  background: ${({ theme }) => theme.colors.backgrounds[200]};
  border: 1px solid transparent;

  &::placeholder {
    color: ${({ theme }) => theme.colors.ligth[700]};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.backgrounds[200]};
  }
`;
