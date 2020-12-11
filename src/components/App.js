import React, { Component } from "react"
import Header from "./Header"
import ContactItemsHeader from "./ContactItemsHeader"
import AddContactModal from "./modals/AddContactModal"
import UpdateContactModal from "./modals/UpdateContactModal"

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
    showAddModal: false,
    showUpdateModal: false,
    contactToUpdate: {},
  }

  showAddContactModal = () => {
    this.setState({ showAddModal: true })
  }

  closeAddContactModal = () => {
    this.setState({ showAddModal: false })
  }

  closeUpdateModal = () => {
    this.setState({ showUpdateModal: false })
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
        <Header handleClick={this.showAddContactModal} />
        <div>
          {this.state.showAddModal && (
            <AddContactModal
              closeModal={this.closeAddContactModal}
              handleSubmit={this.handleSubmit}
              showAddModal={this.state.showAddModal}
            />
          )}
        </div>
        <div>
          {this.state.showUpdateModal && (
            <UpdateContactModal
              data={this.state.contactToUpdate}
              closeModal={this.closeUpdateModal}
              handleSubmit={this.handleUpdateSubmit}
              showUpdateModal={this.state.showUpdateModal}
            />
          )}
        </div>
        <ContactItemsHeader
          removeContact={this.handleDeleteContact}
          updateContact={this.handleUpdateContact}
          data={this.state.contacts}
        />
      </div>
    )
  }
}

export default App
