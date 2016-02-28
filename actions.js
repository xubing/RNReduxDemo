import * as types from './actiontypes';

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
