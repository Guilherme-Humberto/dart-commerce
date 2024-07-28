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
      </Styles.Container>
    </PanelLayout>
  );
};

export default Products;
