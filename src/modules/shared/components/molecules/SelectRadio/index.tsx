import React from "react";
import * as Styles from "./styles";
import { FeatherIcons } from "@/styles/global";

type Value = string | number | boolean;
type DataItem = { label: string; value: Value };

interface SelectRadioOptions {
  className: string;
  value: Value;
  onChange: (value: DataItem) => void;
  data: DataItem[];
}

const SelectRadio: React.FC<SelectRadioOptions> = (props) => {
  const isChecked = (value: Value) => value === props.value;

  return (
    <Styles.Container className={props.className}>
      {props.data.map((data, index) => (
        <Styles.Option key={index} onClick={() => props.onChange(data)}>
          <Styles.CheckBox isChecked={isChecked(data.value)}>
            {isChecked(data.value) && (
              <FeatherIcons.FiCheck size={12} color="#ffffff" />
            )}
          </Styles.CheckBox>
          <Styles.Label>{data.label}</Styles.Label>
        </Styles.Option>
      ))}
    </Styles.Container>
  );
};

export default SelectRadio;
