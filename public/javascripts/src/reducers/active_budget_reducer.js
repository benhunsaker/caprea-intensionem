import { FETCH_BUDGET, RESET_CURRENT_BUDGET } from '../actions';

export default function (state = null, action) {
  switch(action.type) {
    case FETCH_BUDGET:
      return action.payload.data;
    case RESET_CURRENT_BUDGET:
      return null;
  }

  return state;
}
