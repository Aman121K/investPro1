import React, { useState } from 'react'
import { Container,Row,Col,Form,Button } from 'react-bootstrap'
import Header from '../components/Header';
import styles from '../../styles/Upload.module.css'
import Footer from '../components/Footer';
import SectionHeading from '../components/SectionHeading';

function Upload() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");
    const [number,setNumber] = useState();
    const [image,setImage] = useState();
  
    const submit = () =>{
      console.log(username,email,password,confirmPassword)
    }
  return (
    <div>
      <Container>
      <div className='layout'>
        <div className={styles.content}>
        <Row>
        <Col xs={12} md={6}>
        <img src="/assests/upload.png" alt="img"></img>          
        </Col >
          <Col  xs={12} md={6} className={styles.kl3}>
          <SectionHeading title={"Upload screenshot"} quote={"Upload Screenshot of your Payment"} />
          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Username"
                onChange={(e) => setUsername(e.target.value)}
              />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Email"
                onChange={(e) => setEmail(e.target.value)}
              />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Password"
                onChange={(e) => setPassword(e.target.value)}
              />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Password Again"
                onChange={(e) => setPassword(e.target.value)}
              />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Mobile Number</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Mobile number"
                onChange={(e) => setNumber(e.target.value)}
              />
          </Form.Group>
          <Form.Group>
              <Form.Label>Upload Screenshot of Payment</Form.Label>
              <Form.Control
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
              />
          </Form.Group>
          <Button
              className={styles.jke1}
              onClick={() => submit()}
              variant="primary"
            >
              Submit
            </Button>
            {/* <div className={styles.linksSection}>
                <Link href={"/Login"}>
                    <p className={styles.links}>Already have an account? Log in here</p>
                </Link>
            </div> */}
          </Col>
          
        </Row>
        </div>
        </div>
      </Container>
    </div>
    
  )
}

export default Upload