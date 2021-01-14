import React from "react"
import { useSelector } from 'react-redux'
import { contactRemoved } from '../store/contacts'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const ContactData = ({ dispatch }) => {
  const data = useSelector(state => state)

  const contacts = data.map((item) => (
    <div key={item.id}>
      <div>{item.firstName}</div>
      <div>{item.lastName}</div>
      <div>{item.email}</div>
      <div>{item.phone}</div>
      <div>
        <Link to={{
          pathname: `/update/${item.id}`,
          state: {item}
        }} 
        >
          Update
        </Link>
      </div>
      <div>
        <button
          onClick={() => dispatch(contactRemoved(item.id))}
        >
          Delete
        </button>
      </div>
    </div>
  ))

  return <React.Fragment>{contacts}</React.Fragment>
}

const mapStateToProps = state => ({
  contacts: state.contacts
})

const connection = connect(mapStateToProps);

export default connection(ContactData)


//// mapStateToProps | ContactData

// const additionalProps = mapStateToProps();

// <Wrapper props>
//   <ContactData {...props} {...additionalProps} />
// </Wrapper>

// ///


// <ContactData status={} />

// props.status
// props = { status, contacts }

// props.contacts

