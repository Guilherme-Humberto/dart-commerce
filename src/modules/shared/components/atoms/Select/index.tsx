import React from "react";
import * as Styles from "./styles";

interface ISelect {
  value: any;
  label: string;
}

interface Props {
  label?: string;
  value: ISelect | null;
  isMulti?: boolean;
  required?: boolean;
  disabled?: boolean;
  options: ISelect[];
  placeholder: string;
  onChange: any;
}

const SelectForm: React.FC<Props> = ({
  label,
  isMulti,
  required,
  options,
  disabled,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <Styles.Container disabled={disabled}>
      {label && <Styles.Label>{label}</Styles.Label>}
      <Styles.SelectComponent
        isMulti={isMulti}
        required={required}
        value={value?.label ? value : null}
        options={options}
        styles={Styles.customSelectStyles}
        placeholder={placeholder}
        onChange={onChange}
        isLoading={options.length == 0}
        isDisabled={options.length == 0}
      />
      {!disabled && (
        <input
          tabIndex={-1}
          autoComplete="off"
          style={{ opacity: 0, height: 0 }}
          value={String(value?.value)}
          required={required}
          onChange={() => null}
        />
      )}
    </Styles.Container>
  );
};

export default SelectForm;
