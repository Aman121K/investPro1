import React from "react";
import SectionHeading from "./SectionHeading";
import ButtonComponent from "./ButtonComponent";
import { Container, Col, Row } from "react-bootstrap";
import ImageCard from "./ImageCard";
import styles from "../../styles/AmazingVideos.module.css";

function AmazingVideos() {
  return (
    <div className={styles.amazingVideos}>
      <SectionHeading
        title={"Amazing Videos"}
        quote={"Almost 4 Million people can’t be wrong!"}
      />
      <Container>
        <Row>
          <Col md={7} xs={12} className={styles.uniwenm}>
            <ImageCard
              source={
                "https://images.unsplash.com/photo-1652517282097-02b0744d2347?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              }
              width={"100%"}
              height={"100%"}
              days={"2 Days Ago"}
              heading={"How to completely LOSE at Life"}
            />
          </Col>
          <Col>
            <Row className={styles.height23}>
              <Col>
                <ImageCard
                  source={
                    "https://images.unsplash.com/photo-1650404894317-9fbb99549f23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  }
                  width={"100%"}
                  height={"100%"}
                  days={"2 Days Ago"}
                  heading={"How to completely LOSE at Life"}
                />
              </Col>
              <Col>
                <ImageCard
                  source={
                    "https://images.unsplash.com/photo-1650233325512-013bf4a1f582?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                  }
                  width={"100%"}
                  height={"100%"}
                  days={"2 Days Ago"}
                  heading={"How to completely LOSE at Life"}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <ImageCard
                  source={
                    "https://images.unsplash.com/photo-1622212800013-1edb787ff8ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                  }
                  width={"100%"}
                  height={"100%"}
                  days={"2 Days Ago"}
                  heading={"How to completely LOSE at Life"}
                />
              </Col>
              <Col>
                <ImageCard
                  source={
                    "https://images.unsplash.com/photo-1622212800013-1edb787ff8ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                  }
                  width={"100%"}
                  height={"100%"}
                  days={"2 Days Ago"}
                  heading={"How to completely LOSE at Life"}
                />
              </Col>
            </Row>
          </Col>
        </Row>
        <div>
          <ButtonComponent
            click={() => console.log("hellow")}
            name={"Watch More Videos"}
          />
        </div>
      </Container>
    </div>
  );
}

export default AmazingVideos;
