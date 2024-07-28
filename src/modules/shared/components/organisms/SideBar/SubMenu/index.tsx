import React from "react";
import * as Styles from "./styles";
import AccordionItems from "../../../molecules/Accordion/AccodionsItems";
import { useRouter } from "next/router";

interface SubMenuProps {
  icon?: React.ComponentType;
  label: string;
  isActive?: boolean;
  data: {
    label: string;
    url: string;
  }[];
}

const SubMenu: React.FC<SubMenuProps> = (props) => {
  const router = useRouter();

  return (
    <Styles.Container>
      <AccordionItems
        data={[
          {
            title: (
              <Styles.Title>
                {props.icon && React.createElement(props.icon)}
                {props.label}
              </Styles.Title>
            ),
            content: props.data.map((item) => (
              <Styles.SubMenuItem onClick={() => router.push(item.url)}>
                <span>{item.label}</span>
              </Styles.SubMenuItem>
            )),
          },
        ]}
      />
    </Styles.Container>
  );
};

export default SubMenu;
