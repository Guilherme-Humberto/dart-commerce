import { Theme } from "@/@types/styled";
import styled, { css, RuleSet } from "styled-components";

export type ButtonVariants =
  | "primary"
  | "primary-dark"
  | "secondary"
  | "outline"
  | "none";

const None = css`
  background-color: transparent;
  border: none;

  &:hover {
    background-color: ${(props) => props.theme.colors.backgrounds[200]};
  }
`;

const Outline = css`
  background-color: transparent;
  border: 1px solid ${(props) => props.theme.colors.black[300]};
`;

const Primary = css`
  color: ${(props) => props.theme.colors.ligth[100]};
  background-color: ${(props) => props.theme.colors.primary[100]};
  border: none;
`;

const PrimaryDark = css`
  ${Primary}
  background-color: ${(props) => props.theme.colors.black[400]};
`;

const Secondary = css`
  background-color: transparent;
  border: none;
`;

const variants: { [key: string]: RuleSet<object> } = {
  primary: Primary,
  "primary-dark": PrimaryDark,
  secondary: Secondary,
  outline: Outline,
  none: None,
};

export const Container = styled.button<{ variant: ButtonVariants }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: fit-content;
  padding: 0 15px;
  border-radius: 4px;
  outline: none;
  transition: 0.3s;
  font-weight: 500;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed !important;
  }

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }

  ${({ variant }) => variants[variant]}
`;
