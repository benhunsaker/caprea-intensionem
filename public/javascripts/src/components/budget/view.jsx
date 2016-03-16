import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchBudget, resetCurrentBudget } from '../../actions';

import { Form } from 'formsy-react';
import FRC, { Checkbox, CheckboxGroup, Input, RadioGroup, Row, Select, File, Textarea } from 'formsy-react-components';

class ViewBudget extends Component {
  constructor (props) {
    super(props);
  }

  componentWillMount () {
    this.props.fetchBudget(this.props.params.budget_id);
  }

  componentWillUnmount () {
    this.props.resetCurrentBudget();
  }

  componentWillReceiveProps (props) {
    if(this.props.params !== props.params){
      this.props.fetchBudget(props.params.budget_id);
    }
  }

  render () {
    if (!this.props.budget) {
      return <div>Retrieving budget.</div>
    }

    return (
      <div>
        <h3>{this.props.budget.name}</h3>
        <div>{this.props.budget.domain.start} to {this.props.budget.domain.end}</div>
      </div>
    );
  }
}
ViewBudget.propTypes = {
  budget: PropTypes.object,
  fetchBudget: PropTypes.func,
  params: PropTypes.object.isRequired
};

function mapStateToProps (state) {
  return {
    budget: state.active_budget
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({fetchBudget, resetCurrentBudget}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewBudget);
