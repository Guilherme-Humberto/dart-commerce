import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div)`
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.backgrounds[200]};
  position: fixed;
  right: 0;
  top: 0;
  color: white;
  max-width: 50%;
`;

export const Body = styled.div`
  box-sizing: border-box;
  height: 100%;
  padding: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
