import { FaInstagram, FaYoutube, FaGraduationCap } from "react-icons/fa";
import { Link } from "react-scroll";
import { profileData } from "../data/profileData";
import styles from "./Hero.module.css";

export default function Hero() {
  const { nome, titulo, subtitulo, foto, social } = profileData;

  return (
    <section className={styles.hero} id="hero">
      {foto && (
        <img src={foto} alt="" className={styles.bgImage} aria-hidden="true" />
      )}
      <div className={styles.overlay} />

      <div className={styles.content}>
        <p className={styles.greeting}>Olá, eu sou</p>
        <h1 className={styles.name}>{nome}</h1>
        <p className={styles.title}>{titulo}</p>
        <p className={styles.subtitle}>{subtitulo}</p>

        <div className={styles.actions}>
          <Link to="contato" smooth duration={600} offset={-70} className="btn btn-primary">
            Entre em Contato
          </Link>
          <Link to="formacao" smooth duration={600} offset={-70} className="btn btn-outline">
            Saiba Mais
          </Link>
        </div>

        <div className={styles.social}>
          <a href={social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href={social.youtube} target="_blank" rel="noreferrer" aria-label="YouTube">
            <FaYoutube />
          </a>
          <a href={social.academiaMedicina} target="_blank" rel="noreferrer" aria-label="Academia Mineira de Medicina">
            <FaGraduationCap />
          </a>
        </div>
      </div>
    </section>
  );
}
