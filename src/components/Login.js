import React, { Component } from 'react';
import { Button, Form , Header} from 'semantic-ui-react'

class Login extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {password: '', username: '', validForm: true};
    }
    render() {
        return (<div className='login'>
            <Header>Login</Header>
            <Form>
                <Form.Field>
                    <label>Username</label>
                    <input name='username'
                            onChange={this.handleChange}
                           value={this.state.username}
                        placeholder='Username' />
                </Form.Field>
                <Form.Field>
                    <label>Password</label>
                    <input onChange={this.handleChange}
                           value={this.state.password}
                           type='password' name='password' placeholder='Password' />
                </Form.Field>
                <Button onClick={this.handleSubmit} type='submit'>Submit</Button>
            </Form>
            {!this.state.validForm && <Header className='error-message'>Fill all the fields</Header>}
        </div>);
    }

    handleSubmit(event) {
        this.formValidation() && this.props.onLoginSubmit(this.state);
        event.preventDefault();
    }

    handleChange(event) {
        const field = event.target.name;
        this.formValidation();
        this.setState({[field]: event.target.value});
    }

    formValidation() {
        const {username, password} = this.state;
        const validForm = username !== '' && password !== '';
        this.setState({validForm});
        return validForm;
    }
}

export default Login;
