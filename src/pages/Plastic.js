import React from "react";
import { useTranslation } from "react-i18next";
import { Container, Row, Col, Image } from "react-bootstrap";
import styles from "./style.module.css";
import tulunay from "../utils/tulunay.jpg";
import Badge from "react-bootstrap/Badge";
import { Link } from "react-router-dom";

function Plastic() {
  const { t } = useTranslation();

  return (
    <Container>
      <Row>
        <h1
          className={`text-center my-4 py-4 mt-4 pt-4 shadow-sm ${styles.contactHeaderText}`}
        >
          {t("plasticClinic.1")}
        </h1>

        <Col
          xs={12}
          md={6}
          className="d-flex align-items-center justify-content-center py-4 my-4"
        >
          <Image
            src={tulunay}
            className={`w-100 h-100 shadow-lg rounded m-4 `}
            alt="about"
          />
        </Col>

        <Col
          xs={12}
          md={6}
          className="d-flex align-items-center justify-content-center"
        >
          <div className="mb-4">
            <h2 className="my-4 py-4 "> {t("plasticClinic.2")}</h2>
            <p className="mb-4 pb-4">{t("plasticClinic.3")}</p>
            <div className="mb-4">
              <h4 className="my-4 py-4 "> {t("plasticClinic.4")}</h4>
              <ul>
                <li>{t("plasticClinic.5")}</li>
                <li>{t("plasticClinic.6")}</li>
                <li>{t("plasticClinic.7")}</li>
                <li>{t("plasticClinic.8")}</li>
              </ul>
              <h4 className="my-4 ">
                <Link to={`tel:${+905331292721}`}>
                  <Badge bg="dark">{t("plasticClinic.9")}</Badge>
                </Link>
              </h4>
              <h4 className="mb-4">
                <Link to={"https://www.drselahattintulunay.com/"}>
                  <Badge bg="dark">{t("plasticClinic.10")}</Badge>
                </Link>
              </h4>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Plastic;
