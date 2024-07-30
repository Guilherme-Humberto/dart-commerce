import { BoxForm } from "@/modules/products/pages/Create/styles";
import styled from "styled-components";

export const Container = styled.div`
  ${BoxForm}
`;

export const Form = styled.div`
  margin-top: 24px;
`;
export const ListImages = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 24px;
`;
export const ImageItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.backgrounds[300]};
  width: 130px;
  height: 170px;
  border-radius: 4px;
  border: 2px solid ${({ theme }) => theme.colors.backgrounds[300]};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
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

export const BtnRemoveImg = styled.button`
  position: absolute;
  top: -15px;
  right: -15px;
  width: 30px;
  height: 30px;
  border-radius: 50px;

  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.5s;

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.ligth[100]};
    background-color: ${({ theme }) => theme.colors.black[400]};
  }
`;
