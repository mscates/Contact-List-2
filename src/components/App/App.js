import React from "react";
import { Route, Switch } from "react-router-dom";
import UpdateContactForm from "../UpdateContactForm/UpdateContactForm";
import Home from "../Home/Home";
import Header from "../Header/Header";
import AddContactForm from "../AddContactForm/AddContactForm";
import Styles from "../styles.module.css";
import configureStore from "../../store/configureStore";
import { Provider } from "react-redux";
// import image from "./images/background2.jpg";
const store = configureStore();
const App = () => {
  
  return (
    <Provider store={store}>
      <div
        className={Styles.main}
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
    </Provider>
  );
};

export default App;
