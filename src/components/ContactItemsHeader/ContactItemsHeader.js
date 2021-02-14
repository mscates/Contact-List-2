import React from "react";
import Cards from "./Cards";
import { Container, Row } from "react-bootstrap";

const ContactItemsHeader = () => {
  return (
    <Container fluid>
      <Row>
        <Cards />
      </Row>
    </Container>
  );
};

export default ContactItemsHeader;
