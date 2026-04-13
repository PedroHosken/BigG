import { FaInstagram, FaYoutube, FaGraduationCap } from "react-icons/fa";
import { profileData } from "../data/profileData";
import styles from "./Footer.module.css";

export default function Footer() {
  const { social } = profileData;

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.content}>
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
          <p>&copy; {new Date().getFullYear()} Dr. Gilmar Reis. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
