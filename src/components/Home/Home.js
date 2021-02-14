import React from "react"
import Cards from '../Cards/Cards'
import { useSelector } from "react-redux";

const Home = () => {
  const data = useSelector((state) => state);
  return (
    <div>
   <Cards data={data}/>
    </div>
  )
}

export default Home
