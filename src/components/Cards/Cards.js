import React from "react";
import { useSelector } from "react-redux";
import { Container, Row } from "react-bootstrap";
import NewCard from "../NewCard/NewCard";
import Styles from "../../components/styles.module.css";

const Cards = () => {
  const data = useSelector((state) => state);
  const contacts = data.map((item) => <NewCard key={item.id} item={item} />);
  return (
    <Container fluid="xl">
      <Row className={`${Styles.row} mt-5`}> {contacts}</Row>
    </Container>
  );
};

export default Cards;
