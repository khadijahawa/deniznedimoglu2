import React from "react";
import styles from "./style.module.css";
import about from ".././utils/docccc.png";
import { useTranslation } from "react-i18next";
import estesirius from ".././utils/estesirius2.jpeg";
import { Container, Row, Col, Image } from "react-bootstrap";
import Badge from "react-bootstrap/Badge";
import { useSpring, animated, config } from "react-spring";

function About() {
  const { t } = useTranslation();
  const animation = useSpring({
    from: { opacity: 0, transform: "translateY(50px) translateX(-50px)" },
    to: { opacity: 1, transform: "translateY(0) translateX(0)" },
    config: config.molasses,
  });

  return (
    <Container>
      <Row className="">
        <h1
          className={`text-center my-4 py-4 mt-4 pt-4 shadow-sm ${styles.contactHeaderText}`}
        >
          {t("aboutUsPage.header2")}
        </h1>

        <Col
          xs={12}
          md={4}
          className="d-flex align-items-center justify-content-center py-4 my-4"
        >
          <Image
            src={estesirius}
            className={`w-100 h-100 shadow-lg rounded m-4 p-4`}
            alt="about"
          />
        </Col>

        <Col
          xs={12}
          md={8}
          className="d-flex align-items-center justify-content-center"
        >
          <div className="mb-4">
            <h2 className="my-4 py-4 "> {t("aboutUsPage.11")}</h2>
            <p className="mb-4 pb-4">{t("aboutUsPage.text11")}</p>
          </div>
        </Col>
      </Row>
      <Row className={` mx-4 my-4 py-4 align-items-end`}>
        <h1
          className={`py-2 my-2 text-center shadow-sm ${styles.contactHeaderText}`}
        >
          {t("aboutUsPage.header1")}
        </h1>
        <Col xs={12} md={6} className="d-flex align-items-center">
          <Image
            src={about}
            className={`w-100 h-100 rounded my-2 ${styles.aboutImage}`}
            alt="about"
          />
        </Col>
        <Col xs={12} md={6} className="">
          <p className="fw-lighter">{t("aboutUsPage.text1")}</p>
          <animated.div style={animation}>
            <h4 className="text-center fw-bold shadow-lg py-2 rounded">
              {t("aboutUsPage.text3")}
            </h4>
          </animated.div>
          <ul>
            <Badge bg="light text-black">
              <li>{t("aboutUsPage.1")}</li>
            </Badge>
            <br />
            <br />

            <Badge bg="light text-black">
              <li>{t("aboutUsPage.2")}</li>
            </Badge>
            <br />
            <br />

            <Badge bg="light text-black">
              <li>{t("aboutUsPage.3")}</li>
            </Badge>
            <br />
            <br />

            <Badge bg="light text-black">
              <li>{t("aboutUsPage.4")}</li>
            </Badge>
          </ul>
          <p className="fw-lighter">{t("aboutUsPage.text2")}</p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
