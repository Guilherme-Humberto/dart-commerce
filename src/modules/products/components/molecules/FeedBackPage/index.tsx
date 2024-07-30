import React from "react";
import * as Styles from "./styles";

interface FeedBackPageProps {
  title: React.ReactNode;
  subTitle?: React.ReactNode;
  buttonAction?: React.ReactNode[];
}

const FeedBackPage: React.FC<FeedBackPageProps> = (props) => {
  return (
    <Styles.Container>
      {props.title && <Styles.Title>{props.title}</Styles.Title>}
      {props.subTitle && <Styles.SubTitle>{props.subTitle}</Styles.SubTitle>}

      {props?.buttonAction && (
        <Styles.Btns>{props.buttonAction.map((btn) => btn)}</Styles.Btns>
      )}
    </Styles.Container>
  );
};

export default FeedBackPage;
