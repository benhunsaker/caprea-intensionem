import { FETCH_ALL_BUDGETS, CREATE_BUDGET } from '../actions';

export default function (state = [], action) {
  switch(action.type) {
    case FETCH_ALL_BUDGETS:
      return action.payload.data;
    case CREATE_BUDGET:
      return [action.payload.data, ...state];
  }

  return state;
}
