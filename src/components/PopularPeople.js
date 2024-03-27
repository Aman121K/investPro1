import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import CardComponent from "./CardComponent";
import styles from "../../styles/PopularPeople.module.css";

function PopularPeople() {
  return (
    <div className={styles.popularPeople}>
      <Container>
        <Row>
          <Col className="big-col1">
            <Row>
              <Col lg={6}>
                <CardComponent source={"https://alux-wp-public.s3.amazonaws.com/wp-content/uploads/2023/12/28134747/maxresdefault-20.jpg"} title={"Text"} text={"Some quick example text to build on the card title and make up the bulk of the cards content."} /> 
              </Col>
              <Col lg={6}>
              <CardComponent source={"https://alux-wp-public.s3.amazonaws.com/wp-content/uploads/2024/03/21134746/maxresdefault-8.jpg"} title={"Text"} text={"Some quick example text to build on the card title and make up the bulk of the cards content."} /> 
              </Col>
            </Row>
          
          </Col>
          <Col className={styles.jktgh2}>
              <div className={styles.popularPeopleHeadings}>
                <h4>Celebrity Net Worth</h4>
              </div>
              <div className={styles.popularPeopleDescription}>
                  <p>We have created detailed financial profiles on numerous celebrities and high net worth individuals, that allow you to have a glimpse into how they built their fortunes.</p>
              </div>

              <div className={styles.hk3}>
                        <a href="/AboutUs">
                        <Button>Explore More</Button></a>
                        </div>
              
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default PopularPeople;
