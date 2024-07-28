import styled, { css } from "styled-components";

export const Container = styled.main`
  position: relative;
  width: 100%;
`;

export const Section = styled.section`
  position: relative;
  width: 100%;
`;

export const InnerSection = styled.div`
  position: relative;
  max-width: 500px;
  padding: 2rem;
`;

export const AccordionContainer = styled.div``;

export const AccordionInner = styled.div`
  position: relative;
  width: 100%;
  border: 1px solid black;
  border-radius: 4px;
`;

export const AccordionItem = styled.div`
  &:not(:last-child) {
    border-bottom: 1px solid black;
  }
`;

export const AccordionTitle = styled.h3`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 1rem 0;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  color: ${({ theme }) => theme.colors.black[400]};
`;

export const AccordionBody = styled.div<{
  active: boolean;
  bodyHeight: number;
}>`
  display: block;
  position: relative;
  padding: 0;
  margin: 0;
  height: 0;
  overflow: hidden;
  transition: height 0.3s;

  ${({ active, bodyHeight }) =>
    active &&
    css`
      height: ${bodyHeight}px;
    `}
`;

export const AccordionContent = styled.div`
  margin: 0;
  padding: 0 1rem 1rem;
  height: auto;
`;
