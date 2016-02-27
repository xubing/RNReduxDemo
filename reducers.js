
import * as types from  './commands'

const initialState = 5;


export default function calculate(state = initialState, action) {
  console.log(action.type)
  switch (action.type) {
    case types.ADD:
      return state + 1
    case types.SUB:
      return state - 1
    default:
      return state
  }
}
