import PropTypes from 'prop-types';
import { FeedbackBtn } from './FeedbackBtn/FeedbackBtn';

export const FeedbackBtnList = ({ buttons, onClick }) => (
  <ul>
    {buttons.map(button => (
      <li key={button}>
        <FeedbackBtn text={button} onClick={onClick} />
      </li>
    ))}
  </ul>
);

FeedbackBtnList.protoTypes = {
  buttons: PropTypes.array.isRequired,
  key: PropTypes.string.isRequired,
};
