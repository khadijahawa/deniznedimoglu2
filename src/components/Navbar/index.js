import React, { useState, useEffect } from "react";
import style from "./style.module.css";
import Image from "react-bootstrap/Image";
import logo from "../../utils/logo.png";
import { NavDropdown } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { faChartBar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setIsNavExpanded(!isNavExpanded);
  };
  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);
  }, []);
  const { t } = useTranslation();

  return (
    <div className={style.navbar}>
      <div className={style.logoParent}>
        <Image src={logo} className={style.logo} />
      </div>

      <nav className={style.itemsParent}>
        {(isNavExpanded || screenWidth > 850) && (
          <ul className={style.list}>
            <li className={style.items}>
              <Link to="/" style={{ textDecoration: "none", color: "#f1f1f1" }}>
                {t("navbar.1")}
              </Link>
            </li>
            <li className={style.items}>
              <Link
                to="/contact-us"
                style={{ textDecoration: "none", color: "#f1f1f1" }}
              >
                {t("navbar.2")}
              </Link>
            </li>
            <li className={style.items}>
              <Link
                to="/about"
                style={{ textDecoration: "none", color: "#f1f1f1" }}
              >
                {t("navbar.3")}
              </Link>
            </li>
            <li className={style.items}>
              <NavDropdown title={t("navbar.4")} id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <Link
                    to="/skin"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Skin
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Link
                    to="/hair"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Hair
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Link
                    to="/plastic-surguries"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Plastic Surguries
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Link
                    to="/dental"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Dental
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
            </li>

            <li className={style.items}>
              <Link
                to="/medical-tourism-in-turkey"
                style={{ textDecoration: "none", color: "#f1f1f1" }}
              >
                {t("navbar.5")}
              </Link>
            </li>
          </ul>
        )}
        <button onClick={toggleNav} className={style.btn}>
          <FontAwesomeIcon icon={faChartBar} />
        </button>
      </nav>
    </div>
  );
}

export default Navbar;
