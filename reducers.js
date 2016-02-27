
import * as types from  './commands'

export default function calculate(state = 0, action) {
  switch (action.type) {
    case types.ADD:
      return state + 1
    case types.SUB:
      return state - 1
    default:
      return state
  }
}
