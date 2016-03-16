import axios from 'axios';

export const CREATE_BUDGET = 'CREATE_BUDGET';
export const FETCH_BUDGET = 'FETCH_BUDGET';
export const FETCH_ALL_BUDGETS = 'FETCH_ALL_BUDGETS';
export const RESET_CURRENT_BUDGET = 'RESET_CURRENT_BUDGET';

const budget_url = '/api/budget';

export function resetCurrentBudget(budget) {
  return {
    type: RESET_CURRENT_BUDGET,
    payload: budget
  }
}

export function fetchBudget (id) {
  const request = axios.get(`${budget_url}/${id}`);
  return {
    type: FETCH_BUDGET,
    payload: request
  };
}

export function createBudget(data) {
  const request = axios.post(budget_url, data);
  return {
    type: CREATE_BUDGET,
    payload: request
  };
}

export function fetchAllBudgets () {
  const request = axios.get(`${budget_url}`);
  return {
    type: FETCH_ALL_BUDGETS,
    payload: request
  };
}
