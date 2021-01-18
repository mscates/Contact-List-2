import React from "react"
import { Link } from "react-router-dom"
import { Container, Row, Col, Button  } from "react-bootstrap"


const Header = () => {
  return (
    
    <Container fluid>
      <Row className="text-center pt-4">
        <Col >
          <h1>Basic Contact List</h1>
        </Col>
        <Col>
        <Button variant="primary" size="lg">
          <Link to="/add">
            Add Contact
          </Link>
        </Button>
        </Col>
      </Row>
    </Container>
  )
}

export default Header
