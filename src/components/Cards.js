import React from "react";
import { useSelector } from "react-redux";
import { Container, Row } from "react-bootstrap";
import NewCard from "./NewCard";

const Cards = () => {
  const data = useSelector((state) => state);
  const contacts = data.map((item) => <NewCard key={item.id} item={item} />);
  return (
    <Container>
      <Row>{contacts}</Row>
    </Container>
  );
};

export default Cards;
