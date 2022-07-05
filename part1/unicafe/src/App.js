import { useState } from "react";

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const Display = ({ text, value }) => <p>{`${text} ${value}`}</p>;

const Statistics = ({ good, neutral, bad }) => {
  let content = "No feedback given";
  if (good + neutral + bad > 0) {
    content = (
      <>
        <Display text="good" value={good} />
        <Display text="neutral" value={neutral} />
        <Display text="bad" value={bad} />
        <Display text="all" value={good + neutral + bad} />
        <Display text="average" value={(good - bad) / (good + neutral + bad)} />
        <Display
          text="positive"
          value={`${(good / (good + neutral + bad)) * 100} %`}
        />
      </>
    );
  }

  return (
    <>
      <h2>statistics</h2>
      {content}
    </>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h2>give feedback</h2>
      <Button onClick={() => setGood(good + 1)} text="good" />
      <Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button onClick={() => setBad(bad + 1)} text="bad" />

      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
