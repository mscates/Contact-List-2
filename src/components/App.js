import React, { Component } from "react"
import { Route, Switch } from "react-router-dom"
import UpdateContactForm from "../components/forms/UpdateContactForm"
import Home from "./Home"
import Header from "./Header"
import AddContactForm from "../components/forms/AddContactForm"
import { connect } from 'react-redux'
import { contactAdded } from '../store/contacts'


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
    this.props.contactAdded(contact)
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
            component={() => <AddContactForm handleSubmit={this.handleSubmit}/>}
          />
          <Route path="/update" exact component={UpdateContactForm} />
        </Switch>
      </div>
      
    )
  }
}

const mapStateToProps = state => ({
  contacts: state.contacts
})

const mapDispatchToProps = dispatch => ({
  contactAdded: contact => dispatch(contactAdded(contact)),
  contactRemoved: id => dispatch(contactRemoved(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)


