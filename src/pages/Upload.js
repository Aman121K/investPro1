import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Header from "../components/Header";
import styles from "../../styles/Upload.module.css";
import Footer from "../components/Footer";
import SectionHeading from "../components/SectionHeading";
import { postData } from "../api/api";
import axios from "axios";

function Upload() {
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [number, setNumber] = useState();
  const [image, setImage] = useState("");

  const submit = () => {
    upload();
  };

  const upload = async () => {
    const body = {
      fname: firstName,
      lname: lastName,
      mobileno: number,
      address: address,
      document: image,
    };
    const responce = await postData("/upload", body);
  };
  return (
    <div>
      <Container>
        <div className="layout">
          <div className={styles.content}>
            <Row>
              <Col xs={12} md={6}>
                <img src="/assests/upload.png" alt="img"></img>
              </Col>
              <Col xs={12} md={6} className={styles.kl3}>
                <SectionHeading
                  title={"Upload screenshot"}
                  quote={"Upload Screenshot of your Payment"}
                />
                <Form.Group className="mb-3">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Username"
                    onChange={(e) => setFirstname(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Username"
                    onChange={(e) => setLastname(e.target.value)}
                  />
                </Form.Group>
                {/* <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group> */}
                <Form.Group className="mb-3">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    as="textarea"
                    className={styles.textarea}
                    rows={3}
                    placeholder="Address"
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </Form.Group>
                {/* <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter Password Again"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group> */}
                <Form.Group className="mb-3">
                  <Form.Label>Mobile Number</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter Mobile number"
                    onChange={(e) => setNumber(e.target.value)}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Upload Screenshot of Payment</Form.Label>
                  <Form.Control
                    type="text"
                    onChange={(e) => setImage(e.target.value)}
                  />
                </Form.Group>
                <Button
                  className={styles.jke1}
                  onClick={() => submit()}
                  variant="primary"
                >
                  Submit
                </Button>
                {/* <div className={styles.linksSection}>
                <Link href={"/Login"}>
                    <p className={styles.links}>Already have an account? Log in here</p>
                </Link>
            </div> */}
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Upload;
