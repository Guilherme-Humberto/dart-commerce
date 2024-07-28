export interface ITableData {
  id: number;
  name: string;
  description: string;
  price: number;
  descountPercentage: number;
  image: string;
  totalLikes: number;
  categories: string[];
  active: boolean;
  createdAt: Date;
}

export interface ITableModelAttr {
  sort: boolean;
  show: boolean;
  order: number;
  fixed: boolean;
  label: string;
  width?: number;
  render?: (value: {
    key: string;
    value: any;
    config: ITableModelAttr;
  }) => React.ReactElement;
}

export interface ITableModel {
  id: ITableModelAttr;
  name: ITableModelAttr;
  description: ITableModelAttr;
  price: ITableModelAttr;
  descountPercentage: ITableModelAttr;
  image: ITableModelAttr;
  totalLikes: ITableModelAttr;
  categories: ITableModelAttr;
  createdAt: ITableModelAttr;
}
