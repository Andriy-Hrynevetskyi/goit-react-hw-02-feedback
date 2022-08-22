import PropTypes from 'prop-types';
import { StatisticItem } from './StatisticItem/StatisticItem';

export const StatisticsList = ({ stats }) => (
  <ul>
    {Object.keys(stats).map(el => (
      <li key={el}>
        <StatisticItem name={el} value={stats[el]} />
      </li>
    ))}
  </ul>
);

StatisticsList.propTypes = {
  stats: PropTypes.object.isRequired,
};
