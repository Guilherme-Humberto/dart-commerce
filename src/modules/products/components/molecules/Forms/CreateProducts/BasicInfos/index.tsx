import React from "react";
import * as Styles from "./styles";
import InputGroup from "@/modules/shared/components/atoms/InputGroup";
import Input from "@/modules/shared/components/atoms/Input";
import SelectForm from "@/modules/shared/components/atoms/Select";
import { FormTitle } from "@/modules/products/pages/Create/styles";
import SelectRadio from "@/modules/shared/components/molecules/SelectRadio";
import { Controller, useFormContext } from "react-hook-form";
import { productTypeOptions } from "@/modules/products/data/constants/productTypeOptions";

const BasicInfosForm: React.FC = () => {
  const { control, setValue, watch: getValue } = useFormContext();

  return (
    <Styles.Container>
      <FormTitle>Informações básicas</FormTitle>

      <Styles.Form>
        <InputGroup className="product-type" label="Tipo de produto">
          <SelectRadio
            className="product-type-select"
            onChange={({ value }) => setValue("productType", value)}
            value={getValue("productType")}
            data={productTypeOptions}
          />
        </InputGroup>
        <InputGroup className="title" label="Título do produto">
          <Controller
            control={control}
            render={({ field }) => (
              <Input placeholder={"Ex: Leite"} {...field} />
            )}
            name="title"
          />
        </InputGroup>

        <InputGroup className="code" label="Código">
          <Controller
            control={control}
            render={({ field }) => (
              <Input placeholder={"Informe um codigo"} {...field} />
            )}
            name="code"
          />
        </InputGroup>
        <InputGroup className="main-category" label="Categoria principal">
          <Controller
            control={control}
            render={({ field }) => (
              <SelectForm
                {...field}
                options={[{ label: "Título do produto", value: "Código" }]}
                placeholder="Selecione uma categoria"
              />
            )}
            name="mainCategory"
          />
        </InputGroup>
        <InputGroup className="sub-categories" label="Subcategorias">
          <Controller
            control={control}
            render={({ field }) => (
              <SelectForm
                {...field}
                options={[{ label: "Título do produto", value: "Código" }]}
                placeholder={"Escolha sub-categorias"}
                isMulti
              />
            )}
            name="subCategories"
          />
        </InputGroup>
        <InputGroup className="description" label="Descrição do produto">
          <Controller
            control={control}
            render={({ field }) => (
              <Input {...field} placeholder="Descrição do produto" />
            )}
            name="subCategories"
          />
        </InputGroup>
      </Styles.Form>
    </Styles.Container>
  );
};

export default BasicInfosForm;
