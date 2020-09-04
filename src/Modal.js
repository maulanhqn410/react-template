import React from 'react';
import ReactModal from 'react-modal';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
  },
};

ReactModal.setAppElement('#root');

const Modal = ({
  modalIsOpen,
  closeModal,
  children,
}) => (
  <ReactModal
    isOpen={modalIsOpen}
    onRequestClose={closeModal}
    style={customStyles}
  >
    {children}
  </ReactModal>
);

Modal.propTypes = {
  modalIsOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

Modal.defaultProps = {
  children: [],
};

const StyledModal = styled(Modal)`
  background: red
`;

export default StyledModal;
