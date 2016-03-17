import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createBudget, resetCurrentBudget } from '../../actions';

import { Input } from 'formsy-react-components';
import MyForm from '../../components/my_form';

class NewBudget extends Component {

  constructor (props) {
    super(props);

    this.state = {
      canSubmit: false
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.disableButton = this.disableButton.bind(this);
    this.enableButton = this.enableButton.bind(this);
  }

  componentWillMount () {
    this.props.resetCurrentBudget();
  }

  onSubmit (data) {
    this.props.createBudget(data)
      .then(({payload}) => {
        this.context.router.push(`/budget/${payload.data._id}`);
      });
  }

  disableButton () {
    this.setState({
      canSubmit: false
    });
  }

  enableButton () {
    this.setState({
      canSubmit: true
    });
  }

  render () {
    return (
      <MyForm
        action="#"
        onValidSubmit={this.onSubmit}
        layout='horizontal'
        ref='formsy'>
          <h4>Create New Budget</h4>
          <fieldset>
            <Input label="Name" placeholder="Account label" name="name" required />
            <Input label="Start Date" placeholder="mm/dd/yyyy" type="date" name="domain.start" required />
            <Input label="End Date" placeholder="mm/dd/yyyy" type="date" name="domain.end" required />
          </fieldset>
          <input className="btn btn-primary" formNoValidate={true} type="submit" defaultValue="Submit" />
      </MyForm>
    );
  }
}
NewBudget.contextTypes = { router: PropTypes.object };
NewBudget.propTypes = {
  value: PropTypes.object,
  createBudget: PropTypes.func,
  resetCurrentBudget: PropTypes.func
};

function mapDispatchToProps (dispatch) {
  return bindActionCreators({createBudget, resetCurrentBudget}, dispatch);
}

export default connect(null, mapDispatchToProps)(NewBudget);