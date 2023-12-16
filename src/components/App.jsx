import { useState } from 'react';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const allClick = good + neutral + bad;
  const feedbackOptions = ['good', 'bad', 'neutral'];
  const positivePercentage = Math.round((good * 100) / allClick);

  const handleLeaveFeedback = event => {
    switch (event.target.textContent) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          option={feedbackOptions}
          onLeaveFeedback={handleLeaveFeedback}
        />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={allClick}
          positivePercentage={positivePercentage}
        />
      </Section>
    </>
  );
}
