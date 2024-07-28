import React from "react";
import * as Styles from "./styles";
import Button, { ButtonProps } from "../../atoms/Button";

interface PageInfoProps {
  title: string;
  subTitle: string;
  buttons?: ButtonProps[];
}

const PageInfo: React.FC<PageInfoProps> = (props) => {
  return (
    <Styles.Container>
      {props.title && <Styles.Title>{props.title}</Styles.Title>}
      {props.subTitle && <Styles.SubTitle>{props.subTitle}</Styles.SubTitle>}
      {!!props.buttons?.length &&
        props.buttons.map((button, index) => (
          <Button key={index} {...button} styles={{ marginTop: 20 }}>
            {button.children}
          </Button>
        ))}
    </Styles.Container>
  );
};

export default PageInfo;
