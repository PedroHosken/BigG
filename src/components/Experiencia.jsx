import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { profileData } from "../data/profileData";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import styles from "./Experiencia.module.css";

function TimelineItem({ item, delay }) {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`${styles.item} slide-in ${isVisible ? "visible" : ""}`}
      style={{ transitionDelay: `${delay * 0.15}s` }}
    >
      <div className={styles.marker} />
      <div className={styles.card}>
        <span className={styles.date}>{item.periodo}</span>
        <h3 className={styles.cargo}>{item.cargo}</h3>
        <p className={styles.instituicao}>
          <a href={item.link} target="_blank" rel="noreferrer">{item.instituicao}</a>
        </p>
        <p className={styles.descricao}>{item.descricao}</p>
      </div>
    </div>
  );
}

export default function Experiencia() {
  const { experiencias } = profileData;
  const INITIAL_COUNT = 3;
  const [showAll, setShowAll] = useState(false);

  const visibleItems = showAll ? experiencias : experiencias.slice(0, INITIAL_COUNT);
  const hasMore = experiencias.length > INITIAL_COUNT;

  return (
    <section className="section" id="experiencia">
      <div className="container">
        <h2 className="section-title">Experiência Profissional</h2>
        <div className="section-divider" />
        <div className={styles.timeline}>
          {visibleItems.map((item, i) => (
            <TimelineItem key={i} item={item} delay={i} />
          ))}
        </div>
        {hasMore && !showAll && (
          <div className={styles.more}>
            <button className={styles.moreBtn} onClick={() => setShowAll(true)}>
              Mais <FaChevronDown />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
