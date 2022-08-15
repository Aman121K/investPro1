import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CardComponent from "../components/CardComponent";
import Header from "../components/Header";
import styles from "../../styles/AllCources.module.css";
import SectionHeading from "../components/SectionHeading";
import Link from "next/link";
import { getData } from "../api/api";

const mainCourses = [
  {
    id: 1,
    name: "Main Course 1",
    image:
      "https://import.cdn.thinkific.com/191701/courses/1430524/srRKifRAR2aUvPHPyMNX_learning%20mastery%20new%20course%20image.jpg",
    description:
      "Learning How to Learn is the most valuable skill one can have! This is the only resource you'll need to master Learning!",
  },
  {
    id: 2,
    name: "Main Course 2",
    image:
      "https://import.cdn.thinkific.com/191701/courses/1430524/srRKifRAR2aUvPHPyMNX_learning%20mastery%20new%20course%20image.jpg",
    description:
      "Learning How to Learn is the most valuable skill one can have! This is the only resource you'll need to master Learning!",
  },
  {
    id: 3,
    name: "Main Course 3",
    image:
      "https://import.cdn.thinkific.com/191701/courses/1430524/srRKifRAR2aUvPHPyMNX_learning%20mastery%20new%20course%20image.jpg",
    description:
      "Learning How to Learn is the most valuable skill one can have! This is the only resource you'll need to master Learning!",
  },
];

function AllCources() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getCourse();
  }, []);

  const getCourse = async () => {
    const responce = await getData("/all-courses");
    setData(responce.data.data);
    console.log(responce);
  };
  return (
    <div>
      <Container>
        <div className={styles.heading}>
          <SectionHeading title={"All Cources"} quote={""} />
        </div>
        <div className={styles.allCourcesSection}>
          <div className={styles.courcesCards}>
            <Row>
              {data.map((item, i) => {
                return (
                  <Link key={i} href={"/AllVideos"}>
                    <Col xl={4} lg={6} md={6}>
                      <CardComponent
                        paragraphStyle={{ fontSize: 17, textAlign: "center" }}
                        headingStyle={{ fontSize: 40, textAlign: "center" }}
                        textSize={240}
                        source={item.thumbnail}
                        title={item.name}
                        text={item.subject}
                      />
                    </Col>
                  </Link>
                );
              })}
            </Row>
          </div>
        </div>
      </Container>
      <div className={styles.banner}>
        <img
          className={styles.bannerImage}
          src="https://import.cdn.thinkific.com/191701/AfHi8MSeRn6wjHrFeaGZ_DSC00176-5.jpg"
          width={"100%"}
          height={400}
        />
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
