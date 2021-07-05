import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledTitleHeader,
  StyledIconClose,
  StyledContainer,
} from './style';

const ModalHeader = ({
  title,
  closeModal,
}) => (
  <StyledContainer>
    <StyledTitleHeader>{title}</StyledTitleHeader>
    <StyledIconClose onClick={closeModal} />
  </StyledContainer>
);

ModalHeader.propTypes = {
  title: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default ModalHeader;
