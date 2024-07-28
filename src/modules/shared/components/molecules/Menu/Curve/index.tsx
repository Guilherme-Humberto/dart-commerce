import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import * as Styles from "./styles";

const Curve = () => {
  const [curve, setCurve] = useState({});

  useEffect(() => {
    const initialPath = `M100 0 L200 0 L200 ${window?.innerHeight} L100 ${
      window?.innerHeight
    } Q-100 ${window?.innerHeight / 2} 100 0`;
    const targetPath = `M100 0 L200 0 L200 ${window?.innerHeight} L100 ${
      window?.innerHeight
    } Q100 ${window?.innerHeight / 2} 100 0`;

    setCurve({
      initial: { d: initialPath },
      enter: {
        d: targetPath,
        transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
      },
      exit: {
        d: initialPath,
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
      },
    });
  }, []);

  return (
    <Styles.Container>
      <motion.path
        variants={curve}
        initial="initial"
        animate="enter"
        exit="exit"
      ></motion.path>
    </Styles.Container>
  );
};

export default Curve;
