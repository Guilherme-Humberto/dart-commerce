import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.backgrounds[300]};
  background-color: ${({ theme }) => theme.colors.backgrounds[100]};
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 20px;
`;

export const Title = styled.strong`
  font-size: 18px;
  font-weight: 500;
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  color: ${({ theme }) => theme.colors.black[400]};
`;
