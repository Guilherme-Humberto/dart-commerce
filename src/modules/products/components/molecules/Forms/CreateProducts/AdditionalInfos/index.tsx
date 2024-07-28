import React from "react";
import * as Styles from "./styles";
import InputGroup from "@/modules/shared/components/atoms/InputGroup";
import Input from "@/modules/shared/components/atoms/Input";
import { Controller, useFormContext } from "react-hook-form";

const AdditionalInfosForm: React.FC = () => {
  const { control, watch: getValue } = useFormContext();

  return (
    <Styles.Container>
      <Styles.Form>
        <InputGroup
          className="especifications"
          label="Especificações do produto"
        >
          <Controller
            control={control}
            render={({ field }) => (
              <Input placeholder={"Ex: Leite"} {...field} />
            )}
            name="additionalInfos.especifications"
          />
        </InputGroup>
        <InputGroup className="included-items" label="Itens inclusos">
          <Controller
            control={control}
            render={({ field }) => (
              <Input placeholder={"Ex: Leite"} {...field} />
            )}
            name="additionalInfos.includedItems"
          />
        </InputGroup>
        <InputGroup className="warranty-details" label="Detalhes da garantia">
          <Controller
            control={control}
            render={({ field }) => (
              <Input placeholder={"Ex: Leite"} {...field} />
            )}
            name="additionalInfos.warrantyDetails"
          />
        </InputGroup>
        <InputGroup className="external-link" label="Link externo">
          <Controller
            control={control}
            render={({ field }) => (
              <Input placeholder={"Ex: Leite"} {...field} />
            )}
            name="additionalInfos.externalLink"
          />
        </InputGroup>

        <InputGroup className="video-url" label="URL do vídeo">
          <Controller
            control={control}
            render={({ field }) => (
              <Input placeholder={"Ex: Leite"} {...field} />
            )}
            name="additionalInfos.videoUrl"
          />
        </InputGroup>

        {getValue("productType") === "1" && (
          <InputGroup className="download-url" label="URL de download">
            <Controller
              control={control}
              render={({ field }) => (
                <Input
                  placeholder="Link para download do produto digital após a compra"
                  {...field}
                />
              )}
              name="additionalInfos.downloadUrl"
            />
          </InputGroup>
        )}
      </Styles.Form>
    </Styles.Container>
  );
};

export default AdditionalInfosForm;
