import React, { useContext, useEffect, useState } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { MenuItems } from "./Header.data";
import styles from "../../styles/Header.module.css";
import AppContext from "../AppContext";
import WhatsAppButton from "./WhatsAppBtn";

function Header() {
  const value = useContext(AppContext);
  const [loogedIn, setIsLoggedIn] = useState(false);
  console.log(value);

  useEffect(() => {
    setIsLoggedIn(value.isLoggedIn);
  }, [value.isLoggedIn]);
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
              <img src="/assests/brand_logo.png" />
            </span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {MenuItems.map((items, i) => {
                return (
                  <Nav.Link
                    className={styles.navlinks}
                    key={i}
                    href={items.url}
                  >
                    {items.title}
                  </Nav.Link>
                );
              })}
              {/* <Nav.Link
                className={styles.navlinks}
              >
                <WhatsAppButton
                  phoneNumber={9878959972}
                />
              </Nav.Link> */}
            </Nav>
            <Nav>
              {/* <Nav.Link className={styles.navlinks} href="/Signup">
                SignUp
              </Nav.Link> */}
              <Nav.Link className={styles.navlinks} href={"/Upload"}>
                <span className={styles.badge1}>Visit Link</span>
              </Nav.Link>
              <Nav.Link className={styles.UploadBtn} href={"/Upload"}>
                Upload Slip
              </Nav.Link>
              <Nav.Link className={styles.navlinks} href="/Login">
                {loogedIn == true ? (
                  <h3>User</h3>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M272 304h-96C78.8 304 0 382.8 0 480c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32C448 382.8 369.2 304 272 304zM48.99 464C56.89 400.9 110.8 352 176 352h96c65.16 0 119.1 48.95 127 112H48.99zM224 256c70.69 0 128-57.31 128-128c0-70.69-57.31-128-128-128S96 57.31 96 128C96 198.7 153.3 256 224 256zM224 48c44.11 0 80 35.89 80 80c0 44.11-35.89 80-80 80S144 172.1 144 128C144 83.89 179.9 48 224 48z" />
                  </svg>
                )}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
