import styled, { css } from "styled-components";

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

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const BtnItem = css`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 47px;
  width: 60px;
`;

export const LeftBtnItem = styled.div`
  ${BtnItem};
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  background-color: ${({ theme }) => theme.colors.backgrounds[300]};
`;

export const RightBtnItem = styled.div`
  ${BtnItem};
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  background-color: ${({ theme }) => theme.colors.backgrounds[300]};
`;
