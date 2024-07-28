import styled from "styled-components";

export const Container = styled.svg`
  position: absolute;
  top: 0;
  left: -99px;
  width: 100px;
  height: 100%;
  fill: ${({ theme }) => theme.colors.backgrounds[200]};
  stroke: none;
`;
