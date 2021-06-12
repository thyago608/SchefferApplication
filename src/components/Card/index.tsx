import logo from "../../assets/logo-scheffer.png";
import "./styles.scss";

interface Props {
  title: string;
}

export function Card({ title }: Props) {
  return (
    <section>
      <header>
        <h1>
          <img src={logo} alt="logo" />
        </h1>
      </header>
      <span>{title}</span>
    </section>
  );
}
