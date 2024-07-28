import React from "react";
import * as Styles from "./styles";
import Button, { ButtonProps } from "../../atoms/Button";
import cn from "classnames";

interface Props {
  floating?: boolean;
  logo: JSX.Element;
  navActions: Array<ButtonProps>;
  styles?: React.CSSProperties;
  className?: string;
}

const Header: React.FC<Props> = (props) => {
  return (
    <Styles.Container
      className={cn(props.className, `constraint`)}
      floating={!!props.floating}
      style={props.styles}
    >
      {props.logo}

      <Styles.Nav show={!!props.navActions.length}>
        {props.navActions.map((nav, index) => (
          <Styles.NavActions key={index}>
            <Button {...nav}>{nav.children}</Button>
          </Styles.NavActions>
        ))}
      </Styles.Nav>
    </Styles.Container>
  );
};

export default Header;
