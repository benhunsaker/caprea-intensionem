import React, { Component } from 'react';
import {IndexLink} from 'react-router';

import Sidebar from '../containers/sidebar';

class App extends Component {
  render () {
    return (
      <div>
        <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header">
              <IndexLink className="navbar-brand" to="/">Caprea Intensionem</IndexLink>
            </div>
          </div>
        </nav>
        <div className="container-fluid">
          <div className="row">
            <Sidebar />
            <main className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
              {this.props.children}
            </main>
          </div>
        </div>
      </div>
    );
  }
}
App.propTypes = {
  children: React.PropTypes.object
};

export default App;
