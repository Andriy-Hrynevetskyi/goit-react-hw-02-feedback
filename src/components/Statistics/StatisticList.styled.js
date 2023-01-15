import styled from 'styled-components';

export const StatisticWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StatisticList = styled.ul`
  margin-bottom: 8px;
`;

export const StatistickListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 8px;
  }

  &::first-letter {
    text-transform: capitalize;
  }
`;

export const StatisticTotal = styled.p`
  font-size: 16px;
  margin-bottom: 8px;

  &::first-letter {
    text-transform: capitalize;
  }
`;
