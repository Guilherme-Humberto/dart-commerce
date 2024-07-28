import { BoxForm } from "@/modules/products/pages/Create/styles";
import styled from "styled-components";

export const Container = styled.div`
  ${BoxForm}
`;

export const Form = styled.div`
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(2, 1fr);

  .especifications,
  .included-items,
  .warranty-details {
    grid-column: 1 / -1;
  }
`;
