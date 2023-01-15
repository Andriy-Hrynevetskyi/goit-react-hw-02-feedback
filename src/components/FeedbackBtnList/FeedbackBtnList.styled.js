import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
`;

export const ListItem = styled.li`
  &:not(:last-child) {
    margin-right: 4px;
  }
`;
