import React from "react";
import { useTranslation } from "react-i18next";
import style from "./style.module.css";
import hair1 from "../../utils/services/6.jpeg";
import hair2 from "../../utils/services/8.jpeg";
import hair3 from "../../utils/services/5.jpeg";
import { useLocation } from "react-router-dom";

function Hair() {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top when the component mounts
  }, [pathname]);

  return (
    <div>
      <div>
        <h1 className={`py-4 my-4 fw-bold text-center shadow-sm`}>
          {t("hairPage.header1")}
        </h1>
        <div
          className={`d-flex justify-content-between flex-wrap align-content-center ${style.services}`}
        >
          <div className="container">
            <div className="row">
              {/* First section */}
              <div className="py-4 my-4 d-flex flex-row align-items-center text-start flex-sm-nowrap flex-wrap">
                <div className="flex-grow-1 text-start w-50 p-2 m-2">
                  <h2 className="my-4"> {t("hairPage.1")}</h2>
                  <p className="text-muted"> {t("hairPage.text1")}</p>
                </div>
                <div>
                  <img
                    src={hair1}
                    alt="Section"
                    className={`float-end ${style.HairCardImage}`}
                  />
                </div>
              </div>

              {/* Second section */}
              <div className="py-4 my-4 d-flex flex-row-reverse align-items-center flex-sm-nowrap flex-wrap">
                <div className="flex-grow-1 w-50 p-2 m-2">
                  <h2 className="my-4"> {t("hairPage.2")}</h2>
                  <p className="text-start text-muted">{t("hairPage.text2")}</p>
                </div>
                <div>
                  <img
                    src={hair2}
                    alt="Section"
                    className={` ${style.HairCardImage}`}
                  />
                </div>
              </div>
              <div className="py-4 my-4 d-flex flex-row align-items-center text-start flex-sm-nowrap flex-wrap">
                <div className="flex-grow-1 text-start p-2 m-2 w-50">
                  <h2 className="my-4"> {t("hairPage.3")}</h2>
                  <p className="text-muted"> {t("hairPage.text3")}</p>
                </div>
                <div>
                  <img
                    src={hair3}
                    alt="Section"
                    className={`float-end ${style.HairCardImage}`}
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

export default Hair;
