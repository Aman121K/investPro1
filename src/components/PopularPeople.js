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
                <CardComponent source={"https://www.alux.com/wp-content/uploads/2017/07/Elon-Musk-Net-Worth-e1499676262256-275x300.jpg"} title={"Text"} text={"Some quick example text to build on the card title and make up the bulk of the cards content."} /> 
              </Col>
              <Col lg={6}>
              <CardComponent source={"https://www.alux.com/wp-content/uploads/2017/07/jeff-bezos-net-worth-alux-how-much-money-does-jeff-bezos-have-from-amazon-and-other-businesses-salary-295x300.jpg"} title={"Text"} text={"Some quick example text to build on the card title and make up the bulk of the cards content."} /> 
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
                        <Button>Explore More</Button>
                        </div>
              
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default PopularPeople;
