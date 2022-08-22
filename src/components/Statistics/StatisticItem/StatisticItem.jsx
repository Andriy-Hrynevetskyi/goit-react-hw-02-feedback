import PropTypes from 'prop-types';

export const StatisticItem = ({ name, value }) => (
  <p>
    {name}: {value}
  </p>
);

StatisticItem.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};
