import { useParams } from "react-router-dom";
import { Header } from "../../components/Header";
import { Card } from "../../components/Card";
import "./styles.scss";

type Params = {
  team: string;
};

export function Preventive() {
  const { team } = useParams<Params>();

  return (
    <div id="page" className="page-preventive">
      <div className="header-preventive">
        <Header />
      </div>
      <main className="main-preventive">
        <h1>Equipe {team}</h1>
        <div className="preventive-completed">
          <h2>Preventivas Concluídas</h2>

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
          <h2>Preventivas a realizar</h2>

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
