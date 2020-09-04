import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const Button = ({ text, className }) => (
  <button type="button" className={className}>
    {text}
  </button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

const StyledButton = styled(Button)`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: red;
  margin: 0 1em;
  padding: 0.25em 1em;

  &:hover {
    color: green
  }

  ${(props) => props.primary
    && css`
      background: palevioletred;
    `};
`;

export default StyledButton;
