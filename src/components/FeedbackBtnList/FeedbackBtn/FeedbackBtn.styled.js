import styled from 'styled-components';

export const FeedbackButton = styled.button`
  padding: 12px;
  border: 1px solid black;
  border-radius: 4px;
  background-color: transparent;
  font-size: 20px;
  color: #2c353d;

  transition-property: color, transform, border-color, box-shadow;
  transition-duration: 300ms;
  transition-timing-function: linear;
  transition-delay: 0;

  &:hover {
    color: white;
    border-color: white;
    transform: scale(1.2);
    cursor: pointer;
    box-shadow: 0px 0px 2px 2px rgba(255, 255, 255, 0.8);
  }
  &:active {
    transform: scale(0.9);
  }
`;
