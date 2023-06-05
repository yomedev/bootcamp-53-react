import { useEffect, useRef, useState } from "react";
import { Button } from "../Button/Button";
import { IoPlayOutline, IoStopOutline } from "react-icons/io5";

const ONE_SECOND = 1000;


const formatTime = (time) => {
  const hours = String(time.getHours()).padStart(2, "0"); // 8 => 08
  const minutes = String(time.getMinutes()).padStart(2, "0");
  const seconds = String(time.getSeconds()).padStart(2, "0");

  return `${hours}:${minutes}:${seconds}`;
};

export const TimerModal = () => {
  const [time, setTime] = useState(new Date());

  const intervalId = useRef(null);

  const handleStartTimer = () => {
    if (!intervalId.current) {
      intervalId.current = setInterval(() => {
        console.log("setInterval");
        setTime(new Date());
      }, ONE_SECOND);
    }
  };

  const handleStopTimer = () => {
    if (intervalId.current) {
      console.log("clearInterval");
      clearInterval(intervalId.current);
      intervalId.current = null;
    }
  };

  useEffect(() => {
    return handleStopTimer;
  }, []);


  return (
    <>
      <p className="h1 mb-4 text-center">{formatTime(time)}</p>

      <div className="d-flex justify-content-center">
        <Button className="btn-primary btn-lg mx-2" onClick={handleStartTimer}>
          <IoPlayOutline />
        </Button>

        <Button className="btn-danger btn-lg mx-2" onClick={handleStopTimer}>
          <IoStopOutline />
        </Button>
      </div>
    </>
  );
};

// export class TimerModal1 extends Component {
//   state = {
//     time: new Date(),
//   };

//   intervalId = null;

//   componentDidMount() {
//     this.intervalId = setInterval(() => {
//       console.log("setInterval");
//       this.setState({ time: new Date() });
//     }, ONE_SECOND);
//   }

//   componentWillUnmount() {
//     if (this.intervalId) {
//       console.log("clearInterval");
//       clearInterval(this.intervalId);
//     }
//   }

//   formatTime() {
//     const { time } = this.state;

//     const hours = String(time.getHours()).padStart(2, "0"); // 8 => 08
//     const minutes = String(time.getMinutes()).padStart(2, "0");
//     const seconds = String(time.getSeconds()).padStart(2, "0");

//     return `${hours}:${minutes}:${seconds}`;
//   }

//   render() {
//     return (
//       <>
//         <p className="h1 mb-4 text-center">{this.formatTime()}</p>

//         <div className="d-flex justify-content-center">
//           <Button className="btn-primary btn-lg mx-2">
//             <IoPlayOutline />
//           </Button>

//           <Button className="btn-danger btn-lg mx-2">
//             <IoStopOutline />
//           </Button>
//         </div>
//       </>
//     );
//   }
// }
