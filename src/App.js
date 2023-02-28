import React, { Component } from 'react';
import Routes from './routes/Routes';

// setup fake backend
import { configureFakeBackend } from './helpers';

// Themes

// default
import './assets/scss/theme.scss';
import { Route } from 'react-router-dom';

// dark
// import './assets/scss/theme-dark.scss';

// rtl
// import './assets/scss/theme-rtl.scss';

// configure fake backend
configureFakeBackend();
localStorage.setItem('userToken', 'teste');
/**
 * Main app component
 */
class App extends Component {
    render() {
        return <Routes></Routes>;
    }
}

export default App;
