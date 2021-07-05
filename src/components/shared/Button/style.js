import styled, { css } from 'styled-components';

function setSizeButton(size) {
  switch (size) {
    case 'lg':
      return `
        padding: .5rem 1rem;
        font-size: 1.25rem;
        line-height: 1.5;
        border-radius: .3rem;
      `;
    default:
      return `
        padding: .25rem .5rem;
        font-size: .875rem;
        line-height: 1.5;
        border-radius: .2rem;
      `;
  }
}

const StyledButton = styled.button`
  background-color: ${(props) => props.background};
  border-radius: ${(props) => props.radius}px;
  border: ${(props) => `${props.borderWidth}px ${props.borderStyle} ${props.borderColor}`};
  color: ${(props) => props.color};
  margin: 0 1em;
  padding: 0.25em 1em;
  outline: 0;
  cursor: pointer;

  ${(props) => props.outline && css`
    background-color: transparent;
    border-color: ${() => props.borderColor};
    color: ${() => props.color};

    &:hover {
      background-color: ${() => props.borderColor};
      color: white
    }
  `}
  ${(props) => setSizeButton(props.size)}
`;

export default StyledButton;
