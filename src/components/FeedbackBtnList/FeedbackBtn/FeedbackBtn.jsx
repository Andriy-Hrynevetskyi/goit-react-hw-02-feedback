import PropTypes from 'prop-types';
import { FeedbackButton } from './FeedbackBtn.styled';

export const FeedbackBtn = ({ text, onClick }) => (
  <FeedbackButton type="button" onClick={onClick}>
    {text}
  </FeedbackButton>
);

FeedbackBtn.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
