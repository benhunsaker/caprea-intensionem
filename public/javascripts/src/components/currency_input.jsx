import React from 'react';
//import Icon from './icon';

import { Input, Row } from 'formsy-react-components';
import numeral from 'numeral';

class CurrencyInput extends Input {
  changeValue (event) {
    var value = numeral(event.currentTarget.value).format('0,0[.]00');
    this.setValue(value);
    this.props.onChange(this.props.name, value);
  }
}

export default CurrencyInput;
