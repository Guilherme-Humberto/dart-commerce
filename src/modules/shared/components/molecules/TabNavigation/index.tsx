import React from "react";
import * as Styles from "./styles";
import { useTabNavigation } from "@/modules/shared/hooks/useTabNavigation";

interface TabNavigationProps {
  page: string;
  options: Array<{ id: number; label: string }>;
  initialTabId: number;
}

const TabNavigation: React.FC<TabNavigationProps> = (props) => {
  const { tab, changeTab } = useTabNavigation(props.page, props.initialTabId);

  return (
    <Styles.Container>
      <Styles.NavOptions>
        {props.options.map((op, index) => (
          <Styles.OpItem
            key={index}
            isActive={op.id === tab[props.page]}
            onClick={() => changeTab(op.id)}
          >
            {op.label}
          </Styles.OpItem>
        ))}
      </Styles.NavOptions>
    </Styles.Container>
  );
};

export default TabNavigation;
