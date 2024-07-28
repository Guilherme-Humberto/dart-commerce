import React from "react";
import * as Styles from "./styles";
import { FormTitle } from "@/modules/products/pages/Create/styles";
import Input from "@/modules/shared/components/atoms/Input";
import InputGroup from "@/modules/shared/components/atoms/InputGroup";
import SelectForm from "@/modules/shared/components/atoms/Select";
import Callout from "@/modules/shared/components/molecules/Callout";

const WeightsDimensionsForm: React.FC = () => {
  return (
    <Styles.Container>
      <FormTitle>Peso e dimensões</FormTitle>
      <Callout
        className=""
        content="Preencha o peso e as medidas do produto já embalado para que o frete seja calculado de forma correta."
        type="info"
      />

      <Styles.Form>
        <InputGroup className="embalagem" label="Embalagem">
          <SelectForm
            value={null}
            options={[{ label: "Título do produto", value: "Código" }]}
            placeholder={"Selecione uma categoria"}
            setState={() => {}}
          />
        </InputGroup>
        <InputGroup className="peso" label="Peso">
          <Input placeholder={"Ex: Leite"} />
        </InputGroup>
        <InputGroup className="comprimento" label="Comprimento">
          <Input placeholder={"Ex: Leite"} />
        </InputGroup>
        <InputGroup className="largura" label="Largura">
          <Input placeholder={"Ex: Leite"} />
        </InputGroup>
        <InputGroup className="altura" label="Altura">
          <Input placeholder={"Ex: Leite"} />
        </InputGroup>
      </Styles.Form>
    </Styles.Container>
  );
};

export default WeightsDimensionsForm;
