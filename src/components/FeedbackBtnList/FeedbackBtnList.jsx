import PropTypes from 'prop-types';
import { FeedbackBtn } from './FeedbackBtn/FeedbackBtn';
import { List, ListItem } from './FeedbackBtnList.styled';
export const FeedbackBtnList = ({ buttons, onClick }) => (
  <List>
    {buttons.map(button => (
      <ListItem key={button}>
        <FeedbackBtn text={button} onClick={onClick} />
      </ListItem>
    ))}
  </List>
);

FeedbackBtnList.protoTypes = {
  buttons: PropTypes.array.isRequired,
  key: PropTypes.string.isRequired,
};
