import { combineReducers } from 'redux'
import counter from './counter'
import books from './books'
import systemInfo from './systemInfo'

export default combineReducers({
  counter,
  books,
  systemInfo
})
