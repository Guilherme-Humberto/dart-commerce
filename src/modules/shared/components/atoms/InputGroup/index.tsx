import React from "react";
import * as Styles from "./styles";

type InputGroupProps = {
  label?: string;
  error?: string;
  className: string;
  children: React.ReactNode;
  rightBtn?: React.ReactNode;
  leftBtn?: React.ReactNode;
};

const InputGroup: React.FC<InputGroupProps> = (props) => {
  return (
    <Styles.Container className={props.className}>
      {props?.label && <Styles.Label>{props.label}</Styles.Label>}
      <Styles.Wrapper>
        {props?.leftBtn && (
          <Styles.LeftBtnItem>{props.leftBtn}</Styles.LeftBtnItem>
        )}
        {props.children}
        {props?.rightBtn && (
          <Styles.RightBtnItem>{props.rightBtn}</Styles.RightBtnItem>
        )}
      </Styles.Wrapper>
      {props?.error && <Styles.ErrorMessage>{props.error}</Styles.ErrorMessage>}
    </Styles.Container>
  );
};

export default InputGroup;
