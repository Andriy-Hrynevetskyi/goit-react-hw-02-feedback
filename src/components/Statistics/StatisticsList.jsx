import PropTypes from 'prop-types';
import { StatisticItem } from './StatisticItem/StatisticItem';
import {
  StatistickListItem,
  StatisticTotal,
  StatisticList,
  TotalStatsWrapper,
} from './StatisticList.styled';

export const StatisticsList = ({ stats, countTotal, countPositive }) => (
  <>
    <StatisticList>
      {Object.keys(stats).map(el => (
        <StatistickListItem key={el}>
          <StatisticItem name={el} value={stats[el]} />
        </StatistickListItem>
      ))}
    </StatisticList>
    <TotalStatsWrapper>
      {countTotal && <StatisticTotal>Total: {countTotal}</StatisticTotal>}
      {countPositive ? (
        <StatisticTotal>Positive Feedback: {countPositive} %</StatisticTotal>
      ) : (
        ''
      )}
    </TotalStatsWrapper>
  </>
);

StatisticsList.propTypes = {
  stats: PropTypes.object.isRequired,
  countTotal: PropTypes.number,
  countPositive: PropTypes.number,
};
