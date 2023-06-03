import React from "react";
import { useTranslation } from "react-i18next";
import style from "./style.module.css";
import facial from "../../utils/services/2.jpeg";
import body from "../../utils/services/7.jpeg";
import breast from "../../utils/services/4.jpeg";
import medical from "../../utils/services/10.jpeg";
import { useLocation } from "react-router-dom";

function PlasticSurguries() {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top when the component mounts
  }, [pathname]);

  return (
    <div>
      <div>
        <h1 className={`py-4 my-4 fw-bold text-center shadow-sm`}>
          {t("PlasticSurguries.header1")}
        </h1>
        <div
          className={`d-flex justify-content-between flex-wrap align-content-center ${style.services}`}
        >
          <div className="container">
            <div className="row">
              {/* First section */}
              <div className="py-4 my-4 d-flex flex-row align-items-center text-start flex-sm-nowrap flex-wrap">
                <div className="flex-grow-1 text-start w-50 p-2 m-2">
                  <h2 className="my-4"> {t("PlasticSurguries.1")}</h2>
                  <p className="text-muted"> {t("PlasticSurguries.text1")}</p>
                </div>
                <div>
                  <img
                    src={facial}
                    alt="Section"
                    className={`float-end ${style.HairCardImage}`}
                  />
                </div>
              </div>

              {/* Second section */}
              <div className="py-4 my-4 d-flex flex-row-reverse align-items-center flex-sm-nowrap flex-wrap">
                <div className="flex-grow-1 w-50 p-2 m-2">
                  <h2 className="my-4"> {t("PlasticSurguries.2")}</h2>
                  <p className="text-start text-muted">
                    {t("PlasticSurguries.text2")}
                  </p>
                </div>
                <div>
                  <img
                    src={body}
                    alt="Section"
                    className={` ${style.HairCardImage}`}
                  />
                </div>
              </div>
              <div className="py-4 my-4 d-flex flex-row align-items-center text-start flex-sm-nowrap flex-wrap">
                <div className="flex-grow-1 text-start p-2 m-2 w-50">
                  <h2 className="my-4"> {t("PlasticSurguries.3")}</h2>
                  <p className="text-muted"> {t("PlasticSurguries.text3")}</p>
                </div>
                <div>
                  <img
                    src={breast}
                    alt="Section "
                    className={`float-end ${style.HairCardImage}`}
                  />
                </div>
              </div>
              <div className="py-4 my-4 d-flex flex-row-reverse align-items-center flex-sm-nowrap flex-wrap">
                <div className="flex-grow-1 w-50 p-2 m-2">
                  <h2 className="my-4"> {t("PlasticSurguries.4")}</h2>
                  <p className="text-start text-muted">
                    {t("PlasticSurguries.text4")}
                  </p>
                </div>
                <div>
                  <img
                    src={medical}
                    alt="Section "
                    className={` ${style.HairCardImage}`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlasticSurguries;
