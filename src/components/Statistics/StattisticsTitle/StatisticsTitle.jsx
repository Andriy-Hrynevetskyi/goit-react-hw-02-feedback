import PropTypes from 'prop-types';

export const StatisticsTitle = ({ text }) => <h2>{text}</h2>;

StatisticsTitle.propTypes = {
  text: PropTypes.string,
};
