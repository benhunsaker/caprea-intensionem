import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchBudget, removeCurrentBudget, updateBudget } from '../../actions';

import MyForm from '../../components/my_form';
import { Checkbox, Input, Row, Select } from 'formsy-react-components';

class ViewBudget extends Component {
  constructor (props) {
    super(props);

    this.onDepositSubmit = this.onDepositSubmit.bind(this);
    this.onDepositRemove = this.onDepositRemove.bind(this);
    this.updateDeposit = this.updateDeposit.bind(this);
  }
  componentWillMount () {
    this.props.fetchBudget(this.props.params.budget_id);
  }

  componentWillUnmount () {
    this.props.removeCurrentBudget();
  }

  componentWillReceiveProps (props) {
    if(this.props.params !== props.params){
      this.props.fetchBudget(props.params.budget_id);
    }
  }

  onDepositSubmit (data) {
    let newBudget = Object.assign({}, this.props.budget);
    newBudget.deposits.push(data);
    this.props.updateBudget(newBudget);
    console.log(this.refs.deposit_formsy);
    this.refs.deposit_formsy.reset();
  }

  onDepositRemove (id) {
    let newBudget = Object.assign({}, this.props.budget);
    newBudget.deposits = newBudget.deposits.filter((d) => {return d._id !== id;})
    this.props.updateBudget(newBudget);
  }

  updateDeposit (data) {
    if (data.nativeEvent === undefined) {
      let newBudget = Object.assign({}, this.props.budget),
          deposit = newBudget.deposits.find((d) => {return d._id === data._id;});
      deposit.paid = data.paid;
      this.props.updateBudget(newBudget);
    }
  }

  renderDeposits () {
    return this.props.budget.deposits.map((deposit) => {
      return (
        <MyForm
          key={deposit._id}
          action="#"
          onChange={this.updateDeposit}
          layout='horizontal'
          ref='formsy'>
            <Input type="hidden" name="_id" value={deposit._id} />
            <Checkbox
              label={`${deposit.description} $${deposit.amount} ${deposit.due_date}`}
              name="paid"
              value={deposit.paid} />
            <span className="remove glyphicon glyphicon-remove-sign" onClick={()=>{this.onDepositRemove(deposit._id)}} />
        </MyForm>
      );
    });
  }

  render () {
    if (!this.props.budget) {
      return <div>Retrieving budget.</div>
    }

    return (
      <div>
        <h3>{this.props.budget.name}</h3>
        <div>{this.props.budget.domain.start} to {this.props.budget.domain.end}</div>
        <h4>Deposits</h4>
        { this.renderDeposits() }
        <MyForm
          action="#"
          onValidSubmit={this.onDepositSubmit}
          layout='horizontal'
          ref='deposit_formsy'>
            <Input
              name="description"
              label="Description"
              type="text"
              value=""
              required />
            <Input
              name="due_date"
              label="Due Date"
              type="date"
              value=""
              required />
            <Input
              name="amount"
              label="Amount"
              type="number"
              placeholder="0.00"
              value=""
              addonBefore={<span className="glyphicon glyphicon-usd"></span>}
              required />
            <Select
              name="account_id"
              label="Account"
              options={this.props.accounts}
              required />
            <Row layout="horizontal">
              <input className="btn btn-primary" formNoValidate={true} type="submit" defaultValue="Submit" />
            </Row>
        </MyForm>
      </div>
    );
  }
}
ViewBudget.propTypes = {
  budget: PropTypes.object,
  params: PropTypes.object.isRequired,
  accounts: PropTypes.array,
  fetchBudget: PropTypes.func,
  removeCurrentBudget: PropTypes.func,
  updateBudget: PropTypes.func
};

function mapStateToProps (state) {
  return {
    budget: state.active_budget,
    accounts: state.accounts
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({fetchBudget, removeCurrentBudget, updateBudget}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewBudget);
