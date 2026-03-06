import React from "react";
import styles from "./Footer.module.css";
import logo from "../assets/Images/logo.png";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations/translations";

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language] || translations.EN;
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.leftContainer}>
          {/* Brand Section with Logo */}
          <div className={styles.brandSection}>
            <div className={styles.brandInfo}>
              <img src={logo} alt="MyTales Logo" className={styles.logo} />
              <div className={styles.brandText}>
                {/* <h3 className={styles.brandName}>MyTales</h3> */}
                <p className={styles.brandTagline}>{t.footer.brandTagline}</p>
              </div>
            </div>
            <p className={styles.brandDescription}>
              {t.footer.brandDescription}
            </p>
          </div>
        </div>


        <div className={styles.rightContainer}>
          <div className={styles.footerCol}>
            <h4>{t.footer.features}</h4>
            <ul>
              <li><a href="/voice">{t.footer.aiStoryGenerator}</a></li>
              <li><a href="/stories">{t.footer.aiStoryTelling}</a></li>
              <li><a href="/stories">{t.footer.freeAiStories}</a></li>
              <li><a href="/features">{t.footer.storyPrompts}</a></li>
            </ul>
          </div>

          {/* Use Cases */}
          <div className={styles.footerCol}>
            <h4>{t.footer.storyGenres}</h4>
            <ul>
              <li><a href="/stories">{t.footer.actionStories}</a></li>
              <li><a href="/stories">{t.footer.dramaStories}</a></li>
              <li><a href="/stories">{t.footer.scifiStories}</a></li>
              <li><a href="/stories">{t.footer.mysteryStories}</a></li>
              <li><a href="/stories">{t.footer.horrorStories}</a></li>
              <li><a href="/stories">{t.footer.romanticStories}</a></li>
            </ul>
          </div>
        </div>

        {/* Features */}

        {/* Company & Support */}
        {/* <div className={styles.footerCol}>
          <h4>Company</h4>
          <ul>
            <li><a href="/features">About Us</a></li>
            <li><a href="/features">How It Works</a></li>
            <li><a href="/faq">Contact Us</a></li>
            <li><a href="/faq">Support</a></li>
          </ul>
        </div> */}

        {/* Social */}
        {/* <div className={styles.footerCol}>
          <h4>Connect</h4>
          <ul>
            <li><a href="#" className={styles.socialLink}>Facebook</a></li>
            <li><a href="#" className={styles.socialLink}>Twitter</a></li>
            <li><a href="#" className={styles.socialLink}>Instagram</a></li>
            <li><a href="#" className={styles.socialLink}>LinkedIn</a></li>
          </ul>
        </div> */}
      </div>

      {/* Terms and Conditions */}
      <div className={styles.footerTerms}>
        <div className={styles.footerTermsInner}>
          <h4 className={styles.footerTermsHeading}>{t.termsAndConditions.heading}</h4>
          <p className={styles.footerTermsIntro}>{t.termsAndConditions.intro}</p>
          <ul className={styles.footerTermsList}>
            <li>{t.termsAndConditions.point1}</li>
            <li>{t.termsAndConditions.point2}</li>
            <li>{t.termsAndConditions.point3}</li>
            <li>{t.termsAndConditions.point4}</li>
            <li>{t.termsAndConditions.point5}</li>
            <li>{t.termsAndConditions.point6}</li>
          </ul>
        </div>
      </div>

      {/* Bottom Row */}
      <div className={styles.footerBottom}>
        <div className={styles.footerBottomContent}>
          <p className={styles.copyright}>© {new Date().getFullYear()} MyTales. {t.footer.copyright}</p>
          <div className={styles.bottomLinks}>
            <a href="/faq">{t.footer.privacyPolicy}</a>
            <a href="/terms">{t.footer.termsOfService}</a>
            <span className={styles.status}>
              <span className={styles.onlineDot}></span> {t.footer.allServicesOnline}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
