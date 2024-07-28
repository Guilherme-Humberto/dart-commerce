import React from "react";
import * as Styles from "./styles";
import { FeatherIcons } from "@/styles/global";

export type CalloutType = "warning" | "danger" | "info" | "success";

interface CalloutProps {
  type: CalloutType;
  className: string;
  content: string;
}

const Callout: React.FC<CalloutProps> = (props) => {
  return (
    <Styles.Container className={props.className} calloutType={props.type}>
      <FeatherIcons.FiAlertCircle />
      <Styles.Content>{props.content}</Styles.Content>
    </Styles.Container>
  );
};

export default Callout;
