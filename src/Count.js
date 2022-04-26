import React, { Component } from 'react';

class Count extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    }
  }

  onIncreseHandler = () => {
    this.setState({
      count: this.state.count + 1,
    })
  }
  
  onDecreaseHandler = () => {
    this.setState({
      count: this.state.count - 1,
    })
  }

  onClickHandler = (step) => {
    this.setState ({
      count: this.state.count + step,
    })
  }

  render() {
    const count = this.state.count;
    return (
      <div>
        <button onClick={() => this.onClickHandler(-1)}>Decrease</button>
        <div>{count}</div>
        <button onClick={() => this.onClickHandler(1)}>Icrease</button>
      </div>
    )
  }
}

export default Count;
