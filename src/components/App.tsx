import { JSX, useState } from 'react';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import DateNow from './DateNow/DateNow';

export default function App(): JSX.Element {
  const [good, setGood] = useState<number>(0);
  const [neutral, setNeutral] = useState<number>(0);
  const [bad, setBad] = useState<number>(0);
  const allClick = good + neutral + bad;
  const feedbackOptions = ['good', 'bad', 'neutral'];
  const positivePercentage = Math.round((good * 100) / allClick);

  const handleLeaveFeedback = (
    e: React.MouseEvent<HTMLButtonElement>
  ): void => {
    const target = (e.target as HTMLButtonElement).textContent;

    switch (target) {
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
      <DateNow />
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
