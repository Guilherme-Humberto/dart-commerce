import styled, { css, RuleSet } from "styled-components";
import { CalloutType } from ".";

const Warning = css`
  background-color: yellow;
`;
const Info = css`
  background-color: blue;
`;
const Danger = css`
  background-color: red;
`;
const Success = css`
  background-color: green;
`;

const variants: { [key: string]: RuleSet<object> } = {
  warning: Warning,
  danger: Danger,
  info: Info,
  success: Success,
};

export const Container = styled.div<{ calloutType: CalloutType }>`
  display: flex;
  gap: 24px;
  align-items: center;
  padding: 15px 20px;

  ${({ calloutType }) => variants[calloutType]}
`;

export const Content = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.ligth[600]};
`;
