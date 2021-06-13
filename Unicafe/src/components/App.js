import React from "react";
import { useState } from "react";
import Header from "./Header";
import Button from "./Button";
import Statistics from "./Statistics";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onGoodClick = () => setGood(good + 1);
  const onNeutralClick = () => setNeutral(neutral + 1);
  const onBadClick = () => setBad(bad + 1);

  return (
    <div>
      <Header text="Give Feedback" />
      <Button text="Good" handleClick={onGoodClick} />
      <Button text="Neutral" handleClick={onNeutralClick} />
      <Button text="Bad" handleClick={onBadClick} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
