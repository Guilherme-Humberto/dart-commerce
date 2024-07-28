import styled from "styled-components";

export const Container = styled.div`
  padding: 20px 70px;
`;
export const AnalysisContainer = styled.div`
  display: grid;
  gap: 14px;
  grid-template-columns: repeat(3, 1fr);

  .recentOrders {
    grid-column: 2 / -1;
  }
`;

export const ProductsListContainer = styled.div`
  padding: 20px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.backgrounds[300]};
  background-color: ${({ theme }) => theme.colors.backgrounds[100]};
`;

export const ProductsInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.backgrounds[300]};
  background-color: ${({ theme }) => theme.colors.backgrounds[100]};
  margin-bottom: 14px;
`;

export const Title = styled.h3`
  font-size: 24px;
  letter-spacing: -1px;
  font-weight: 600;
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  color: ${({ theme }) => theme.colors.black[400]};
`;

export const ProductsActionsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 180px;
  align-items: center;
  gap: 14px;
`;
