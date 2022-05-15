import React from 'react'
import { Row, Col, Container, Button } from 'react-bootstrap'
import ButtonComponent from '../../components/ButtonComponent'
import singleProduct from "../../../styles/singleProduct.module.css"

function productId() {
  return (
    <div className='content'>
        <Container>
            <Row className={singleProduct.pad3}>
            <Col xs={12} md={6}>
                <img  className={singleProduct.img43} src="https://d2y3gqic1gic9.cloudfront.net/98928d38-7800-455e-a6aa-50d6a53078eb-1080.jpg" />
            </Col>
            <Col xs={12} md={6}>
                <h1 className={singleProduct.productName}>Product 1</h1>
                <p className={singleProduct.price}>$95.99</p>
                <p className={singleProduct.description}>A remarkable shoe that's naturally soft, cozy all over, and fits your every move.</p>
               <Button className={singleProduct.button2}> Buy Now</Button>
            </Col>
            </Row>
        </Container>
    </div>
  )
}

export default productId