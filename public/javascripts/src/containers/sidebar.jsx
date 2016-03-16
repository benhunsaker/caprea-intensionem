import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { FETCH_ALL_BUDGETS } from '../actions';
import { fetchAllBudgets } from '../actions';

class Sidebar extends Component {
  constructor (props) {
    super(props);
  }

  componentWillMount () {
    this.props.fetchAllBudgets();
  }

  addActiveScreenReaderSpan (url) {
    if ( this.context.router.isActive(url, true) ) {
      return <span className="sr-only">(current)</span>
    }
  }

  render_budgets () {
    return (
      this.props.budgets.map((budget) => {
        const url = `/budget/${budget._id}`;
        return (
          <li key={budget._id} className={this.context.router.isActive(url, true) ? 'active': null}>
            <Link to={url}>
              {budget.name}
              { this.addActiveScreenReaderSpan(url) }
            </Link>
          </li>
        );
      })
    );
  }

  render () {
    const url = '/budget/new';
    return (
      <aside className="col-sm-3 col-md-2 sidebar">
        <ul className="nav nav-sidebar">
          <li className={this.context.router.isActive(url, true) ? 'active': null}>
            <Link to={url}>
              <span className="glyphicon glyphicon-plus-sign" />
              Create a Budget
              { this.addActiveScreenReaderSpan(url) }
            </Link>
          </li>
          { this.render_budgets() }
        </ul>
      </aside>
    );
  }
}
Sidebar.propTypes = {
  budgets: PropTypes.array,
  fetchAllBudgets: PropTypes.func
};
Sidebar.contextTypes = { router: PropTypes.object };

function mapStateToProps (state) {
  return {
    budgets: state.budgets,
    active_budget: state.active_budget
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchAllBudgets}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
