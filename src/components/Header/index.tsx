import logoImg from "../../assets/images/logo-scheffer.svg";
import "./styles.scss";

export function Header() {
  return (
    <header id="component-header">
      <div className="container-image-header">
        <img src={logoImg} alt="logo" />
      </div>
    </header>
  );
}
