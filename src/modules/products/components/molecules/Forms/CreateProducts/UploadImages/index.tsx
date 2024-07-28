import React from "react";
import * as Styles from "./styles";
import { FormTitle } from "@/modules/products/pages/Create/styles";
import { useFieldArray, useFormContext } from "react-hook-form";
import { FeatherIcons } from "@/styles/global";

const UploadImagesForm: React.FC = () => {
  const { control } = useFormContext();
  const { fields } = useFieldArray({ control, name: "images" });

  const onChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.files);
  };

  return (
    <Styles.Container>
      <FormTitle>Fotos do produto</FormTitle>

      <Styles.Form>
        <Styles.ListImages>
          <Styles.ImageItem>
            <Styles.InputLabel htmlFor="upload">
              <FeatherIcons.FiUpload size={24} />
              <Styles.InputFile id="upload" onChange={onChangeFile} />
            </Styles.InputLabel>
          </Styles.ImageItem>

          {fields.map((field, index) => (
            <Styles.ImageItem key={index}>
              <Styles.InputLabel>
                <Styles.InputFile />
              </Styles.InputLabel>
            </Styles.ImageItem>
          ))}
        </Styles.ListImages>
      </Styles.Form>
    </Styles.Container>
  );
};

export default UploadImagesForm;
