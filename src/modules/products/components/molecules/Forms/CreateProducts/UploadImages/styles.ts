import { BoxForm } from "@/modules/products/pages/Create/styles";
import styled from "styled-components";

export const Container = styled.div`
  ${BoxForm}
`;

export const Form = styled.div`
  margin-top: 24px;
`;
export const ListImages = styled.div``;
export const ImageItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.backgrounds[300]};
  width: 130px;
  height: 170px;
  border-radius: 4px;
`;
export const InputLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
  cursor: pointer;
`;
export const InputFile = styled.input.attrs({
  type: "file",
})`
  display: none;
`;
