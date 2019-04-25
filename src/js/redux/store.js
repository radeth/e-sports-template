import { createStore } from 'redux'
import cordsReducer from './cordsReducer'

const store = createStore(cordsReducer,null)
export default store;
 