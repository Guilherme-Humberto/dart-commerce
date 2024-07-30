import React from "react";
import * as Styles from "./styles";
import { usePathname } from "next/navigation";

const Breadcrumbs: React.FC = () => {
  const pathname = usePathname();

  const crumbs = pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb, index) => {
      let currentLink = String(`/panel/${crumb}`);

      return (
        <Styles.Crumb key={index}>
          <Styles.CrumbLink href={`${currentLink}`}>{crumb}</Styles.CrumbLink>
        </Styles.Crumb>
      );
    });

  return <Styles.Container>{crumbs}</Styles.Container>;
};

export default Breadcrumbs;
