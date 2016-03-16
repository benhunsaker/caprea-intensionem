import { combineReducers } from 'redux';
import BudgetsReducer from './budgets_reducer';
import ActiveBudgetReducer from './active_budget_reducer';

const rootReducer = combineReducers({
  budgets: BudgetsReducer,
  active_budget: ActiveBudgetReducer
});

export default rootReducer;
