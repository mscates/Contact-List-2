import React from "react";
import ContactData from "./Cards";
import { Container, Row } from "react-bootstrap";

const ContactItemsHeader = () => {
  return (
    <Container>
      <Row>
        <ContactData />
      </Row>
    </Container>
  );
};

export default ContactItemsHeader;
