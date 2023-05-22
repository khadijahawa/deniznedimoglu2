import React from "react";
import { useTranslation } from "react-i18next";
import { Container, Row, Col, Image } from "react-bootstrap";
import styles from "./style.module.css";
import estesirius from ".././utils/estesirius2.jpeg";
import dilekakin from ".././utils/dilekakin.jpg";
import Badge from "react-bootstrap/Badge";
import { Link } from "react-router-dom";

function Estesirius() {
  const { t } = useTranslation();

  return (
    <Container>
      <Row>
        <h1
          className={`text-center my-4 py-4 mt-4 pt-4 shadow-sm ${styles.contactHeaderText}`}
        >
          {t("estesirius.1")}
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
            <h2 className="my-4 py-4 "> {t("estesirius.2")}</h2>
            <p className="mb-4 pb-4">{t("estesirius.3")}</p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col
          xs={12}
          md={6}
          className="d-flex align-items-center justify-content-center py-4 my-4"
        >
          <Image
            src={dilekakin}
            className={`w-100 h-100 shadow-lg rounded m-4 p-4`}
            alt="about"
          />
        </Col>
        <Col
          xs={12}
          md={6}
          className="d-flex align-items-center justify-content-center py-4 my-4"
        >
          <div className="mb-4">
            <h4 className="my-4 py-4 "> {t("estesirius.4")}</h4>
            <ul>
              <li>{t("estesirius.5")}</li>
              <li>{t("estesirius.6")}</li>
              <li>{t("estesirius.7")}</li>
              <li>{t("estesirius.8")}</li>
              <li>{t("estesirius.9")}</li>
              <li>{t("estesirius.10")}</li>
              <li>{t("estesirius.11")}</li>
              <li>{t("estesirius.12")}</li>
              <li>{t("estesirius.13")}</li>
            </ul>
            <h4 className="my-4 py-4 ">
              <Link to={`tel:${+905550344488}`}>
                <Badge bg="dark">{t("estesirius.14")}</Badge>
              </Link>
            </h4>
            <h4 className="">
              <Link to={"https://drdilekakin.com/"}>
                <Badge bg="dark">{t("estesirius.15")}</Badge>
              </Link>
            </h4>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Estesirius;
