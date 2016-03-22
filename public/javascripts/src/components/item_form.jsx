import React, { Component, PropTypes } from 'react';
import numeral from 'numeral';

import MyForm from './my_form';
import { Checkbox, Input } from 'formsy-react-components';

class ItemForm extends Component {
  render () {
    const item = this.props.item;
    return (
      <MyForm
        action="#"
        onChange={this.props.onChange}
        layout='horizontal'
        ref='formsy'>
          <Input type="hidden" name="_id" value={item._id} />
          <Checkbox
            label={`${item.description} ${numeral(item.amount).format('$0,0.00')} ${item.due_date}`}
            name="paid"
            value={item.paid} />
          <span className="remove glyphicon glyphicon-remove-sign" onClick={()=>{this.props.onRemove(item._id)}} />
      </MyForm>
    );
  }
}
ItemForm.propTypes = {
  item: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired
};


export default ItemForm;
