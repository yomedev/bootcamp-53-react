import React from "react";

const cache = {};

const sum = (a, b) => {
  const key = JSON.stringify({ a, b });
  if (cache[key]) {
    console.log("From cache: " + cache[key]);
    return cache[key];
  }
  const result = a + b;
  cache[key] = result;
  console.log("From calc: " + result);
  return result;
};

export const Memo = () => {
  return (
    <>
      <button className="btn btn-primary" onClick={() => sum(2, 2)}>
        2 + 2
      </button>
      <button className="btn btn-primary" onClick={() => sum(2, 3)}>
        2 + 3
      </button>
      <button className="btn btn-primary" onClick={() => sum(2, 4)}>
        2 + 4
      </button>
    </>
  );
};
