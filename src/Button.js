import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = ({
  text,
  className,
  onClick,
}) => (
  <button
    type="button"
    className={className}
    onClick={onClick}
  >
    {text}
  </button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

const StyledButton = styled(Button)`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: red;
  margin: 0 1em;
  padding: 0.25em 1em;
  cursor: pointer
`;

export default StyledButton;
