import React, { Component } from 'react';
import './App.css';
import { Title, Field, Label, Control, Input, Button } from 'bloomer';

class Login extends Component {

    login = ()=>{
        this.props.onLogin();
    }

    render() {
        return (
            <div className="centered">
                <Title className="primary">I Want To Play A game</Title>
                <Field>
                    <Label>Email</Label>
                    <Control>
                        <Input type="email" placeholder='Masukkan Email' />
                    </Control>
                </Field>
                <Field>
                    <Label>Password</Label>
                    <Control>
                        <Input type="password" placeholder='Masukkan Password' />
                    </Control>
                </Field>
                <Field isGrouped>
                    <Control>
                        {!this.props.isLoadingQuestion && <Button onClick={this.login} isColor='primary'>Submit</Button>}
                        {this.props.isLoadingQuestion && <span>Question currently being loaded...</span>}
                    </Control>
                </Field>
            </div>
        )
    }
}

export default Login;