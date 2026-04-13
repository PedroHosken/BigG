import { profileData } from "../data/profileData";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import styles from "./Sobre.module.css";

export default function Sobre() {
  const [ref, isVisible] = useScrollAnimation();
  const { sobre } = profileData;

  return (
    <section className="section" id="sobre">
      <div className="container">
        <h2 className="section-title">Sobre Mim</h2>
        <div className="section-divider" />
        <div
          ref={ref}
          className={`${styles.content} fade-in ${isVisible ? "visible" : ""}`}
        >
          {sobre.map((paragrafo, i) => (
            <p key={i}>{paragrafo}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
