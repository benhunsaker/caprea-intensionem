import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removeCurrentBudget } from '../actions';

class Home extends Component {
  componentWillMount() {
    this.props.removeCurrentBudget();
  }
  render () {
    return (
      <p><strong>Choose a budget to the left or create a new one.</strong></p>
    );
  }
}
Home.propTypes = {
  removeCurrentBudget: PropTypes.func
};


function mapDispatchToProps (dispatch) {
  return bindActionCreators({removeCurrentBudget}, dispatch);
}

export default connect(null, mapDispatchToProps)(Home);
