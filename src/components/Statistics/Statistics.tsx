import { StatisticsProps } from '../../types/Statistics';
import Notification from '../Notification/Notification';
import style from './Statistics.module.scss';

const Statistics: React.FC<StatisticsProps> = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}): JSX.Element => {
  return total === 0 ? (
    <Notification message="There is no feedback" />
  ) : (
    <div className={style.feedback__box}>
      <span>Good: {good}</span>
      <span>Neutral: {neutral}</span>
      <span>Bad: {bad}</span>
      <span>Total: {total}</span>
      <span>Positive feedback: {positivePercentage}%</span>
    </div>
  );
};

export default Statistics;
