import React from 'react';
import ReactDOM from 'react-dom';
import 'typeface-roboto'
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import createHistory from 'history/createBrowserHistory';
import blueGrey from '@material-ui/core/colors/blueGrey';
import grey from '@material-ui/core/colors/grey';
import * as serviceWorker from './serviceWorker';

import App from './App';
import NavBar from './components/NavBar';
import store from './data/store';


global.requestAnimationFrame = function (callback) {
  setTimeout(callback, 0);
};
const history = createHistory();
const theme = createMuiTheme({
  palette: {
    primary: { light: blueGrey[300], main: blueGrey[500], dark: blueGrey[700] },
    secondary: { light: grey[300], main: grey[500], dark: grey[700] },

  },
});

ReactDOM.render(
   <Provider store={ store }>
    <MuiThemeProvider theme={ theme }>
      <Router history={ history }>
          <div>
            <NavBar />
            <App />
          </div>
      </Router>
    </MuiThemeProvider>
   </Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
