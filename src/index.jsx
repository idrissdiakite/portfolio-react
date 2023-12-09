import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import MenuManager from './components/Menu/MenuManager';

import "./styles/index.scss"

ReactDOM.render(
  <React.StrictMode>
    <MenuManager>
      <App />
    </MenuManager>
  </React.StrictMode>,
  document.getElementById('root')
);
