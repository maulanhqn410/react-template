import React, {
  Suspense,
  useState,
  memo,
} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { isEqual } from 'lodash';
import logo from './logo.svg';
import './App.css';
import ScrollToTop from './components/shared/ScollToTop';
import 'semantic-ui-css/semantic.min.css';
import LoginForm from './page/loginPage';
import { GlobalStyle } from './global.styles';
import ErrorBoundary from './components/shared/ErrorBoundary';
import Modal from './components/shared/Modal';
import Button from './components/shared/Button';

const ModalMemo = memo(Modal,
  (prevProps, nextProps) => isEqual(prevProps.isOpen, nextProps.isOpen));

function App() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [count, setCount] = useState(0);
  function toggleModal() {
    setIsOpenModal(!isOpenModal);
  }

  function onSetCount() {
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <ErrorBoundary>
          <ScrollToTop>
            <Suspense fallback={<div>Loading ....</div>}>
              <Route path="/" exact>
                <div className="App">
                  <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                      {count}
                    </p>
                    <a
                      className="App-link"
                      href="https://reactjs.org"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Learn React
                    </a>
                  </header>
                </div>
              </Route>
              <Route path="/login" exact>
                <LoginForm />
              </Route>
              <Button
                text="Click to increase count"
                onClick={onSetCount}
                background="red"
                borderColor="red"
                color="red"
                size="lg"
                outline
              />
              <Button
                text="Click to open modal"
                onClick={toggleModal}
                size="lg"
                color="green"
                outline
              />
              <ModalMemo
                isOpen={isOpenModal}
                background="green"
                title="Hello, I am Modal Header"
                closeModal={toggleModal}
              >
                <p>Hello, I am a Content</p>
              </ModalMemo>
            </Suspense>
          </ScrollToTop>
        </ErrorBoundary>
      </Switch>
    </Router>
  );
}

export default App;
