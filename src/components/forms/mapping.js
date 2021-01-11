const mapStateToProps = state => ({
  contacts: state.contacts
  
});

const mapDispatchToProps = dispatch => ({
  contactAdded: contact => dispatch(contactAdded(contact))
});

export {
  mapStateToProps,
  mapDispatchToProps,
};
