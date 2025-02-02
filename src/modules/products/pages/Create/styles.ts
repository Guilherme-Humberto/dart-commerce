import styled, { css } from "styled-components";

export const BoxForm = css`
  margin: 10px 0;
  padding: 20px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.backgrounds[300]};
  background-color: ${({ theme }) => theme.colors.backgrounds[100]};
`;

export const Container = styled.div`
  padding: 20px 70px;
  margin-top: 80px;
`;

export const AdditionalInfosContainer = styled.div`
  ${BoxForm}
`;

export const FormTitle = styled.span`
  font-size: 18px;
  font-weight: 600;
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  color: ${({ theme }) => theme.colors.black[400]};
`;

export const FloatingFormHeader = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 260px;
  padding: 10px 85px;
  background-color: ${({ theme }) => theme.colors.backgrounds[100]};
  border-bottom: 1px solid ${({ theme }) => theme.colors.backgrounds[300]};

  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 2;
`;
