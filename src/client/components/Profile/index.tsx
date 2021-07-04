import React from 'react';

export default class Profile extends React.Component {
  state = {
    counter: 0,
  };

  handleClick = () => this.setState({ counter: this.state.counter + 1 });

  render() {
    const { counter } = this.state;

    return (
      <div>
        <h1>
          {`Profile`}
        </h1>
        Count is {counter}
        <div><button onClick={this.handleClick}>increase</button></div>
      </div>
    );
  }
}
