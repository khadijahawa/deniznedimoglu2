import React, { useState } from "react";
import style from "./style.module.css";
import { useTranslation } from "react-i18next";

function Language({ selectedLanguage, onSelect }) {
  const [open, setOpen] = useState(false);
  const { i18n } = useTranslation();

  const handelClick = (lang) => {
    i18n.changeLanguage(lang);
    setOpen(false);
  };
  return (
    <div className={style.dropdown}>
      <div>
        <div
          onClick={(e) => {
            setOpen(!open);
          }}
          onSelect={onSelect}
          className={`px-4 ${style.dropdownBtn}`}
        >
          {selectedLanguage}
        </div>
        {open && (
          <div className={`${style.dropdownContent}`}>
            <ul className=" p-2 ">
              <div className={`px-4 py-2 ${style.dropdownItem}`}>
                <div onClick={() => handelClick("en")}>English</div>
              </div>
              <div className={`px-4 py-2 ${style.dropdownItem}`}>
                <div onClick={() => handelClick("tr")}>Türkçe</div>
              </div>
              <div className={`px-4 py-2 ${style.dropdownItem}`}>
                <div onClick={() => handelClick("ar")}>العربية</div>
              </div>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Language;
