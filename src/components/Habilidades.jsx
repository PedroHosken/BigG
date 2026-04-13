import { FaChalkboardTeacher, FaMicroscope, FaStethoscope, FaUsers } from "react-icons/fa";
import { profileData } from "../data/profileData";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import styles from "./Habilidades.module.css";

const ICONS = {
  ensino: FaChalkboardTeacher,
  pesquisa: FaMicroscope,
  clinica: FaStethoscope,
  gestao: FaUsers,
};

function HabilidadeCard({ item, delay }) {
  const [ref, isVisible] = useScrollAnimation();
  const Icon = ICONS[item.icone] || FaUsers;

  return (
    <div
      ref={ref}
      className={`${styles.card} fade-in ${isVisible ? "visible" : ""}`}
      style={{ transitionDelay: `${delay * 0.1}s` }}
    >
      <div className={styles.icon}><Icon /></div>
      <h3>{item.titulo}</h3>
      <p>{item.descricao}</p>
    </div>
  );
}

export default function Habilidades() {
  return (
    <section className="section section-alt" id="habilidades">
      <div className="container">
        <h2 className="section-title">Habilidades Profissionais</h2>
        <div className="section-divider" />
        <div className={styles.grid}>
          {profileData.habilidades.map((item, i) => (
            <HabilidadeCard key={i} item={item} delay={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
