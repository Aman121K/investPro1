import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CardComponent from "../components/CardComponent";
import Header from "../components/Header";
import styles from "../../styles/AllCources.module.css";
import SectionHeading from "../components/SectionHeading";
import Link from "next/link";
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
      <Container>
        <div className={styles.heading}>
          <SectionHeading title={"All Courses"} quote={""} />
        </div>
        <div className={styles.allCourcesSection}>
          <div className={styles.courcesCards}>
            <Row>
              {data.map((item, i) => (
                <Col key={i} xl={4} lg={6} md={6}>
                  <Link href="/AllVideos">
                    <a>
                      <CardComponent
                        paragraphStyle={{ fontSize: 17, textAlign: "center" }}
                        headingStyle={{ fontSize: 40, textAlign: "center" }}
                        textSize={240}
                        source={item.thumbnail}
                        title={item.name}
                        text={item.subject}
                      />
                    </a>
                  </Link>
                </Col>
              ))}
            </Row>
          </div>
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
