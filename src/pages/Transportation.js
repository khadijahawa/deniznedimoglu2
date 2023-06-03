import React from "react";
import { useTranslation } from "react-i18next";
import { Container, Row, Col, Image } from "react-bootstrap";
import transportation from "../utils/services2/uber.jpg";
import { Form, Input, Button, message } from "antd";
import styles from "./style.module.css";
import emailjs from "emailjs-com";
import { useLocation } from "react-router-dom";

function Transportation() {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top when the component mounts
  }, [pathname]);
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
    <div className="py-4 my-4">
      <h1 className={`py-4 my-4 fw-bold text-center shadow-sm`}>
        {t("pageHeaders.3")}
      </h1>
      <Container>
        <div className="d-flex justify-content-evenly py-4 my-4 flex-sm-nowrap flex-wrap">
          <Row>
            <Col xs={12} md={6}>
              <div className="my-4 py-4 bd-highlight">
                <Image
                  src={transportation}
                  className={`w-100  shadow-lg rounded p-4 my-4`}
                  alt="about"
                />
                {/* <h2 className="my-4 "> {t("hairPage.1")}</h2> */}
                <p>{t("pageHeaders.8")}</p>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className="flex-grow-1 bd-highlight w-100">
                <h1
                  className={`text-center my-4 py-4 ${styles.contactHeaderText}`}
                >
                  {t("contactUsPage.header")}
                </h1>
                <Form
                  onFinish={onFinish}
                  className={`text-center my-4 py-4 ${styles.form}`}
                >
                  <Form.Item
                    name="name"
                    rules={[
                      { required: true, message: "Please enter your name" },
                    ]}
                  >
                    <Input placeholder="Enter Your Name" />
                  </Form.Item>
                  <Form.Item
                    name="Phone"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your Phone Number",
                      },
                    ]}
                  >
                    <Input type="Phone" placeholder="Phone Number" />
                  </Form.Item>

                  <Form.Item
                    name="email"
                    rules={[
                      { required: true, message: "Please enter your email" },
                    ]}
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
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default Transportation;
