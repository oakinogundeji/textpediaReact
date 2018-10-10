/**
 * created by Samson Iyanda on 08-10-2018
 */
//

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import "./styles/bulma.css";
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import dotenv from "dotenv";

dotenv.config();

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>, 
  document.getElementById('root'));


serviceWorker.unregister();
