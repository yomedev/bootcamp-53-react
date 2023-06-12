import { useDispatch, useSelector } from "react-redux";
import { androidAction, iphoneAction } from "../../../redux/counter/counterActions";

// const PHONE_LOCAL_STORAGE_KEY = "phone";

// const getLocalData = (initialData, key) => {
//   const localData = JSON.parse(localStorage.getItem(PHONE_LOCAL_STORAGE_KEY));
//   if (localData && localData[key]) {
//     return localData[key];
//   }
//   return initialData;
// };

export const CounterPage = () => {
 const {android, iphone} = useSelector(state => state.counter)
 const dispatch = useDispatch()

  const handleUpdateAndroid = () => {
    dispatch(androidAction())
  };

  const handleUpdateIphone = () => {
    dispatch(iphoneAction())
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