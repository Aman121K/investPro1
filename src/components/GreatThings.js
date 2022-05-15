import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import styles from "../../styles/GreatThings.module.css";


function GreatThings() {
  return (
    <div className={styles.blueBackground}>
        <Container>
          <Row>
            <Col md="3">
            <img className={styles.img43} src={"https://images.unsplash.com/photo-1652456615808-47ff4bb2fe6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"} width={"100%"} />
            </Col>
            <Col sm="6">
            <h4>15 Things That Get Harder As We Grow Older</h4>
            <h5>Learning Mastery: https://www.learnlikealux.comVideo Notes: https://www.alux.com/harder-as-we-grow-older/Â Get a free audiobook thanks to Audible: https://www.aluxfreebook.com/Â Thanks to our friends at Audible!Â Disclaimer: signing up for Audible will…</h5>
            </Col>
            <Col sm="3">
            <h4>Podcast</h4>
            <p>15 Easiest Ways to Make Money â€” If you already have some</p>
            <p>15 Money Habits That Keep You Poor</p>
            <p>15 Steps to Build a Religion</p>
            </Col>
          </Row>
        </Container>
    </div>
  )
}

export default GreatThings