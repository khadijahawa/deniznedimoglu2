/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/iframe-has-title */
import { Layout, Space } from "antd";
import React from "react";
import style from "./style.module.css";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import logo from "../../utils/logo.png";
import certificate from "../../utils/certificate.jpeg";
import { Link } from "react-router-dom";

const Footer = () => {
  const { Footer } = Layout;
  const footerStyle = {
    color: "#fff",
    backgroundColor: "#002535",
  };
  const { t } = useTranslation();
  const emailAddress = "deniz@deniznedimoglu";
  const subject = "Hello";
  const body = "Hi there,";

  return (
    <div className={style.container}>
      <Space
        direction="vertical"
        style={{
          width: "100%",
        }}
      >
        <div>
          <Footer style={footerStyle} className={style.footerLayout}>
            <div className={style.logoSection}>
              <img src={logo} className={style.logo} />
              <div className={style.contactContent}>
                <div className={style.contact}>
                  <a href="tel:+905550333444" className={style.link}>
                    <FontAwesomeIcon icon={faLocationDot} />
                    &nbsp; &nbsp;
                    {t("footerContact.location")}
                  </a>
                  <a href="tel:+905550333444" className={style.link}>
                    <FontAwesomeIcon icon={faEnvelope} />
                    &nbsp; &nbsp;
                    {t("footerContact.email")}
                  </a>
                  <a href="tel:+905550333444" className={style.link}>
                    <FontAwesomeIcon icon={faPhone} />
                    &nbsp; &nbsp;
                    {t("footerContact.call")}
                  </a>
                  <a href="https://wa.me/00905550333444" className={style.link}>
                    <FontAwesomeIcon icon={faWhatsapp} />
                    &nbsp; &nbsp;
                    {t("footerContact.message")}
                  </a>
                </div>
                <div className={style.imgSection}>
                  <img
                    src={certificate}
                    alt="certificate"
                    style={{ width: "50%", height: "90%" }}
                    className="p-2"
                  />
                  <img
                    src={certificate}
                    alt="certificate"
                    style={{ width: "50%", height: "90%" }}
                    className="p-2 "
                  />
                </div>
              </div>
            </div>

            <div className={style.items}>
              <ul className={style.itemList}>
                <h3 className="my-4">{t("footerDetails.1")}</h3>
                <Link to="/" className={style.item}>
                  <li className={style.item}>{t("footerDetails.0")}</li>
                </Link>
                <Link to="/medical-tourism-in-turkey" className={style.item}>
                  <li className={style.item}>{t("footerDetails.2")}</li>
                </Link>
                <Link to="/contact-us" className={style.item}>
                  <li> {t("footerDetails.3")}</li>
                </Link>
                <Link
                  to={`https://wa.me/${+905550333444}`}
                  className={style.item}
                >
                  <li> {t("footerDetails.4")}</li>
                </Link>
                <Link to="/about" className={style.item}>
                  <li> {t("footerDetails.5")}</li>
                </Link>
              </ul>
              <ul className={style.itemList}>
                <h3 className="my-4">{t("footerHeaders.1")}</h3>
                <Link to="/accomedation" className={style.item}>
                  <li> {t("footerHeaders.Accommodations")}</li>
                </Link>
                <Link to="/translation" className={style.item}>
                  <li> {t("footerHeaders.Translation")}</li>
                </Link>
                <Link to="/flight-services" className={style.item}>
                  <li> {t("footerHeaders.Flight")}</li>
                </Link>
                <Link to="/transportation" className={style.item}>
                  <li> {t("footerHeaders.Transportation")}</li>
                </Link>
                <Link to="/insurance-services" className={style.item}>
                  <li> {t("footerHeaders.Insurance")}</li>
                </Link>
              </ul>
            </div>
            <div className={style.iframeContainer}>
              <iframe
                className={style.iframe}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3007.7717243023144!2d28.975665314560135!3d41.073982223329466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab7d2d161af6f%3A0x19e940a2fca5d1b8!2sdeniz%20nedimoglu%20health%20tourisim!5e0!3m2!1sen!2str!4v1677888833974!5m2!1sen!2str"
                height="300"
                frameBorder="0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Footer>
          <hr
            style={{
              backgroundColor: "#002535",
              height: "2px",
              border: "none",
            }}
          />
          <div className={style.navigation1}>
            <div className="">
              <h6 className="text-muted m-2">
                NEDIMOĞLU SAĞLIK TURİZMİ VE DANIŞMANLIK <br />
                TİC.LTD.ŞTİ
              </h6>
            </div>
            <div className={style.navigation2}>
              <h4>
                <a href="https://wa.me/00905550333444">
                  <FontAwesomeIcon
                    icon={faWhatsapp}
                    className={style.socialmedia}
                  />
                </a>
              </h4>
              <h4>
                <a href="https://www.instagram.com/dn_health_tourism/">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className={style.socialmedia}
                  />
                </a>
              </h4>
              <h4>
                <a
                  href={`mailto:${emailAddress}?subject=${subject}&body=${body}`}
                >
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className={style.socialmedia}
                  />
                </a>
              </h4>
              <h4>
                <a href="https://www.linkedin.com/in/dn-health-tourism-417986266">
                  <FontAwesomeIcon
                    icon={faLinkedinIn}
                    className={style.socialmedia}
                  />
                </a>
              </h4>
            </div>
          </div>
        </div>
      </Space>
    </div>
  );
};

export default Footer;
