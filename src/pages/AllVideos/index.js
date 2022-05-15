import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ProductCard from '../../components/ProductCard'
import SectionHeading from '../../components/SectionHeading'

const courseDetails = [{id:1,name:"Video 1", image:"https://www.alux.com/wp-content/uploads/2022/04/maxresdefault-10.jpg",description:"Course Description"},
{id:2,name:"Video 2", image:"https://www.alux.com/wp-content/uploads/2022/04/maxresdefault-10.jpg",description:"Course Description"},
{id:3,name:"Video 3", image:"https://www.alux.com/wp-content/uploads/2022/04/maxresdefault-10.jpg",description:"Course Description"},
{id:4,name:"Video 4", image:"https://www.alux.com/wp-content/uploads/2022/04/maxresdefault-10.jpg",description:"Course Description"}
] 

function AllVideos() {
  return (
    <div>
    <div className='content'>
        <SectionHeading title={"All Videos"} />
        <Container>
          <Row>
          {courseDetails.map((item,i)=>{
              return(
                <Col key={i}>
                <ProductCard id={"/AllVideos/" + item.id} productName={item.name}  source={item.image} productprice={item.description} /> 
                </Col>
                  
              )
          }
          )}
           </Row>
        </Container>
    </div>
</div>
  )
}

export default AllVideos