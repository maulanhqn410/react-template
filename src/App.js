import React, { Suspense } from "react";
import logo from "./logo.svg";
import "./App.css";
import ScrollToTop from "./components/shared/ScollToTop";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GlobalStyle } from "./global.styles";
import ErrorBoundary from "./components/shared/ErrorBoundary";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <ErrorBoundary>
          <ScrollToTop>
            <Suspense fallback={<div>Loading ....</div>}>
              <Route path='/'>
                <div className='App'>
                  <header className='App-header'>
                    <img src={logo} className='App-logo' alt='logo' />
                    <p>
                      Edit dasdsads <code>src/App.js</code> and save to reload.
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
            </Suspense>
          </ScrollToTop>
        </ErrorBoundary>
      </Switch>
    </Router>
  );
}

export default App;
