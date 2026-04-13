import { FaHatWizard, FaScroll, FaCertificate, FaGraduationCap } from "react-icons/fa";
import { profileData } from "../data/profileData";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import styles from "./Formacao.module.css";

const ICONS = {
  doutorado: FaHatWizard,
  mestrado: FaScroll,
  especializacao: FaCertificate,
  graduacao: FaGraduationCap,
};

function FormacaoCard({ item, delay }) {
  const [ref, isVisible] = useScrollAnimation();
  const Icon = ICONS[item.icone] || FaGraduationCap;

  return (
    <div
      ref={ref}
      className={`${styles.card} fade-in ${isVisible ? "visible" : ""}`}
      style={{ transitionDelay: `${delay * 0.1}s` }}
    >
      <div className={styles.icon}><Icon /></div>
      <h3>{item.grau}</h3>
      <p className={styles.curso}>{item.area}</p>
      <p className={styles.instituicao}>
        <a href={item.link} target="_blank" rel="noreferrer">{item.instituicao}</a>
      </p>
      <p className={styles.ano}>{item.ano}</p>
    </div>
  );
}

export default function Formacao() {
  return (
    <section className="section section-alt" id="formacao">
      <div className="container">
        <h2 className="section-title">Formação Acadêmica</h2>
        <div className="section-divider" />
        <div className={styles.grid}>
          {profileData.formacao.map((item, i) => (
            <FormacaoCard key={i} item={item} delay={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
