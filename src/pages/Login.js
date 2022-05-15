import React, { useState } from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import SectionHeading from '../components/SectionHeading';
import {Container, Row, Col, Form, Button} from 'react-bootstrap'
import Link from 'next/link'
import styles from "../../styles/Signup.module.css"

function Login() {
    const [username, setUsername] = useState("");
    const [password,setPassword] = useState("")
  return (
    <div>
      <Container>
      <div className='layout'>
        <div className={styles.content}>
        <Row>
        <Col xs={12} md={6}>
        <img src="/assests/login.png" alt="img"></img>          
        </Col>
          <Col xs={12} md={6} className={styles.kl3}>
          <SectionHeading title={"Hey there! Welcome"} quote={"Login to your account"} />
          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Username"
                onChange={(e) => setUsername(e.target.value)}
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
      
            <div className={styles.linksSection}>
                <Link href={"#"}>
                    <p className={styles.links}>Forgot Your Password?</p>
                </Link>
                <Button
              className={styles.jke1}
              onClick={() => submit()}
              variant="primary"
            >
              Submit
            </Button>
                <Link href={"/Signup"}>
                    <p className={styles.links1}>Don’t have an account? Sign up</p>
                </Link>
            </div>
          </Col>
     
        </Row>
        </div>
        </div>
      </Container>
    </div>
  )
}

export default Login