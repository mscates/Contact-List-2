import React from "react"
import { Link } from "react-router-dom"
import { Container, Row, Col, Button  } from "react-bootstrap"
import Styles from "./styles.module.css";

const Header = () => {
  return (
    
    <Container fluid>
      <Row className="text-center pt-4">
        <Col>
          <h1 className={Styles.title}>Basic Contact List</h1>
        </Col>
        <Col>
          <Link to="/add">
            <Button className={Styles.addContact} size="lg">
              Add Contact
             </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  )
}

export default Header
