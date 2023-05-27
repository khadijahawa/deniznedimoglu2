import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Language from "../Language";
import style from "./style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const { i18n, t } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState("Language");

  const handleSelect = (key, event) => {
    i18n.changeLanguage(key);
    setSelectedLanguage(event.target.text);
  };
  const emailAddress = "deniz@deniznedimoglu";
  const subject = "Hello";
  const body = "Hi there,";

  return (
    <div className={style.header}>
      <div className={`px-1  ${style.callusParent}`}>
        <div className={style.callus}>
          <a href="tel:+905550333444" className={style.link}>
            <FontAwesomeIcon icon={faPhone} />
            &nbsp;
            {t("header1.1")}
          </a>
        </div>
        <div className={style.languageButton}>
          <Language
            selectedLanguage={selectedLanguage}
            onSelect={handleSelect}
          />
        </div>
      </div>
      <div className={style.colomn}>
        <nav className={style.navigation}>
          <h6>
            <a href="https://wa.me/00905550333444" className={style.link}>
              <FontAwesomeIcon
                icon={faWhatsapp}
                className={style.socialmedia}
              />
            </a>
          </h6>
          <h6>
            <a
              href="https://www.instagram.com/dn_health_tourism/"
              className={style.link}
            >
              <FontAwesomeIcon
                icon={faInstagram}
                className={style.socialmedia}
              />
            </a>
          </h6>

          <h6>
            <a
              href={`mailto:${emailAddress}?subject=${subject}&body=${body}`}
              className={style.link}
            >
              <FontAwesomeIcon
                icon={faEnvelope}
                className={style.socialmedia}
              />
            </a>
          </h6>

          <h6>
            <a
              href="https://www.linkedin.com/in/dn-health-tourism-417986266"
              className={style.link}
            >
              <FontAwesomeIcon
                icon={faLinkedinIn}
                className={style.socialmedia}
              />
            </a>
          </h6>
        </nav>
      </div>
    </div>
  );
}

export default Header;
