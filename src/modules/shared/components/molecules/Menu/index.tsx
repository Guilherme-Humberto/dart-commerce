import React from "react";
import { menuSlide } from "./anim";
import Curve from "./Curve";
import * as Styles from "./styles";
import { AnimatePresence } from "framer-motion";

interface MenuProps {
  isOpen: boolean;
  children: React.ReactNode;
}

const Menu: React.FC<MenuProps> = (props) => {
  return (
    props.isOpen && (
      <AnimatePresence mode="wait">
        <Styles.Container
          variants={menuSlide}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <Styles.Body>{props.children}</Styles.Body>
          <Curve />
        </Styles.Container>
      </AnimatePresence>
    )
  );
};

export default Menu;
