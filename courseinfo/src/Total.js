import React from "react";

const Total = ({ parts }) => {
  const total = parts.reduce((prevValue, currentValue) => {
    return prevValue + currentValue.excercises;
  }, 0);
  return <p>The total is {total}</p>;
};

export default Total;
