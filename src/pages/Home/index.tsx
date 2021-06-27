import { Header } from "../../components/Header";
import { Card } from "../../components/Card";
import { useHistory } from "react-router-dom";
import "./styles.scss";

export function Home() {
  const history = useHistory();

  function handleNavigateToSelectTeam() {
    history.push("/selectTeam");
  }

  return (
    <div id="page-home">
      <Header />
      <main className="main-home">
        <Card title="Preventivas" onClick={handleNavigateToSelectTeam} />
        <Card title="Cadastrar Preventivas" />
      </main>
    </div>
  );
}
