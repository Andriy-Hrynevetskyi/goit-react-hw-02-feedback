import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  margin-bottom: 24px;
`;

export const ListItem = styled.li`
  &:not(:last-child) {
    margin-right: 12px;
  }
`;
