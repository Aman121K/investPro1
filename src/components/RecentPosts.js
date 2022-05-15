import React from 'react'
import SectionHeading from './SectionHeading'
import ImageCard from './ImageCard'
import ButtonComponent from './ButtonComponent'
import { Container,Row, Col } from 'react-bootstrap'
import styles from "../../styles/Recentposts.module.css" 
function RecentPosts() {
  return (
    <div className={styles.recentPosts}>
      <SectionHeading title={"Most recent posts"} quote={"A window into the best things in life!"} />
      <div className={styles.posts}>
        <Container>
          <Row>
            <Col xs={12} md={3}>
            <ImageCard source={"https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"}  width={"100%"} height={"100%"} days={"2 Days Ago"} heading={"Heading 1"}/>
            </Col>

            <Col xs={12} md={3}>
            <ImageCard source={"https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"}  width={"100%"} height={"100%"} days={"2 Days Ago"} heading={"Heading 1"}/>
            </Col>

            <Col xs={12} md={3}>
            <ImageCard source={"https://images.unsplash.com/photo-1523908511403-7fc7b25592f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"}  width={"100%"} height={"100%"} days={"2 Days Ago"} heading={"Heading 1"}/>
            </Col>

            <Col xs={12} md={3}>
            <ImageCard source={"https://images.unsplash.com/photo-1591035897819-f4bdf739f446?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"}  width={"100%"} height={"100%"} days={"2 Days Ago"} heading={"Heading 1"}/>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={3}>
              <ImageCard source={"https://images.unsplash.com/photo-1542304074-9c8ce93b52fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"}  width={"100%"} height={"100%"} days={"2 Days Ago"} heading={"Heading 1"}/>
            </Col>

            <Col xs={12} md={3}>
              <ImageCard source={"https://images.unsplash.com/photo-1519671282429-b44660ead0a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"}  width={"100%"} height={"100%"} days={"2 Days Ago"} heading={"Heading 1"}/>
            </Col>

            <Col xs={12} md={3}>
              <ImageCard source={"https://images.unsplash.com/photo-1532635241-17e820acc59f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"}  width={"100%"} height={"100%"} days={"2 Days Ago"} heading={"Heading 1"}/>
            </Col>

            <Col xs={12} md={3}>
              <ImageCard source={"https://images.unsplash.com/photo-1542303472-cfd3fa4eb337?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"}  width={"100%"} height={"100%"} days={"2 Days Ago"} heading={"Heading 1"}/>
            </Col>
          </Row>
          <div>
            <ButtonComponent click={()=>console.log("hellow")} name={"Read more Articles"}/>
          </div>
        </Container>
      </div>
      </div>
  )
}

export default RecentPosts