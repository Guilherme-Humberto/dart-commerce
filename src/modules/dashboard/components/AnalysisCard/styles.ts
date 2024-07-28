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

  div:first-child {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

export const Title = styled.strong`
  font-size: 18px;
  font-weight: 500;
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  color: ${({ theme }) => theme.colors.black[400]};
`;

export const SubTitle = styled.span`
  font-weight: 400;
  font-size: 12px;
  font-family: ${({ theme }) => theme.fontFamily.secondary};
`;

export const Value = styled.span`
  font-size: 24px;
  font-weight: 700;
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  color: ${({ theme }) => theme.colors.black[400]};
`;
