import React from "react";
import * as Styles from "./styles";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  placeholder: string;
};

const Input: React.FC<InputProps> = (props) => {
  return <Styles.Container {...props} placeholder={props.placeholder} />;
};

export default Input;
