import React from "react";
import { useTranslation } from "react-i18next";
import { Container, Row, Col, Image } from "react-bootstrap";
import styles from "./style.module.css";
import avangartlogo from ".././utils/avangartlogo.jpeg";
import avangart from ".././utils/avangart.jpg";
import Badge from "react-bootstrap/Badge";
import { Link } from "react-router-dom";

function DentalCorperate() {
  const { t } = useTranslation();

  return (
    <Container>
      <Row>
        <h1
          className={`text-center my-4 py-4 mt-4 pt-4 shadow-sm ${styles.contactHeaderText}`}
        >
          {t("dentalcorperation.1")}
        </h1>

        <Col
          xs={12}
          md={6}
          className="d-flex align-items-center justify-content-center py-4 my-4"
        >
          <Image
            src={avangartlogo}
            className={`w-100 h-100 shadow-lg rounded m-4 p-4`}
            alt="about"
          />
        </Col>

        <Col
          xs={12}
          md={6}
          className="d-flex align-items-center justify-content-center"
        >
          <div className="mb-4">
            <h2 className="my-4 py-4 "> {t("dentalcorperation.2")}</h2>
            <p className="mb-4 pb-4"> {t("dentalcorperation.3")}</p>
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
            src={avangart}
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
            <h4 className="my-4 py-4 "> {t("dentalcorperation.4")}</h4>
            <ul>
              <li> {t("dentalcorperation.5")}</li>
              <li> {t("dentalcorperation.6")}</li>
              <li> {t("dentalcorperation.7")}</li>
              <li> {t("dentalcorperation.8")}</li>
              <li> {t("dentalcorperation.9")}</li>
              <li> {t("dentalcorperation.10")}</li>
            </ul>
            <h4 className="my-4 py-4 ">
              <Link
                to={
                  "https://www.instagram.com/avangartclinic/?__coig_restricted=1"
                }
              >
                <Badge bg="dark">{t("dentalcorperation.11")}</Badge>
              </Link>
            </h4>
            <h4 className="">
              <Link to={"https://www.avangartclinic.com/"}>
                <Badge bg="dark">{t("dentalcorperation.12")}</Badge>
              </Link>
            </h4>
            <h6 className="my-4 py-4 ">
              <Link to="/dental" className={styles.DoctorPageServiceLink}>
                <Badge bg="warning" text="dark" pill>
                  {t("dentalcorperation.13")}
                </Badge>
              </Link>
            </h6>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default DentalCorperate;
