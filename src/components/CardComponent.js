import React from "react";
import { Card } from "react-bootstrap";
import style from "../../styles/Card.module.css";

function CardComponent({ title, text, source }) {
  return (
    <div className={style.cards}>
      <Card style={{ cursor: "pointer ", border: "none" }}>
        <Card.Img
          variant="top"
          src={source}
          height={300}
          style={{ objectFit: "cover" }}
        />
        <Card.Body
          style={{ background: "#1c1c24", color: "#d2d2d2", fontSize: "14px" }}
        >
          <Card.Title>{title}</Card.Title>
          <Card.Text>{text}</Card.Text>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardComponent;
