import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    // props -> riceve le proprietà (parametri) passati attraverso JSX

    super();
    // serve a chiamare il parent constructor prima di eseguire quello presente

    this.state = {
      count: 0,
      initCount: 0,
    };
  }

  handleClick(operator) {
    let c = this.state.count;

    switch (operator) {
      case '+':
        c++;
        // c = c + 1;
        // c += 1;
        break;
      case '-':
        c--;
        // c = c - 1;
        // c -= 1;
        break;
      case 'set':
        c = this.state.initCount;
        break;
      case 'reset':
      default:
        c = 0;
    }

    this.setState({ count: c, initCount: 0 });
  }

  handleChange(event) {
    let n = Number(event.target.value);
    // console.log(typeof n, n, isNaN(n));
    if (typeof n === 'number' && !isNaN(n)) {
      this.setState({
        initCount: n,
      });
    }
  }

  render() {
    return (
      <div>
        <h1>Contatore</h1>
        <button onClick={() => this.handleClick('+')}>+</button>
        <p>{this.state.count}</p>
        <button onClick={() => this.handleClick('-')}>-</button>
        <p>
          <button onClick={() => this.handleClick('reset')}>RESET</button>
          <input
            size={5}
            style={{ marginLeft: 10 }}
            value={this.state.initCount}
            onChange={e => this.handleChange(e)}
          />
          <button onClick={() => this.handleClick('set')}>SET</button>
        </p>
      </div>
    );
  }
}

export default App;
