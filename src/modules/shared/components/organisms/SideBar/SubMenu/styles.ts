import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;
export const SubMenuItem = styled.div`
  padding: 10px 0;
  transition: 0.5s;

  span {
    font-size: 14px;
  }

  &:before {
    content: "";
    display: none;
  }

  &:hover {
    padding-left: 10px;
    display: flex;
    align-items: center;
    gap: 10px;

    &:before {
      content: ">";
      display: flex;
      align-items: center;
    }
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 1.6rem;
  color: #5c5f6a;
`;
