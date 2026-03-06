import React from "react";
import styles from "./TermsOfService.module.css";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations/translations";

const TermsOfService = () => {
  const { language } = useLanguage();
  const t = translations[language] || translations.EN;

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.title}>{t.footer.termsOfService}</h1>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.contentBox}>
          <h2 className={styles.heading}>{t.termsAndConditions.heading}</h2>
          <p className={styles.intro}>{t.termsAndConditions.intro}</p>
          <ul className={styles.list}>
            <li>{t.termsAndConditions.point1}</li>
            <li>{t.termsAndConditions.point2}</li>
            <li>{t.termsAndConditions.point3}</li>
            <li>{t.termsAndConditions.point4}</li>
            <li>{t.termsAndConditions.point5}</li>
            <li>{t.termsAndConditions.point6}</li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default TermsOfService;
