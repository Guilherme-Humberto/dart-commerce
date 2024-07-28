import styled from "styled-components";

export const Container = styled.div`
  padding: 20px 70px;
`;
export const AnalysisContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(3, 1fr);

  .recentOrders {
    grid-column: 2 / -1;
  }
`;
