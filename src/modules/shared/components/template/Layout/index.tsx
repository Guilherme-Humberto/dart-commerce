import React from "react";
import * as Styles from "./styles";
import SideBar from "../../organisms/SideBar";
import { FeatherIcons } from "@/styles/global";
import SubMenu from "../../organisms/SideBar/SubMenu";

interface PanelLayoutProps {
  children: React.ReactElement;
}

const PanelLayout: React.FC<PanelLayoutProps> = (props) => {
  return (
    <Styles.Container>
      <SideBar
        options={[
          {
            icon: FeatherIcons.FiGrid,
            label: "Dashboard",
            url: "/panel",
          },
          {
            icon: FeatherIcons.FiShoppingBag,
            label: "Produtos",
            url: "",
            component: (
              <SubMenu
                label={"Produtos"}
                icon={FeatherIcons.FiShoppingBag}
                data={[
                  {
                    label: "Listagem",
                    url: "/panel/products",
                  },
                  {
                    label: "Categorias",
                    url: "",
                  },
                ]}
              />
            ),
          },
          {
            icon: FeatherIcons.FiShoppingCart,
            label: "Pedidos",
            url: "/dashboard",
          },
          {
            icon: FeatherIcons.FiUsers,
            label: "Clientes",
            url: "/dashboard",
          },
          {
            icon: FeatherIcons.FiStar,
            label: "Avaliações",
            url: "/dashboard",
          },
          {
            icon: FeatherIcons.FiSettings,
            label: "Configurações",
            url: "/dashboard",
          },
        ]}
      />
      <Styles.Content>{props.children}</Styles.Content>
    </Styles.Container>
  );
};

export default PanelLayout;
