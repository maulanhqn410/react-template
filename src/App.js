import React, { Suspense, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import ScrollToTop from './components/shared/ScollToTop';
import 'semantic-ui-css/semantic.min.css';
import LoginForm from './pages/loginPage';
import { GlobalStyle } from './global.styles';
import ErrorBoundary from './components/shared/ErrorBoundary';
import Modal from './components/shared/Modal';
import Button from './components/shared/Button';

function App() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  function toggleModal() {
    setIsOpenModal(!isOpenModal);
  }
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <ErrorBoundary>
          <ScrollToTop>
            <Suspense fallback={<div>Loading ....</div>}>
              <Route path='/' exact>
                <div className='App'>
                  <header className='App-header'>
                    <img src={logo} className='App-logo' alt='logo' />
                    <p>
                      Edit dasdsads
                      <code>src/App.js</code>
                      and save to reload.
                    </p>
                    <a
                      className='App-link'
                      href='https://reactjs.org'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      Learn React
                    </a>
                  </header>
                </div>
              </Route>
              <Route path='/login' exact>
                <LoginForm />
              </Route>
              <Button text='Click to open modal' onClick={toggleModal} />
              <Modal
                isOpen={isOpenModal}
                background='green'
                title='Hello, I am Modal Header'
                closeModal={toggleModal}
              >
                <p>Hello, I am a Content</p>
              </Modal>
            </Suspense>
          </ScrollToTop>
        </ErrorBoundary>
      </Switch>
    </Router>
  );
}

export default App;
