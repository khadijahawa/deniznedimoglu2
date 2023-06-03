import React from "react";
import { useTranslation } from "react-i18next";
import style from "./style.module.css";
import smile from "../../utils/444.jpg";
import teeth from "../../utils/teeth.jpg";
import { useLocation } from "react-router-dom";

function Dental() {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top when the component mounts
  }, [pathname]);

  return (
    <div>
      <h1 className={`py-4 my-4 fw-bold text-center shadow-sm`}>
        {t("dentalPage.header1")}
      </h1>
      <div
        className={`d-flex justify-content-between flex-wrap align-content-center ${style.services}`}
      >
        <div className="container">
          <div className="row">
            {/* First section */}
            <div className="py-4 my-4 d-flex flex-row align-items-center text-start flex-sm-nowrap flex-wrap">
              <div className="flex-grow-1 text-start w-50 p-2 m-2">
                <h2 className="my-4"> {t("dentalPage.1")}</h2>
                <p className="text-muted"> {t("dentalPage.text1")}</p>
              </div>
              <div>
                <img
                  src={teeth}
                  alt="Section"
                  className={`float-end ${style.HairCardImage}`}
                />
              </div>
            </div>

            {/* Second section */}
            <div className="py-4 my-4 d-flex flex-row-reverse align-items-center flex-sm-nowrap flex-wrap">
              <div className="flex-grow-1 w-50 p-2 m-2">
                <h2 className="my-4"> {t("dentalPage.2")}</h2>
                <p className="text-start text-muted">{t("dentalPage.text2")}</p>
              </div>
              <div>
                <img
                  src={smile}
                  alt="Section"
                  className={` ${style.HairCardImage}`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dental;
