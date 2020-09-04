import React from 'react';
import ReactModal from 'react-modal';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import ModalHeader from './Header';
import ModalContent from './Content';

ReactModal.setAppElement('#root');

const Modal = ({
  isOpen,
  closeModal,
  children,
  className,
  title,
}) => {
  const contentClassName = `${className}__content`;
  const overlayClassName = `${className}__overlay`;
  return (
    <ReactModal
      className={contentClassName}
      portalClassName={className}
      overlayClassName={overlayClassName}
      isOpen={isOpen}
      onRequestClose={closeModal}
    >
      <ModalHeader title={title} closeModal={closeModal} />
      <ModalContent>
        {children}
      </ModalContent>
    </ReactModal>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func,
  children: PropTypes.element.isRequired,
  className: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

Modal.defaultProps = {
  closeModal: () => {},
};

const StyledReactModal = styled(Modal)`
  &__overlay {
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background-color: rgba(0, 0, 0, 0.8);
  }

  &__content {
    position: absolute;
    top: 50%;
    left: 50%;
    right: auto;
    bottom: auto;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    border: 1px solid #ccc;
    overflow: auto;
    outline: none;
    padding: 20px;
    background-color: rgb(63, 174, 41);
    border-radius: 8px;
    width: 50vw;
    height: auto;

    ${(props) => props.medium && css`
      width: 70vw;
    `}

    ${(props) => props.large && css`
      width: 90vw;
    `}
  }
`;

export default StyledReactModal;
