import React, {PropTypes} from 'react';
import { Form } from 'formsy-react';
import FRC from 'formsy-react-components';

export default React.createClass({
  mixins: [FRC.ParentContextMixin],

  propTypes: {
    children: PropTypes.any
  },

  reset () {
    this.refs.formsy.reset();
  },

  render() {
    return (
      <Form
        className={this.getLayoutClassName()}
        {...this.props}
        ref="formsy"
      >
        {this.props.children}
      </Form>
    );
  }
});
