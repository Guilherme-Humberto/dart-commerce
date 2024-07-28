import styled from "styled-components";

export const Container = styled.main``;
export const Section = styled.section`
  height: 100vh;

  &.first-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Title = styled.h1`
  font-size: clamp(3rem, 3vw, 4rem);
  max-width: 780px;
  text-align: center;
  font-weight: 400;
  letter-spacing: -1.5px;

  span {
    padding: 0 20px;
    background-color: ${({ theme }) => theme.colors.primary[100]};
    color: ${({ theme }) => theme.colors.ligth[100]};
  }
`;
export const SubTitle = styled.h2`
  font-weight: 400;
  text-align: center;
  font-size: clamp(1.6rem, 3vw, 1.8rem);
  color: ${({ theme }) => theme.colors.fonts[200]};
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  max-width: 836px;
  line-height: 28px;
  margin: 20px 0 30px 0;
`;
