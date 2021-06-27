import { useParams } from "react-router-dom";
import { Header } from "../../components/Header";
import logoImg from "../../assets/images/icon-scheffer-secundary.svg";
import "./styles.scss";

type Params = {
  preventive: string;
  local: string;
};

export function PreventiveSelected() {
  const { preventive, local } = useParams<Params>();

  return (
    <div id="page" className="page-preventive-selected">
      <Header />
      <main className="main-preventive-selected">
        <div className="box-preventive">
          <div className="container-image-preventive-selected">
            <img src={logoImg} alt="logo" />
          </div>
          <div className="container-info-preventive-selected">
            <h1>{preventive}</h1>
            <span>{local}</span>
            <a href="#">Ver detalhes</a>
          </div>
        </div>
      </main>
    </div>
  );
}
