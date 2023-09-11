import React from "react";

class RandomNumber extends React.Component {
  state = {
    randomNum: Math.random() * (10 - 0) + 0
  }

  handleClick = () => {
    this.setState({
      randomNum: Math.random() * (10 - 0) + 0
    });
  };

  render() {
    return (
      <>
        <h1>{this.state.randomNum}</h1>
        <button onClick={this.handleClick}>Generate Random Number</button>
      </>
    )
  }
}

export default RandomNumber;