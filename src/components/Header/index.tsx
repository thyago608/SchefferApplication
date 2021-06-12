import logo from "../../assets/logo-scheffer-text.png";
import "./styles.scss";

export function Header() {
  return (
    <header>
      <div className="container-image">
        <img src={logo} alt="logo" />
      </div>
    </header>
  );
}
