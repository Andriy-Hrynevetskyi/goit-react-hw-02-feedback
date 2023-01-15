import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 12px;
  padding-bottom: ${props => (props.paddingBot ? '12px' : '0')};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SectionTitle = styled.h2`
  margin-bottom: 12px;

  font-size: 24px;
  font-family: Roboto, sans-serif;
`;
