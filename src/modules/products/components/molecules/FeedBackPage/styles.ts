import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;

  min-height: 500px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.backgrounds[100]};
`;
export const Title = styled.p`
  font-size: 22px;
  color: ${({ theme }) => theme.colors.black[400]};
`;
export const SubTitle = styled.span``;
export const Btns = styled.span``;
