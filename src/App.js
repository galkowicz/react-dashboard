import React, {Component} from 'react';
import './App.css';
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import loginService from './services/loginService'
import {Header} from 'semantic-ui-react'

class App extends Component {
    constructor(props) {
        super(props);
        this.loginService = new loginService();
        this.state = {isLoggedIn: false, isFailLogin: false};
    }

    render() {
        return (
            <div className="App">
                {this.state.isLoggedIn ? this.renderDashboard() : this.renderLogin()}
            </div>
        );
    }

    renderDashboard() {
        return <Dashboard/>;
    }

    renderLogin() {
        return ([<Login key={0} onLoginSubmit={this.handleLogin.bind(this)}/>,
            this.state.isFailLogin &&
            <Header key={1} textAlign={'center'}
                    className='error-message'
            >Wrong Username or Password. Try again!</Header>
        ]);
    }

    handleLogin(userCredentials) {
        const loginAttempt = this.loginService.login(userCredentials);
        this.setState({isLoggedIn: loginAttempt, isFailLogin: !loginAttempt});
    }
}

export default App;
