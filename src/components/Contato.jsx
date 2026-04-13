import { FaEnvelope, FaMapMarkerAlt, FaGraduationCap, FaInstagram, FaYoutube } from "react-icons/fa";
import { profileData } from "../data/profileData";
import styles from "./Contato.module.css";

export default function Contato() {
  const { contato, social } = profileData;

  return (
    <section className="section" id="contato">
      <div className="container">
        <h2 className="section-title">Contato</h2>
        <div className="section-divider" />

        <div className={styles.grid}>
          <div className={styles.card}>
            <FaEnvelope className={styles.icon} />
            <h3>E-mail</h3>
            <a href={`mailto:${contato.email}`}>{contato.email}</a>
          </div>

          <div className={styles.card}>
            <FaInstagram className={styles.icon} />
            <h3>Instagram</h3>
            <a href={social.instagram} target="_blank" rel="noreferrer">
              @drgilmarreis
            </a>
          </div>

          <div className={styles.card}>
            <FaYoutube className={styles.icon} />
            <h3>YouTube</h3>
            <a href={social.youtube} target="_blank" rel="noreferrer">
              Gilmar Reis Academy
            </a>
          </div>
        </div>

        <div className={styles.bottomRow}>
          <div className={styles.card}>
            <FaMapMarkerAlt className={styles.icon} />
            <h3>Localização</h3>
            <p>{contato.localizacao}</p>
          </div>

          <div className={styles.card}>
            <FaGraduationCap className={styles.icon} />
            <h3>Academia Mineira de Medicina</h3>
            <a href={social.academiaMedicina} target="_blank" rel="noreferrer">
              Cadeira 55
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
