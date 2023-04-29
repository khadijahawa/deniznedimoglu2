import React from "react";
import Carousel from "react-bootstrap/Carousel";

import styles from "./style.module.css";
import first from "../utils/homePics/11.jpg";
import second from "../utils/homePics/2.jpg";
import third from "../utils/homePics/44.jpg";
import ThirdHeader from "../components/ThirdHeader/ThirdHeader";
import img1 from "../utils/homePics/homecard.jpg";
import img3 from "../utils/homePics/homecard4.jpg";
import CountUp from "react-countup";

import img5 from "../utils/homePics/homecard6.jpg";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faHospitalUser } from "@fortawesome/free-solid-svg-icons";
import { faSquarePhoneFlip } from "@fortawesome/free-solid-svg-icons";
import { faNotesMedical } from "@fortawesome/free-solid-svg-icons";
import { faCalendarCheck } from "@fortawesome/free-solid-svg-icons";
import { faStethoscope } from "@fortawesome/free-solid-svg-icons";
import { faUserDoctor } from "@fortawesome/free-solid-svg-icons";
import { faMoneyCheck } from "@fortawesome/free-solid-svg-icons";
import { faPlane } from "@fortawesome/free-solid-svg-icons";
import { faHandshake } from "@fortawesome/free-solid-svg-icons";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";

import { Card } from "antd";

