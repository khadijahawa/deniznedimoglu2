import React from "react";
import { useTranslation } from "react-i18next";
import Badge from "react-bootstrap/Badge";
// import image1 from ".././utils/services/11.jpeg";
import image2 from ".././utils/services/13.jpeg";
import styles from "./style.module.css";

function MedicalTourism() {
  const { t } = useTranslation();

  return (
    <div className="container">
      <h1 className={`text-center my-4 py-4 ${styles.contactHeaderText}`}>
        {t("HealthTourismPage.header1")}
      </h1>
      <div className="d-flex align-items-center justify-content-around py-4 my-4 flex-sm-nowrap flex-wrap ">
        <img
          src={image2}
          alt="healthandturkey"
          className={styles.HealthtourismImage}
        />
        <div className="m-4">
          <div className="text-start text-muted">
            {t("HealthTourismPage.text1")}
          </div>
          <Badge bg="dark">
            <div>{t("HealthTourismPage.header2")}</div>
          </Badge>
          <div className="text-start text-muted">
            {t("HealthTourismPage.text2")}
          </div>
          <Badge bg="dark ">
            <div>{t("HealthTourismPage.header3")}</div>
          </Badge>
          <div className="text-start text-muted">
            {t("HealthTourismPage.text3")}
          </div>
        </div>
      </div>

      <div className="my-4 py-4 d-flex flex-wrap ">
        <Badge bg="dark" className="my-4">
          <div>{t("HealthTourismPage.header4")}</div>
        </Badge>
        <div className="text-start text-muted">
          {t("HealthTourismPage.text4")}
        </div>
      </div>
    </div>
  );
}

export default MedicalTourism;
