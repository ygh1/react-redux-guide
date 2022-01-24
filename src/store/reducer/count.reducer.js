import { DECREMENT, INCREMENT } from "../const/count.const"

const initialState = {
  count: 0
}
export default function countReducer (state = initialState, action) {
  console.log(action)
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: action.payload + state.count
      }
    case DECREMENT: return {
      ...state,
      count: state.count - action.payload
    }
    default:
      return {...state}
  }
}
