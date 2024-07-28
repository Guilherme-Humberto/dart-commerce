import React, { MouseEventHandler } from "react";
import * as Styles from "./styles";

export interface ButtonProps {
  type?: "button" | "reset" | "submit";
  isLoading?: boolean;
  isDisabled?: boolean;
  styles?: React.CSSProperties;
  variant: Styles.ButtonVariants;
  children: React.ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <Styles.Container
      type={props?.type ?? "button"}
      style={props.styles}
      variant={props.variant}
      onClick={props.onClick}
      disabled={props.isDisabled}
    >
      {props.children}
    </Styles.Container>
  );
};

export default Button;
