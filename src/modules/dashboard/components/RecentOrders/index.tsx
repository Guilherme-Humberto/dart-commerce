import React from "react";
import * as Styles from "./styles";
import Table from "@/modules/shared/components/molecules/Table";
import { ITableModelAttr } from "@/main/interfaces/tableInterfaces";
import { TableData } from "../../interfaces/recentOrders";
import { mockRecentOrders } from "../../data/mocks/recentOrderMock";

interface RecentOrdersProps {
  className: string;
}

const RecentOrders: React.FC<RecentOrdersProps> = (props) => {
  return (
    <Styles.Container className={props.className}>
      <Styles.Header>
        <Styles.Title>Recent Orders</Styles.Title>
      </Styles.Header>
      <Table<TableData, TableData<ITableModelAttr>>
        enableSection={false}
        data={mockRecentOrders}
        dataModel={{
          date: {
            sort: false,
            show: true,
            order: 1,
            fixed: false,
            label: "Date",
          },
          item: {
            sort: false,
            show: true,
            order: 2,
            fixed: false,
            label: "Produto",
          },
          total: {
            sort: false,
            show: true,
            order: 3,
            fixed: false,
            label: "Total",
          },
          status: {
            sort: false,
            show: true,
            order: 4,
            fixed: false,
            label: "Status",
          },
        }}
      />
    </Styles.Container>
  );
};

export default RecentOrders;
