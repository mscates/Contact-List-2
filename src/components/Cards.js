import React from "react";
import { useSelector } from "react-redux";

import NewCard from './NewCard'

const Cards = () => {
  const data = useSelector((state) => state);
  const contacts = data.map((item) => (
    <NewCard key={item.id} item={item}/>
  ));

  return <React.Fragment>{contacts}</React.Fragment>;
};



export default Cards;


