import styled from "styled-components";

export const Container = styled.header`
  position: fixed;
  top: 20px;
  left: 0;
  right: 0;
  max-width: 1440px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
`;
export const Logo = styled.span`
  position: relative;
  letter-spacing: -2px;
  font-size: 24px;
`;
export const Flag = styled.span`
  position: absolute;
  top: -5px;
  right: -65px;
  background-color: ${({ theme }) => theme.colors.backgrounds[200]};
  font-size: 16px;
  padding: 0 10px;
  border-radius: 50px;
  letter-spacing: normal;
`;
export const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
