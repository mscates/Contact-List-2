import React, { useState } from "react";
import { Card, Button, ListGroup } from "react-bootstrap";
import Styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { contactRemoved } from "../store/contacts";
import { useDispatch } from "react-redux";

const NewCard = ({ item }) => {
  const [showListGroup, setShowListGroup] = useState(false);

  const dispatch = useDispatch();

  return (
    <Card
      onMouseEnter={() => setShowListGroup(true)}
      onMouseLeave={() => setShowListGroup(false)}
      key={item.id}
      style={{ width: "16rem" }}
    >
      <Card.Body>
        <Card.Title className={`${Styles.cardTitle} font-italic`}>
          {item.firstName} {item.lastName}
        </Card.Title>
      </Card.Body>
      {showListGroup ? (
        <div>
          <ListGroup variant="flush">
            <ListGroup.Item>{item.email}</ListGroup.Item>
            <ListGroup.Item>{item.phone}</ListGroup.Item>
          </ListGroup>
        </div>
      ) : null}
      <Card.Body className={Styles.buttons}>
        <Link
          to={{
            pathname: `/update/${item.id}`,
            state: { item },
          }}
        >
          <Button>Update</Button>
        </Link>

        <Card.Link>
          <Button onClick={() => dispatch(contactRemoved(item.id))}>
            Delete
          </Button>
        </Card.Link>
      </Card.Body>
    </Card>
  );
};

export default NewCard;
