import format from "date-fns/format";
import ptBR from "date-fns/locale/pt-BR";
import styles from "./styles.module.scss";
import { ImHeadphones } from "react-icons/im";

export function Header() {
  const currentDate = format(new Date(), "EEEEEE, d MMMM", {
    locale: ptBR,
  });
  return (
    <header className={styles.headerContainer}>
      <strong>
        <ImHeadphones size="35" style={{ marginRight: "10px" }} />
        Podcastr
      </strong>
      <p>O melhor podcast para você ouvir, sempre</p>

      <span>{currentDate}</span>
    </header>
  );
}
