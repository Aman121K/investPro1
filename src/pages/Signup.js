import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import styles from "../../styles/Signup.module.css";
import SectionHeading from "../components/SectionHeading";
import Link from "next/link";
import { postData } from "../api/api";
import { useRouter } from "next/router";

function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [number, setNumber] = useState();
  const [error, setError] = useState(false);
  const router = useRouter();

  const submit = () => {
    if (password !== confirmPassword) return setError(true);
    register();
  };
  const register = async () => {
    setError(false);
    const body = {
      fname: firstName,
      lname: lastName,
      username: username,
      email: email,
      password: password,
      mobileno: number,
    };
    const responce = await postData("/", body);
    if (responce?.Success !== 1) return;
    router.push("/Login");
  };

  return (
    <div>
      <Container>
        <div className="layout">
          <div className={styles.content}>
            <Row>
              <Col xs={12} md={6}>
                <img src="/assests/signup.png" alt="img"></img>
              </Col>
              <Col xs={12} md={6} className={styles.kl3}>
                <SectionHeading
                  title={"Sign Up"}
                  quote={"Sign Up to Enroll in our various cources"}
                />
                <Form.Group className="mb-3">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="First Name"
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Last Name"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Username"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </Form.Group>
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
                  {error && (
                    <span className="text-danger">
                      Password and Confirm Password should be same
                    </span>
                  )}
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter Password Again"
                    onChange={(e) => setconfirmPassword(e.target.value)}
                  />
                  {error && (
                    <span className="text-danger">
                      Password and Confirm Password should be same
                    </span>
                  )}
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Mobile Number</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter Mobile number"
                    onChange={(e) => setNumber(e.target.value)}
                  />
                </Form.Group>
                <Button
                  className={styles.jke1}
                  onClick={() => submit()}
                  variant="primary"
                >
                  Submit
                </Button>
                <div className={styles.linksSection}>
                  <Link href={"/Login"}>
                    <p className={styles.links}>
                      Already have an account? Log in here
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

export default Signup;
