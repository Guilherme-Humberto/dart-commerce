import { BoxForm } from "@/modules/products/pages/Create/styles";
import styled from "styled-components";

export const Container = styled.div`
  ${BoxForm}
`;

export const PriceAvailabilityForm = styled.div`
  display: grid;
  gap: 24px;
  align-items: flex-start;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 30px;

  .in-promotion {
    margin-bottom: 30px;
  }
`;

export const PromotionalPriceForm = styled.div`
  display: grid;
  gap: 24px;
  align-items: flex-start;
  grid-template-columns: repeat(3, 1fr);
`;
