import { useEffect, useState } from "react";

// const useState = () => {
//   const state = null
//   const setState = (newState) => {
//     state = newState
//   }
//   return [state, setState]
// }

const PHONE_LOCAL_STORAGE_KEY = "phone";

const getLocalData = (initialData, key) => {
  console.log("getLocalData");
  const localData = JSON.parse(localStorage.getItem(PHONE_LOCAL_STORAGE_KEY));
  if (localData && localData[key]) {
    return localData[key];
  }
  return initialData;
};

export const Counter = ({ defaultAndroid }) => {
  const [android, setAndroid] = useState(() =>
    getLocalData(defaultAndroid, "android")
  );
  const [iphone, setIphone] = useState(() =>
  getLocalData(defaultAndroid, "iphone"));

  useEffect(() => {
    // if (android > 25) {
    //   localStorage.clear()
    //   return
    // }
    localStorage.setItem(
      PHONE_LOCAL_STORAGE_KEY,
      JSON.stringify({ android, iphone })
    );
  }, [android, iphone]);

  // useEffect(() => {
  //   console.log("useEffect");
  //   setAndroid(defaultAndroid);
  // }, [defaultAndroid]);

  console.log(defaultAndroid);

  const handleUpdateAndroid = () => {
    setAndroid((prev) => prev + 1);
    // setIphone((prev) => prev - 1);
    // 10 => 11
    // setAndroid((prev) => prev + 1) // 11 => 12
    // setAndroid((prev) => prev + 1) // 12 => 13
  };

  const handleUpdateIphone = () => {
    setIphone((prev) => prev + 1); // 10 => 11
    // setAndroid((prev) => prev - 1); // 10 => 11
    // setAndroid((prev) => prev + 1) // 11 => 12
    // setAndroid((prev) => prev + 1) // 12 => 13
  };

  return (
    <div className="mb-5 p-5 text-white bg-dark rounded-3">
      <p className="text-center my-5" style={{ fontSize: 80 }}>
        Android: {android}
      </p>
      <p className="text-center my-5" style={{ fontSize: 80 }}>
        iPhone: {iphone}
      </p>

      <div className="d-flex align-items-center justify-content-center w-100">
        <button
          type="button"
          name="android"
          className="btn p-3 btn-outline-light w-25 mx-2"
          onClick={handleUpdateAndroid}
        >
          Android
        </button>
        <button
          type="button"
          name="iphone"
          className="btn p-3 btn-outline-light w-25 mx-2"
          onClick={handleUpdateIphone}
        >
          iPhone
        </button>
      </div>
    </div>
  );
};

// export class Counter extends Component {
//   state = {
//     android: 0,
//     iphone: 0,
//   };

//   handleUpdate = event => {
//     const { name } = event.target;
//     this.setState(prevState => ({ [name]: prevState[name] + 1 }));
//   };

//   render() {
//     const { android, iphone } = this.state;

//     return (
//       <div className="mb-5 p-5 text-white bg-dark rounded-3">
//         <p className="text-center my-5" style={{ fontSize: 80 }}>
//           Android: {android}
//         </p>
//         <p className="text-center my-5" style={{ fontSize: 80 }}>
//           iPhone: {iphone}
//         </p>

//         <div className="d-flex align-items-center justify-content-center w-100">
//           <button
//             type="button"
//             name="android"
//             className="btn p-3 btn-outline-light w-25 mx-2"
//             onClick={this.handleUpdate}
//           >
//             Android
//           </button>
//           <button
//             type="button"
//             name="iphone"
//             className="btn p-3 btn-outline-light w-25 mx-2"
//             onClick={this.handleUpdate}
//           >
//             iPhone
//           </button>
//         </div>
//       </div>
//     );
//   }
// }
