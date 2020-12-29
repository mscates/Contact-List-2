import { configureStore } from '@reduxjs/toolkit'
import reducer from './contacts'

export default function() {
  return configureStore({reducer})
}