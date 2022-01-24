import { createStore, applyMiddleware } from 'redux'
import reducer from './reducer'
// import thunk from './middleware/thunk'
import thunk from 'redux-thunk'

const store = createStore(reducer, applyMiddleware(thunk))
export default store