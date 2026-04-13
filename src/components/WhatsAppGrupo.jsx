import { FaWhatsapp, FaUserGraduate } from "react-icons/fa";
import { profileData } from "../data/profileData";
import styles from "./WhatsAppGrupo.module.css";

export default function WhatsAppGrupo() {
  const { whatsappGrupo } = profileData;

  return (
    <section className={`section ${styles.section}`} id="comunidade">
      <div className="container">
        <div className={styles.card}>
          <div className={styles.icon}>
            <FaUserGraduate />
          </div>
          <h2 className={styles.title}>Comunidade Acadêmica</h2>
          <p className={styles.desc}>{whatsappGrupo.label}</p>
          <a
            href={whatsappGrupo.url}
            target="_blank"
            rel="noreferrer"
            className={styles.btn}
          >
            <FaWhatsapp /> Entrar no Grupo
          </a>
        </div>
      </div>
    </section>
  );
}
