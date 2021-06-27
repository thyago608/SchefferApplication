import React from "react";
import { useHistory } from "react-router-dom";
import { Header } from "../../components/Header";
import { Card } from "../../components/Card";
import "./styles.scss";

export function SelectTeam() {
  const history = useHistory();

  function handleNavigateToPreventive() {
    history.push("/selectTeam/one");
  }

  return (
    <div id="page-select-team">
      <Header />
      <main className="main-select-team">
        <Card title="Equipe 1" onClick={handleNavigateToPreventive} />
        <Card title="Equipe 2" />
        <Card title="Equipe 3" />
        <Card title="Equipe 4" />
      </main>
    </div>
  );
}
