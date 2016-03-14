import React, { Component } from 'react';
import LearnTo from './learn_to';

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      disableContinueButton: true,
      insertInstructions: false,
      showInstructions: false
    };

    this.canContinuePath = this.canContinuePath.bind(this);
    this.continuePath = this.continuePath.bind(this);
    this.insertInstructions = this.insertInstructions.bind(this);
    this.showInstructions = this.showInstructions.bind(this);
    this.closeInstructions = this.closeInstructions.bind(this);
  }

  canContinuePath () {
    this.setState({disableContinueButton: false});
  }

  continuePath (e) {
    e.preventDefault();
  }

  closeInstructions(e) {
    e.preventDefault();
    this.setState({
      insertInstructions: false,
      showInstructions: false
    });
  }

  showInstructions() {
    this.setState({showInstructions: true})
  }

  insertInstructions(e) {
    e.preventDefault();
    this.setState({insertInstructions: true});
    setTimeout(this.showInstructions, 100);
  }

  render () {
    return (
      <div>
        <h1>Welcome To Money App</h1>
      </div>
    );
  }
}

export default App
