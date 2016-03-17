import axios from 'axios';

export const CREATE_BUDGET = 'CREATE_BUDGET';
export const FETCH_BUDGET = 'FETCH_BUDGET';
export const FETCH_ALL_BUDGETS = 'FETCH_ALL_BUDGETS';
export const RESET_CURRENT_BUDGET = 'RESET_CURRENT_BUDGET';
export const REMOVE_CURRENT_BUDGET = 'RESET_CURRENT_BUDGET';
export const UPDATE_DEPOSIT = 'UPDATE_DEPOSIT';

const budget_url = '/api/budget';

export function resetCurrentBudget() {
  return {
    type: RESET_CURRENT_BUDGET,
    payload: {
      name: null,
      domain: {start:null, end: null}
    }
  }
}

export function updateBudget(data) {
  const request = axios.put(`${budget_url}/${data._id}`, data);
  return {
    type: UPDATE_DEPOSIT,
    payload: request
  }
}

export function removeCurrentBudget() {
  return {
    type: REMOVE_CURRENT_BUDGET,
    payload: null
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
