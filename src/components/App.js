import React, { Component } from "react"

import { Route, Switch } from "react-router-dom"
import UpdateContactForm from "../components/forms/UpdateContactForm"
import Home from "./Home"
import Header from "./Header"
import AddContactForm from "../components/forms/AddContactForm"

class App extends Component {
  state = {
    contacts: [
      {
        firstName: "Mark",
        lastName: "Cates",
        email: "codewithcates@gmail.com",
        phone: "214-385-3572",
        id: 1,
      },
    ],
    contactToUpdate: {},
  }

  handleUpdateContact = (id) => {
    const itemToUpdate = this.state.contacts.find((item) => id === item.id)
    this.setState({ showUpdateModal: true, contactToUpdate: itemToUpdate })
  }

  handleSubmit = (contact) => {
    this.setState({ contacts: [...this.state.contacts, contact] })
  }

  handleUpdateSubmit = (contact) => {
    this.setState((prevState) => {
      const updatedContacts = prevState.contacts.map((item) => {
        if (item.id === contact.id) {
          return {
            ...contact,
          }
        }
        return item
      })
      return {
        contacts: updatedContacts,
      }
    })
  }

  handleDeleteContact = (id) => {
    const filteredContacts = this.state.contacts.filter(
      (item) => id !== item.id
    )
    this.setState({ contacts: filteredContacts })
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route
            path="/"
            exact
            render={() => <Home data={this.state.contacts} />}
          />
          <Route
            path="/add"
            exact
            component={AddContactForm}
            handleSubmit={this.handleSubmit}
          />
          <Route path="/update" component={UpdateContactForm} />
        </Switch>
      </div>
    )
  }
}

export default App
