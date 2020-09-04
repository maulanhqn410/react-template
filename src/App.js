import React, { useState } from 'react';
import styled from 'styled-components';
import './App.css';
import Button from './Button';
import Modal from './Modal';

const StyledApp = styled.div`
  text-align: center,
`;

const StyledP = styled.p`
  font-size: 18,
  color: black
`;

const StyledHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

function App() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  function onToggleModal() {
    setIsOpenModal(!isOpenModal);
  }

  return (
    <StyledApp>
      <StyledHeader>
        <Button
          color="red"
          text="Click to open modal"
          onClick={onToggleModal}
        />
      </StyledHeader>
      <Modal
        modalIsOpen={isOpenModal}
        closeModal={onToggleModal}
      >
        <StyledP>Hello</StyledP>
        <StyledP>I am a modal</StyledP>
        <Button
          onClick={onToggleModal}
          text="Close"
        />
      </Modal>
    </StyledApp>
  );
}

export default App;
