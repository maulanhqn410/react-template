import React, {
  Suspense,
  useState,
  memo,
} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import { isEqual } from 'lodash';
import './App.css';
import ScrollToTop from './components/shared/ScollToTop';
import LoginForm from './pages/loginPage';
import UserTable from './example/UserTable';
import UserList from './example/UserList';
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
                  <Link to="/login">Login</Link>
                  <br />
                  <Link to="/table">Table</Link>
                  <br />
                  <Link to="/list">List</Link>
                </div>
              </Route>
              <Route path="/login" exact>
                <LoginForm />
              </Route>
              <Route path="/table" exact>
                <UserTable />
              </Route>
              <Route path="/list" exact>
                <UserList />
              </Route>
              <div>
                count:
                {' '}
                {count}
              </div>
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
