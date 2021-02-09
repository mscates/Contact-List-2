import React from "react";
import { Route, Switch } from "react-router-dom";
import UpdateContactForm from "../components/forms/UpdateContactForm";
import Home from "./Home";
import Header from "./Header";
import AddContactForm from "../components/forms/AddContactForm";
import Styles from "./styles.module.css";
// import image from "./images/background2.jpg";

const App = () => {
  return (
    <div className={Styles.main}
      // style={{
      //   backgroundImage: `url(${image})`,
      //   backgroundSize: "cover",
      //   height: "100vh",
      //   width: "100%",
      // }}
    >
      <Header />
      <Switch>
        <Route path="/" exact render={() => <Home />} />
        <Route path="/add" exact component={AddContactForm} />
        <Route path="/update/:id" exact component={UpdateContactForm} />
      </Switch>
    </div>
  );
};

export default App;