const { Meta } = Card;

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.homeContainer}>
      <Carousel slide="true" className={styles.Carousel} indicators={false}>
        <Carousel.Item interval={5000}>
          <div className={styles.imageParent1}>
            <img
              src={first}
              alt="First slide"
              className={`d-block w-100 ${styles.carouselImage}`}
            />
          </div>

          <Carousel.Caption className={styles.captionBox}>
            <div className="fw-bold text-start ">
              We Are <b className="fw-bolder"> Transforming</b> Lives
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <div className={styles.imageParent1}>
            <img
              className={`d-block w-100 ppsition-center ${styles.carouselImage}`}
              src={second}
              alt="Second slide"
            />
          </div>
          <Carousel.Caption className={styles.captionBox}>
            <div className="fw-bold text-start ">
              The <b className="fw-bolder">Confidence</b> of a New You
              {/* <div className={styles.items}>
                <a
                  href="https://wa.me/00905550333444"
                  className={styles.items2}
                >
                  <button className={styles.button}>{t("header3.5")} </button>
                </a>
              </div> */}
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <div className={styles.imageParent1}>
            <img
              className={`d-block w-100 ${styles.carouselImage}`}
              src={third}
              alt="Third slide"
            />
          </div>
          <Carousel.Caption className={styles.captionBox}>
            <div className="fw-bold text-start">
              Where Science Meets <b className="fw-bolder">Art</b>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className={`shadow-lg rounded mb-4 ${styles.thirdSection}`}>
        <div className="mt-2 fw-bold">
          <CountUp end={6000} duration={2} separator="," />
          <h6>{t("HomePercentage.1")}</h6>
        </div>
        <div className="mt-2 fw-bold">
          <CountUp end={4000} duration={2} separator="," />
          <h6>{t("HomePercentage.2")}</h6>
        </div>
        <div className="mt-2 fw-bold">
          <CountUp end={2000} duration={2} separator="," />
          <h6>{t("HomePercentage.3")}</h6>
        </div>
        <div className="mt-2 fw-bold">
          <CountUp end={99.5} duration={3} decimals={1} suffix="%" />
          <h6>{t("HomePercentage.4")}</h6>
        </div>
      </div>
      <div className={styles.fourthSection}>
        <div>
          <h1 className={`text-center my-4 py-4 ${styles.HeaderText}`}>
            Deniz Nedimoğlu Health Tourism
          </h1>
          <h2 className="text-muted">Your Bueaty Will Be In Good Hands</h2>
        </div>
        {/* <div>
          <p>Discover Your Best Self</p>
        </div> */}
      </div>
      {/* <h1 className={`text-center my-4 py-4 ${styles.header}`}>
        {t("homeCategories.header")}
      </h1> */}
      <div className={styles.fifthSection}>
        <Card
          className={styles.card}
          hoverable
          cover={<img alt="example" src={img1} />}
        >
          <a href="/skin" className="text-decoration-none">
            <Meta
              title={<h2>{t("HomeCard.title1")}</h2>}
              // description="www.instagram.com"
            />
          </a>
        </Card>
        <Card
          className={styles.card}
          hoverable
          cover={<img alt="example" src={img3} />}
        >
          <a href="/hair" className="text-decoration-none">
            <Meta
              title={<h2>{t("HomeCard.titel2")}</h2>}
              // description="www.instagram.com"
            />
          </a>
        </Card>
        <Card
          className={styles.card}
          hoverable
          cover={<img alt="example" src={img5} />}
        >
          <a href="/plastic-surguries" className="text-decoration-none">
            <Meta
              title={<h2>{t("HomeCard.titel3")}</h2>}
              // description="www.instagram.com"
            />
          </a>
        </Card>
      </div>
      <h1 className={` shadow-lg p-3 text-center my-4 py-4 ${styles.header}`}>
        {t("homeCategories.header")}
      </h1>
      <div className={styles.sixthSection}>
        <div className={styles.sixthSectionItem}>
          <FontAwesomeIcon icon={faClock} className={styles.sixthSectionIcon} />
          <h1>{t("homeCategories.1")}</h1>
          <h6>{t("homeCategories.2")}</h6>
        </div>
        <div className={styles.sixthSectionItem}>
          <FontAwesomeIcon
            icon={faHospitalUser}
            className={styles.sixthSectionIcon}
          />
          <h1>{t("homeCategories.3")}</h1>
          <h6>{t("homeCategories.4")}</h6>
        </div>
        <div className={styles.sixthSectionItem}>
          <FontAwesomeIcon
            icon={faSquarePhoneFlip}
            className={styles.sixthSectionIcon}
          />
          <h1>{t("homeCategories.5")}</h1>
          <h6>{t("homeCategories.6")}</h6>
        </div>
        <div className={styles.sixthSectionItem}>
          <FontAwesomeIcon
            icon={faNotesMedical}
            className={styles.sixthSectionIcon}
          />
          <h1>{t("homeCategories.7")}</h1>
          <h6>{t("homeCategories.8")}</h6>
        </div>
        <div className={styles.sixthSectionItem}>
          <FontAwesomeIcon
            icon={faCalendarCheck}
            className={styles.sixthSectionIcon}
          />
          <h1>{t("homeCategories.9")}</h1>
          <h6>{t("homeCategories.10")}</h6>
        </div>
        <div className={styles.sixthSectionItem}>
          <FontAwesomeIcon
            icon={faStethoscope}
            className={styles.sixthSectionIcon}
          />
          <h1>{t("homeCategories.11")}</h1>
          <h6>{t("homeCategories.12")}</h6>
        </div>
        <div className={styles.sixthSectionItem}>
          <FontAwesomeIcon
            icon={faUserDoctor}
            className={styles.sixthSectionIcon}
          />
          <h1>{t("homeCategories.13")}</h1>
          <h6>{t("homeCategories.14")}</h6>
        </div>
        <div className={styles.sixthSectionItem}>
          <FontAwesomeIcon
            icon={faMoneyCheck}
            className={styles.sixthSectionIcon}
          />
          <h1>{t("homeCategories.15")}</h1>
          <h6>{t("homeCategories.16")}</h6>
        </div>
        <div className={styles.sixthSectionItem}>
          <FontAwesomeIcon icon={faPlane} className={styles.sixthSectionIcon} />
          <h2>{t("homeCategories.17")}</h2>
          <h6>{t("homeCategories.18")}</h6>
        </div>
        <div className={styles.sixthSectionItem}>
          <FontAwesomeIcon icon={faClock} className={styles.sixthSectionIcon} />
          <h1>{t("homeCategories.19")}</h1>
          <h6>{t("homeCategories.20")}</h6>
        </div>
        <div className={styles.sixthSectionItem}>
          <FontAwesomeIcon
            icon={faHandshake}
            className={styles.sixthSectionIcon}
          />
          <h1>{t("homeCategories.1")}</h1>
          <h6>{t("homeCategories.2")}</h6>
        </div>
        <div className={styles.sixthSectionItem}>
          <FontAwesomeIcon
            icon={faLanguage}
            className={styles.sixthSectionIcon}
          />
          <h1>{t("homeCategories.1")}</h1>
          <h6>{t("homeCategories.2")}</h6>
        </div>
        <div className={styles.sixthSectionItem}>
          <FontAwesomeIcon
            icon={faPeopleGroup}
            className={styles.sixthSectionIcon}
          />
          <h1>{t("homeCategories.1")}</h1>
          <h6>{t("homeCategories.2")}</h6>
        </div>
      </div>
      <div className={`shadow-lg p-3 mb-5 bg-white ${styles.ThirdHeader}`}>
        <ThirdHeader />
      </div>
    </div>
  );
};

export default Home;
