import React from "react";
import * as Styles from "./styles";
import { useAccordion } from "@/modules/shared/hooks/useAccordion";
import { FeatherIcons } from "@/styles/global";

interface AccordionItemsProps {
  data: {
    title: React.ReactElement | string;
    content: React.ReactElement | React.ReactElement[];
  }[];
}

const AccordionItems: React.FC<AccordionItemsProps> = ({ data }) => {
  const { refs, handleClick, bodyHeight, currentAccordion } = useAccordion(
    data.length
  );

  const isActive = (index: number) => currentAccordion === index;

  return data.map(({ title, content }, i) => (
    <Styles.AccordionItem key={`accordion-item-${i}`}>
      <Styles.AccordionTitle onClick={() => handleClick(i)}>
        {title}
        {!isActive(i) ? (
          <FeatherIcons.FiChevronDown />
        ) : (
          <FeatherIcons.FiChevronUp />
        )}
      </Styles.AccordionTitle>
      <Styles.AccordionBody active={isActive(i)} bodyHeight={bodyHeight}>
        <Styles.AccordionContent ref={refs[i]}>
          {content}
        </Styles.AccordionContent>
      </Styles.AccordionBody>
    </Styles.AccordionItem>
  ));
};

export default AccordionItems;
