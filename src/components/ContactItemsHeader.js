import React from "react";
import ContactData from "./ContactData";
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
