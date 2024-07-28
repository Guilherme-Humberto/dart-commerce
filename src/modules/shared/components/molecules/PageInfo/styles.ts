import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const Title = styled.h1`
  font-weight: 500;
  letter-spacing: -1px;
`;
export const SubTitle = styled.h2`
  font-size: 16px;
  font-weight: 400;
  max-width: 750px;
  line-height: 25px;
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  color: ${({ theme }) => theme.colors.fonts[200]};
`;
