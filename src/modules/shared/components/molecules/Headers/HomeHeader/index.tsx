import React from "react";
import * as Styles from "./styles";
import Button from "@/modules/shared/components/atoms/Button";
import Menu from "../../Menu";
import { useMenu } from "@/modules/shared/hooks/useMenu";

const HomeHeader: React.FC = () => {
  const { openMenu, isOpen } = useMenu();

  return (
    <Styles.Container>
      <Styles.Logo>
        PrecifiQ
        <Styles.Flag>Beta</Styles.Flag>
      </Styles.Logo>
      <Styles.Buttons>
        <Button variant={"none"} onClick={() => {}}>
          Acessar
        </Button>
        <Button variant={"primary"} onClick={openMenu}>
          Criar conta
        </Button>
      </Styles.Buttons>

      <Menu isOpen={isOpen}>teste</Menu>
    </Styles.Container>
  );
};

export default HomeHeader;
