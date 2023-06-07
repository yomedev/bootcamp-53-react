import { useEffect, useState } from "react";

const PHONE_LOCAL_STORAGE_KEY = "phone";

const getLocalData = (initialData, key) => {
  console.log("getLocalData");
  const localData = JSON.parse(localStorage.getItem(PHONE_LOCAL_STORAGE_KEY));
  if (localData && localData[key]) {
    return localData[key];
  }
  return initialData;
};

export const CounterPage = ({ defaultAndroid }) => {
  const [android, setAndroid] = useState(() =>
    getLocalData(defaultAndroid, "android")
  );
  const [iphone, setIphone] = useState(() =>
  getLocalData(defaultAndroid, "iphone"));

  useEffect(() => {
    localStorage.setItem(
      PHONE_LOCAL_STORAGE_KEY,
      JSON.stringify({ android, iphone })
    );
  }, [android, iphone]);

  console.log(defaultAndroid);

  const handleUpdateAndroid = () => {
    setAndroid((prev) => prev + 1);
  };

  const handleUpdateIphone = () => {
    setIphone((prev) => prev + 1); 
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