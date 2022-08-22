import PropTypes from 'prop-types';

export const FeedbackBtn = ({ text, onClick }) => (
  <button type="button" onClick={onClick}>
    {text}
  </button>
);

FeedbackBtn.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
