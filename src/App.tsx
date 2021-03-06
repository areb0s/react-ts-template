import CssBaseline from '@material-ui/core/CssBaseline';
import * as React from 'react';
import './App.css';
import logoSvg from './logo.svg';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <CssBaseline />
        <header className="App-header">
          <img src={logoSvg} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
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
    );
  }
}

export default App;
