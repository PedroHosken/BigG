import { FaAward } from "react-icons/fa";
import { profileData } from "../data/profileData";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import styles from "./Fellowships.module.css";

function FellowshipBadge({ item, delay }) {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`${styles.badge} fade-in ${isVisible ? "visible" : ""}`}
      style={{ transitionDelay: `${delay * 0.1}s` }}
    >
      <div className={styles.sigla}>{item.titulo}</div>
      <p className={styles.descricao}>{item.descricao}</p>
    </div>
  );
}

export default function Fellowships() {
  const { fellowships, residencias } = profileData;

  return (
    <section className="section" id="fellowships">
      <div className="container">
        <h2 className="section-title">Títulos & Residências</h2>
        <div className="section-divider" />

        <div className={styles.fellowGrid}>
          {fellowships.map((item, i) => (
            <FellowshipBadge key={i} item={item} delay={i} />
          ))}
        </div>

        <h3 className={styles.subTitle}>
          <FaAward /> Residências Médicas
        </h3>

        <div className={styles.residencias}>
          {residencias.map((item, i) => (
            <div key={i} className={styles.residenciaItem}>
              <span className={styles.periodo}>{item.periodo}</span>
              <strong>{item.area}</strong>
              <span className={styles.instituicao}>{item.instituicao}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
