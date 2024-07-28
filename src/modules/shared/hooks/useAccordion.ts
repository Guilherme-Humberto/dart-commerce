import { useRef, useState } from "react";

export const useAccordion = (numberOfItems: number) => {
  const [currentAccordion, setCurrentAccordion] = useState<number | null>(0);
  const [bodyHeight, setBodyHeight] = useState(0);

  const refs = Array.from({ length: numberOfItems }, () => useRef(null));

  const handleClick = (index: number) => {
    if (currentAccordion === index) {
      setCurrentAccordion(null);
      setBodyHeight(0);
    } else {
      const currentRef = refs[index].current as any;
      if (currentRef) {
        setBodyHeight(currentRef.scrollHeight);
        setCurrentAccordion(index);
      }
    }
  };

  return { refs, handleClick, currentAccordion, bodyHeight };
};
