import React from "react"
import { Route, Switch } from "react-router-dom"
import UpdateContactForm from "../components/forms/UpdateContactForm"
import Home from "./Home"
import Header from "./Header"
import AddContactForm from "../components/forms/AddContactForm"
import { useSelector } from 'react-redux'
import image from './images/background2.jpg'



const App =() => {
  // put on home component
    const data = useSelector(state => state)

    return (
  
        <div style={{backgroundImage: `url(${image})`, margin: 0,backgroundSize: 'cover', height: '100vh', width: '100%'}}>
    
        <Header />
        <Switch>
          <Route
            path="/"
            exact
            render={() => <Home data={data} />}
          />
          <Route
            path="/add"
            exact
            component={AddContactForm}
          />
          <Route path="/update/:id" exact component={UpdateContactForm}/>
        </Switch>
      </div>
      
    )
}

export default App


