import Link from 'next/link'
import React from 'react'
import {Card, Button} from 'react-bootstrap'
import productcard from "../../styles/ProductCard.module.css"

function ProductCard({source,productName,productprice,id}) {
  return (
    <div className={productcard.cards}>
      <Link href={ id }>
      <Card style={{ width: '100%', border: "none", marginBottom:"20px"  }}>
            <Card.Img  style={{height:"200px",objectFit:"cover"}} variant="top" src={source} />
                <Card.Body style={{background: "#1c1c24",
color: "#d2d2d2",
fontSize:" 14px",
textAlign: "center",}}>
                    <Card.Title>{productName}</Card.Title>
                <Card.Text>
                    <span style={{color:"#ffc451"}}>
                        {productprice}
                      </span>
                </Card.Text>
                </Card.Body>
        </Card>
      </Link>
    </div>
  )
}

export default ProductCard