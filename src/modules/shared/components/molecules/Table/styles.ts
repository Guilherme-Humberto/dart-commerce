import styled, { css } from "styled-components";

export const Container = styled.div<{
  dataLength: number;
  columnWidth: string;
}>`
  display: grid;
  grid-template-columns: ${({ columnWidth }) => columnWidth};
  grid-template-rows: repeat(1, 40px) repeat(
      ${({ dataLength }) => dataLength ?? 1},
      40px
    );

  overflow-x: auto;
`;
export const Thead = styled.div`
  display: contents;
`;
export const Tbody = styled.div<{ dataLength: number }>`
  display: grid;
  grid-template-rows: repeat(${({ dataLength }) => dataLength ?? 1}, 40px);
`;
export const Tr = styled.div``;
export const Th = styled.div<{ rowIndex: number; isFixed: boolean }>`
  position: sticky;
  padding-block: 0;
  padding-inline: 10px;
  align-content: center;
  background-color: inherit;
  white-space: nowrap;
  overflow: clip;
  text-overflow: ellipsis;
  outline: none;
  color: ${({ theme }) => theme.colors.fonts[200]};
  grid-area: ${({ rowIndex }) => `1 / ${rowIndex + 1} / 2 / ${rowIndex + 2}`};
  border-inline-end: 1px solid ${({ theme }) => theme.colors.backgrounds[300]};
  border-block-end: 1px solid ${({ theme }) => theme.colors.backgrounds[300]};

  ${({ isFixed, rowIndex }) =>
    isFixed &&
    css`
      z-index: 2;
      inset-inline-start: ${rowIndex === 0 ? 0 : rowIndex === 1 ? 35 : 85}px;
    `}
`;
export const Td = styled.div<{ rowIndex: number; isFixed: boolean }>`
  position: sticky;
  padding: 25px 8px;
  align-content: center;
  background-color: inherit;
  white-space: nowrap;
  overflow: clip;
  text-overflow: ellipsis;
  outline: none;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.fonts[100]};
  border-inline-end: 1px solid ${({ theme }) => theme.colors.backgrounds[300]};
  grid-column: ${({ rowIndex }) => `${rowIndex + 1} / ${rowIndex + 2}`};

  ${({ isFixed, rowIndex }) =>
    isFixed &&
    css`
      z-index: 2;
      inset-inline-start: ${rowIndex === 0 ? 0 : rowIndex === 1 ? 35 : 85}px;
    `}
`;
export const Value = styled.div<{ rowIndex: number }>`
  padding: 13px 8px;
  align-content: center;
  background-color: inherit;
  white-space: nowrap;
  overflow: clip;
  text-overflow: ellipsis;
  outline: none;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.fonts[100]};
  border-inline-end: 1px solid ${({ theme }) => theme.colors.backgrounds[300]};
  grid-column: ${({ rowIndex }) => `${rowIndex + 1} / ${rowIndex + 2}`};
`;
export const Image = styled.img`
  height: 40px;
  width: 40px;
  object-fit: cover;
`;
export const Tfooter = styled.div``;
export const Row = styled.div`
  display: contents;
`;
