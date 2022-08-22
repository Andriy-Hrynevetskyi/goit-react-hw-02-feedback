import PropTypes from 'prop-types';
import { StatisticItem } from './StatisticItem/StatisticItem';

export const StatisticsList = ({ stats, countTotal, countPositive }) => (
  <>
    <ul>
      {Object.keys(stats).map(el => (
        <li key={el}>
          <StatisticItem name={el} value={stats[el]} />
        </li>
      ))}
    </ul>
    <p>Total: {countTotal}</p>
    {countPositive ? <p>Positive Feedback: {countPositive} %</p> : ''}
  </>
);

StatisticsList.propTypes = {
  stats: PropTypes.object.isRequired,
};
