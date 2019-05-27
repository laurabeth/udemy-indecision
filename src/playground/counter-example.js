class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleSubOne = this.handleSubOne.bind(this);
    this.handleResetCount = this.handleResetCount.bind(this);
    this.state = {
      count: 0,
    };
  }

  handleAddOne() {
    this.setState((prevState) => {
      return {
        count: ++prevState.count,
      }
    });
  }

  handleSubOne() {
    this.setState((prevState) => {
      return {
        count: --prevState.count,
      }
    });
  }

  handleResetCount() {
    this.setState(() => {
      return {
        count: 0,
      }    
    });
  }

  render() {
    return(
      <div>
        <h1>Count: {this.state.count} </h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleSubOne}>-1</button>
        <button onClick={this.handleResetCount}>reset</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById('app'));

// let count = 0;
// const addOne = () => {
//     count++;
//     console.log("addOne", count);
//     renderCounterApp();
// };
// const subOne = () => {
//     count--;
//     console.log("subOne", count);
//     renderCounterApp();
// };
// const reset = () => {
//     count = 0;
//     console.log("reset", count);
//     renderCounterApp();
// };



// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={reset}>Reset</button>
//             <button onClick={subOne}>-1</button>
//         </div>
//     );

//     ReactDOM.render(templateTwo, appRoot);
// }

// renderCounterApp();