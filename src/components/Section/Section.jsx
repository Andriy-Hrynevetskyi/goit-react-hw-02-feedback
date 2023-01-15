import PropTypes from 'prop-types';
import { Wrapper, SectionTitle } from './Section.styled';

export const Section = ({ title, children, paddingBot = true }) => (
  <Wrapper paddingBot={paddingBot}>
    <SectionTitle>{title}</SectionTitle>
    {children}
  </Wrapper>
);

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any,
  paddingBot: PropTypes.bool,
};
