import { FaFlask, FaCheckCircle } from "react-icons/fa";
import { profileData } from "../data/profileData";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import styles from "./TogetherTrial.module.css";

export default function TogetherTrial() {
  const [ref, isVisible] = useScrollAnimation();
  const { destaquesTogeter } = profileData;

  return (
    <section className={`section ${styles.section}`} id="together">
      <div className="container">
        <div
          ref={ref}
          className={`${styles.wrapper} fade-in ${isVisible ? "visible" : ""}`}
        >
          <div className={styles.header}>
            <div className={styles.icon}><FaFlask /></div>
            <div>
              <h2 className={styles.title}>{destaquesTogeter.titulo}</h2>
              <p className={styles.subtitle}>{destaquesTogeter.descricao}</p>
            </div>
          </div>
          <ul className={styles.list}>
            {destaquesTogeter.conquistas.map((item, i) => (
              <li key={i}>
                <FaCheckCircle className={styles.check} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
