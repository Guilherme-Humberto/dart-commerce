import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 260px 1fr;
  height: 100vh;
`;

export const Content = styled.div`
  overflow: auto;
`;

export const LoadingLayer = styled.div`
  display: grid;
  place-items: center;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 34px;
  }
`;

export const LoadingLayerTitle = styled.span`
  max-width: 500px;
  text-align: center;
  margin: 0 auto;
`;
