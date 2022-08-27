import styled from 'styled-components';

export const StatisticList = styled.ul`
  margin-bottom: 24px;
`;

export const StatistickListItem = styled.li`
  font-size: 20px;
  &:not(:last-child) {
    margin-bottom: 12px;
  }

  &::first-letter {
    text-transform: capitalize;
  }
`;

export const StatisticTotal = styled.p`
  padding: 4px;
  font-size: 20px;

  &::first-letter {
    text-transform: capitalize;
  }
`;

export const TotalStatsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
