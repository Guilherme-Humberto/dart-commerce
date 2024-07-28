import styled, { css } from "styled-components";

const Floating = css`
  position: absolute;
  top: 20px;
  left: 0;
  right: 0;
`;

export const Container = styled.header<{ floating: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${({ floating }) => floating && Floating}
`;
export const Nav = styled.div<{ show: boolean }>`
  display: flex;
  align-items: center;
  gap: 16px;
`;
export const NavActions = styled.div``;
