import React from "react";
import { useTranslation } from "react-i18next";
import style from "./style.module.css";
import { Card } from "antd";
// import strechmarks from "../../utils/homePics/strechmarks.jpg";
import facemask3 from "../../utils/homePics/facemask3.jpg";

import homecard5 from "../../utils/homePics/homecard5.jpg";
import facemask4 from "../../utils/homePics/facemask4.jpg";
import porescleaning from "../../utils/homePics/porescleaning.jpg";
import homecard8 from "../../utils/homePics/homecard8.jpg";
import carbonpeeling from "../../utils/homePics/carbonpeeling.jpg";
import homecard7 from "../../utils/homePics/homecard7.jpg";
import facemask2 from "../../utils/homePics/facemask2.jpg";
import acne from "../../utils/homePics/acne.jpg";
import peeling from "../../utils/homePics/peeling.jpg";
import derma from "../../utils/homePics/derma.jpg";

function Skin() {
  const { t } = useTranslation();
  const { Meta } = Card;

  return (
    <div>
      <div>
        <h1 className={`py-4 my-4 fw-bold text-center shadow-sm`}>
          {t("skinPage.Services.Services")}
        </h1>
        <div
          className={`d-flex justify-content-evenly flex-wrap align-content-center ${style.services}`}
        >
          <Card
            className={style.card}
            cover={
              <img
                alt="example"
                src={acne}
                style={{
                  alignItems: "center",
                  height: "300px",
                  width: "300px",
                  objectFit: "cover",
                }}
              />
            }
          >
            <Meta title={t("skinPage.Services.1")} />
          </Card>
          <Card
            className={style.card}
            cover={
              <img
                alt="example"
                src={homecard5}
                style={{ height: "300px", width: "300px", objectFit: "cover" }}
              />
            }
          >
            <Meta title={t("skinPage.Services.2")} />
          </Card>
          <Card
            className={style.card}
            cover={
              <img
                alt="example"
                src={facemask4}
                style={{ height: "300px", width: "300px", objectFit: "cover" }}
              />
            }
          >
            <Meta title={t("skinPage.Services.3")} />
          </Card>
          <Card
            className={style.card}
            cover={
              <img
                alt="example"
                src={carbonpeeling}
                style={{ height: "300px", width: "300px", objectFit: "cover" }}
              />
            }
          >
            <Meta title={t("skinPage.Services.4")} />
          </Card>
          <Card
            className={style.card}
            cover={
              <img
                alt="example"
                src={porescleaning}
                style={{ height: "300px", width: "300px", objectFit: "cover" }}
              />
            }
          >
            <Meta title={t("skinPage.Services.5")} />
          </Card>
          <Card
            className={style.card}
            cover={
              <img
                alt="example"
                src={homecard7}
                style={{ height: "300px", width: "300px", objectFit: "cover" }}
              />
            }
          >
            <Meta title={t("skinPage.Services.6")} />
          </Card>
          <Card
            className={style.card}
            cover={
              <img
                alt="example"
                src={homecard8}
                style={{ height: "300px", width: "300px", objectFit: "cover" }}
              />
            }
          >
            <Meta title={t("skinPage.Services.6")} />
          </Card>
          <Card
            className={style.card}
            cover={
              <img
                alt="example"
                src={facemask2}
                style={{ height: "300px", width: "300px", objectFit: "cover" }}
              />
            }
          >
            <Meta title={t("skinPage.Services.7")} />
          </Card>
          <Card
            className={style.card}
            cover={
              <img
                alt="example"
                src={facemask2}
                style={{ height: "300px", width: "300px", objectFit: "cover" }}
              />
            }
          >
            <Meta title={t("skinPage.Services.8")} />
          </Card>
          <Card
            className={style.card}
            cover={
              <img
                alt="example"
                src={derma}
                style={{ height: "300px", width: "300px", objectFit: "cover" }}
              />
            }
          >
            <Meta title={t("skinPage.Services.9")} />
          </Card>
          <Card
            className={style.card}
            cover={
              <img
                alt="example"
                src={peeling}
                style={{ height: "300px", width: "300px", objectFit: "cover" }}
              />
            }
          >
            <Meta title={t("skinPage.Services.10")} />
          </Card>
          <Card
            className={style.card}
            cover={
              <img
                alt="example"
                src={facemask3}
                style={{ height: "300px", width: "300px", objectFit: "cover" }}
              />
            }
          >
            <Meta title={t("skinPage.Services.11")} />
          </Card>
          {/* <Card
            className={style.card}
            cover={
              <img
                alt="example"
                src={strechmarks}
                style={{ height: "300px", width: "300px", objectFit: "cover" }}
              />
            }
          >
            <Meta title={t("skinPage.Services.12")} />
          </Card> */}
        </div>
      </div>
      <h1 className={`py-2 my-4 fw-bold text-center shadow-sm`}>
        {t("skinPage.Header1")}
      </h1>
      <h2 className={`py-4 my-4 mx-2 ${style.skinSecondHeader}`}>
        {t("skinPage.Header2")}
      </h2>
      <div
        className={`fw-light fst-italic  my-4 mx-4 text-md-start fs-5 text-muted  lh-sm ${style.text}`}
      >
        {t("skinPage.Text1")}
      </div>
      <h2 className={`mx-2 text-start ${style.skinSecondHeader}`}>
        {t("skinPage.Header3")}
      </h2>
      <div
        className={`text-md-start lh-sm text-muted fst-italic fs-5 ${style.text}`}
      >
        <div className="fw-lighter mx-4 py-4 my-4">
          <div>{t("skinPage.Text2.step1")}</div>
          <div>{t("skinPage.Text2.step2")}</div>
          <div>{t("skinPage.Text2.step3")}</div>
          <div>{t("skinPage.Text2.step4")}</div>
          <div>{t("skinPage.Text2.step5")}</div>
          <div>{t("skinPage.Text2.step6")}</div>
        </div>
      </div>
    </div>
  );
}

export default Skin;
