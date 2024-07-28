import { BoxForm } from "@/modules/products/pages/Create/styles";
import styled from "styled-components";

export const Container = styled.div`
  ${BoxForm}
`;

export const Form = styled.div`
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 20px;

  .embalagem {
    grid-column: 1 / 2;
  }

  .peso {
    grid-column: 2 / 4;
  }
`;
