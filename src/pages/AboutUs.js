import React, { useState } from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Layout from '../components/Layout';
import SectionHeading from '../components/SectionHeading';
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import Link from 'next/link'
import styles from "../../styles/Banner.module.css"
import styles1 from "../../styles/About.module.css"


function AboutUs() {
  return (
    <div>
      <div className={styles.bannerSection}>
        <video
          className="video-player"
          width="100%"
          autoPlay={true}
          loop={true}
          muted={true}
          playsInline={true}
          data-testid="homepage-hero-video"
        >
          <source
            src="https://www.alux.com/wp-content/uploads/2019/05/alux.mp4"
            type="video/mp4"
          />
        </video>
        <div className={styles.bannerText}>
          <h3 className={styles.bannerHeading}>WELCOME TO Our Website</h3>
          <h4 className={styles.bannerSubheading}>“The place where future billionaires come to get inspired”</h4>
        </div>

      </div>
      <Container>
        <p className={styles1.fluid3}>In 2013 we began our journey of documenting the most expensive thing in the world. Because of our unique approach to the world of luxury, the project kept evolving.

          What started out as a simple database of information on luxury brands and products, quickly evolved into a fast growing Media company that delivers inspiration, tools and knowledge to the 10 million luxury enthusiasts that consume our content on a monthly basis.

          We take pride in being at the forfront of the rise of luxury.</p>
      </Container>
      <div className={styles1.bg1}>
        <Container>
          <div className={styles1.fluid2}>
            <SectionHeading title={"Why Choose Us"}></SectionHeading>
            <Row className={styles1.whyChooseUs}>
              <Col>
                <img src="/assests/austin-distel-EMPZ7yRZoGw-unsplash.jpg" width="100%" />
              </Col>
              <Col>
                <ul className={styles1.whyChooseUsPoints}>
                  <li>Support.</li>
                  <li>Social Network of Traders.</li>
                  <li>Confront the Reality of Market with us.</li>
                  <li>Gain Practical Knowledge.</li>
                </ul>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default AboutUs