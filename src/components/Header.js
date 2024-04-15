import React, { useContext, useEffect, useState } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { MenuItems } from "./Header.data";
import styles from "../../styles/Header.module.css";
import AppContext from "../AppContext";
import WhatsAppButton from "./WhatsAppBtn";

function Header() {
  const value = useContext(AppContext);
  const [loggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(value.isLoggedIn);
  }, [value.isLoggedIn]);

  const handleCourseTypeChange = (courseType) => {
    setSelectedCourseType(courseType);
  };

  const handleCountryChange = (country) => {
    setSelectedCountry(country);
  };

  return (
    <>
      <Navbar
        fixed="top"
        className="navigation"
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="dark"
      >
        <Container>
          <Navbar.Brand className={styles.navlinks} href="/">
            <span className={styles.log1}>
              <img src="/assests/newLogo1.png" />
            </span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {MenuItems.map((menuItem, i) => {
                if (menuItem.submenu) {
                  return (
                    <NavDropdown title={menuItem.title} key={i}>
                      {menuItem.submenu.map((submenuItem, j) => (
                        <NavDropdown.Item
                          key={j}
                          href={submenuItem.url}
                        >
                          {submenuItem.title}
                        </NavDropdown.Item>
                      ))}
                    </NavDropdown>
                  );
                } else {
                  return (
                    <Nav.Link
                      className={styles.navlinks}
                      key={i}
                      href={menuItem.url}
                    >
                      {menuItem.title}
                    </Nav.Link>
                  );
                }
              })}
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
