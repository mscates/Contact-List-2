import React, { useState } from "react";
import { Card, ListGroup, OverlayTrigger, Tooltip } from "react-bootstrap";
import Styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { contactRemoved } from "../store/contacts";
import { useDispatch } from "react-redux";
import {
  faTrash,
  faEdit,
  faInfoCircle,
  faEnvelope,
  faMobile,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
// import {
//   faTwitter,
//   faFacebook,
//   faLinkedin,
//   faInstagram,
// } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NewCard = ({ item }) => {
  const dispatch = useDispatch();

  // const handleIconHover = (e) => {
  //   setShowDetail(true);
  //   if (e.target.getAttribute("data-icon") === "envelope") {
  //     setIconHover(item.email);
  //   } else if (e.target.getAttribute("data-icon") === "mobile") {
  //     setIconHover(item.phone);
  //   }
  //   console.log(e.target.getAttribute("data-icon") === "envelope")
  // };

  // const handleIconNoHover = () => {
  //   setShowDetail(false)
  // }

  return (
    <Card key={item.id} className={Styles.card}>
      <Card.Body className={`${Styles.profile}`}>
        <FontAwesomeIcon className="fa-3x mb-3" icon={faUserTie}></FontAwesomeIcon>
        <div className="h5">
          {item.firstName} {item.lastName}
        </div>
        <p>{item.jobTitle}</p>
        <Link
          to={{
            pathname: `/update/${item.id}`,
            state: { item },
          }}
        >
          <FontAwesomeIcon className={`${Styles.edit} fa-lg`} icon={faEdit}></FontAwesomeIcon>
        </Link>
      </Card.Body>
      <Card.Body className={Styles.profileDetail}>
        <div className={`${Styles.details} h2`}>Details</div>
      </Card.Body>

      {/* <Card.Title>
              {item.firstName} {item.lastName}
            </Card.Title>
            <div>
              {item.email}
              {item.phone}
            </div> */}

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

      {/* <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
          <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
          <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
          <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon> */}
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
    </Card>
  );
};

export default NewCard;
