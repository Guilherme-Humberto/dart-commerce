import React from "react";
import * as Styles from "./styles";

type InputGroupProps = {
  label?: string;
  error?: string;
  className: string;
  children: React.ReactNode;
};

const InputGroup: React.FC<InputGroupProps> = (props) => {
  return (
    <Styles.Container className={props.className}>
      {props?.label && <Styles.Label>{props.label}</Styles.Label>}
      {props.children}
      {props?.error && <Styles.ErrorMessage>{props.error}</Styles.ErrorMessage>}
    </Styles.Container>
  );
};

export default InputGroup;
