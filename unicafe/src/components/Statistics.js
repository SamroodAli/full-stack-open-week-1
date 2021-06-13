import React from "react";
import Statistic from "./Statistic";

const Statistics = ({ good, neutral, bad }) => {
  const total = () => good + neutral + bad;
  const average = () => {
    const result = (good - bad) / total();
    return isNaN(result) ? 0 : result.toFixed(2);
  };
  const positive = () => {
    const result = (good / total()) * 100;
    return isNaN(result) ? 0 : result.toFixed(2);
  };

  if (total() === 0) {
    return <p>No feedback given</p>;
  }

  return (
    <table>
      <tbody>
        <Statistic text="Good" value={good} />
        <Statistic text="Neutral" value={neutral} />
        <Statistic text="Bad" value={bad} />
        <Statistic text="All" value={total()} />
        <Statistic text="Average" value={average()} />
        <Statistic text="Positive" value={positive()} />
      </tbody>
    </table>
  );
};

export default Statistics;
