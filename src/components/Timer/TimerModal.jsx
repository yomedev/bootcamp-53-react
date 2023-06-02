import { Component } from "react";
import { Button } from "../Button/Button";
import {IoPlayOutline, IoStopOutline} from 'react-icons/io5'

const ONE_SECOND = 1000;

export class TimerModal extends Component {
  state = {
    time: new Date(),
    
  };

  intervalId = null;

  componentDidMount() {
    this.intervalId = setInterval(() => {
      console.log("setInterval");
      this.setState({ time: new Date() });
    }, ONE_SECOND);
  }

  componentWillUnmount() {
    if (this.intervalId) {
      console.log("clearInterval");
      clearInterval(this.intervalId);
    }
  }

  formatTime() {
    const { time } = this.state;

    const hours = String(time.getHours()).padStart(2, "0"); // 8 => 08
    const minutes = String(time.getMinutes()).padStart(2, "0");
    const seconds = String(time.getSeconds()).padStart(2, "0");

    return `${hours}:${minutes}:${seconds}`;
  }

  render() {
    return (
      <>
        <p className="h1 mb-4 text-center">{this.formatTime()}</p>
  
        <div className="d-flex justify-content-center">
          <Button className="btn-primary btn-lg mx-2">
            <IoPlayOutline />
          </Button>
  
          <Button className="btn-danger btn-lg mx-2">
            <IoStopOutline />
          </Button>
        </div>
      </>
    );
  }
}
