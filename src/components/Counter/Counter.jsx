import { Component } from "react";
import PropTypes from "prop-types";

export class Counter extends Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     counter: 0
  //   }

  //   this.handleMinus = this.handleMinus.bind(this)
  //   this.handlePlus = this.handlePlus.bind(this)
  // }

  static propTypes = {
    defaultValue: PropTypes.number,
  };

  state = {
    counter: this.props?.defaultValue ?? 0,
  };

  handleMinus = () => {
    this.setState((prevState) => ({ counter: prevState.counter - 1 }));
  };

  handlePlus = () => {
    this.setState((prevState) => ({ counter: prevState.counter + 1 }));
  };

  handleUpdate = (event) => {
    const { name } = event.target;
    switch (name) {
      case "minus":
        this.setState((prevState) => ({ counter: prevState.counter - 1 }));
        break;
      case "plus":
        this.setState((prevState) => ({ counter: prevState.counter + 1 }));
        break;
      default:
        throw new Error("Unmatched name");
    }
  };

  render() {
    const { counter } = this.state;
    // const {defaultValue} = this.props
    return (
      <div className="mb-5 p-5 text-white bg-dark rounded-3">
        <h2 className="text-center">Counter</h2>
        <p className="text-center my-3" style={{ fontSize: 80 }}>
          {counter}
        </p>

        <div className="d-flex align-items-center justify-content-center w-100">
          <button
            name="minus"
            onClick={this.handleUpdate}
            className="btn p-3 btn-outline-light w-25 mx-2"
            type="button"
          >
            Minus
          </button>

          <button
            name="plus"
            onClick={this.handleUpdate}
            className="btn p-3 btn-outline-light w-25 mx-2"
            type="button"
          >
            Plus
          </button>
        </div>
      </div>
    );
  }
}

// Counter.propTypes = {
//   defaultValue: PropTypes.number.isRequired
// }

// export const Counter = () => {
//   return (
//     <div className="mb-5 p-5 text-white bg-dark rounded-3">
//       <h2 className="text-center">Counter</h2>
//       <p className="text-center my-3" style={{ fontSize: 80 }}>
//         0
//       </p>

//       <div className="d-flex align-items-center justify-content-center w-100">
//         <button className="btn p-3 btn-outline-light w-25 mx-2" type="button">
//           Minus
//         </button>

//         <button className="btn p-3 btn-outline-light w-25 mx-2" type="button">
//           Plus
//         </button>
//       </div>
//     </div>
//   );
// };
