import React from "react";
import * as Styles from "./styles";
import { useRouter } from "next/router";

interface MenuItem {
  label: string;
  url: string;
  icon?: React.ComponentType;
  component?: React.ReactElement;
}

interface SideBarProps {
  options: MenuItem[];
}

const SideBar: React.FC<SideBarProps> = (props) => {
  const router = useRouter();
  const changePage = (url: string) => () => router.push(url);
  const findActivePage = (url: string) => router.pathname === url;

  return (
    <Styles.Container>
      <Styles.Header>
        <Styles.LogoImg src="/assets/logo-sidebar.png" />
        <Styles.Logo>Dart</Styles.Logo>
      </Styles.Header>
      <Styles.Center>
        <Styles.MenuOptions>
          {props.options.map((op, index) => (
            <Styles.MenuItem
              key={index}
              hasSubMenu={!!op.component}
              isActive={findActivePage(op.url)}
              onClick={op.component ? () => {} : changePage(op.url)}
            >
              {op.component ? (
                React.cloneElement(op.component, { isActive: true })
              ) : (
                <>
                  {op.icon && React.createElement(op.icon)}
                  <span>{op.label}</span>
                </>
              )}
            </Styles.MenuItem>
          ))}
        </Styles.MenuOptions>
      </Styles.Center>
      <Styles.Footer></Styles.Footer>
    </Styles.Container>
  );
};

export default SideBar;
