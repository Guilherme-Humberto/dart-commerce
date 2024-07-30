import Link from "next/link";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Crumb = styled.div`
  &:after {
    content: ">";
    margin-left: 10px;
  }

  &:last-child::after {
    display: none;
  }
`;

export const CrumbLink = styled(Link)`
  color: ${({ theme }) => theme.colors.black[400]};
`;
