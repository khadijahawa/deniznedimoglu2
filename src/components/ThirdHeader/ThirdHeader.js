import React, { useState } from "react";
import style from "./style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Badge from "react-bootstrap/Badge";

const ThirdHeader = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const { t } = useTranslation();

  return (
    <div className={style.thirdHeaderContainer}>
      <nav className={style.itemsParent}>
        {/* eslint-disable-next-line no-unused-vars */}
        {(isNavExpanded || screenWidth > 850) && (
          <div className={style.list}>
            <div className={style.items}>
              <Link to={`tel:${+905550333444}`} className={style.items1}>
                <div>
                  <FontAwesomeIcon
                    icon={faPhoneVolume}
                    className={style.icon}
                  />
                </div>
                <div>
                  <span>{t("header3.1")} </span>
                  <br />
                  <span>{t("header3.2")} </span>
                </div>
              </Link>
            </div>
            <div className={style.items}>
              <Link
                to={`https://wa.me/${+905550333444}`}
                className={style.items2}
              >
                <div>
                  <FontAwesomeIcon icon={faWhatsapp} className={style.icon} />
                </div>
                <div>
                  <span>{t("header3.1")} </span>
                  <br />
                  <span>{t("header3.3")} </span>
                </div>
              </Link>
            </div>

            <div className={style.items}>
              <Link to={`tel:${+905550333444}`} className={style.items2}>
                <Badge bg="dark">
                  <div className={style.button}>{t("header3.5")} </div>
                </Badge>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default ThirdHeader;
