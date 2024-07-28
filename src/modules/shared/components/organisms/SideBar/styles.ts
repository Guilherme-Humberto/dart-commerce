import styled, { css } from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 100px 1fr 100px;
  height: 100%;
  border: 2px solid ${({ theme }) => theme.colors.backgrounds[300]};
  background-color: ${({ theme }) => theme.colors.backgrounds[100]};
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const Logo = styled.span`
  font-weight: bold;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.black[400]};
  font-family: ${({ theme }) => theme.fontFamily.tertiary};
`;

export const LogoImg = styled.img``;

export const Center = styled.div`
  padding: 10px;
`;

export const MenuOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const MenuItemActive = css`
  color: ${({ theme }) => theme.colors.black[400]};
  border-left-color: ${({ theme }) => theme.colors.black[400]};
  background-color: ${({ theme }) => theme.colors.backgrounds[200]};
`;

export const MenuItem = styled.span<{ hasSubMenu: boolean; isActive: boolean }>`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: ${({ hasSubMenu }) => (hasSubMenu ? 0 : 10)}px 20px;
  border-left: 4px solid transparent;

  ${({ isActive }) => isActive && MenuItemActive};

  &:hover {
    cursor: pointer;
    ${MenuItemActive};
  }
`;

export const Footer = styled.div``;
