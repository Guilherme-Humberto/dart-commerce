import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;
export const Option = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;
export const CheckBox = styled.div<{ isChecked: boolean }>`
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  background-color: ${({ theme, isChecked }) =>
    !isChecked ? theme.colors.ligth[600] : theme.colors.primary[100]};

  cursor: pointer;
`;
export const Label = styled.label``;
