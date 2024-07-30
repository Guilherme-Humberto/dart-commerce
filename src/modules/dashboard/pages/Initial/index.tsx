import React from "react";
import * as Styles from "./styles";
import AnalysisCard from "../../components/AnalysisCard";
import RecentOrders from "../../components/RecentOrders";
import PanelLayout from "@/modules/shared/components/template/Layout";

const Dashboard: React.FC = () => {
  return (
    <PanelLayout loadingLayer>
      <Styles.Container>
        <Styles.AnalysisContainer>
          <AnalysisCard
            title="Total Sales"
            subTitle="THIS MONTH"
            value={"$ 4,235"}
            className="totalSales"
          />
          <AnalysisCard
            title="Customers"
            subTitle="THIS MONTH"
            value={"2,571"}
            className="customers"
          />
          <AnalysisCard
            title="Orders"
            subTitle="THIS MONTH"
            value={"734"}
            className="orders"
          />
          <RecentOrders className="recentOrders" />
        </Styles.AnalysisContainer>
      </Styles.Container>
    </PanelLayout>
  );
};

export default Dashboard;
