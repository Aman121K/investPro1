import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CardComponent from "../components/CardComponent";
import Header from "../components/Header";
import styles from "../../styles/AllCources.module.css";
import SectionHeading from "../components/SectionHeading";
import Link from "next/link";
import Carousel from 'react-bootstrap/Carousel';
import { getData } from "../api/api";

function AllCources() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getCourse();
  }, []);

  const getCourse = async () => {
    try {
      setLoading(true);
      const response = await getData("/all-courses");
      setData(response.data || []); // Ensure data is an array or fallback to an empty array
      console.log(response);
    } catch (error) {
      console.error("Error fetching courses:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Container fluid>
        <div className={styles.heading}>
          <SectionHeading title={"All Courses"} quote={""} />
        </div>
        <div className={styles.allCourcesSection}>
          <Carousel cols={2} rows={1} gap={10} loop>
            <Carousel.Item>
              <h3 style={{ textAlign: "center" }}>Online coording To India</h3>
              <div style={{ marginBottom: 40, padding: 50 }}>
                <Row>
                  <Col>
                    <h3>Weekdays Basic Only</h3>
                    <p>7-8pm</p>
                    <p>13500 fee</p>
                    <p>20-25 Days Duration</p>
                    <p>30+ students</p>
                  </Col>
                  <Col>
                    <h3>Weekdays Basic + advance</h3>
                    <p>7-8pm</p>
                    <p>19500 fee</p>
                    <p>55-60 Days Duration</p>
                    <p>30+ students</p>
                    <p>3 Months after course support</p>
                  </Col>
                  <Col>
                    <h3>Weekdays Basic + advance</h3>
                    <p>9-10am (Live Trading)</p>
                    <p>24500 fee</p>
                    <p>55-60 Days Duration</p>
                    <p>30+ students</p>
                    <p>3 Months after course support</p>
                  </Col>
                  <Col>
                    <h3>Weekend Basic + advance</h3>
                    <p>10am-12pm (Live Trading)</p>
                    <p>24500 fee</p>
                    <p>Saturday Sunday Class</p>
                    <p>9-10 Weeks Duration</p>
                    <p>20+ students</p>
                  </Col>
                </Row>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <h3 style={{ textAlign: "center" }}>Offline according To India</h3>
              <div style={{ marginBottom: 40, padding: 50 }}>
                <Row>
                  <Col>
                    <h3>Equity + FNO</h3>
                    <p>Moday to Friday Sessions</p>
                    <p>39500 fee</p>
                    <p>1.5 Months Duration</p>
                    <p>24 students</p>
                    <p>11-1 pm</p>
                  </Col>
                  <Col>
                    <h3>Equity + FNO</h3>
                    <p>Moday to Friday Sessions</p>
                    <p>39500 fee</p>
                    <p>1.5 Months Duration</p>
                    <p>24 students</p>
                    <p>2-4 pm</p>
                  </Col>
                </Row>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <h3 style={{ textAlign: "center" }}>Online coording To Canada</h3>
              <div style={{ marginBottom: 40, padding: 50 }}>
                <Row>
                  <Col>
                    <h3>Weekdays Basic</h3>
                    <p>9:30am-10:30am</p>
                    <p>13500 fee</p>
                    <p>20-25 Days Duration</p>
                    <p>30+ students</p>
                    <p>3 Months after Course support</p>
                  </Col>
                  <Col>
                    <h3>Weekdays Basic + advance</h3>
                    <p>9:30am-10:30am</p>
                    <p>19500 fee</p>
                    <p>55-60 Days Duration</p>
                    <p>30+ students</p>
                    <p>3 Months after course support</p>
                  </Col>
                  <Col>
                    <h3>Weekdays Basic + advance (Live Trading)</h3>
                    <p>11:30pm-12:30am</p>
                    <p>24500 fee</p>
                    <p>55-60 Days Duration</p>
                    <p>30+ students</p>
                    <p>3 Months after course support</p>
                  </Col>
                  <Col>
                    <h3>Weekend Basic + advance</h3>
                    <p>10:30pm-12:30am</p>
                    <p>24500 fee</p>
                    <p>Saturday Sunday Class</p>
                    <p>9-10 Weeks Duration</p>
                    <p>20 students Only</p>
                    <p>3 Months after course support</p>
                  </Col>
                </Row>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <h3 style={{ textAlign: "center" }}>Offline according To Canada</h3>
              <div style={{ marginBottom: 40, padding: 50 }}>
                <Row>
                  <Col>
                    <h3>Basic + Advance</h3>
                    <p>12-2 pm</p>
                    <p>$700 CAD</p>
                    <p>Saturday Sunday Class</p>
                    <p>39500 fee</p>
                    <p>2 Months Duration</p>
                    <p>3 Months after course support</p>
                  </Col>
                  <Col>
                    <h3>Basic + Advance</h3>
                    <p>3-5 pm</p>
                    <p>$700 CAD</p>
                    <p>Saturday Sunday Class</p>
                    <p>39500 fee</p>
                    <p>2 Months Duration</p>
                    <p>3 Months after course support</p>
                  </Col>
                </Row>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </Container>
      <div className={styles.banner}>
        {/* <img
          className={styles.bannerImage}
          src="https://import.cdn.thinkific.com/191701/AfHi8MSeRn6wjHrFeaGZ_DSC00176-5.jpg"
          width={"100%"}
          height={400}
        /> */}
      </div>
      <Container>
        <div className={styles.bottomQuote}>
          <SectionHeading
            title={""}
            quote={`"These are the specific experiences we wish we had access to when we were starting out! These would've accelerated our growth by YEARS"`}
          />
        </div>
      </Container>
    </div>
  );
}

export default AllCources;
