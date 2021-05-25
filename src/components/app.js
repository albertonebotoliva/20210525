import { hot } from 'react-hot-loader/root';
import React from 'react';
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";
import View from './views/view';

function App() {
    return (
        <Router>
            <Route exact path="/" component={View} />
        </Router>
    );
}

export default hot(App);