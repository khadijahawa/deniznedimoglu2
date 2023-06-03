import React from "react";
// import {
//   EditOutlined,
//   EllipsisOutlined,
//   SettingOutlined
// } from "@ant-design/icons";
import { Card } from "antd";
import { Container } from "react-bootstrap";
import hotel1 from "../utils/hotel11.jpg";
import hotel2 from "../utils/hotel2.jpg";
import hotel3 from "../utils/hotel12.jpg";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

const { Meta } = Card;

function Accomedation() {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top when the component mounts
  }, [pathname]);

  return (
    <div>
      <h1 className={`py-4 my-4 fw-bold text-center shadow-sm`}>
        {t("pageHeaders.1")}
      </h1>
      <Container className="d-flex justify-content-between w-100 my-4 py-4 flex-sm-nowrap flex-wrap ">
        <Card
          style={{
            width: 400,
            textAlign: "center",
            fontSize: 20,
            marginBottom: 20,
          }}
          cover={<img alt="example" src={hotel1} />}
        >
          <Meta
            title="Vali Konak Hotel"
            description="The hotel also offers car hire. Istanbul Congress Center is 600 m from Vali Konak Hotel, while Dolmabahce Palace is 1.7 km away. Istanbul Ataturk Airport is 16 km from the property."
          />
        </Card>
        <Card
          style={{
            width: 400,
            textAlign: "center",
            fontSize: 20,
            marginBottom: 20,
            marginLeft: 20,
            marginRight: 20,
          }}
          cover={<img alt="example" src={hotel2} />}
        >
          <Meta
            title="Westin Hotel"
            description="Welcome to the first Westin hotel in Türkiye. Our 5-star hotel is conveniently located in the vibrant shopping district of Nişantaşı."
          />
        </Card>
        <Card
          style={{
            width: 400,
            textAlign: "center",
            fontSize: 20,
            marginBottom: 20,
          }}
          cover={
            <img
              alt="example"
              src={hotel3}
              // style={{ width: "100%", height: 350 }}
            />
          }
        >
          <Meta
            title="RING STONE HOTEL BOSPHORUS"
            description="Would you like to stay in one of the unique iconic locations of Beyoğlu with its very special view where the Bosphorus and the Marmara Sea meet?"
          />
        </Card>
      </Container>
    </div>
  );
}

export default Accomedation;
