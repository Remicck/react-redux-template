export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

// ./reducers/reducer.jsx
// 初期State
const initialState = {
  counter: 0,
}
// Reducer処理
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT: {
      return Object.assign({}, state, {
        counter: state.counter + 1,
      })
    }
    case DECREMENT: {
      return Object.assign({}, state, {
        counter: state.counter - 1,
      })
    }
    default: {
      return state
    }
  }
}

export default reducer
