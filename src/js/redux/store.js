import { createStore } from 'redux'
import cordsReducer from './cordsReducer'

const store = createStore(cordsReducer)
export default store;
 