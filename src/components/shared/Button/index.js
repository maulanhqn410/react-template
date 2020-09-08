import React from 'react';
import PropTypes from 'prop-types';
import StyledButton from './style';

const Button = ({
  text,
  onClick,
  background,
  color,
  size,
  radius,
  borderColor,
  borderWidth,
  borderStyle,
  outline,
}) => (
  <StyledButton
    type="button"
    background={background}
    onClick={onClick}
    color={color}
    size={size}
    radius={radius}
    borderWidth={borderWidth}
    borderStyle={borderStyle}
    borderColor={borderColor}
    outline={outline}
  >
    {text}
  </StyledButton>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  background: PropTypes.string,
  color: PropTypes.string,
  radius: PropTypes.string,
  borderColor: PropTypes.string,
  borderWidth: PropTypes.string,
  borderStyle: PropTypes.string,
  outline: PropTypes.bool,
  size: PropTypes.string, // sm, lg
};

Button.defaultProps = {
  background: '#28a745',
  color: 'white',
  size: 'md',
  radius: '4',
  borderColor: '#28a745',
  borderWidth: '1',
  borderStyle: 'solid',
  outline: false,
};

export default Button;
