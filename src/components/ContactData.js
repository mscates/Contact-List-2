import React from "react"
import { useSelector } from 'react-redux'
import { contactRemoved } from '../store/contacts'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'

const ContactData = ({ dispatch }) => {
  const data = useSelector(state => state)
  const contacts = data.map((item) => (
    
    
    <Card className="mt-5 mr-5 mb-4" key={item.id} style={{ width: '16rem' }}>
   <Card.Body>
     <Card.Title>{item.firstName} {item.lastName}</Card.Title>
      <Card.Text>{item.email}</Card.Text>
      <Card.Text>{item.phone}</Card.Text>
      
      
        
        <Link to={{
          pathname: `/update/${item.id}`,
          state: {item}
        }} 
        >
          <Button>
          Update
          </Button>
        </Link>
       
        
     
        <Button
          onClick={() => dispatch(contactRemoved(item.id))}
        >
          Delete
        </Button>
        
    </Card.Body>
    </Card>
   
 
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

