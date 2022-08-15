import React, { useContext, useState } from "react";
import SectionHeading from "../components/SectionHeading";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Link from "next/link";
import styles from "../../styles/Signup.module.css";
import { postData } from "../api/api";
import AppContext from "../AppContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const value = useContext(AppContext);

  const submit = () => {
    if (email.length && password.length == 0) return;
    login();
  };
  const login = async () => {
    const body = {
      email: email,
      password: password,
    };
    const responce = await postData("/login", body);
    if (responce.Success !== 1) return;
    value?.setisLoggedin(true);
    value?.setToken(responce?.data?.token);
    sessionStorage.setItem("Token", responce?.data?.token);
  };
  return (
    <div>
      <Container>
        <div className="layout">
          <div className={styles.content}>
            <Row>
              <Col xs={12} md={6}>
                <img src="/assests/login.png" alt="img"></img>
              </Col>
              <Col xs={12} md={6} className={styles.kl3}>
                <SectionHeading
                  title={"Hey there! Welcome"}
                  quote={"Login to your account"}
                />
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>

                <div className={styles.linksSection}>
                  <Link href={"#"}>
                    <p className={styles.links}>Forgot Your Password?</p>
                  </Link>
                  <Button
                    className={styles.jke1}
                    onClick={() => submit()}
                    variant="primary"
                  >
                    Submit
                  </Button>
                  <Link href={"/Signup"}>
                    <p className={styles.links1}>
                      Don’t have an account? Sign up
                    </p>
                  </Link>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Login;
