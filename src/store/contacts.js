import { createSlice } from '@reduxjs/toolkit'

let lastId = 0

const slice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    contactAdded: (contacts, action) => {
      console.log(action)
      contacts.push({
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        email: action.payload.email,
        phone: action.payload.phone,
        id: ++lastId            
      })
    },
    contactRemoved: (contacts, action) => {
      return contacts.filter(contact => contact.id !== action.payload.id)
    }
  }
})

export const { contactAdded, contactRemoved } = slice.actions
export default slice.reducer
// Action types
// with redux toolkit we don't need these constants
// const CONTACT_ADDED = "contactAdded"
// const CONTACT_REMOVED = "contactRemoved"

// Action creators
// redux toolkit version
// export const contactAdded = createAction("contactAdded")
// export const contactRemoved = createAction("contactRemoved")

// export const contactAdded = (firstName, lastName, phone, email) => ({
//   type: CONTACT_ADDED,
//     payload: {
//       firstName,
//       lastName,
//       email,
//       phone
//     }
// })

// export const contactRemoved = id => ({
//   type: CONTACT_REMOVED,
//   payload: {
//     id
//   }
// })

// Reducers
// with redux toolkit changes
// let lastId = 0
// export default createReducer([], {
//   [contactAdded.type]: (contacts, action) => {
//     contacts.push({
//       firstName: action.payload.firstName,
//       lastName: action.payload.lastName,
//       email: action.payload.email,
//       phone: action.payload.phone,
//       id: ++lastId            
//     })
//   },
//   [contactRemoved.type]: (contacts, action) => {
//     return contacts.filter(contact => contact.id !== action.payload.id)
//   }
// })

// Reducers
// export default function reducer(state = [], action) {
//   switch(action.type) {
//     case contactAdded.type:
//       return [
//         ...state,
//         {
//           firstName: action.payload.firstName,
//           lastName: action.payload.lastName,
//           email: action.payload.email,
//           phone: action.payload.phone,
//           id: ++lastId
//         }
//       ]
//     case contactRemoved.type:
//       return state.filter(contact => contact.id !== action.payload.id)  
//     default:
//       return state
//   }
// }