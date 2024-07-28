import React from "react";
import * as Styles from "./styles";
import PanelLayout from "@/modules/shared/components/template/Layout";
import AccordionItems from "@/modules/shared/components/molecules/Accordion/AccodionsItems";
import AdditionalInfosForm from "../../components/molecules/Forms/CreateProducts/AdditionalInfos";
import BasicInfosForm from "../../components/molecules/Forms/CreateProducts/BasicInfos";
import WeightsAndDimensionsForm from "../../components/molecules/Forms/CreateProducts/WeightsDimensions";
import PriceAndAvailabilityForm from "../../components/molecules/Forms/CreateProducts/PriceAvailability";
import z from "zod";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import UploadImagesForm from "../../components/molecules/Forms/CreateProducts/UploadImages";

const createUserFormSchema = z.object({
  productType: z.string(),
  additionalInfos: z.object({
    especifications: z.string(),
    includedItems: z.string(),
    warrantyDetails: z.string(),
    externalLink: z.string(),
    videoUrl: z.string(),
    downloadUrl: z.string(),
  }),
});

const CreateProduct: React.FC = () => {
  const form = useForm<z.infer<typeof createUserFormSchema>>({
    resolver: zodResolver(createUserFormSchema),
    defaultValues: {
      productType: "2",
    },
  });

  const { watch: getValue } = form;

  return (
    <PanelLayout>
      <Styles.Container>
        <FormProvider {...form}>
          <BasicInfosForm />

          <Styles.AdditionalInfosContainer>
            <AccordionItems
              data={[
                {
                  title: "Informações adicionais",
                  content: <AdditionalInfosForm />,
                },
              ]}
            />
          </Styles.AdditionalInfosContainer>

          {getValue("productType") === "1" && <WeightsAndDimensionsForm />}
          <PriceAndAvailabilityForm />
          <UploadImagesForm />
        </FormProvider>
      </Styles.Container>
    </PanelLayout>
  );
};

export default CreateProduct;
