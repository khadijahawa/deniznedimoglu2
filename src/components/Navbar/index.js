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
        <Link
          to="/"
          style={{ textDecoration: "none" }}
          onClick={() => setIsNavExpanded(false)}
        >
          <Image src={logo} className={style.logo} />
        </Link>
      </div>

      <nav className={style.itemsParent}>
        {(isNavExpanded || screenWidth > 850) && (
          <ul className={style.list}>
            <li className={style.items}>
              <NavDropdown title={t("navbar.1")} id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <Link
                    to="/contact-us"
                    style={{ textDecoration: "none", color: "black" }}
                    onClick={() => setIsNavExpanded(false)}
                  >
                    {t("navbar.2")}
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Link
                    to="/about"
                    style={{ textDecoration: "none", color: "black" }}
                    onClick={() => setIsNavExpanded(false)}
                  >
                    {t("navbar.3")}
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Link
                    to="/medical-tourism-in-turkey"
                    style={{ textDecoration: "none", color: "black" }}
                    onClick={() => setIsNavExpanded(false)}
                  >
                    {t("navbar.5")}
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
            </li>
            <li className={style.items}>
              <NavDropdown title={t("navbar.4")} id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <Link
                    to="/skin"
                    style={{ textDecoration: "none", color: "black" }}
                    onClick={() => setIsNavExpanded(false)}
                  >
                    {t("navbar.7")}
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Link
                    to="/hair"
                    style={{ textDecoration: "none", color: "black" }}
                    onClick={() => setIsNavExpanded(false)}
                  >
                    {t("navbar.6")}
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Link
                    to="/plastic-surguries"
                    style={{ textDecoration: "none", color: "black" }}
                    onClick={() => setIsNavExpanded(false)}
                  >
                    {t("navbar.9")}
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Link
                    to="/dental"
                    style={{ textDecoration: "none", color: "black" }}
                    onClick={() => setIsNavExpanded(false)}
                  >
                    {t("navbar.8")}
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
            </li>

            <li className={style.items}>
              <NavDropdown title={t("navbar.11")} id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <Link
                    to="/estesirius"
                    style={{ textDecoration: "none", color: "black" }}
                    onClick={() => setIsNavExpanded(false)}
                  >
                    {t("navbar.12")}
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Link
                    to="/dental-Corperate"
                    style={{ textDecoration: "none", color: "black" }}
                    onClick={() => setIsNavExpanded(false)}
                  >
                    {t("navbar.13")}
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Link
                    to="/plastic-clinic"
                    style={{ textDecoration: "none", color: "black" }}
                    onClick={() => setIsNavExpanded(false)}
                  >
                    {t("navbar.14")}
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
            </li>
            <li className={style.items}>
              <Link
                to={`https://wa.me/${+905550333444}`}
                style={{ textDecoration: "none" }}
                onClick={() => setIsNavExpanded(false)}
                className={style.contact}
              >
                {t("navbar.10")}
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
