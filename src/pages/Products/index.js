import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { getData } from "../../api/api";
import ProductCard from "../../components/ProductCard";
import SectionHeading from "../../components/SectionHeading";

const prducts = [
  {
    id: 1,
    name: "The Point",
    image:
      "https://d2y3gqic1gic9.cloudfront.net/f5a62f6a-c20f-48da-8a07-698e0e827ad5-1080.jpg",
    price: "$160",
  },
  {
    id: 2,
    name: "The Lace Up",
    image:
      "https://d2y3gqic1gic9.cloudfront.net/f458dd73-fcdf-44fc-b065-034f07ac519c-1080.jpg",
    price: "$200",
  },
  {
    id: 3,
    name: "Product 3",
    image:
      "https://d2y3gqic1gic9.cloudfront.net/32e383ab-6d09-4e27-be65-ae1955841b4c-1080.jpg",
    price: "$400",
  },
  {
    id: 4,
    name: "Product 4",
    image:
      "https://d2y3gqic1gic9.cloudfront.net/f7be0f4b-d5ad-488d-a214-0e483c01db37-1080.jpg",
    price: "$500",
  },
];

function Products(porps) {
  // console.log("props....", porps);
  const [data, setData] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const responce = await getData("/all-products");
    if (responce?.data?.Success !== 1) return;
    console.log(responce?.data?.data);
    setData(responce?.data?.data);
  };

  return (
    <div>
      <div className="content">
        <SectionHeading title={"Products"} />
        <Container>
          <Row>
            {data.map((item, i) => {
              return (
                <Col xs={12} md={3} sm={4} key={item.id}>
                  <ProductCard
                    id={"/Products/" + item.id}
                    productName={item.ProductName}
                    source={item.ProductImage}
                    productprice={item.ProductPrice}
                  />
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Products;
// export async function getServerSideProps(context) {
//   const res = axios.get("http://localhost:5000/all-products");
//   const data = await res.data;
//   return {
//     porps: {
//       data,
//     },
//   };
// }
