import {React,useState} from 'react'
import Header from '../components/Header'
import { Container,Row,Col,Form,Button } from 'react-bootstrap'
import SectionHeading from '../components/SectionHeading';
import styles from '../../styles/Contact.module.css';
import Footer from '../components/Footer';

function ContactUs() {
  return (
    <div>
      <Container>

        <div className={styles.content}>
        <Row>
        <Col xs={12} md={6}>
        <img src="/assests/contact.png" alt="img"></img>          
        </Col>
        <Col xs={12} md={6} className={styles.kl3}>
          <SectionHeading title={"Contact Us"} quote={"We’re really excited to hear from you!"} />
          <Form.Group className="mb-3">
            <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="First Name"
                
              />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Last Name"
                
              />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Your Email Id"
                
              />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={3} />
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
       
  )
}

export default ContactUs