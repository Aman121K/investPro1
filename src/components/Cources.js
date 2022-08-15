import React from "react";
import SectionHeading from "./SectionHeading";
import styles from "../../styles/Cources.module.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import ButtonComponent from "./ButtonComponent";

function Cources() {
  return (
    <div className={styles.courcesSection}>
      <SectionHeading
        title={"Courses to Elevate Your Life!"}
        quote={
          "Take the relationship to the next level with these courses designed with the Aluxer in mind!"
        }
      />
      <div>
        <Container>
          <Row className={styles.jktgh2}>
            <Col xs={12} md={6}>
              <img
                src="https://images.unsplash.com/photo-1604170563876-58b2346c2e8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                width="100%"
              />
            </Col>
            <Col xs={12} md={6}>
              <h4>Guided Meditation for Entrepreneurs & High Achievers</h4>
              <p className={styles.description}>
                Start a meditation practice & Learn how to focus your mind, be
                less stressed and deal with anxiety with our course specifically
                designed with the Aluxer in mind.
              </p>
              <p className={styles.description}>Begin your journey</p>
              <div className={styles.hk3}>
                <Button>Enroll Now</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Cources;
