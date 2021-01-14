import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./components/App"
import { BrowserRouter as Router } from "react-router-dom"
import configureStore from './store/configureStore'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>
  </Provider>,
  document.getElementById("root")
)
