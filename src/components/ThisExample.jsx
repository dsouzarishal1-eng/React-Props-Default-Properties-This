
import React, { Component } from "react";

class ThisExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };

    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    return (
      <section>
        <h2>3. This Operator Example</h2>

        <div className="example-card">
          <h3>Counter Application</h3>

          <p>Current Count: {this.state.count}</p>

          <button onClick={this.increment}>
            Increase Count
          </button>
        </div>
      </section>
    );
  }
}

export default ThisExample;
