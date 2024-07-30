import React from "react";
import * as Styles from "./styles";
import PanelLayout from "@/modules/shared/components/template/Layout";
import { ITableModelAttr } from "@/main/interfaces/tableInterfaces";
import Table from "@/modules/shared/components/molecules/Table";
import { mockProductList } from "../../data/mocks/mockProductList";
import Button from "@/modules/shared/components/atoms/Button";
import Input from "@/modules/shared/components/atoms/Input";
import { useProductsTableList } from "../../hooks/useProductsTableList";
import { useRouter } from "next/router";
import FeedBackPage from "../../components/molecules/FeedBackPage";

export type ProductTable<T = string> = {
  id: T;
  image: T;
  name: T;
  sku: T;
  price: T;
  stock: T;
  categories: T;
};

const Products: React.FC = () => {
  const router = useRouter();
  const { model } = useProductsTableList();

  return (
    <PanelLayout>
      <Styles.Container>
        <Styles.ProductsInfoContainer>
          <Styles.Title>Meus produtos</Styles.Title>
          <Styles.ProductsActionsContainer>
            <Input placeholder="Procurar produtos" />
            <Button
              variant="primary-dark"
              onClick={() => router.push("/panel/products/create")}
            >
              Adicionar produto
            </Button>
          </Styles.ProductsActionsContainer>
        </Styles.ProductsInfoContainer>
        {mockProductList.length === 0 ? (
          <FeedBackPage
            title="Chegou a hora de cadastrar seu primeiro produto!"
            subTitle="Clique no botão abaixo para começar o cadastro ou importe produtos através de uma planilha."
            buttonAction={[
              <Button variant={"primary-dark"} onClick={() => {}}>
                Novo Produto
              </Button>,
            ]}
          />
        ) : (
          <Styles.ProductsListContainer>
            <Table<
              ProductTable,
              ProductTable<ITableModelAttr> & {
                actions: ITableModelAttr;
              }
            >
              enableSection={true}
              data={mockProductList}
              dataModel={model}
            />
          </Styles.ProductsListContainer>
        )}
      </Styles.Container>
    </PanelLayout>
  );
};

export default Products;
