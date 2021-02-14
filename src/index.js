import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./components/App/App"
import { BrowserRouter as Router } from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  // <Provider store={store}>
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>
  // </Provider>,
  ,document.getElementById("root")
)
