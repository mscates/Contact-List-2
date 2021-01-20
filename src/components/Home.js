import React from "react"
import ContactItemsHeader from "./ContactItemsHeader"
import { useSelector } from "react-redux";

const Home = () => {
  const data = useSelector((state) => state);
  return (
    <div>
   <ContactItemsHeader data={data}/>
    </div>
  )
}

export default Home
