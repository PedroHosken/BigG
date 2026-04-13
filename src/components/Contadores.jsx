import { useEffect, useRef, useState } from "react";
import { profileData } from "../data/profileData";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import styles from "./Contadores.module.css";

function CounterItem({ valor, label, delay }) {
  const [count, setCount] = useState(0);
  const [ref, isVisible] = useScrollAnimation(0.5);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isVisible || hasAnimated.current || valor === 0) return;
    hasAnimated.current = true;

    let current = 0;
    const increment = Math.max(1, Math.ceil(valor / 60));
    const stepTime = 1500 / (valor / increment);

    const timer = setInterval(() => {
      current += increment;
      if (current >= valor) {
        current = valor;
        clearInterval(timer);
      }
      setCount(current);
    }, stepTime);

    return () => clearInterval(timer);
  }, [isVisible, valor]);

  return (
    <div
      ref={ref}
      className={`${styles.item} fade-in ${isVisible ? "visible" : ""}`}
      style={{ transitionDelay: `${delay * 0.1}s` }}
    >
      <div className={styles.number}>{count.toLocaleString("pt-BR")}</div>
      <p className={styles.label}>{label}</p>
    </div>
  );
}

export default function Contadores() {
  return (
    <section className="section section-dark" id="numeros">
      <div className="container">
        <h2 className="section-title light">Em Números</h2>
        <div className="section-divider" />
        <div className={styles.grid}>
          {profileData.numeros.map((item, i) => (
            <CounterItem key={i} valor={item.valor} label={item.label} delay={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
