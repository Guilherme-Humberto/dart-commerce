import React from "react";
import * as Styles from "./styles";
import { FormTitle } from "@/modules/products/pages/Create/styles";
import { useFieldArray, useFormContext } from "react-hook-form";
import { FeatherIcons } from "@/styles/global";

const UploadImagesForm: React.FC = () => {
  const { control, setValue, watch: getValue } = useFormContext();
  const { fields, append, remove } = useFieldArray({ control, name: "images" });

  const onChangeFile =
    (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const [file] = (event?.target?.files || []) as File[];
      const fileBlob = URL.createObjectURL(file);

      append(`productImages.${index}.image`);
      setValue(`productImages.${index}.image`, fileBlob);
    };

  return (
    <Styles.Container>
      <FormTitle>Fotos do produto</FormTitle>

      <Styles.Form>
        <Styles.ListImages>
          {fields.map(
            (_, index) =>
              getValue(`productImages.${index}.image`) && (
                <Styles.ImageItem key={index}>
                  <img
                    src={getValue(`productImages.${index}.image`)}
                    alt={`imagem_${index}`}
                  />

                  <Styles.BtnRemoveImg onClick={() => remove(index)}>
                    <FeatherIcons.FiX />
                  </Styles.BtnRemoveImg>
                </Styles.ImageItem>
              )
          )}
          <Styles.ImageItem>
            <Styles.InputLabel htmlFor="upload">
              <FeatherIcons.FiUpload size={24} />
              <Styles.InputFile
                id="upload"
                onChange={onChangeFile(fields.length - 1 + 1)}
              />
            </Styles.InputLabel>
          </Styles.ImageItem>
        </Styles.ListImages>
      </Styles.Form>
    </Styles.Container>
  );
};

export default UploadImagesForm;
