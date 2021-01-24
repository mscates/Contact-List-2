import React from 'react';
import { Card, Button } from "react-bootstrap";
import Styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { contactRemoved } from "../store/contacts";
import { useDispatch } from 'react-redux'

const NewCard = ({ item }) => {
  const dispatch = useDispatch()
  return ( 
    <Card key={item.id} style={{ width: "18rem" }}>
      <Card.Img variant="top" src="https://picsum.photos/200"/>
      <Card.Body>
        <Card.Title className={`${Styles.cardTitle} font-italic`}>
          {item.firstName} {item.lastName}
        </Card.Title>
        <Card.Text>{item.email}</Card.Text>
        <Card.Text>{item.phone}</Card.Text>

        <Link
          to={{
            pathname: `/update/${item.id}`,
            state: { item },
          }}
        >
          <Button>Update</Button>
        </Link>

        <Button onClick={() => dispatch(contactRemoved(item.id))}>
          Delete
        </Button>
      </Card.Body>
    </Card>
   );
}
 
export default NewCard;