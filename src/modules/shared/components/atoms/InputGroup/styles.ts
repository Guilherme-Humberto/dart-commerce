import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
export const Label = styled.label``;
export const ErrorMessage = styled.p`
  font-size: 12px;
  margin-top: 8px;
  color: ${({ theme }) => theme.colors.danger[100]};
`;
