import React from 'react';
import PropTypes from 'prop-types';
import StyledButton from './style';

const Button = ({
  text,
  className,
  onClick,
}) => (
  <StyledButton
    type="button"
    className={className}
    onClick={onClick}
  >
    {text}
  </StyledButton>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
