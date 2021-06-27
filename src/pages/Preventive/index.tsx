import { useEffect, WheelEvent } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../../components/Header";
import { Card } from "../../components/Card";
import "./styles.scss";

type PreventiveParams = {
  team: string;
};

export function Preventive() {
  function handleScrollMouse(event: any) {
    if (event.deltaY > 0) {
      event.target.scrollBy(300, 0);
    } else {
      event.target.scrollBy(-300, 0);
    }
  }

  useEffect(() => {
    const wrapperCardsCompleted = document.querySelector(
      ".wrapper-cards-preventive-completed"
    );

    wrapperCardsCompleted?.addEventListener("wheel", handleScrollMouse);

    return () => {
      wrapperCardsCompleted?.removeEventListener("wheel", handleScrollMouse);
    };
  }, []);

  return (
    <div id="page-preventive">
      <Header />
      <main className="main-preventive">
        <div className="preventive-completed">
          <h1>Preventivas Concluídas</h1>

          <div className="wrapper-cards-preventive-completed">
            <Card title="Ponto de Entrada 3" subtitle="AE - Sistema Azul" />
            <Card title="Berço de Entrada 1" subtitle="TE - Sistema Verde" />
            <Card title="Ponto de Entrada 3" subtitle="AE - Sistema Azul" />
            <Card title="Berço de Entrada 1" subtitle="TE - Sistema Verde" />
            <Card title="Ponto de Entrada 3" subtitle="AE - Sistema Azul" />
            <Card title="Berço de Entrada 1" subtitle="TE - Sistema Verde" />
          </div>
        </div>

        <div className="preventive-accomplish">
          <h1>Preventivas a realizar</h1>

          <div className="wrapper-cards-preventive-accomplish">
            <Card title="Ponto de Entrada 3" subtitle="AE - Sistema Azul" />
            <Card title="Berço de Entrada 1" subtitle="TE - Sistema Verde" />
            <Card
              title="Ponto de Entrada CX Cheia"
              subtitle="TE - Sistema Verde"
            />
            <Card title="Berço de Entrada 2" subtitle="AE - Sistema Azul" />
            <Card
              title="Portal de Rejeição de Cargas"
              subtitle="TE - Sistema Verde"
            />
            <Card title="Ponto de Entrega 3" subtitle="TE - Sistema Verde" />
            <Card
              title="Ponto de Entrada CX Cheia"
              subtitle="AE - Sistema Azul"
            />
            <Card title="Berço de Entrada 2" subtitle="AE - Sistema Azul" />
            <Card
              title="Portal de Rejeição de Cargas"
              subtitle="TE - Sistema Verde"
            />
            <Card title="Ponto de Entrega 3" subtitle="TE - Sistema Verde" />
            <Card
              title="Ponto de Entrada CX Cheia"
              subtitle="AE - Sistema Azul"
            />
            <Card title="Berço de Entrada 2" subtitle="TE - Sistema Verde" />
            <Card
              title="Portal de Rejeição de Cargas"
              subtitle="TE - Sistema Verde"
            />
            <Card title="Ponto de Entrega 3" subtitle="TE - Sistema Verde" />
          </div>
        </div>
      </main>
    </div>
  );
}
