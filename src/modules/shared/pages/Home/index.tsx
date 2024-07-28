import React from "react";
import * as Styles from "./styles";
import Button from "@/modules/shared/components/atoms/Button";
import HomeHeader from "@/modules/shared/components/molecules/Headers/HomeHeader";
import { useRouter } from "next/router";

const Home: React.FC = () => {
  const router = useRouter();

  const goToPanelPage = () => router.push("panel");

  return (
    <Styles.Container>
      <HomeHeader />
      <Styles.Section className="first-section">
        <Styles.Title>
          <span>Simplificando calculos</span> <br /> de precificação e métricas
          de negócio
        </Styles.Title>
        <Styles.SubTitle>
          A PrecifiQ simplifica os cálculos de precificação e métricas do seu
          negócio. Escolha uma calculadora, insira os dados e obtenha resultados
          precisos. Sem complicações
        </Styles.SubTitle>
        <Button variant={"primary"} onClick={goToPanelPage}>
          Vamos começar
        </Button>
      </Styles.Section>
    </Styles.Container>
  );
};

export default Home;
