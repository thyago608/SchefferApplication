import { Header } from "../../components/Header";
import logoImg from "../../assets/images/icon-scheffer-secundary.svg";
import "./styles.scss";

export function PreventiveSelected() {
  return (
    <div id="page" className="page-preventive-selected">
      <Header />
      <main className="main-preventive-selected">
        <div className="box-preventive">
          <div>
            <img src={logoImg} alt="logo" />
          </div>
          <div>
            <h1>Ponto de Entrega do 3</h1>
            <span>AE - Sistema Azul</span>
            <a href="#">Ver detalhes</a>
          </div>
        </div>
      </main>
    </div>
  );
}
