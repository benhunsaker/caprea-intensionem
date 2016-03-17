import { combineReducers } from 'redux';
import BudgetsReducer from './budgets_reducer';
import ActiveBudgetReducer from './active_budget_reducer';
import AccountsReducer from './accounts_reducer';

const rootReducer = combineReducers({
  budgets: BudgetsReducer,
  active_budget: ActiveBudgetReducer,
  accounts: AccountsReducer
});

export default rootReducer;
