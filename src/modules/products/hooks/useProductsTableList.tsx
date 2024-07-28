import { ITableModelAttr } from "@/main/interfaces/tableInterfaces";
import { ProductTable } from "../pages/Initial";

export const useProductsTableList = () => {
  const model: ProductTable<ITableModelAttr> & {
    actions: ITableModelAttr;
  } = {
    id: {
      sort: false,
      show: false,
      order: 1,
      fixed: false,
      label: "ID",
    },
    name: {
      sort: false,
      show: true,
      order: 2,
      fixed: true,
      label: "Nome",
    },
    image: {
      sort: false,
      show: true,
      order: 3,
      fixed: false,
      label: "Image",
      render: ({ value }) => (
        <img src={value} width={30} height={30} alt="Image" />
      ),
    },
    price: {
      sort: false,
      show: true,
      order: 4,
      fixed: false,
      label: "Preço",
    },
    categories: {
      sort: false,
      show: true,
      order: 5,
      fixed: false,
      label: "Categorias",
    },
    sku: {
      sort: false,
      show: true,
      order: 6,
      fixed: false,
      label: "SKU",
    },
    stock: {
      sort: false,
      show: true,
      order: 7,
      fixed: false,
      label: "Quantidade",
    },
    actions: {
      sort: false,
      show: true,
      order: 8,
      fixed: false,
      label: "Ações",
    },
  };

  return { model };
};
