import styled, { css } from "styled-components";
import ReactSelect, { GroupBase, StylesConfig } from "react-select";
import { theme } from "@/styles/themes";

export const customSelectStyles: StylesConfig<
  unknown,
  boolean,
  GroupBase<unknown>
> = {
  control: (base: any, state: any) => ({
    ...base,
    border: `1px solid transparent`,
    boxShadow: "none",
    fontSize: "16px",
    background: `${theme.colors.backgrounds[200]}`,
    padding: "5px 10px",
    borderRadius: "5px",
  }),
  singleValue: (provided, props) => ({
    ...provided,
    color: `${theme.colors.black[400]}`,
  }),
  menu: (provided, props) => ({
    ...provided,
    fontSize: "16px",
    border: "none",
    background: `${theme.colors.backgrounds[200]}`,
  }),
  option: (provided: any, _state: any) => ({
    ...provided,
    fontSize: "16px",
    border: "none",
    color: `${theme.colors.black[400]}`,
    background: `${theme.colors.backgrounds[200]}`,

    "&:hover": {
      cursor: "pointer",
      color: theme.colors.ligth[100],
      background: "blue",
    },
  }),
  placeholder: (provided: any, _state: any) => ({
    ...provided,
    fontSize: "16px",
    color: `${theme.colors.ligth[700]}`,
  }),
};

export const Container = styled.div<{ disabled?: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  height: 100%;

  ${(props) =>
    props.disabled &&
    css`
      pointer-events: none;
      opacity: 0.4;
    `}

  input {
    position: absolute;
  }
`;

export const SelectComponent = styled(ReactSelect)<{ margin?: string }>`
  margin: ${(props) => (props.margin ? props.margin : 0)};
`;

export const Label = styled.label``;
