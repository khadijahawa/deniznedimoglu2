/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { Form, Input, Button, message } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import styles from "./style.module.css";
import emailjs from "emailjs-com";
import contactUs2 from "../utils/homePics/contactUs2.jpg";
import { useTranslation } from "react-i18next";
// import Bounce from "react-reveal/Bounce";
import { useSpring, animated, config } from "react-spring";

function ContactUs() {
  const { t } = useTranslation();
  const animation = useSpring({
    from: { opacity: 0, transform: "translateY(50px) translateX(-50px)" },
    to: { opacity: 1, transform: "translateY(0) translateX(0)" },
    config: config.molasses,
  });
  const onFinish = (values) => {
    const templateParams = {
      from_name: values.name,
      from_email: values.email,
      message: values.message,
    };

    emailjs
      .send(
        "service_mtbp26v",
        "template_yatfbcg",
        templateParams,
        "UucjjG8-WCDB9ACKA"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          message.success("Your message has been sent successfully!");
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  };

  return (
    <div>
      <div className={styles.imageParent}>
        <img
          src={contactUs2}
          alt="Original image"
          className={`d-block w-100 ${styles.contactImage} `}
        />
        {/* <Bounce left> */}
        <animated.div className={styles.ContactHeader} style={{ ...animation }}>
          <h1 className={styles.contactHeaderone}>
            {t("contactUsPage.SubmitQuestions")}
          </h1>
          <h3 className={styles.contactHeaderThree}>
            {t("contactUsPage.Questions")}
          </h3>
          <h6 className={styles.contactHeaderSix}>
            {t("contactUsPage.checkServices")}
          </h6>
        </animated.div>
        {/* </Bounce> */}
      </div>
      <div className={`text-center ${styles.icons}`}>
        <div className={styles.iconSection}>
          <FontAwesomeIcon icon={faPhone} />
          <p className="fs-4  my-4 py-4"> +90 555 033 34 44</p>
        </div>
        <div className={styles.iconSection}>
          <FontAwesomeIcon icon={faLocationDot} />
          <p className="fs-4 my-4 py-4">
            Merkez Mahallesi <br /> Dilruba Çıkmazı Sokak
            <br /> No 16 d 4 <br /> Kagithane <br /> Istanbul
          </p>
        </div>
        <div className={styles.iconSection}>
          <FontAwesomeIcon icon={faEnvelope} />
          <p className="fs-4  my-4 py-4">
            deniz@deniznedimoglu.com
            <br />
            abdagrah@gmail.com
          </p>
        </div>
      </div>
      <div>
        <h1 className={`text-center my-4 py-4 ${styles.contactHeaderText}`}>
          {t("contactUsPage.header")}
        </h1>
        <Form
          onFinish={onFinish}
          className={`text-center my-4 py-4 ${styles.form}`}
        >
          <Form.Item
            name="name"
            rules={[{ required: true, message: "Please enter your name" }]}
          >
            <Input placeholder="Enter Your Name" />
          </Form.Item>
          <Form.Item
            name="Phone"
            rules={[
              { required: true, message: "Please enter your Phone Number" },
            ]}
          >
            <Input type="Phone" placeholder="Phone Number" />
          </Form.Item>

          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please enter your email" }]}
          >
            <Input type="email" placeholder="Enter Your Email" />
          </Form.Item>

          <Form.Item name="message">
            <Input.TextArea rows={4} placeholder="Enter Your Message" />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className={styles.submitButton}
              // onClick={onFinish}
            >
              {t("contactUsPage.SubmitBuuton")}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default ContactUs;
