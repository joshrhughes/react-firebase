//To house entering and email and signing a user in

//going to be a class based component

import React, { Component } from 'react';

import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
    //add state to recive input from user
    state = { email: '', password: ''};


    //TextInput -> user types text -> onChange Text event called -> 'setstate' with new text -> component rerenders 
    // when TextInput rendere, we tell it that its value is this.state.text

    render(){
        return ( 
            <Card>
                <CardSection>
                    <Input 
                    placeholder="user@gmail.com"
                    label="Email"
                    value={this.state.email}
                    onChangeText={email => this.setState({ email })}
                    //could also be {text => this.setState({ email: text })}
                    />         
                </CardSection>   

                <CardSection >
                    <Input 
                    placeholder="password"
                    label="Password"
                    secureTextEntry
                    value={this.state.password}
                    onChangeText={password => this.setState({ password })}
                    />
                </CardSection>    

                <CardSection>
                    <Button>
                        Log In
                    </Button>
                </CardSection>    
             </Card>
        ); 
    }
}

export default LoginForm;