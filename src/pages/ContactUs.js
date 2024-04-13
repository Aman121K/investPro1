import { React, useState } from "react";
import Header from "../components/Header";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import SectionHeading from "../components/SectionHeading";
import styles from "../../styles/Contact.module.css";
import Footer from "../components/Footer";
import { postData } from "../api/api";

function ContactUs() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [mobileNo, setMobileNo] = useState();
  const [address, setAddress] = useState("");

  const submit = () => {
    ContactUs();
  };

  const ContactUs = async () => {
    const body = {
      name: fullName,
      email: email,
      message: message,
      mobileno: mobileNo,
      address: address,
    };
    const responce = await postData("/contact", body);
    console.log(responce);
  };
  return (
    <div>
      <Container>
        <div className={styles.content}>
          <Row>
            <Col xs={12} md={6}>
              <img src="/assests/contact.png" alt="img"></img>
            </Col>
            <Col xs={12} md={6} className={styles.kl3}>
              <SectionHeading
                title={"Contact Us"}
                quote={"Feedack from Trainees!"}
              />
              <Form.Group className="mb-3">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Full Name"
                  onChange={(e) => setFullName(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Your Email Id"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Form.Group className="mb-3">
                  <Form.Label>Mobile No</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Mobile No"
                    onChange={(e) => setMobileNo(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </Form.Group>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </Form.Group>
              <Button
                className={styles.jke1}
                onClick={() => submit()}
                variant="primary"
              >
                Submit
              </Button>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default ContactUs;
