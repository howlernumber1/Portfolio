import React, { Component } from 'react';
import Dashboard from './components/Dashboard.js'
import { BrowserRouter, Route } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import teal from '@material-ui/core/colors/teal';
// import HomePage from './components/HomePage.js'
// import About from './components/About.js'
// import Portfolio from './components/Portfolio.js'
// import Resume from './components/Resume.js'
// import Contact from './components/Contact.js'
import './App.css';


const theme = createMuiTheme({
  palette: {
    type:'dark',
    primary: {
      main: '#ef5350',
    },
    secondary: green,
  },
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          <div>
            <Route component={Dashboard}/>
          </div>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;
