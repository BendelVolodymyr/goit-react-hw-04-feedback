import { FeedbackOptionsProps } from '../../types/FeedbackOptions';

import styles from './FeedbackOptions.module.scss';

const FeedbackOptions: React.FC<FeedbackOptionsProps> = ({
  option,
  onLeaveFeedback,
}): JSX.Element => {
  return (
    <>
      {option.map((element, key) => {
        const className = styles[`feedback__btn_${element}`];

        return (
          <button
            className={className}
            type="button"
            key={key}
            onClick={onLeaveFeedback}
          >
            {element}
          </button>
        );
      })}
    </>
  );
};

export default FeedbackOptions;
