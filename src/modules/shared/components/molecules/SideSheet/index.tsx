import React from "react";
import * as Styles from "./styles";

interface SideSheetProps {
  children: JSX.Element;
}

const SideSheet: React.FC<SideSheetProps> = (props) => {
  return (
    <Styles.Container>
      <Styles.Content>{props.children}</Styles.Content>
    </Styles.Container>
  );
};

export default SideSheet;
