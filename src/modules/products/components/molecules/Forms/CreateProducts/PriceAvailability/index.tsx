import React from "react";
import * as Styles from "./styles";
import { FormTitle } from "@/modules/products/pages/Create/styles";
import InputGroup from "@/modules/shared/components/atoms/InputGroup";
import Input from "@/modules/shared/components/atoms/Input";
import SelectRadio from "@/modules/shared/components/molecules/SelectRadio";

const PriceAvailabilityForm: React.FC = () => {
  return (
    <Styles.Container>
      <FormTitle>Preço e disponibilidade</FormTitle>

      <Styles.PriceAvailabilityForm>
        <InputGroup className="sell-price" label="Preço de venda">
          <Input placeholder={"Ex: Leite"} />
        </InputGroup>
        <InputGroup className="comparative-price" label="Preço comparativo">
          <Input placeholder={"Ex: Leite"} />
        </InputGroup>
        <InputGroup className="in-promotion" label="Produto em promoção">
          <SelectRadio
            className=""
            onChange={(value) => console.log(value)}
            value={1}
            data={[
              {
                value: 1,
                label: "Sim",
              },
              {
                value: 2,
                label: "Não",
              },
            ]}
          />
        </InputGroup>
      </Styles.PriceAvailabilityForm>
      <Styles.PromotionalPriceForm>
        <InputGroup className="sell-price" label="Valor promocional">
          <Input placeholder={"Ex: Leite"} />
        </InputGroup>
        <InputGroup className="sell-price" label="Início da promoção">
          <Input placeholder={"Ex: Leite"} />
        </InputGroup>
        <InputGroup className="sell-price" label="Validade da promoção">
          <Input placeholder={"Ex: Leite"} />
        </InputGroup>
      </Styles.PromotionalPriceForm>
    </Styles.Container>
  );
};

export default PriceAvailabilityForm;
