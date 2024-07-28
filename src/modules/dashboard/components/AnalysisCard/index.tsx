import React from "react";
import * as Styles from "./styles";

interface AnalysisCardProps {
  title: string;
  subTitle?: string;
  value: string;
  chartElement?: React.ReactElement;
  className: string;
}

const AnalysisCard: React.FC<AnalysisCardProps> = (props) => {
  return (
    <Styles.Container className={props.className}>
      <Styles.Header>
        <div>
          <Styles.Title>{props.title}</Styles.Title>
          {props.subTitle && (
            <Styles.SubTitle>{props.subTitle}</Styles.SubTitle>
          )}
        </div>
        <Styles.Value> {props.value}</Styles.Value>
      </Styles.Header>

      {props.chartElement}
    </Styles.Container>
  );
};

export default AnalysisCard;
