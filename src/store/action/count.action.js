import { DECREMENT, INCREMENT } from "../const/count.const"

export const increment = payload => ({type: INCREMENT, payload})
export const decrement = payload => ({type: DECREMENT, payload})