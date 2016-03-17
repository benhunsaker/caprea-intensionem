import { FETCH_BUDGET, RESET_CURRENT_BUDGET, REMOVE_CURRENT_BUDGET, UPDATE_DEPOSIT } from '../actions';

export default function (state = null, action) {
  switch(action.type) {
    case FETCH_BUDGET:
    case UPDATE_DEPOSIT:
      return action.payload.data;
    case RESET_CURRENT_BUDGET:
    case REMOVE_CURRENT_BUDGET:
      return action.payload;
  }
  return state;
}
