const FeedbackOptions = ({ option, onLeaveFeedback }) => {
  return option.map((element, key) => {
    return (
      <button type="button" key={key} onClick={onLeaveFeedback}>
        {element}
      </button>
    );
  });
};

export default FeedbackOptions;
