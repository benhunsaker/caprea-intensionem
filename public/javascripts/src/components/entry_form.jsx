import React, { Component, PropTypes } from 'react';

import MyForm from './my_form';
import { Input, Select, Row } from 'formsy-react-components';

class EntryFrom extends Component {
  render() {
    return (
      <MyForm
        action="#"
        onValidSubmit={this.props.onSubmit}
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
            options={this.props.accounts_options}
            required />
          <Row layout="horizontal">
            <input className="btn btn-primary" formNoValidate={true} type="submit" defaultValue="Submit" />
          </Row>
      </MyForm>
    );
  }
}
EntryFrom.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  accounts_options: PropTypes.arrayOf(
    PropTypes.shape({
      val: PropTypes.string,
      label: PropTypes.string.isRequired
    })
  ).isRequired
}

export default EntryFrom;
