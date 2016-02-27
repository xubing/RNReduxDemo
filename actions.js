import * as types from './commands';

export function add() {
  console.log('add')
  return {
    type: types.ADD
  };
}

export function sub() {
  console.log('sub')
  return {
    type: types.SUB
  };
}
