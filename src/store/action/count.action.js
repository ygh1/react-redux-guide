import { DECREMENT, INCREMENT } from "../const/count.const"

export const increment = payload => ({type: INCREMENT, payload})
export const decrement = payload => ({type: DECREMENT, payload})

export const incrementSync = payload => dispatch => {
  setTimeout(() => {
    dispatch(increment(payload))
  }, 2000)
}
