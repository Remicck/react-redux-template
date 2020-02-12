import {INCREMENT, DECREMENT} from '../reducer/Reducers'

export const incrementAction = (value) => {
  return {
    type: INCREMENT,
    value: value,
  }
}
export const decrementAction = (value) => {
  return {
    type: DECREMENT,
    value: value,
  }
}