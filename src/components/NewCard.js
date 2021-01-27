import React, { useState } from "react";
import { Card, ListGroup, OverlayTrigger, Tooltip } from "react-bootstrap";
import Styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { contactRemoved } from "../store/contacts";
import people1 from './images/people-1a.jpg'
import { useDispatch } from "react-redux";
import {
  faTrash,
  faEdit,
  faInfoCircle,
  faEnvelope,
  faMobile,
} from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faFacebook,
  faLinkedin,
  faInstagram
} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NewCard = ({ item }) => {
  const [showListGroup, setShowListGroup] = useState(false);

  const dispatch = useDispatch();

  return (
    <Card
      // onMouseEnter={() => setShowListGroup(true)}
      // onMouseLeave={() => setShowListGroup(false)}
      key={item.id}
      className={Styles.mainCard}
    >
      <Card.Body className={Styles.cardBody}>
        <div className={Styles.img}>
          <img src={people1} alt="" />
        </div>
        <Card.Title className={`${Styles.cardTitle} font-italic`}>
          {item.firstName} {item.lastName}
        </Card.Title>
        {/* <OverlayTrigger
        key={'top'}
        placement={'top'}
        overlay={
          <Tooltip id={`tooltip-top`}>
            Click for More Info
          </Tooltip>
        }
        >
          <FontAwesomeIcon
            className={Styles.infoIcon}
            icon={faInfoCircle}
          ></FontAwesomeIcon>
        </OverlayTrigger> */}
      
      {showListGroup ? (
        <div className={Styles.socials}>
          <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
          <FontAwesomeIcon icon={faMobile}></FontAwesomeIcon>
          <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
          <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
          <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
          <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
          {/* <ListGroup>
            <ListGroup.Item className={Styles.listGroup}>
              {item.email}
            </ListGroup.Item>
            <ListGroup.Item className={Styles.listGroup}>
              {item.phone}
            </ListGroup.Item>
          </ListGroup> */}
          {/* <div className={Styles.alignIcons}>
            <Link
              to={{
                pathname: `/update/${item.id}`,
                state: { item },
              }}
            >
              <FontAwesomeIcon
                className={(Styles.icon, Styles.iconUpdate)}
                icon={faEdit}
              ></FontAwesomeIcon>
            </Link>
            <Link to="/">
              <FontAwesomeIcon
                className={(Styles.icon, Styles.iconDelete)}
                icon={faTrash}
                onClick={() => dispatch(contactRemoved(item.id))}
              ></FontAwesomeIcon>
            </Link>
          </div> */}
        </div>
      ) : null}
      </Card.Body>
    </Card>
  );
};

export default NewCard;
