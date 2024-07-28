import styled, { css } from "styled-components";

export const Container = styled.div`
  position: relative;

  &::after {
    position: absolute;
    bottom: -10px;
    display: block;
    content: "";
    width: 100%;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.backgrounds[200]};
  }
`;

export const NavOptions = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`;

const OpItemActive = css`
  color: ${({ theme }) => theme.colors.white[100]};
  &::after {
    height: 4px;
    background-color: ${({ theme }) => theme.colors.white[100]};
  }
`;

export const OpItem = styled.button<{ isActive: boolean }>`
  position: relative;
  transition: 0.3s;
  outline: none;
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.fonts[400]};

  &::after {
    position: absolute;
    transition: 0.3s;
    bottom: -10px;
    z-index: 1;
    display: block;
    content: "";
    width: 100%;
    height: 2px;
    border-radius: 50px;
    background-color: ${({ theme }) => theme.colors.backgrounds[200]};
  }

  ${({ isActive }) => isActive && OpItemActive};

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.white[100]};

    &::after {
      height: 4px;
      background-color: ${({ theme }) => theme.colors.white[100]};
    }
  }
`;
