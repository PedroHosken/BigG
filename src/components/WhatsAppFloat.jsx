import { FaWhatsapp } from "react-icons/fa";
import { profileData } from "../data/profileData";
import styles from "./WhatsAppFloat.module.css";

export default function WhatsAppFloat() {
  return (
    <a
      href={`https://wa.me/${profileData.contato.whatsapp}`}
      className={styles.float}
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
}
