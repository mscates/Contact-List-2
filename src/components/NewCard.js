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
import {
  faTwitter,
  faFacebook,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
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
    <Card key={item.id} className={`${Styles.card} d-flex`}>
      <Card.Body className={`${Styles.profile}`}>
        <FontAwesomeIcon
          className="fa-3x mb-3"
          icon={faUserTie}
        ></FontAwesomeIcon>
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
          <FontAwesomeIcon
            className={`${Styles.edit} fa-lg`}
            icon={faEdit}
          ></FontAwesomeIcon>
        </Link>
      </Card.Body>
      <Card.Body className={Styles.profileDetail}>
        <div className={`${Styles.details} h2`}>Details</div>
        <div className={Styles.mainContacts}>
          Email: <span className="ml-3">{item.email}</span>
        </div>
        <div className={Styles.mainContacts}>Mobile: {item.phone}</div>
        <div className={`${Styles.socials} mt-4`}>
          <FontAwesomeIcon className={`${Styles.twitter} fa-lg`} icon={faTwitter}></FontAwesomeIcon>
          <FontAwesomeIcon className={`${Styles.facebook} fa-lg`} icon={faFacebook}></FontAwesomeIcon>
          <FontAwesomeIcon className={`${Styles.linkedin} fa-lg`} icon={faLinkedin}></FontAwesomeIcon>
          <FontAwesomeIcon className={`${Styles.instagram} fa-lg`} icon={faInstagram}></FontAwesomeIcon>
        </div>
      </Card.Body>

     
       

      
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
