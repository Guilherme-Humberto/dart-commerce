import React from "react";
import * as Styles from "./styles";
import { FormTitle } from "@/modules/products/pages/Create/styles";
import InputGroup from "@/modules/shared/components/atoms/InputGroup";
import Input from "@/modules/shared/components/atoms/Input";
import SelectRadio from "@/modules/shared/components/molecules/SelectRadio";
import { FeatherIcons } from "@/styles/global";
import { Controller, useFormContext } from "react-hook-form";

const PriceAvailabilityForm: React.FC = () => {
  const { control, watch: getValue, setValue } = useFormContext();

  return (
    <Styles.Container>
      <FormTitle>Preço e disponibilidade</FormTitle>

      <Styles.PriceAvailabilityForm>
        <InputGroup
          className="sell-price"
          label="Preço de venda"
          leftBtn={<FeatherIcons.FiDollarSign />}
        >
          <Controller
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                placeholder="Informe o preço de venda do produto"
              />
            )}
            name="priceAvailability.sellPrice"
          />
        </InputGroup>
        <InputGroup
          className="comparative-price"
          label="Preço comparativo"
          leftBtn={<FeatherIcons.FiDollarSign />}
        >
          <Controller
            control={control}
            render={({ field }) => (
              <Input {...field} placeholder="Informe o preço comparativo" />
            )}
            name="priceAvailability.comparativePrice"
          />
        </InputGroup>
        <InputGroup className="in-promotion" label="Produto em promoção">
          <SelectRadio
            className=""
            onChange={({ value }) =>
              setValue(`priceAvailability.inPromotion`, value)
            }
            value={getValue(`priceAvailability.inPromotion`)}
            data={[
              { value: "1", label: "Sim" },
              { value: "2", label: "Não" },
            ]}
          />
        </InputGroup>
      </Styles.PriceAvailabilityForm>

      {getValue(`priceAvailability.inPromotion`) === "1" && (
        <Styles.PromotionalPriceForm>
          <InputGroup
            className="promotional-price"
            label="Valor promocional"
            leftBtn={<FeatherIcons.FiDollarSign />}
          >
            <Controller
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  placeholder="Informe o preço de promocional do produto"
                />
              )}
              name="priceAvailability.promotionalPrice"
            />
          </InputGroup>
          <InputGroup className="sell-price" label="Início da promoção">
            <Input placeholder="Informe a data de inicio da promoção" />
          </InputGroup>
          <InputGroup className="sell-price" label="Validade da promoção">
            <Input placeholder="Informe a data de fim da promoção" />
          </InputGroup>
        </Styles.PromotionalPriceForm>
      )}
    </Styles.Container>
  );
};

export default PriceAvailabilityForm;
