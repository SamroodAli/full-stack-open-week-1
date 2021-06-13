import React, { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState({});
  const [max, setMax] = useState({ index: 0, count: 0 });

  const onNextAnecdoteClick = () => {
    const nextSelection = Math.floor(Math.random() * anecdotes.length);
    setSelected(nextSelection);
  };

  const onVoteClick = (selected) => {
    let newVotes = { ...votes };
    if (votes[selected]) {
      newVotes[selected] += 1;
    } else {
      newVotes[selected] = 1;
    }
    if (newVotes[selected] > max.count) {
      setMax({ index: selected, count: newVotes[selected] });
    }
    setVotes(newVotes);
  };

  const votesCount = (selected) => {
    return votes[selected] === undefined ? 0 : votes[selected];
  };

  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <p>has {votesCount(selected)} votes</p>

      <button onClick={onNextAnecdoteClick}>Next anecdote</button>
      <button onClick={() => onVoteClick(selected)}>Vote</button>
      <p>{anecdotes[max.index]}</p>
      <p>has {max.count} votes</p>
    </div>
  );
};

export default App;
